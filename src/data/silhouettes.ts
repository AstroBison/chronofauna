// GENERATED FILE — do not edit by hand.
// Regenerate with: node scripts/fetch-silhouettes.mjs
//
// Silhouettes come from PhyloPic (https://phylopic.org). Every entry carries the
// artist attribution and licence its terms require; the UI surfaces these in the
// detail panel and the credits list, so do not strip them.

export interface Silhouette {
  /** Path under public/, ready to use as a CSS mask or img src. */
  file: string;
  /** The taxon the artwork actually depicts. */
  taxon: string;
  /** True when the art shows a relative rather than this genus itself. */
  standIn: boolean;
  attribution: string;
  licenceName: string;
  licenceUrl: string;
  sourceUrl: string;
}

export const SILHOUETTES: Record<string, Silhouette> = {
  "dimetrodon": {
    "file": "/silhouettes/dimetrodon.svg",
    "taxon": "Dimetrodon giganhomogenes",
    "standIn": false,
    "attribution": "Will Toosey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/c5dbbce1-9b2b-4236-a6e3-0d9cd9ab0ff6"
  },
  "sauroctonus": {
    "file": "/silhouettes/sauroctonus.svg",
    "taxon": "Sauroctonus parringtoni",
    "standIn": false,
    "attribution": "Christine Axon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/4f3725c2-d830-4b74-8149-cb0fc84463a8"
  },
  "gorgonops": {
    "file": "/silhouettes/gorgonops.svg",
    "taxon": "Gorgonops whaitsii",
    "standIn": false,
    "attribution": "Joseba Iza",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/aeec58db-9e75-4640-bcd0-793c3cf595db"
  },
  "lycaenops": {
    "file": "/silhouettes/lycaenops.svg",
    "taxon": "Dinogorgon",
    "standIn": true,
    "attribution": "Chris Jennings (Risiatto)",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/ddbd5048-3148-4088-9ab1-97becdcb7ae3"
  },
  "rubidgea": {
    "file": "/silhouettes/rubidgea.svg",
    "taxon": "Dinogorgon",
    "standIn": true,
    "attribution": "Chris Jennings (Risiatto)",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/ddbd5048-3148-4088-9ab1-97becdcb7ae3"
  },
  "inostrancevia": {
    "file": "/silhouettes/inostrancevia.svg",
    "taxon": "Inostrancevia alexandri",
    "standIn": false,
    "attribution": "artrociraptor",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/951b2182-d053-412f-86a7-1593e19a201c"
  },
  "lystrosaurus": {
    "file": "/silhouettes/lystrosaurus.svg",
    "taxon": "Lystrosaurus murrayi",
    "standIn": false,
    "attribution": "Matt Celeskey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/03efb48d-b735-4812-bf65-39279d9f7067"
  },
  "cynognathus": {
    "file": "/silhouettes/cynognathus.svg",
    "taxon": "Cynognathus merenskyi",
    "standIn": false,
    "attribution": "Jacob Schick",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/9d9ebf4b-a970-471b-b796-e6911070812e"
  },
  "nothosaurus": {
    "file": "/silhouettes/nothosaurus.svg",
    "taxon": "Nothosaurus giganteus",
    "standIn": false,
    "attribution": "Jonathan Pople",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/a490f49e-9d40-4ef7-a0ce-cf89779f5952"
  },
  "eoraptor": {
    "file": "/silhouettes/eoraptor.svg",
    "taxon": "Eoraptor lunensis",
    "standIn": false,
    "attribution": "Marmelad",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/8f3e5723-986f-4f1d-9292-ff041ce176ca"
  },
  "herrerasaurus": {
    "file": "/silhouettes/herrerasaurus.svg",
    "taxon": "Herrerasaurus ischigualastensis",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/3d1b4e68-f523-47c2-8945-c701a5e5d40f"
  },
  "postosuchus": {
    "file": "/silhouettes/postosuchus.svg",
    "taxon": "Postosuchus kirkpatricki",
    "standIn": false,
    "attribution": "Dr. Jeff Martz/National Park Service",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/2949d3bd-2767-49b0-ae84-235e2bd60bed"
  },
  "shonisaurus": {
    "file": "/silhouettes/shonisaurus.svg",
    "taxon": "Shonisaurus popularis",
    "standIn": false,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/37684912-714b-473e-9aba-5d48add6c8da"
  },
  "coelophysis": {
    "file": "/silhouettes/coelophysis.svg",
    "taxon": "Coelophysis bauri",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/13cd74e3-5ced-4411-a39a-8f0a0feb428b"
  },
  "plateosaurus": {
    "file": "/silhouettes/plateosaurus.svg",
    "taxon": "Plateosaurus",
    "standIn": false,
    "attribution": "Jack Mayer Wood",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/23027ce7-713d-4c28-97e2-aec0219266df"
  },
  "eudimorphodon": {
    "file": "/silhouettes/eudimorphodon.svg",
    "taxon": "Peteinosaurus zambellii",
    "standIn": true,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/bb56d24a-c7a5-4ca8-90e7-7e02df3d09f2"
  },
  "morganucodon": {
    "file": "/silhouettes/morganucodon.svg",
    "taxon": "Morganucodon watsoni",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/be4fd4ac-7dfb-4dbc-bdb8-6be298aa9015"
  },
  "ichthyosaurus": {
    "file": "/silhouettes/ichthyosaurus.svg",
    "taxon": "Ichthyosaurus communis",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/dd45c347-d7ff-4860-80a3-a4e00d4a8dc4"
  },
  "dilophosaurus": {
    "file": "/silhouettes/dilophosaurus.svg",
    "taxon": "Dilophosaurus wetherilli",
    "standIn": false,
    "attribution": "Marie Aimée ALLARD",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/36b898fe-0812-4832-8e6e-a5b2f26ee113"
  },
  "megalosaurus": {
    "file": "/silhouettes/megalosaurus.svg",
    "taxon": "Megalosaurus bucklandii",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/33a7e349-32ff-4f29-94a5-cb23ede45d60"
  },
  "liopleurodon": {
    "file": "/silhouettes/liopleurodon.svg",
    "taxon": "Liopleurodon",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/52d69849-6f8c-40dc-8cfb-7f28e1506911"
  },
  "allosaurus": {
    "file": "/silhouettes/allosaurus.svg",
    "taxon": "Allosaurus jimmadseni",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/9b427a5c-8c38-457d-8b58-fab118780871"
  },
  "stegosaurus": {
    "file": "/silhouettes/stegosaurus.svg",
    "taxon": "Stegosaurus priscus",
    "standIn": false,
    "attribution": "Connor Ashbridge",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/8c4e6e33-bf09-465a-b46d-fdf85fdd7728"
  },
  "brachiosaurus": {
    "file": "/silhouettes/brachiosaurus.svg",
    "taxon": "Brachiosaurus altithorax",
    "standIn": false,
    "attribution": "Michael P. Taylor",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/2431b273-7b21-482e-b971-70377686335d"
  },
  "diplodocus": {
    "file": "/silhouettes/diplodocus.svg",
    "taxon": "Diplodocus carnegii",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/72f60e5d-9337-4252-a536-8c37f1739541"
  },
  "apatosaurus": {
    "file": "/silhouettes/apatosaurus.svg",
    "taxon": "Apatosaurus ajax",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/5f5acec8-704e-49c4-bcd5-d827283a4998"
  },
  "rhamphorhynchus": {
    "file": "/silhouettes/rhamphorhynchus.svg",
    "taxon": "Rhamphorhynchus muensteri",
    "standIn": false,
    "attribution": "Dmitry Bogdanov",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/329a7dc2-5da9-4996-a91f-92d778ca2f91"
  },
  "archaeopteryx": {
    "file": "/silhouettes/archaeopteryx.svg",
    "taxon": "Archaeopteryx lithographica",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/0df51444-e988-4b71-851e-d48d0b177f9c"
  },
  "compsognathus": {
    "file": "/silhouettes/compsognathus.svg",
    "taxon": "Compsognathus longipes",
    "standIn": false,
    "attribution": "Marie Aimée ALLARD",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/67970430-fb1c-467e-aab1-1c47cfb6aefc"
  },
  "iguanodon": {
    "file": "/silhouettes/iguanodon.svg",
    "taxon": "Iguanodon bernissartensis",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/0fd97fa9-7d64-4a36-b713-a72e073866f7"
  },
  "repenomamus": {
    "file": "/silhouettes/repenomamus.svg",
    "taxon": "Repenomamus robustus",
    "standIn": false,
    "attribution": "Ivan Iofrida",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/3e02b0e1-9837-46fa-93eb-e5cc4b8849e5"
  },
  "deinonychus": {
    "file": "/silhouettes/deinonychus.svg",
    "taxon": "Deinonychus antirrhopus",
    "standIn": false,
    "attribution": "Caleb M. Gordon",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/8cc46088-75b0-40c7-ae8e-8c986277a5f8"
  },
  "spinosaurus": {
    "file": "/silhouettes/spinosaurus.svg",
    "taxon": "Spinosaurus aegyptiacus",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/0dd7eaf6-1caf-4579-9f42-340fa9f34c48"
  },
  "argentinosaurus": {
    "file": "/silhouettes/argentinosaurus.svg",
    "taxon": "Tiamat valdecii",
    "standIn": true,
    "attribution": "Cy Marchant",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/f7d45ad0-0d64-4871-a59b-1414a41487dd"
  },
  "pteranodon": {
    "file": "/silhouettes/pteranodon.svg",
    "taxon": "Pteranodon longiceps",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/0433aae5-9d7b-4a19-9de3-767c38ed9412"
  },
  "mosasaurus": {
    "file": "/silhouettes/mosasaurus.svg",
    "taxon": "Mosasauridae",
    "standIn": true,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/7cebc9af-3379-4c7a-9276-d23c67b50984"
  },
  "elasmosaurus": {
    "file": "/silhouettes/elasmosaurus.svg",
    "taxon": "Elasmosaurus platyurus",
    "standIn": false,
    "attribution": "E. D. Cope (modified by T. Michael Keesey, Michael P. Taylor & Matthew J. Wedel)",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/5719ee67-4bd3-44e9-ba19-2d36ec7e5b30"
  },
  "parasaurolophus": {
    "file": "/silhouettes/parasaurolophus.svg",
    "taxon": "Parasaurolophus",
    "standIn": false,
    "attribution": "Richard Rich",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/ef954cac-604a-4e1f-9b8d-bd92bf3cc3f6"
  },
  "velociraptor": {
    "file": "/silhouettes/velociraptor.svg",
    "taxon": "Velociraptor mongoliensis",
    "standIn": false,
    "attribution": "Richard Rich",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/8d1c194f-3bf7-4114-a32e-5b895167a017"
  },
  "triceratops": {
    "file": "/silhouettes/triceratops.svg",
    "taxon": "Triceratops horridus",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/075de9e2-1b71-49d3-8d22-9eb2a78248e4"
  },
  "tyrannosaurus": {
    "file": "/silhouettes/tyrannosaurus.svg",
    "taxon": "Tyrannosaurus",
    "standIn": false,
    "attribution": "Fred Wierum",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/832a47bd-0cd4-4b0e-af7b-db9d7ff81867"
  },
  "ankylosaurus": {
    "file": "/silhouettes/ankylosaurus.svg",
    "taxon": "Ankylosaurus magniventris",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/8a8a2525-e97d-4505-8085-7958f8d36137"
  },
  "quetzalcoatlus": {
    "file": "/silhouettes/quetzalcoatlus.svg",
    "taxon": "Azhdarcho lancicollis",
    "standIn": true,
    "attribution": "jack liddle",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/6dd3a0b6-8c58-4205-9f10-45b6686c4cd0"
  },
  "titanoboa": {
    "file": "/silhouettes/titanoboa.svg",
    "taxon": "Titanoboa cerrejonensis",
    "standIn": false,
    "attribution": "Nobu Tamura (modified by T. Michael Keesey)",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/beca4a24-33ef-4659-a20f-7d6835703c1c"
  },
  "andrewsarchus": {
    "file": "/silhouettes/andrewsarchus.svg",
    "taxon": "Andrewsarchus mongoliensis",
    "standIn": false,
    "attribution": "Steven Traver",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/31e41454-b7b3-4c17-8e71-bd3ab4bca376"
  },
  "basilosaurus": {
    "file": "/silhouettes/basilosaurus.svg",
    "taxon": "Basilosaurus isis",
    "standIn": false,
    "attribution": "Michael Tripoli",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/aeffb6cf-825a-4c12-9801-a4a46226add5"
  },
  "paraceratherium": {
    "file": "/silhouettes/paraceratherium.svg",
    "taxon": "Paraceratherium",
    "standIn": false,
    "attribution": "Chris Jennings",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/40e7e4c8-9206-4189-8c8d-b21d36e5b327"
  },
  "megalodon": {
    "file": "/silhouettes/megalodon.svg",
    "taxon": "Isurus oxyrinchus",
    "standIn": true,
    "attribution": "Fidji Berio",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/a807f354-fd7c-4547-a7e8-573f7ca75e63"
  },
  "megatherium": {
    "file": "/silhouettes/megatherium.svg",
    "taxon": "Proscelidodon gracillimus",
    "standIn": true,
    "attribution": "Michael Tripoli",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/afde58bf-878b-46b0-864c-76c2543bcf11"
  },
  "australopithecus": {
    "file": "/silhouettes/australopithecus.svg",
    "taxon": "Kenyanthropus platyops",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/ddabd18e-e81e-498b-9139-7e468c0a1763"
  },
  "smilodon": {
    "file": "/silhouettes/smilodon.svg",
    "taxon": "Smilodon fatalis",
    "standIn": false,
    "attribution": "artrociraptor",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/6ab0dfd7-2baf-4d08-b437-738c779ee28d"
  },
  "mammuthus-primigenius": {
    "file": "/silhouettes/mammuthus-primigenius.svg",
    "taxon": "Mammuthus primigenius",
    "standIn": false,
    "attribution": "Kamil S. Jaron",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/f39f0aa9-97f1-4982-976c-07ffb78a4682"
  },
  "homo-sapiens": {
    "file": "/silhouettes/homo-sapiens.svg",
    "taxon": "Homo rudolfensis",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/81926549-6d46-4b14-9e7d-bab0a0521716"
  }
};
