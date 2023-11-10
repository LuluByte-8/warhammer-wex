export interface IArmy {
  name: string;
  armyId: string;
  categoryId: string;
}

const armies: IArmy[] = [
  {
    name: "Ultramarines",
    armyId: "484eabb5-dadb-4031-a8cb-c87634a16dd9",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Black Templars",
    armyId: "012bf484-7225-42d7-9f2d-c2b767cf6cd5",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Blood Angels",
    armyId: "455bcf37-413f-47ad-b79e-93ee06d8fdc8",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Dark Angels",
    armyId: "a0a683e1-cc95-4c4e-82d4-365ec56645bb",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Deathwatch",
    armyId: "034c6556-f85b-47ab-ab6c-fa329ac0982b",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Grey Knights",
    armyId: "1a6ddf3f-d04e-465a-882e-37e213ac2f0f",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Imperial Fists",
    armyId: "02eb2339-c558-4fda-adda-40d9a4030cc1",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Iron Hands",
    armyId: "13218ebb-2470-4562-a4fd-7a0e4baf7545",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Raven Guard",
    armyId: "521478f2-4fec-4e0b-bdc4-a580a7efdb0a",
    categoryId: "1",
  },
  {
    name: "Salamanders",
    armyId: "002040bc-65e3-49fb-924d-f477ec54bac7",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Space Wolves",
    armyId: "a7963be1-920f-4603-b430-8438aff5d913",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "White Scars",
    armyId: "cb0be55b-b478-4743-bc81-d3ce0401ff3f",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
  },
  {
    name: "Adepta Soroitas",
    armyId: "30e92f3f-f5b9-46c3-b85b-afc252351fdf",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
  },
  {
    name: "Adeptus Custodes",
    armyId: "b020808a-cc4d-44a1-8132-37888538fd58",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
  },
  {
    name: "Astra Militarum",
    armyId: "8197fd2f-bcdb-4dad-8d44-e4a9b7678dcb",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
  },
  {
    name: "Imperial Knights",
    armyId: "9d7242ba-9780-4d86-9c6c-d0cd616fd5a1",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
  },
  {
    name: "Chaos Daemons",
    armyId: "5d46ba74-1eba-4838-bbbf-d1da1bd92ad1",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
  },
  {
    name: "Chaos Space Marines",
    armyId: "64c74f89-61cf-4117-a244-ae072cf96ff4",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
  },
  {
    name: "Death Guard",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
  },
  {
    name: "Thousand Sons",
    armyId: "a33f79c6-79d8-48a4-8e71-d50ccbabefbf",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
  },
  {
    name: "World Eaters",
    armyId: "2d806a37-cbd8-44de-bb63-2f7897534f59",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
  },
  {
    name: "Aeldari",
    armyId: "32e9f08d-58bb-471c-88b6-74a952a16354",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "Drukhari",
    armyId: "de33d4d9-781f-48af-8acc-57ac5f5f93ce",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "Genestealer Cult",
    armyId: "a28b0bf0-7f9f-4f0a-8fcc-1760ff1ded6c",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "Necrons",
    armyId: "79df7267-803a-47b5-b6d5-c078dbb18d5b",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "Orks",
    armyId: "2fc396b0-2fb7-4611-a21e-f699a1ef480f",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "T'au Empire",
    armyId: "6f5cd81a-eadc-4005-a766-79056cb92cde",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "Tyranids",
    armyId: "ef6e9a74-fcaa-4ebc-88a0-9a2eac7f8dc2",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
  {
    name: "Leagues of Votann",
    armyId: "2bb24c81-72d7-4c93-90ef-89b8613f2c01",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
  },
];

export const getArmies = () => {
  return armies;
};

export const getArmyById = (armyId: string): IArmy | undefined => {
  return armies.find((army) => army.armyId === armyId);
};

export const getArmyByCategoryId = (categoryId: string | undefined) => {
  return armies.filter((army) => army.categoryId === categoryId);
};
