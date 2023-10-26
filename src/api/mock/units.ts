export interface IUnit {
  name: string;
  movement: number;
  toughness: number;
  savingThrow: number;
  wounds: number;
  leadership: number;
  objectiveControl: number;
  id: string;
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
    id: "1",
  },
  {
    name: "Blightlord Terminators",
    movement: 4,
    toughness: 6,
    savingThrow: 2,
    wounds: 3,
    leadership: 6,
    objectiveControl: 1,
    id: "2",
  },
  {
    name: "Mortarion",
    movement: 10,
    toughness: 12,
    savingThrow: 2,
    wounds: 16,
    leadership: 5,
    objectiveControl: 6,
    id: "3",
  },
  {
    name: "Plagueburst Crawler",
    movement: 10,
    toughness: 10,
    savingThrow: 2,
    wounds: 12,
    leadership: 6,
    objectiveControl: 4,
    id: "4",
  },
];

export const getUnits = () => {
  return units;
};

export const getUnitById = (id: string): IUnit | undefined => {
  const unit = units.find((i) => i.id === id);
  return unit;
};
