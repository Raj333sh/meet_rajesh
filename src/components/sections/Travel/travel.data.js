const base = import.meta.env.BASE_URL;

export const travelStats = [
  {
    value: "20+",
    label: "Cities Visited",
  },
  {
    value: "10+",
    label: "States",
  },
  {
    value: "∞",
    label: "Memories",
  },
];

/*
 * Longitude / latitude coordinates.
 * These are portfolio-level pin locations for the requested states,
 * not administrative boundary centroids.
 */
export const travelLocations = [
  {
    id: 1,
    name: "Odisha",
    type: "home",
    coordinates: [85.0985, 20.9517],
  },
  {
    id: 2,
    name: "Rajasthan",
    type: "visited",
    coordinates: [74.2179, 27.0238],
  },
  {
    id: 3,
    name: "West Bengal",
    type: "visited",
    coordinates: [87.855, 23.685],
  },
  {
    id: 4,
    name: "Chhattisgarh",
    type: "visited",
    coordinates: [81.8661, 21.2787],
  },
  {
    id: 5,
    name: "Delhi",
    type: "visited",
    coordinates: [77.1025, 28.7041],
  },
  {
    id: 6,
    name: "Uttarakhand",
    type: "visited",
    coordinates: [79.0193, 30.0668],
  },
  {
    id: 7,
    name: "Gujarat",
    type: "visited",
    coordinates: [71.1924, 22.2587],
  },
  {
    id: 8,
    name: "Madhya Pradesh",
    type: "visited",
    coordinates: [78.6569, 22.9734],
  },
  {
    id: 9,
    name: "Karnataka",
    type: "visited",
    coordinates: [75.7139, 15.3173],
  },
  {
    id: 10,
    name: "Andhra Pradesh",
    type: "visited",
    coordinates: [79.7400, 15.9129],
  },
];

export const travelPhotos = [
  {
    id: 1,
    src: `${base}images/travel/IMG_20260510_173232.jpg`,
    alt: "Vikram Lander",
  },
  {
    id: 2,
    src: `${base}images/travel/IMG_20260522_134355.jpg`,
    alt: "First Flight",
  },
  {
    id: 3,
    src: `${base}images/travel/IMG_20260510_162752.jpg`,
    alt: "Science Museum",
  },
  {
    id: 4,
    src: `${base}images/travel/2J0A8134.JPG`,
    alt: "Bungee Jumping",
  },
  {
    id: 5,
    src: `${base}images/travel/IMG_20240816_150123218_HDR.jpg`,
    alt: "Fighter Plane",
  },
  {
    id: 6,
    src: `${base}images/travel/Screenshot_20250704_204455.jpg`,
    alt: "Paragliding",
  },
  {
    id: 7,
    src: `${base}images/travel/IMG_20250620_163110.jpg`,
    alt: "Badrinath",
  },
  {
    id: 8,
    src: `${base}images/travel/IMG_20250621_105735.jpg`,
    alt: "Saraswati River",
  },
  {
    id: 9,
    src: `${base}images/travel/IMG_20240901_174519731_AE.jpg`,
    alt: "Treaking",
  },
  {
    id: 10,
    src: `${base}images/travel/IMG_20240912_175856477.jpg`,
    alt: "Sapua River",
  },
  {
    id: 11,
    src: `${base}images/travel/IMG_20241117_170242163_HDR.jpg`,
    alt: "Konark Temple",
  },
  {
    id: 12,
    src: `${base}images/travel/IMG_20240816_124901650.jpg`,
    alt: "Ship",
  },
  {
    id: 13,
    src: `${base}images/travel/IMG_20240526_172014815_HDR_AE.jpg`,
    alt: "Dhauli",
  },
  {
    id: 14,
    src: `${base}images/travel/IMG_20220710_151112.jpg`,
    alt: "Hill Station",
  },
  {
    id: 15,
    src: `${base}images/travel/IMG_20211231_173828.jpg`,
    alt: "Ghodahada Dam",
  },
  {
    id: 16,
    src: `${base}images/travel/IMG_20201001_172222.jpg`,
    alt: "Evening Drive",
  },
  {
    id: 17,
    src: `${base}images/travel/IMG_20190909_175758.jpg`,
    alt: "Ocean",
  },
  {
    id: 18,
    src: `${base}images/travel/IMG_20190909_143800.jpg`,
    alt: "Taratarini",
  },
  {
    id: 19,
    src: `${base}images/travel/20220710_132543.jpg`,
    alt: "Waterfall",
  },
  {
    id: 20,
    src: `${base}images/travel/20171215_113321.jpg`,
    alt: "IREL",
  },
  {
    id: 21,
    src: `${base}images/travel/20161015_135323.jpg`,
    alt: "Dam",
  },
  {
    id: 22,
    src: `${base}images/travel/20161015_131910.jpg`,
    alt: "Dam",
  },
  {
    id: 23,
    src: `${base}images/travel/IMG_20250613_172207.jpg`,
    alt: "Rishikesh",
  },
  {
    id: 24,
    src: `${base}images/travel/IMG_20260802_174403.jpg`,
    alt: "Banglore",
  },
  {
    id: 25,
    src: `${base}images/travel/IMG_20240721_164139273_HDR.jpg`,
    alt: "Ghatagaon Tarini",
  },
];
