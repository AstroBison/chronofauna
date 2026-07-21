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
  "herrerasaurus": {
    "file": "/silhouettes/herrerasaurus.svg",
    "taxon": "Herrerasaurus ischigualastensis",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/3d1b4e68-f523-47c2-8945-c701a5e5d40f"
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
  "massospondylus": {
    "file": "/silhouettes/massospondylus.svg",
    "taxon": "Massospondylus carinatus",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/2da08fc6-7dc0-4d20-813c-58069902a96b"
  },
  "temnodontosaurus": {
    "file": "/silhouettes/temnodontosaurus.svg",
    "taxon": "Temnodontosaurus trigonodon",
    "standIn": false,
    "attribution": "Gareth Monger",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/d974c74c-7c59-47d5-ad8e-80b704579378"
  },
  "plesiosaurus": {
    "file": "/silhouettes/plesiosaurus.svg",
    "taxon": "Plesiosaurus dolichodeirus",
    "standIn": false,
    "attribution": "Adam Stuart Smith (vectorized by T. Michael Keesey)",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/455695a6-3d47-46e6-88e1-70b36eef7859"
  },
  "scelidosaurus": {
    "file": "/silhouettes/scelidosaurus.svg",
    "taxon": "Scelidosaurus harrisonii",
    "standIn": false,
    "attribution": "Matt Dempsey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/70af4784-a8ed-46aa-b94d-6d3c94cf3bd3"
  },
  "dimorphodon": {
    "file": "/silhouettes/dimorphodon.svg",
    "taxon": "Dimorphodon macronyx",
    "standIn": false,
    "attribution": "John Conway",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/a4c37c72-e235-40c0-8ecb-6e567b3d2e1f"
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
  "shunosaurus": {
    "file": "/silhouettes/shunosaurus.svg",
    "taxon": "Shunosaurus lii",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/017022b6-81c9-486e-b545-2782729ea896"
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
  "mamenchisaurus": {
    "file": "/silhouettes/mamenchisaurus.svg",
    "taxon": "Mamenchisaurus youngi",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/50414999-21ad-45fe-bda1-e180bdce5c26"
  },
  "kentrosaurus": {
    "file": "/silhouettes/kentrosaurus.svg",
    "taxon": "Kentrosaurus aethiopicus",
    "standIn": false,
    "attribution": "Matt Dempsey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/5f1db1b5-c3dc-4524-94b9-1a9b568cbac4"
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
  "camarasaurus": {
    "file": "/silhouettes/camarasaurus.svg",
    "taxon": "Camarasaurus grandis",
    "standIn": false,
    "attribution": "Elihu Guzmán Arroyo",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/8c378565-ab5b-4f49-8344-b06f047a4738"
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
  "ceratosaurus": {
    "file": "/silhouettes/ceratosaurus.svg",
    "taxon": "Ceratosaurus nasicornis",
    "standIn": false,
    "attribution": "Marie Aimée ALLARD",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/021a9423-2c69-4c4b-b888-de540a11a928"
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
  "utahraptor": {
    "file": "/silhouettes/utahraptor.svg",
    "taxon": "Utahraptor ostrommaysi",
    "standIn": false,
    "attribution": "Emily Willoughby",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/06662a5b-a115-4231-897a-a74570b1320f"
  },
  "sarcosuchus": {
    "file": "/silhouettes/sarcosuchus.svg",
    "taxon": "Sarcosuchus imperator",
    "standIn": false,
    "attribution": "Miguel Hernández",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/6b46598c-5abd-4624-b065-3f94716376f9"
  },
  "baryonyx": {
    "file": "/silhouettes/baryonyx.svg",
    "taxon": "Baryonyx walkeri",
    "standIn": false,
    "attribution": "Alessio Ciaffi",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/452d28c2-9f32-49c8-8181-392b2aa66d71"
  },
  "hypsilophodon": {
    "file": "/silhouettes/hypsilophodon.svg",
    "taxon": "Hypsilophodon foxii",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/99794ff6-9199-47c8-88a4-8054c5a749a8"
  },
  "amargasaurus": {
    "file": "/silhouettes/amargasaurus.svg",
    "taxon": "Dicraeosaurus",
    "standIn": true,
    "attribution": "Will Toosey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/3f22e916-0cfc-4e9d-922b-7f47f72b8306"
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
  "psittacosaurus": {
    "file": "/silhouettes/psittacosaurus.svg",
    "taxon": "Psittacosaurus houi",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/79ebd00e-2745-4b89-840a-641e62fe3341"
  },
  "sinosauropteryx": {
    "file": "/silhouettes/sinosauropteryx.svg",
    "taxon": "Sinosauropteryx prima",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/2b08dc0b-c601-48b1-96eb-7e3fa8ce3231"
  },
  "yutyrannus": {
    "file": "/silhouettes/yutyrannus.svg",
    "taxon": "Yutyrannus huali",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/5770eb59-b382-4867-bdcc-f304eb4f0020"
  },
  "microraptor": {
    "file": "/silhouettes/microraptor.svg",
    "taxon": "Microraptor zhaoianus",
    "standIn": false,
    "attribution": "Brad McFeeters (vectorized by T. Michael Keesey)",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/90bf7ae5-8653-4dbf-ae36-8854ac711dab"
  },
  "dsungaripterus": {
    "file": "/silhouettes/dsungaripterus.svg",
    "taxon": "Pterodactylus antiquus",
    "standIn": true,
    "attribution": "Julio Garza",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/97ce8bbd-68a1-4185-a23e-59dcad7d7f15"
  },
  "kronosaurus": {
    "file": "/silhouettes/kronosaurus.svg",
    "taxon": "Kronosaurus",
    "standIn": false,
    "attribution": "Dann Pigdon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/cc9e2603-b8f9-414c-a09b-8b8ae3da6343"
  },
  "suchomimus": {
    "file": "/silhouettes/suchomimus.svg",
    "taxon": "Cristatusaurus lapparenti",
    "standIn": true,
    "attribution": "Marie Aimée ALLARD",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/71cd33c1-475e-4ee6-ba4b-1193db278eed"
  },
  "acrocanthosaurus": {
    "file": "/silhouettes/acrocanthosaurus.svg",
    "taxon": "Acrocanthosaurus atokensis",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/078ca0f5-8b12-48cf-aa47-8b689d6a1067"
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
  "tapejara": {
    "file": "/silhouettes/tapejara.svg",
    "taxon": "Vectidraco daisymorrisae",
    "standIn": true,
    "attribution": "Gareth Monger",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/3393418a-9ae3-4c01-a4c5-53adddc8c860"
  },
  "tropeognathus": {
    "file": "/silhouettes/tropeognathus.svg",
    "taxon": "Tropeognathus mesembrinus",
    "standIn": false,
    "attribution": "Alessio Ciaffi",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/d4b26253-4424-4520-92f1-5b0dad1763c6"
  },
  "patagotitan": {
    "file": "/silhouettes/patagotitan.svg",
    "taxon": "Abditosaurus kuehnei",
    "standIn": true,
    "attribution": "Tasman Dixon",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/9cc0271e-f5d0-4e54-8245-76286844006b"
  },
  "carcharodontosaurus": {
    "file": "/silhouettes/carcharodontosaurus.svg",
    "taxon": "Carcharodontosaurus",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/cab8d7d3-8a0f-4d56-b353-3ed5aef77155"
  },
  "giganotosaurus": {
    "file": "/silhouettes/giganotosaurus.svg",
    "taxon": "Giganotosaurus carolinii",
    "standIn": false,
    "attribution": "Marie-Aimée ALLARD",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/a0f796bd-64f5-4533-bf01-b798fa519895"
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
  "mapusaurus": {
    "file": "/silhouettes/mapusaurus.svg",
    "taxon": "Mapusaurus roseae",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/9b13bff4-0bdc-4038-8375-d7444f640d5b"
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
  "tylosaurus": {
    "file": "/silhouettes/tylosaurus.svg",
    "taxon": "Tylosaurus",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/8ae20f15-d9c1-45ff-a117-77f001b6eb0a"
  },
  "dreadnoughtus": {
    "file": "/silhouettes/dreadnoughtus.svg",
    "taxon": "Opisthocoelicaudia skarzynskii",
    "standIn": true,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/33ae8000-0046-41bb-b68a-189a0eed3eca"
  },
  "deinosuchus": {
    "file": "/silhouettes/deinosuchus.svg",
    "taxon": "Deinosuchus riograndensis",
    "standIn": false,
    "attribution": "Smokeybjb",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/15bcbacd-1d2f-4354-b1cc-e068faa6134e"
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
  "maiasaura": {
    "file": "/silhouettes/maiasaura.svg",
    "taxon": "Maiasaura peeblesorum",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/e564cbd6-352d-4bb4-804f-697f6e5c4f87"
  },
  "archelon": {
    "file": "/silhouettes/archelon.svg",
    "taxon": "Archelon ischyros",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/84447dd6-0a90-44ac-96d6-8668be2709a4"
  },
  "corythosaurus": {
    "file": "/silhouettes/corythosaurus.svg",
    "taxon": "Corythosaurus casuarius",
    "standIn": false,
    "attribution": "Craig Dylke",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/9f34bd6e-160b-4efc-91fd-d269441dd544"
  },
  "troodon": {
    "file": "/silhouettes/troodon.svg",
    "taxon": "Troodon formosus",
    "standIn": false,
    "attribution": "Raven Amos",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/b50c893f-8a76-4cd2-9e03-4514fc1cbc80"
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
  "euoplocephalus": {
    "file": "/silhouettes/euoplocephalus.svg",
    "taxon": "Euoplocephalus tutus",
    "standIn": false,
    "attribution": "Andrew A. Farke",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/5b062105-b6a2-4405-bd75-3d0399102b9a"
  },
  "styracosaurus": {
    "file": "/silhouettes/styracosaurus.svg",
    "taxon": "Styracosaurus albertensis",
    "standIn": false,
    "attribution": "Craig Dylke",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/b5131da6-f158-46bd-812d-5cda4a0a2254"
  },
  "pentaceratops": {
    "file": "/silhouettes/pentaceratops.svg",
    "taxon": "Pentaceratops gettyi",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/7eb3a461-ef8c-4767-bf7a-911144e5c929"
  },
  "struthiomimus": {
    "file": "/silhouettes/struthiomimus.svg",
    "taxon": "Struthiomimus altus",
    "standIn": false,
    "attribution": "Craig Dylke",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/72d740f3-17f2-460f-b04b-fa9bb6b3e00f"
  },
  "oviraptor": {
    "file": "/silhouettes/oviraptor.svg",
    "taxon": "Oviraptor philoceratops",
    "standIn": false,
    "attribution": "Ivan Iofrida",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/101a8c21-5211-4f7f-b083-4f3373095a03"
  },
  "protoceratops": {
    "file": "/silhouettes/protoceratops.svg",
    "taxon": "Protoceratops andrewsi",
    "standIn": false,
    "attribution": "david maas / dave hone",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/0848cef8-8984-4dab-aae3-fc06334c1f9a"
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
  "gallimimus": {
    "file": "/silhouettes/gallimimus.svg",
    "taxon": "Ornithomimus",
    "standIn": true,
    "attribution": "Christiana Garros",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/b778f21e-0415-4990-b7be-27dc3ce21405"
  },
  "edmontosaurus": {
    "file": "/silhouettes/edmontosaurus.svg",
    "taxon": "Edmontosaurus regalis",
    "standIn": false,
    "attribution": "Ivan Iofrida",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/fb219ea5-5581-4dd8-a668-a600385e2b1d"
  },
  "carnotaurus": {
    "file": "/silhouettes/carnotaurus.svg",
    "taxon": "Carnotaurus sastrei",
    "standIn": false,
    "attribution": "thetruespinofanboi",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/07ac345a-7b69-4f99-a3fd-84b4d08fcd80"
  },
  "albertosaurus": {
    "file": "/silhouettes/albertosaurus.svg",
    "taxon": "Albertosaurus libratus",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/ea905e0c-441e-4b40-92f8-131512b056a5"
  },
  "deinocheirus": {
    "file": "/silhouettes/deinocheirus.svg",
    "taxon": "Deinocheirus mirificus",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/79676d45-ee23-469a-be96-2d79acfe6dcb"
  },
  "pachycephalosaurus": {
    "file": "/silhouettes/pachycephalosaurus.svg",
    "taxon": "Pachycephalosaurus spinifer",
    "standIn": false,
    "attribution": "Emily Willoughby",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/dc73bebc-7294-493d-b64a-98addd6ea837"
  },
  "saltasaurus": {
    "file": "/silhouettes/saltasaurus.svg",
    "taxon": "Neuquensaurus australis",
    "standIn": true,
    "attribution": "Ryan S. Soledade",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/b591e0da-c9f0-4fbc-9c0d-93109c48c2bb"
  },
  "therizinosaurus": {
    "file": "/silhouettes/therizinosaurus.svg",
    "taxon": "Therizinosaurus cheloniformis",
    "standIn": false,
    "attribution": "Martin Kevil",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/2f4b561d-d659-4195-8933-d4ba0203c61c"
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
  "torosaurus": {
    "file": "/silhouettes/torosaurus.svg",
    "taxon": "Torosaurus utahensis",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/e227cbd9-573a-44cc-8bcb-8576b9279a35"
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
    "standIn": true,
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
