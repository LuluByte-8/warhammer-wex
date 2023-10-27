export interface IArmy {
  name: string;
  armyId: string;
}

const armies: IArmy[] = [
  {
    name: "Armies of the Imperium:",
    armyId: "0",
  },
  {
    name: "Space Marines",
    armyId: "484eabb5-dadb-4031-a8cb-c87634a16dd9",
  },
  {
    name: "Adepta Soroitas",
    armyId: "30e92f3f-f5b9-46c3-b85b-afc252351fdf",
  },
  {
    name: "Adeptus Custodes",
    armyId: "b020808a-cc4d-44a1-8132-37888538fd58",
  },
  {
    name: "Astra Militarum",
    armyId: "8197fd2f-bcdb-4dad-8d44-e4a9b7678dcb",
  },
  {
    name: "Imperial Knights",
    armyId: "9d7242ba-9780-4d86-9c6c-d0cd616fd5a1",
  },
  {
    name: "Armies of Chaos:",
    armyId: "0",
  },
  {
    name: "Chaos Daemons",
    armyId: "5d46ba74-1eba-4838-bbbf-d1da1bd92ad1",
  },
  {
    name: "Chaos Space Marines",
    armyId: "64c74f89-61cf-4117-a244-ae072cf96ff4",
  },
  {
    name: "Death Guard",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
  },
  {
    name: "Thousand Sons",
    armyId: "a33f79c6-79d8-48a4-8e71-d50ccbabefbf",
  },
  {
    name: "World Eaters",
    armyId: "2d806a37-cbd8-44de-bb63-2f7897534f59",
  },
  {
    name: "Xenos Armies:",
    armyId: "0",
  },
  {
    name: "Aeldari",
    armyId: "32e9f08d-58bb-471c-88b6-74a952a16354",
  },
  {
    name: "Drukhari",
    armyId: "de33d4d9-781f-48af-8acc-57ac5f5f93ce",
  },
  {
    name: "Genestealer Cult",
    armyId: "a28b0bf0-7f9f-4f0a-8fcc-1760ff1ded6c",
  },
  {
    name: "Necrons",
    armyId: "79df7267-803a-47b5-b6d5-c078dbb18d5b",
  },
  {
    name: "Orks",
    armyId: "2fc396b0-2fb7-4611-a21e-f699a1ef480f",
  },
  {
    name: "T'au Empire",
    armyId: "6f5cd81a-eadc-4005-a766-79056cb92cde",
  },
  {
    name: "Tyranids",
    armyId: "ef6e9a74-fcaa-4ebc-88a0-9a2eac7f8dc2",
  },
  {
    name: "Leagues of Votann",
    armyId: "2bb24c81-72d7-4c93-90ef-89b8613f2c01",
  },
];

export const getArmies = () => {
  return armies;
};

export const getArmyById = (armyId: string): IArmy | undefined => {
  return armies.find((army) => army.armyId === armyId);
};
