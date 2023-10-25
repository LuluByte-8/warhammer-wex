export interface IUnit {
  name: string;
  movement: number;
  toughness: number;
  savingthrow: number;
  wounds: number;
  leadership: number;
  objectivecontrol: number;
  id: string;
}

const units: IUnit[] = [
  {
    name: "Plague Marine",
    movement: 5,
    toughness: 5,
    savingthrow: 5,
    wounds: 2,
    leadership: 6,
    objectivecontrol: 2,
    id: "1",
  },
  {
    name: "Blightlord Terminators",
    movement: 4,
    toughness: 6,
    savingthrow: 2,
    wounds: 3,
    leadership: 6,
    objectivecontrol: 1,
    id: "2",
  },
  {
    name: "Mortarion",
    movement: 10,
    toughness: 12,
    savingthrow: 2,
    wounds: 16,
    leadership: 5,
    objectivecontrol: 6,
    id: "3",
  },
  {
    name: "Plagueburst Crawler",
    movement: 10,
    toughness: 10,
    savingthrow: 2,
    wounds: 12,
    leadership: 6,
    objectivecontrol: 4,
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
