import * as fs from "fs";
import * as path from "path";
import { CastingContext, parse } from "csv-parse/sync";
import { ZodSchema, z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const result: any = [];

const factionSchema = z.object({
  id: z.string(),
  category_id: z.number(),
  name: z.string(),
  description: z.string(),
  banner_url: z.string().url(),
});

const modelUnitSchema = z.object({
  squad_id: z.number(),
  name: z.string(),
  line: z.number(),
  m: z.string(),
  ws: z.string(),
  bs: z.string(),
  s: z.string(),
  t: z.string(),
  w: z.string(),
  a: z.string(),
  ld: z.string(),
  sv: z.string(),
  models_per_unit: z.string(),
  cost: z.number(),
});

const datasheetUnitSchema = z.object({
  squad_id: z.number(),
  faction_id: z.string(),
  squad_name: z.string(),
  role: z.string(),
});

type Faction = z.infer<typeof factionSchema>;
type ModelUnit = z.infer<typeof modelUnitSchema>;
type DatasheetUnit = z.infer<typeof datasheetUnitSchema>;

type DbModelUnit = Omit<ModelUnit, "models_per_unit"> & {
  minunits: number;
  maxunits: number;
};

interface ISource<T> {
  path: string;
  schema: ZodSchema<T>;
  cast?: (value: string, context: CastingContext) => any;
}

const factionSource: ISource<Faction> = {
  path: "../data/Factions.csv",
  schema: factionSchema,
  cast: (value, context) => {
    if (context.column === "category_id") {
      return parseInt(value, 10);
    }
    return value;
  },
};

const modelUnitSource: ISource<ModelUnit> = {
  path: "../data/DatasheetsModels.csv",
  schema: modelUnitSchema,
  cast: (value, context) => {
    if (context.column === "squad_id" || context.column === "line") {
      return parseInt(value, 10);
    } else if (context.column === "cost") {
      if (value === "") {
        return 0;
      }
      return parseInt(value, 10);
    }
    return value;
  },
};

const datasheetUnitSource: ISource<DatasheetUnit> = {
  path: "../data/Datasheets.csv",
  schema: datasheetUnitSchema,
  cast: (value, context) => {
    if (context.column === "squad_id") {
      return parseInt(value, 10);
    }
    return value;
  },
};

const loadSource = <T>(source: ISource<T>): Array<T> => {
  const file = fs.readFileSync(path.resolve(__dirname, source.path));

  const records = parse(file, {
    columns: true,
    skip_empty_lines: true,
    cast: source.cast,
  });

  const results: T[] = records.map((r: unknown) => {
    const parseResult = source.schema.safeParse(r);
    if (!parseResult.success) {
      console.log("Parse failed for object: ", JSON.stringify(r, null, 2));
      throw parseResult.error;
    }

    return parseResult.data;
  });

  return results;
};

const main = async () => {
  const factions = loadSource(factionSource);
  const modelUnit = loadSource(modelUnitSource).map<DbModelUnit>((unit) => {
    let minMaxUnits: Array<string>;
    if (unit.models_per_unit.length === 0 || unit.models_per_unit === "-") {
      minMaxUnits = ["0", "1"];
    } else {
      minMaxUnits = unit.models_per_unit.split("-");
    }

    const { models_per_unit, ...requiredProps } = unit;
    return {
      ...requiredProps,
      minunits: parseInt(minMaxUnits[0], 10),
      maxunits: parseInt(minMaxUnits[minMaxUnits.length - 1], 10),
    };
  });
  const datasheet = loadSource(datasheetUnitSource);

  // console.log(factions);
  // console.log(modelUnit);
  // console.log(datasheet);

  const unitMap = new Map<number, DatasheetUnit>();

  // datasheet.forEach((value, i) => {
  //   unitMap.set(value.unit_id, value);
  // });

  // console.log(unitMap);

  // const mergedUnits = modelUnit.map((m) => {
  //   const { datasheet_id, ...rest } = m;
  //   const unit = unitMap.get(datasheet_id)!;
  //   return { ...unit, ...rest };
  // });

  // console.log(mergedUnits);

  // const unitIdCount = new Map<number, number>();

  // mergedUnits.forEach((mu) => {
  //   const existingUnitCount = unitIdCount.get(mu.unit_id) ?? 0;

  //   unitIdCount.set(mu.unit_id, existingUnitCount + 1);
  // });

  // console.log(unitIdCount);

  // const factionIdCount = new Map<string, number>();

  // mergedUnits.forEach((mu) => {
  //   const existingUnitCount = factionIdCount.get(mu.faction_id) ?? 0;

  //   factionIdCount.set(mu.faction_id, existingUnitCount + 1);
  // });

  // console.log(factionIdCount);

  const armies = await prisma.armies.createMany({
    data: [...factions],
  });

  const squads = await prisma.squads.createMany({
    data: [...datasheet],
  });

  const units = await prisma.units.createMany({
    data: [...modelUnit],
  });
};

main();

// unitMap.set(10, {});
// unitMap.has(10);
// unitMap.get(10);
// const res = unitMap.get(10);
// const animal = { legs: 4 };
// const pet = { name: "fluffy" };
// const myDog = { ...animal, ...pet};
// const {legs, ...myDogWithNoLegs} = myDog;
