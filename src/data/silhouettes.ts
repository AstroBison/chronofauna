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
  "metriacanthosaurus": {
    "file": "/silhouettes/metriacanthosaurus.svg",
    "taxon": "Yangchuanosaurus shangyouensis",
    "standIn": true,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/c379ba3c-019d-48f1-8797-29ec7185fb2b"
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
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/2003b4f6-7b8d-4c98-9797-1aca028dc2ac"
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
  "ouranosaurus": {
    "file": "/silhouettes/ouranosaurus.svg",
    "taxon": "Ouranosaurus nigeriensis",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/2d16ee00-8793-4c02-8208-94ed13b35dfe"
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
  "moros-intrepidus": {
    "file": "/silhouettes/moros-intrepidus.svg",
    "taxon": "Moros intrepidus",
    "standIn": false,
    "attribution": "Cy Marchant",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/c573d59d-751c-4511-948e-86d9e8f53dc4"
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
  "nasutoceratops": {
    "file": "/silhouettes/nasutoceratops.svg",
    "taxon": "Nasutoceratops titusi",
    "standIn": false,
    "attribution": "Lukas Panzarin (vectorized by T. Michael Keesey)",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/ef275bb4-d7bc-4687-a52e-9dab12a1f582"
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
  "sinoceratops": {
    "file": "/silhouettes/sinoceratops.svg",
    "taxon": "Sinoceratops zhuchengensis",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/cc582628-b4c5-45fd-bb6a-c3935d4e677b"
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
  "mononykus": {
    "file": "/silhouettes/mononykus.svg",
    "taxon": "Alvarezsaurus calvoi",
    "standIn": true,
    "attribution": "Jaime Headden",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/a724b06d-541b-42ac-8cea-b84f985653c6"
  },
  "pyroraptor": {
    "file": "/silhouettes/pyroraptor.svg",
    "taxon": "Pyroraptor olympius",
    "standIn": false,
    "attribution": "Mette Aumala",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/b93bf7e4-0881-440c-b6b6-a324180387f0"
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
  "atrociraptor": {
    "file": "/silhouettes/atrociraptor.svg",
    "taxon": "Atrociraptor marshalli",
    "standIn": false,
    "attribution": "Mette Aumala",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/277ceeda-a1ca-4d81-a97e-07a66907d4cc"
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
  "coryphodon": {
    "file": "/silhouettes/coryphodon.svg",
    "taxon": "Coryphodon",
    "standIn": false,
    "attribution": "Colin McElroy (vectorized by Andrew Schwartz)",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/e616d377-d437-4524-aab7-67da359a4ade"
  },
  "eohippus": {
    "file": "/silhouettes/eohippus.svg",
    "taxon": "Eohippus angustidens",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/342af629-dc39-48ba-8cf2-0029cfdf105b"
  },
  "uintatherium": {
    "file": "/silhouettes/uintatherium.svg",
    "taxon": "Uintatherium anceps",
    "standIn": false,
    "attribution": "Zimices",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/5fe1c8ef-f7c4-47ff-9cc0-b528107fde98"
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
  "hyaenodon": {
    "file": "/silhouettes/hyaenodon.svg",
    "taxon": "Hyaenodon horridus",
    "standIn": false,
    "attribution": "Robert Bruce Horsfall, from W.B. Scott's 1912 \"A History of Land Mammals in the Western Hemisphere\"",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/8e3178f8-8171-4b2d-90cc-9b2dce76bdf8"
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
  "megacerops": {
    "file": "/silhouettes/megacerops.svg",
    "taxon": "Megacerops coloradensis",
    "standIn": false,
    "attribution": "Michael Tripoli",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/ba7eab6c-2d72-4292-97aa-24bae7a2b341"
  },
  "mesohippus": {
    "file": "/silhouettes/mesohippus.svg",
    "taxon": "Mesohippus",
    "standIn": false,
    "attribution": "Heinrich Harder (vectorized by T. Michael Keesey)",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/de4f0606-7e53-4439-8105-797546c7d1c4"
  },
  "archaeotherium": {
    "file": "/silhouettes/archaeotherium.svg",
    "taxon": "Archaeotherium mortoni",
    "standIn": false,
    "attribution": "Zimices",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/0bb0694c-ad1f-4b74-9a93-eab6528723a3"
  },
  "merycoidodon": {
    "file": "/silhouettes/merycoidodon.svg",
    "taxon": "Merycoidodon (Merycoidodon) culbertsoni",
    "standIn": false,
    "attribution": "Zimices",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/5febaf63-71b2-425f-b44e-d1e1e6b6c3ed"
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
  "daeodon": {
    "file": "/silhouettes/daeodon.svg",
    "taxon": "Daeodon",
    "standIn": false,
    "attribution": "Steven Traver",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/f9d16638-b5d8-4321-a0af-0cd67e4740be"
  },
  "moropus": {
    "file": "/silhouettes/moropus.svg",
    "taxon": "Chalicotherium",
    "standIn": true,
    "attribution": "Steven Traver",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/33a00ce3-1fae-450d-b65f-7084a62dfecc"
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
  "aepycamelus": {
    "file": "/silhouettes/aepycamelus.svg",
    "taxon": "Aepycamelus giraffinus",
    "standIn": false,
    "attribution": "Steven Traver",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/993af71b-e784-4694-bc5f-e050b334393f"
  },
  "amphicyon": {
    "file": "/silhouettes/amphicyon.svg",
    "taxon": "Amphicyon ingens",
    "standIn": false,
    "attribution": "Rom-diz",
    "licenceName": "Public Domain Mark 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/33ada84e-026c-4af8-9de3-01eade53d730"
  },
  "teleoceras": {
    "file": "/silhouettes/teleoceras.svg",
    "taxon": "Teleoceras proterum",
    "standIn": false,
    "attribution": "Michael Tripoli",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/47ece020-eef5-4951-9dfe-57d21f3b567c"
  },
  "gomphotherium": {
    "file": "/silhouettes/gomphotherium.svg",
    "taxon": "Gomphotherium angustidens",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/5d4a8a6f-7564-45b0-ac31-ce2eab6f5b24"
  },
  "barbourofelis": {
    "file": "/silhouettes/barbourofelis.svg",
    "taxon": "Barbourofelis fricki",
    "standIn": false,
    "attribution": "Narimane Chatar",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/a46a1f25-01fc-4fbe-b836-980bcf1e88dc"
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
  "titanis": {
    "file": "/silhouettes/titanis.svg",
    "taxon": "Titanis walleri",
    "standIn": false,
    "attribution": "Unknown artist",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/5fad3e3e-1b8d-44a6-b537-f06e3135c444"
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
  "mammut-americanum": {
    "file": "/silhouettes/mammut-americanum.svg",
    "taxon": "Mammut americanum",
    "standIn": false,
    "attribution": "artrociraptor",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/7669386a-e936-4901-bb2a-74acf6b5d731"
  },
  "castoroides": {
    "file": "/silhouettes/castoroides.svg",
    "taxon": "Castoroides ohioensis",
    "standIn": false,
    "attribution": "Zimices",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/36360d2c-e69b-43b5-9a34-95f90307202b"
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
  "arctodus": {
    "file": "/silhouettes/arctodus.svg",
    "taxon": "Arctodus simus",
    "standIn": false,
    "attribution": "Tracy A. Heath",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/8d4b7834-9dd3-4f5a-84a7-99fa159a112a"
  },
  "mammuthus-primigenius": {
    "file": "/silhouettes/mammuthus-primigenius.svg",
    "taxon": "Mammuthus primigenius",
    "standIn": false,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/6f0acd79-1f7d-402f-8679-dc3036b1a504"
  },
  "homo-sapiens": {
    "file": "/silhouettes/homo-sapiens.svg",
    "taxon": "Homo rudolfensis",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/81926549-6d46-4b14-9e7d-bab0a0521716"
  },
  "aenocyon-dirus": {
    "file": "/silhouettes/aenocyon-dirus.svg",
    "taxon": "Aenocyon dirus",
    "standIn": false,
    "attribution": "Margot Michaud",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/d913b75d-3055-48e2-b597-78cfbceac165"
  },
  "helicoprion": {
    "file": "/silhouettes/helicoprion.svg",
    "taxon": "Helicoprion davisii",
    "standIn": false,
    "attribution": "Olof Moleman",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/2dc67937-9756-4639-91d1-77f5d748fe9e"
  },
  "proterosuchus": {
    "file": "/silhouettes/proterosuchus.svg",
    "taxon": "Proterosuchus fergusi",
    "standIn": false,
    "attribution": "Dmitry Bogdanov",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/50514508-25e9-4f5b-9fc8-17994dff3edb"
  },
  "tanystropheus": {
    "file": "/silhouettes/tanystropheus.svg",
    "taxon": "Tanystropheus hydroides",
    "standIn": false,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/9cee1c59-3334-47bd-bd14-6eeba624f211"
  },
  "cymbospondylus": {
    "file": "/silhouettes/cymbospondylus.svg",
    "taxon": "Cymbospondylus",
    "standIn": false,
    "attribution": "Gareth Monger",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/8162d84e-4578-4adf-98d5-2faad56bba19"
  },
  "desmatosuchus": {
    "file": "/silhouettes/desmatosuchus.svg",
    "taxon": "Desmatosuchus",
    "standIn": false,
    "attribution": "Steven Traver",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/77736ac8-c667-4649-b2a9-fa9e701cdafb"
  },
  "riojasaurus": {
    "file": "/silhouettes/riojasaurus.svg",
    "taxon": "Riojasaurus incertus",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/4ac3103b-2649-4a1d-b58f-260ac8884dcd"
  },
  "heterodontosaurus": {
    "file": "/silhouettes/heterodontosaurus.svg",
    "taxon": "Heterodontosaurus tucki",
    "standIn": false,
    "attribution": "TotalDino",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/dc418dda-1a53-4b32-b59b-cd543739afe6"
  },
  "cryolophosaurus": {
    "file": "/silhouettes/cryolophosaurus.svg",
    "taxon": "Cryolophosaurus ellioti",
    "standIn": false,
    "attribution": "Brad McFeeters (vectorized by T. Michael Keesey)",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/6655838b-ba6a-4889-92f4-879444d1b931"
  },
  "monolophosaurus": {
    "file": "/silhouettes/monolophosaurus.svg",
    "taxon": "Monolophosaurus jiangi",
    "standIn": false,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/6f050414-39b9-4eee-80a2-3cdbe0140fb6"
  },
  "huayangosaurus": {
    "file": "/silhouettes/huayangosaurus.svg",
    "taxon": "Huayangosaurus taibaii",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/c24ebf93-5b97-4344-a8c5-d7db51323afa"
  },
  "ophthalmosaurus": {
    "file": "/silhouettes/ophthalmosaurus.svg",
    "taxon": "Ophthalmosaurus icenicus",
    "standIn": false,
    "attribution": "Russell Engelman (modified from McGowan and Motani 2003)",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/06970367-6deb-419d-a0b5-5a8c64527e68"
  },
  "leedsichthys": {
    "file": "/silhouettes/leedsichthys.svg",
    "taxon": "Leedsichthys problematicus",
    "standIn": false,
    "attribution": "Gareth Monger",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/d93f7982-53c6-4b4c-aa72-05418ba7fb57"
  },
  "tuojiangosaurus": {
    "file": "/silhouettes/tuojiangosaurus.svg",
    "taxon": "Tuojiangosaurus multispinus",
    "standIn": false,
    "attribution": "Connor Ashbridge",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/28639a85-48ee-4db9-9fed-67d2ff498e4f"
  },
  "anchiornis": {
    "file": "/silhouettes/anchiornis.svg",
    "taxon": "Anchiornis huxleyi",
    "standIn": false,
    "attribution": "TotalDino",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/f55638db-7db5-4214-b720-2766e76372fc"
  },
  "europasaurus": {
    "file": "/silhouettes/europasaurus.svg",
    "taxon": "Europasaurus holgeri",
    "standIn": false,
    "attribution": "Will Toosey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/8ae0090f-b2c8-4af9-ab86-c233fc40c11e"
  },
  "torvosaurus": {
    "file": "/silhouettes/torvosaurus.svg",
    "taxon": "Torvosaurus tanneri",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/13d6de32-507a-4d96-ba11-897f71cecad1"
  },
  "pterodactylus": {
    "file": "/silhouettes/pterodactylus.svg",
    "taxon": "Pterodactylus antiquus",
    "standIn": false,
    "attribution": "Julio Garza",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/97ce8bbd-68a1-4185-a23e-59dcad7d7f15"
  },
  "gastonia": {
    "file": "/silhouettes/gastonia.svg",
    "taxon": "Gastonia burgei",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/90f82bde-e976-4acd-8f75-954d44f5e236"
  },
  "nigersaurus": {
    "file": "/silhouettes/nigersaurus.svg",
    "taxon": "Nigersaurus taqueti",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/fa7c1568-eadc-4b92-a281-1aee8a3e9b07"
  },
  "sauropelta": {
    "file": "/silhouettes/sauropelta.svg",
    "taxon": "Sauropelta edwardsorum",
    "standIn": false,
    "attribution": "Emily Willoughby",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/9dc23409-1e36-402d-8be5-6b939f7fb664"
  },
  "tenontosaurus": {
    "file": "/silhouettes/tenontosaurus.svg",
    "taxon": "Tenontosaurus tilletti",
    "standIn": false,
    "attribution": "Matt Dempsey",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/5f4c760e-f6f7-4b9b-9199-db12bcfbf212"
  },
  "anhanguera": {
    "file": "/silhouettes/anhanguera.svg",
    "taxon": "Anhanguera santanae",
    "standIn": false,
    "attribution": "Leon P. A. M. Claessens, Patrick M. O'Connor, David M. Unwin",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/2388b73c-13cf-4fc8-b1c2-3ecf35cb0b69"
  },
  "cretoxyrhina": {
    "file": "/silhouettes/cretoxyrhina.svg",
    "taxon": "Cretoxyrhina mantelli",
    "standIn": false,
    "attribution": "Dmitry Bogdanov (vectorized by T. Michael Keesey)",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/b65312ae-91b5-45b1-9553-c192f1000aba"
  },
  "gorgosaurus": {
    "file": "/silhouettes/gorgosaurus.svg",
    "taxon": "Albertosaurus libratus",
    "standIn": true,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/ea905e0c-441e-4b40-92f8-131512b056a5"
  },
  "daspletosaurus": {
    "file": "/silhouettes/daspletosaurus.svg",
    "taxon": "Daspletosaurus torosus",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/10a92799-7fb6-44cb-aaca-7077382fa16c"
  },
  "centrosaurus": {
    "file": "/silhouettes/centrosaurus.svg",
    "taxon": "Centrosaurus apertus",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/141e2aa7-d6a2-4b28-a347-322f7fbe5f9c"
  },
  "kosmoceratops": {
    "file": "/silhouettes/kosmoceratops.svg",
    "taxon": "Kosmoceratops irvinensis",
    "standIn": false,
    "attribution": "Sampson SD, Loewen MA, Farke AA, Roberts EM, Forster CA, et al.",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/738bb8b2-8fbc-4b9b-82a4-cc67bbf69a57"
  },
  "lambeosaurus": {
    "file": "/silhouettes/lambeosaurus.svg",
    "taxon": "Lambeosaurus lambei",
    "standIn": false,
    "attribution": "Will Toosey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/3df190f3-72ef-4cc9-9321-973e63e9825f"
  },
  "tarbosaurus": {
    "file": "/silhouettes/tarbosaurus.svg",
    "taxon": "Tyrannosaurus",
    "standIn": true,
    "attribution": "Fred Wierum",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/832a47bd-0cd4-4b0e-af7b-db9d7ff81867"
  },
  "proceratosaurus": {
    "file": "/silhouettes/proceratosaurus.svg",
    "taxon": "Proceratosaurus bradleyi",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/df44e440-ac0d-451b-b913-56a913a02faa"
  },
  "eustreptospondylus": {
    "file": "/silhouettes/eustreptospondylus.svg",
    "taxon": "Eustreptospondylus oxoniensis",
    "standIn": false,
    "attribution": "Jaime Headden",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/e46c71d9-d38c-4539-9f95-b1a26167d5d0"
  },
  "elaphrosaurus": {
    "file": "/silhouettes/elaphrosaurus.svg",
    "taxon": "Elaphrosaurus bambergi",
    "standIn": false,
    "attribution": "FunkMonk",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/585a10c9-41ee-4c65-9c55-894c8fbe57f1"
  },
  "concavenator": {
    "file": "/silhouettes/concavenator.svg",
    "taxon": "Concavenator corcovatus",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/f314bf9e-2bb8-4edc-afb9-aa382b024496"
  },
  "neovenator": {
    "file": "/silhouettes/neovenator.svg",
    "taxon": "Neovenator salerii",
    "standIn": false,
    "attribution": "FunkMonk",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/c4927904-010c-4c48-b1b6-a85669e043d7"
  },
  "irritator": {
    "file": "/silhouettes/irritator.svg",
    "taxon": "Irritator challengeri",
    "standIn": false,
    "attribution": "Connor Ashbridge",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/27a5d428-6513-481a-96d3-b895228eb04b"
  },
  "tyrannotitan": {
    "file": "/silhouettes/tyrannotitan.svg",
    "taxon": "Tyrannotitan chubutensis",
    "standIn": false,
    "attribution": "Michael P. Taylor",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/4bf61905-5424-4d54-b4fd-477a62907eae"
  },
  "abelisaurus": {
    "file": "/silhouettes/abelisaurus.svg",
    "taxon": "Abelisaurus comahuensis",
    "standIn": false,
    "attribution": "Alessio Ciaffi",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/8fdd2b1b-15ec-4248-864d-f6c78f153e81"
  },
  "gigantoraptor": {
    "file": "/silhouettes/gigantoraptor.svg",
    "taxon": "Gigantoraptor erlianensis",
    "standIn": false,
    "attribution": "Cy Marchant",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/6ba48f04-d4b7-4f97-a0d2-17fb2bf5473e"
  },
  "citipati": {
    "file": "/silhouettes/citipati.svg",
    "taxon": "Citipati osmolskae",
    "standIn": false,
    "attribution": "Emily Willoughby",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/b82711c1-4c4c-4fdd-b9ff-2bcd48aa4cd1"
  },
  "alioramus": {
    "file": "/silhouettes/alioramus.svg",
    "taxon": "Alioramus remotus",
    "standIn": false,
    "attribution": "Will Toosey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/499fe1d6-a3c5-4219-a60e-d5ae93031bda"
  },
  "ornithomimus": {
    "file": "/silhouettes/ornithomimus.svg",
    "taxon": "Ornithomimus",
    "standIn": false,
    "attribution": "Christiana Garros",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/b778f21e-0415-4990-b7be-27dc3ce21405"
  },
  "dryosaurus": {
    "file": "/silhouettes/dryosaurus.svg",
    "taxon": "Dryosaurus altus",
    "standIn": false,
    "attribution": "Gareth Monger",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/14184e4e-0777-4d0b-8cb4-00dedd216af4"
  },
  "camptosaurus": {
    "file": "/silhouettes/camptosaurus.svg",
    "taxon": "Camptosaurus dispar",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/26a45f4d-f777-4e9c-9289-4620c6aeca0a"
  },
  "miragaia": {
    "file": "/silhouettes/miragaia.svg",
    "taxon": "Dacentrurus armatus",
    "standIn": true,
    "attribution": "Jaime Headden",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/0b56513a-bcc2-4f96-bf8b-92ac61d3c51e"
  },
  "dacentrurus": {
    "file": "/silhouettes/dacentrurus.svg",
    "taxon": "Dacentrurus armatus",
    "standIn": false,
    "attribution": "Jaime Headden",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/0b56513a-bcc2-4f96-bf8b-92ac61d3c51e"
  },
  "borealopelta": {
    "file": "/silhouettes/borealopelta.svg",
    "taxon": "Borealopelta markmitchelli",
    "standIn": false,
    "attribution": "Marie Aimée ALLARD",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/80592c68-b4ff-4909-b1b4-a9831303232b"
  },
  "edmontonia": {
    "file": "/silhouettes/edmontonia.svg",
    "taxon": "Liaoningosaurus paradoxus",
    "standIn": true,
    "attribution": "Brad McFeeters (vectorized by T. Michael Keesey)",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/294aa46e-d5a8-4c48-b3ba-f1f3f4fd0c1e"
  },
  "chasmosaurus": {
    "file": "/silhouettes/chasmosaurus.svg",
    "taxon": "Chasmosaurus belli",
    "standIn": false,
    "attribution": "Matt Dempsey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/9738fe4f-f60b-4f76-a014-f0cf4478d368"
  },
  "pachyrhinosaurus": {
    "file": "/silhouettes/pachyrhinosaurus.svg",
    "taxon": "Pachyrhinosaurus",
    "standIn": false,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/da8f7c54-89aa-4c97-87eb-e6ea778ebd6e"
  },
  "stegoceras": {
    "file": "/silhouettes/stegoceras.svg",
    "taxon": "Stegoceras validum",
    "standIn": false,
    "attribution": "Caleb M. Brown",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/4d160c01-0026-4176-9471-4e79771c8c91"
  },
  "thescelosaurus": {
    "file": "/silhouettes/thescelosaurus.svg",
    "taxon": "Thescelosaurus neglectus",
    "standIn": false,
    "attribution": "Caleb M. Brown",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/b7879e57-baca-4cd2-83c5-e85e8971a85f"
  },
  "cetiosaurus": {
    "file": "/silhouettes/cetiosaurus.svg",
    "taxon": "Cetiosaurus oxoniensis",
    "standIn": false,
    "attribution": "Michael P. Taylor",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/2aef7918-8f7a-4b62-82e3-e88b8969d4a5"
  },
  "patagosaurus": {
    "file": "/silhouettes/patagosaurus.svg",
    "taxon": "Patagosaurus fariasi",
    "standIn": false,
    "attribution": "T. Michael Keesey",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/b94be3d0-8014-4e9d-8117-cf833a13cc79"
  },
  "giraffatitan": {
    "file": "/silhouettes/giraffatitan.svg",
    "taxon": "Giraffatitan brancai",
    "standIn": false,
    "attribution": "Amy Beauvois",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/1e6b0240-6249-4149-8499-5f1c08079bcc"
  },
  "lufengosaurus": {
    "file": "/silhouettes/lufengosaurus.svg",
    "taxon": "Lufengosaurus",
    "standIn": false,
    "attribution": "Tasman Dixon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/9651a015-2e4e-4433-91e5-0b3f4121e859"
  },
  "rapetosaurus": {
    "file": "/silhouettes/rapetosaurus.svg",
    "taxon": "Rapetosaurus krausei",
    "standIn": false,
    "attribution": "Will Toosey",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/5ef8943e-15d4-4c30-9cfc-9c59c6e1b83f"
  },
  "pterodaustro": {
    "file": "/silhouettes/pterodaustro.svg",
    "taxon": "Pterodaustro guinazui",
    "standIn": false,
    "attribution": "Cy Marchant",
    "licenceName": "CC BY 4.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
    "sourceUrl": "https://www.phylopic.org/images/5fb7ce9e-dd3c-4af6-8d29-39a9a80c4947"
  },
  "tupuxuara": {
    "file": "/silhouettes/tupuxuara.svg",
    "taxon": "Tupuxuara longicristatus",
    "standIn": false,
    "attribution": "Dmitry Bogdanov (modified by T. Michael Keesey)",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/082285d7-e74c-4c1b-ab59-360be865c1aa"
  },
  "nyctosaurus": {
    "file": "/silhouettes/nyctosaurus.svg",
    "taxon": "Nyctosaurus gracilis",
    "standIn": false,
    "attribution": "Gareth Monger",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/0223839a-3c09-4a33-8369-e1ae92a16571"
  },
  "stenopterygius": {
    "file": "/silhouettes/stenopterygius.svg",
    "taxon": "Stenopterygius quadriscissus",
    "standIn": false,
    "attribution": "Neil Kelley",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/4f9d0c44-1495-4d09-a3b2-39f8f2ca5522"
  },
  "rhomaleosaurus": {
    "file": "/silhouettes/rhomaleosaurus.svg",
    "taxon": "Rhomaleosaurus cramptoni",
    "standIn": false,
    "attribution": "Scott Hartman",
    "licenceName": "CC BY 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/40db43fb-581f-4743-8c79-bec7ff2ced43"
  },
  "platecarpus": {
    "file": "/silhouettes/platecarpus.svg",
    "taxon": "Platecarpus",
    "standIn": false,
    "attribution": "Matt Crook",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/5253b3b3-a1f8-4839-a67b-10f6606ffc0b"
  },
  "scutosaurus": {
    "file": "/silhouettes/scutosaurus.svg",
    "taxon": "Scutosaurus karpinskii",
    "standIn": false,
    "attribution": "Chris Jennings (vectorized by A. Verrière)",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/c5a448bf-0119-4735-8366-c237d855a1a0"
  },
  "enchodus": {
    "file": "/silhouettes/enchodus.svg",
    "taxon": "Enchodus",
    "standIn": false,
    "attribution": "Craig Dylke",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/00ae8a88-2582-4fef-918b-22edaf5dc178"
  },
  "moschops": {
    "file": "/silhouettes/moschops.svg",
    "taxon": "Moschops capensis",
    "standIn": false,
    "attribution": "Ryan Santos Soledade",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/b5f52159-e0a7-4054-88a7-3836ace24f49"
  },
  "diictodon": {
    "file": "/silhouettes/diictodon.svg",
    "taxon": "Diictodon feliceps",
    "standIn": false,
    "attribution": "Smokeybjb",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/4ce2a8f1-342a-4124-b018-af7e5dae4130"
  },
  "cotylorhynchus": {
    "file": "/silhouettes/cotylorhynchus.svg",
    "taxon": "Cotylorhynchus",
    "standIn": false,
    "attribution": "Jagged Fang Designs",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/9af05b6c-81f5-499a-8dfc-13e4221dc10e"
  },
  "thrinaxodon": {
    "file": "/silhouettes/thrinaxodon.svg",
    "taxon": "Thrinaxodon liorhinus",
    "standIn": false,
    "attribution": "Christine Axon",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/94fda119-5435-4246-ad23-20b15f3bcb8d"
  },
  "majungasaurus": {
    "file": "/silhouettes/majungasaurus.svg",
    "taxon": "Majungasaurus crenatissimus",
    "standIn": false,
    "attribution": "Jaime Headden",
    "licenceName": "CC BY-SA 3.0",
    "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://www.phylopic.org/images/16326846-ecd5-49a9-b450-176d3f63703e"
  },
  "gryposaurus": {
    "file": "/silhouettes/gryposaurus.svg",
    "taxon": "Laiyangosaurus youngi",
    "standIn": true,
    "attribution": "Olof Moleman",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/f704bcd3-09c1-433f-8ce7-ec0c98fe0a3b"
  },
  "saurichthys": {
    "file": "/silhouettes/saurichthys.svg",
    "taxon": "Saurichthys curionii",
    "standIn": false,
    "attribution": "Jonathan Pople",
    "licenceName": "CC0 1.0",
    "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "sourceUrl": "https://www.phylopic.org/images/e8a9d578-7f94-4e87-b548-4e834ca8f27f"
  }
};
