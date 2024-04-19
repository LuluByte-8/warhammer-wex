import React from "react";
import { Prisma } from "@prisma/client";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import hero from "@/assets/UnitsHeroImage.png";
import { Footer } from "@/components/footer";
import { HeroImage } from "@/components/heroimage";
import { NavBar } from "@/components/navbar";
import { UnitDisplay } from "@/components/unitdisplay";
import prisma from "@/lib/prisma";

import styles from "./unitlist.module.css";

const ArmyPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ units, army, filters }) => {
  const initalFilters = React.useMemo(() => {
    let filterMap: Record<string, boolean> = {};

    filters.forEach((f) => (filterMap[f] = false));
    return filterMap;
  }, [filters]);

  const [state, setState] =
    React.useState<Record<string, boolean>>(initalFilters);

  const onFilterChange = React.useCallback(
    (filter: string, isFiltered: boolean) => {
      setState((current) => {
        const newState = { ...current };
        newState[filter] = isFiltered;
        return newState;
      });
    },
    [setState]
  );

  const noFilters = !Object.values(state).some((v) => v);

  const filteredUnits = noFilters
    ? units
    : units.filter((unit) => state[unit.role]);

  /**
   * // state
   *
   * {
   *    Heavy Support: true,
   *    Troops: false,
   *    Flyyers: true
   * .....
   * }
   *
   *
   */

  return (
    <main>
      <NavBar />

      <HeroImage
        header="Test Heading"
        text="Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam."
        imageURL={hero}
      />

      <div className={`${styles.contentWrapper}`}>
        <div className={`${styles.leftSection}`}>
          <h1>{army.name}</h1>
          <ul>
            {filters.map((filter) => (
              <li key={filter}>
                <label>
                  {filter}
                  <input
                    type="checkbox"
                    value={filter}
                    onChange={(e) => onFilterChange(filter, e.target.checked)}
                  ></input>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.rightSection}`}>
          {filteredUnits.map((unit) => {
            if (unit.line === 1) {
              return (
                <div key={unit.unit_id}>
                  <UnitDisplay
                    unitId={unit.unit_id}
                    name={unit.name}
                    imageURL="https://placehold.co/200x300"
                    armyId={army.id}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ArmyPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (typeof context.query.arid !== "string") {
    return {
      notFound: true,
    };
  }
  const arid = context.query.arid;
  const army = await prisma.armies.findUnique({
    where: {
      id: arid,
    },
  });

  if (!army) {
    return {
      notFound: true,
    };
  }

  const units = await prisma.units.findMany({
    where: {
      faction_id: arid,
    },
  });

  if (units.length === 0) {
    return {
      notFound: true,
    };
  }

  const filterRes = (await prisma.$queryRaw(
    Prisma.sql`SELECT DISTINCT(role) from warhammer.units WHERE role != '' AND faction_id=${arid};`
  )) as {
    role: "string";
  }[];

  const filters = filterRes.map((res) => res.role);

  return {
    props: { units, army, filters },
  };
};
