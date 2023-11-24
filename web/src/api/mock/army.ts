export interface IArmy {
  name: string;
  armyId: string;
  categoryId: string;
  bannerURL: string;
  description: string;
}

const armies: IArmy[] = [
  {
    name: "Ultramarines",
    armyId: "484eabb5-dadb-4031-a8cb-c87634a16dd9",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Ultramarines, epitome of noble Astartes, embody honor and tactical prowess. Clad in iconic blue armor, they stand stalwart, defending humanity with strategic brilliance and unwavering loyalty to the Imperium's ideals.",
  },
  {
    name: "Black Templars",
    armyId: "012bf484-7225-42d7-9f2d-c2b767cf6cd5",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Black Templars, zealous crusaders, embody relentless fervor in war. Adorned in ebony armor, they pursue foes with unwavering zeal, their righteous fury unmatched as they crusade in the Emperor's name.",
  },
  {
    name: "Blood Angels",
    armyId: "455bcf37-413f-47ad-b79e-93ee06d8fdc8",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Blood Angels, noble yet tormented, wield angelic fury and unmatched courage. Donning red-hued armor, they battle with grace and ferocity, haunted by a dark legacy yet bound by unyielding honor.",
  },
  {
    name: "Dark Angels",
    armyId: "a0a683e1-cc95-4c4e-82d4-365ec56645bb",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Dark Angels, enigmatic and haunted, bear secrets in their shadowed past. Clad in midnight-hued armor, they hunt the truth with relentless determination, carrying the weight of ancient sins amidst unyielding loyalty.",
  },
  {
    name: "Deathwatch",
    armyId: "034c6556-f85b-47ab-ab6c-fa329ac0982b",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Deathwatch, elite xenos hunters, unite warriors from diverse chapters. Wearing unique black and silver, they stand vigilant, specializing in combating alien threats with unparalleled expertise and unity.",
  },
  {
    name: "Grey Knights",
    armyId: "1a6ddf3f-d04e-465a-882e-37e213ac2f0f",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Grey Knights, holy and incorruptible, wield psychic might against daemonic horrors. Clad in silver armor, they're the Emperor's chosen, defenders against the tides of Chaos with unwavering purity and unmatched psychic prowess.",
  },
  {
    name: "Imperial Fists",
    armyId: "02eb2339-c558-4fda-adda-40d9a4030cc1",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Imperial Fists, unyielding bulwark of the Imperium, bear resilience and precision. Clad in yellow, they defend with stoic determination, masters of siege warfare and unbreakable resolve in the Emperor's name.",
  },
  {
    name: "Iron Hands",
    armyId: "13218ebb-2470-4562-a4fd-7a0e4baf7545",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Iron Hands, cold and unyielding, fuse flesh and machine for strength. Clad in bionics, they seek perfection through steel, embodying resilience and unwavering determination in their pursuit of technological supremacy.",
  },
  {
    name: "Raven Guard",
    armyId: "521478f2-4fec-4e0b-bdc4-a580a7efdb0a",
    categoryId: "1",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Raven Guard, masters of stealth and swift strikes, embrace shadows in their relentless pursuit. Clad in somber hues, they strike swiftly, employing guerrilla tactics and lightning assaults to outmaneuver their foes with lethal precision.",
  },
  {
    name: "Salamanders",
    armyId: "002040bc-65e3-49fb-924d-f477ec54bac7",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Salamanders, noble artisans of fire, wield strength and compassion. Clad in green, they protect humanity with unmatched bravery, embodying resilience and unwavering dedication to defending the weak.",
  },
  {
    name: "Space Wolves",
    armyId: "a7963be1-920f-4603-b430-8438aff5d913",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Space Wolves, fierce warriors of Fenris, embrace savage might and brotherhood. Clad in rugged armor, they howl into battle, embodying ferocity and loyalty, unleashing the fury of their wolfish spirit upon their foes.",
  },
  {
    name: "White Scars",
    armyId: "cb0be55b-b478-4743-bc81-d3ce0401ff3f",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The White Scars, swift and nomadic warriors, ride into battle with lightning speed. Clad in white and blue, they master hit-and-run tactics, embodying speed and precision as they swiftly strike their enemies, leaving chaos in their wake.",
  },
  {
    name: "Adepta Soroitas",
    armyId: "30e92f3f-f5b9-46c3-b85b-afc252351fdf",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Adepta Sororitas, fervent warriors of faith, wield holy zeal and righteous fury. Clad in sacred armor, they fight for the Emperor's will, embodying unshakable devotion and valor in their crusade against heresy.",
  },
  {
    name: "Adeptus Custodes",
    armyId: "b020808a-cc4d-44a1-8132-37888538fd58",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Adeptus Custodes, golden guardians of the Emperor, are paragons of martial skill. Clad in auric armor, they defend Terra with unmatched prowess, embodying unwavering loyalty and peerless strength in the Emperor's name.",
  },
  {
    name: "Astra Militarum",
    armyId: "8197fd2f-bcdb-4dad-8d44-e4a9b7678dcb",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Astra Militarum, vast human regiments, stand as the Imperium's bulwark. Clad in uniform, they fight tirelessly, embodying courage and sacrifice in the face of overwhelming odds, defending humanity with unyielding resolve.",
  },
  {
    name: "Imperial Knights",
    armyId: "9d7242ba-9780-4d86-9c6c-d0cd616fd5a1",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Imperial Knights, towering war engines, stride with noble might. Clad in adamantium, they're avatars of honor, defending the Imperium with colossal power and unbreakable loyalty.",
  },
  {
    name: "Chaos Daemons",
    armyId: "5d46ba74-1eba-4838-bbbf-d1da1bd92ad1",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Chaos Daemons, manifestations of malevolence, surge from the Warp's depths. Unbound by form, they embody the dark desires of their patron gods, an ever-shifting tide of terror and otherworldly power.",
  },
  {
    name: "Chaos Space Marines",
    armyId: "64c74f89-61cf-4117-a244-ae072cf96ff4",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Chaos Space Marines, fallen brethren of the Imperium, wield dark powers and ancient hatred. Corrupted by Chaos, they wage war with twisted loyalty, clad in malevolent armor and fueled by a thirst for vengeance against their former allies.",
  },
  {
    name: "Death Guard",
    armyId: "12cde852-7099-4496-8000-e625a439a896",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Death Guard, putrid champions of Nurgle, are resilient and decay-ridden, spreading plagues with relentless determination. Clad in foul armor, they endure all, embodying the grotesque resilience of decay and pestilence in their relentless march.",
  },
  {
    name: "Thousand Sons",
    armyId: "a33f79c6-79d8-48a4-8e71-d50ccbabefbf",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Thousand Sons, sorcerous masters of Tzeentch, wield arcane powers cursed by mutation. Clad in intricate armor, they seek forbidden knowledge, their minds teeming with eldritch might and the burden of ancient spells gone awry.",
  },
  {
    name: "World Eaters",
    armyId: "2d806a37-cbd8-44de-bb63-2f7897534f59",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The World Eaters, berserkers of Khorne, revel in unbridled savagery. Clad in bloodied armor, they charge into battle with feral ferocity, driven by an insatiable thirst for carnage and the glory of unrelenting combat.",
  },
  {
    name: "Aeldari",
    armyId: "32e9f08d-58bb-471c-88b6-74a952a16354",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Aeldari, ancient and enigmatic, wield unparalleled grace and psychic might. Clad in sleek armor, they navigate the warp, seeking redemption and survival, mastering ancient technology and foresight in a galaxy of turmoil.",
  },
  {
    name: "Drukhari",
    armyId: "de33d4d9-781f-48af-8acc-57ac5f5f93ce",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Drukhari, sadistic raiders of Commorragh, revel in cruelty and speed. Clad in dark elegance, they strike swiftly, feeding on pain to sustain their twisted existence while plundering the galaxy for slaves and torment.",
  },
  {
    name: "Genestealer Cult",
    armyId: "a28b0bf0-7f9f-4f0a-8fcc-1760ff1ded6c",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Genestealer Cults, insidious infiltrators, sow rebellion in shadows. Clad in underground fervor, they worship the alien, striving to bring about the ascension of their Tyranid masters with covert cunning and unholy devotion.",
  },
  {
    name: "Necrons",
    armyId: "79df7267-803a-47b5-b6d5-c078dbb18d5b",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Necrons, ancient metallic phalanxes, awaken with sinister purpose. Clad in living metal, they march as undying legions, seeking dominion over a galaxy they once ruled, wielding eerie technology and unyielding immortality.",
  },
  {
    name: "Orks",
    armyId: "2fc396b0-2fb7-4611-a21e-f699a1ef480f",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "Da Orks, rowdy and brutal, crave endless war and smashing fights. Clad in ramshackle armor, dey romp da galaxy, teef and choppas ready, spreading mayhem wiv their love for a good scrap!",
  },
  {
    name: "T'au Empire",
    armyId: "6f5cd81a-eadc-4005-a766-79056cb92cde",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Tau Empire, seekers of unity, wield advanced technology and diplomacy. Clad in sleek battlesuits, they strive for the Greater Good, blending innovation and cooperation to bring order amidst a chaotic universe.",
  },
  {
    name: "Tyranids",
    armyId: "ef6e9a74-fcaa-4ebc-88a0-9a2eac7f8dc2",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The Tyranids, cosmic predators, swarm as a devouring force. Clad in bio-organic might, they hunger for consumption, an unrelenting horde moving to strip worlds bare, evolving and adapting in an unending quest for sustenance.",
  },
  {
    name: "Leagues of Votann",
    armyId: "2bb24c81-72d7-4c93-90ef-89b8613f2c01",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "https://placehold.co/600x400",
    description:
      "The League of Votann, enigmatic and arcane, harness ancient powers and forbidden knowledge. Clad in esoteric armor, they navigate the shadows, wielding mystical prowess and cryptic technology with inscrutable purpose.",
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
