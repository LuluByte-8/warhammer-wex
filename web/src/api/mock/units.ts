export interface IUnit {
  name: string;
  movement: number;
  toughness: number;
  savingThrow: number;
  wounds: number;
  leadership: number;
  objectiveControl: number;
  id: string;
  armyId: string;
  invulnSave?: number;
}

const units: IUnit[] = [
  {
    name: "Plague Marine",
    movement: 5,
    toughness: 5,
    savingThrow: 5,
    wounds: 2,
    leadership: 6,
    objectiveControl: 2,
    id: "b66d0e6e-8ef0-4767-94cf-b7c058f364af",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
  },
  {
    name: "Blightlord Terminators",
    movement: 4,
    toughness: 6,
    savingThrow: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    id: "b66d0e6e-8ef0-4767-94cf-b7c058f364af",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
  },
  {
    name: "Mortarion",
    movement: 10,
    toughness: 12,
    savingThrow: 2,
    wounds: 16,
    leadership: 5,
    objectiveControl: 6,
    id: "d025434f-5d2e-40f8-8055-4096d0793edf",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
  },
  {
    name: "Plagueburst Crawler",
    movement: 10,
    toughness: 10,
    savingThrow: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    id: "938d9653-bbd3-45b7-9819-fa6da155e231",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
  },
  {
    name: "Rubic Marine",
    movement: 10,
    toughness: 10,
    savingThrow: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    id: "1",
    armyId: "a33f79c6-79d8-48a4-8e71-d50ccbabefbf",
  },
  {
    name: "Eldar Guardian",
    movement: 7,
    toughness: 3,
    savingThrow: 5,
    wounds: 1,
    leadership: 7,
    objectiveControl: 1,
    id: "a45c91a7-ee6c-4904-8897-2c4f01ec18f0",
    armyId: "32e9f08d-58bb-471c-88b6-74a952a16354",
  },
  {
    name: "Tyranid Hormagaunt",
    movement: 8,
    toughness: 3,
    savingThrow: 6,
    wounds: 1,
    leadership: 6,
    objectiveControl: 1,
    id: "6c8b3509-cb36-4464-87a0-c7c0eb4637f5",
    armyId: "ef6e9a74-fcaa-4ebc-88a0-9a2eac7f8dc2",
  },
  {
    name: "Necron Warrior",
    movement: 5,
    toughness: 4,
    savingThrow: 4,
    wounds: 1,
    leadership: 10,
    objectiveControl: 1,
    id: "d9a98d0d-4a9e-468e-b41c-50a81927a6e9",
    armyId: "79df7267-803a-47b5-b6d5-c078dbb18d5b",
  },
  {
    name: "Space Marine",
    movement: 6,
    toughness: 4,
    savingThrow: 3,
    wounds: 2,
    leadership: 8,
    objectiveControl: 1,
    id: "a23f9d0b-7cd2-4edc-a8c0-9f1e59b20c4e",
    armyId: "484eabb5-dadb-4031-a8cb-c87634a16dd9",
  },
];

export const getUnits = () => {
  return units;
};

export const getUnitsByArmyId = (armyId: string) => {
  return units.filter((unit) => unit.armyId === armyId);
};

export const getUnitById = (id: string): IUnit | undefined => {
  const unit = units.find((i) => i.id === id);
  return unit;
};
