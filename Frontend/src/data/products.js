import amiK from '../assets/Ami+K.jpeg';
import agri1 from '../assets/Agri1.jpg';
import agri2 from '../assets/Agri2.jpg';
import brix3054 from '../assets/BenferticoBrix3054.jpeg';
import fruit3130 from '../assets/BenferticoFruit3130.jpeg';
import grow2510 from '../assets/BenferticoGrow2510.jpeg';
import stress505 from '../assets/BenferticoStress505.jpeg';
import vigora131218 from '../assets/BenferticoVigora131218.jpeg';
import calmatrix from '../assets/Calmatrix.jpeg';
import cellCalix from '../assets/Cel-calix.jpeg';
import calciumChelate from '../assets/GlyoneUltraChelatedCalcium.jpeg';
import magnesiumChelate from '../assets/GlyoneUltraChelatedMagnesium.jpeg';
import manganeseChelate from '../assets/GlyoneUltraChelatedMangnese.jpeg';
import zincChelate from '../assets/GlyoneUltraChelatedZinc.jpeg';
import ultraCombi from '../assets/GlyoneUltraCombi.jpeg';
import orthoSil from '../assets/OrthoSil.jpeg';
import zincUp from '../assets/Zinc-up.jpeg';

export const filterOptions = {
  categories: [
    'All Products',
    'NPK Fertilizers',
    'Organic Fertilizers',
    'Micronutrients',
    'Bio-Stimulants',
  ],
  cropTypes: ['All', 'Vegetables', 'Fruits', 'Flowers', 'Grains', 'General Crops'],
  applications: ['All', 'Soil Application', 'Foliar Application', 'Drip Irrigation'],
  productTypes: ['All', 'Granular', 'Liquid', 'Powder'],
};

export const products = [
  {
    id: 1,
    name: 'GreenGrow NPK',
    category: 'NPK Fertilizers',
    cropType: 'Vegetables',
    application: 'Soil Application',
    productType: 'Granular',
    description:
      'A balanced NPK program designed for early vigor, uniform rooting, and steady vegetative development in greenhouse vegetables.',
    benefit: 'Builds strong root architecture and uniform early growth.',
    benefits: [
      'Supports steady phosphorus availability during establishment.',
      'Encourages even canopy growth without excessive stretch.',
      'Works well in intensive vegetable schedules.',
    ],
    cropSuitability: ['Tomato', 'Pepper', 'Cucumber'],
    image: grow2510,
  },
  {
    id: 2,
    name: 'Dutch Bloom 31-30',
    category: 'NPK Fertilizers',
    cropType: 'Flowers',
    application: 'Soil Application',
    productType: 'Granular',
    description:
      'A high-performance flowering blend inspired by Dutch ornamental production, tuned for color density and bloom continuity.',
    benefit: 'Encourages fuller flowering with cleaner color expression.',
    benefits: [
      'Improves flowering consistency in ornamentals.',
      'Supports reproductive energy during bloom cycles.',
      'Suitable for intensive nursery programs.',
    ],
    cropSuitability: ['Roses', 'Gerbera', 'Potted ornamentals'],
    image: fruit3130,
  },
  {
    id: 3,
    name: 'CalMatrix Root Care',
    category: 'Organic Fertilizers',
    cropType: 'Fruits',
    application: 'Soil Application',
    productType: 'Liquid',
    description:
      'A calcium-rich soil support solution developed to help orchards and fruiting crops establish stronger structure and cell integrity.',
    benefit: 'Improves plant strength while supporting fruit firmness.',
    benefits: [
      'Helps stabilize cell walls during active growth.',
      'Supports better fruit firmness and storage quality.',
      'Blends into orchard nutrition schedules easily.',
    ],
    cropSuitability: ['Grapes', 'Citrus', 'Pomegranate'],
    image: calmatrix,
  },
  {
    id: 4,
    name: 'RootPlus Ami+K',
    category: 'Bio-Stimulants',
    cropType: 'Vegetables',
    application: 'Drip Irrigation',
    productType: 'Liquid',
    description:
      'Amino-acid-based support with potassium enrichment for better crop finish, sweetness, and root-zone energy during demanding phases.',
    benefit: 'Boosts root activity and finish quality in fruiting crops.',
    benefits: [
      'Supports sugar movement and finish quality.',
      'Improves recovery after crop stress events.',
      'Ideal for drip-fed high-value vegetables.',
    ],
    cropSuitability: ['Melon', 'Chilli', 'Tomato'],
    image: amiK,
  },
  {
    id: 5,
    name: 'VitaGrow Zinc',
    category: 'Micronutrients',
    cropType: 'Vegetables',
    application: 'Foliar Application',
    productType: 'Powder',
    description:
      'A precision zinc correction formula for rapid leaf uptake, cleaner internodal growth, and dependable deficiency response.',
    benefit: 'Corrects zinc deficiency quickly and supports compact growth.',
    benefits: [
      'Fast foliar absorption with chelated stability.',
      'Supports leaf vigor and growth-point activity.',
      'Useful during visible micronutrient stress.',
    ],
    cropSuitability: ['Leafy greens', 'Onion', 'Okra'],
    image: zincChelate,
  },
  {
    id: 6,
    name: 'GrowMax 30-54',
    category: 'NPK Fertilizers',
    cropType: 'Grains',
    application: 'Soil Application',
    productType: 'Powder',
    description:
      'A high-phosphorus performance line built for cereals and field crops that need stronger energy transfer and grain-set support.',
    benefit: 'Improves yield structure and reproductive strength.',
    benefits: [
      'Supports energy-intensive grain development.',
      'Strengthens reproductive performance in cereals.',
      'Performs well in broad-acre nutrition schedules.',
    ],
    cropSuitability: ['Wheat', 'Maize', 'Rice'],
    image: brix3054,
  },
  {
    id: 7,
    name: 'Zinc-Up Plus',
    category: 'Micronutrients',
    cropType: 'Fruits',
    application: 'Foliar Application',
    productType: 'Liquid',
    description:
      'A concentrated zinc line tailored for fruit crops needing improved leaf balance, fruit fill, and more uniform reproductive growth.',
    benefit: 'Enhances fruit set and maintains stronger foliage health.',
    benefits: [
      'Helps improve shoot balance in fruit crops.',
      'Encourages more even fruit sizing.',
      'Useful through repeated foliar nutrition plans.',
    ],
    cropSuitability: ['Mango', 'Guava', 'Apple'],
    image: zincUp,
  },
  {
    id: 8,
    name: 'OrthoSil Prime',
    category: 'Bio-Stimulants',
    cropType: 'Vegetables',
    application: 'Soil Application',
    productType: 'Liquid',
    description:
      'A silica-forward crop fortifier made to reinforce plant structure, reduce stress sensitivity, and improve field durability.',
    benefit: 'Strengthens plant architecture and reduces stress response.',
    benefits: [
      'Improves stem rigidity and crop standability.',
      'Supports stronger resilience under field pressure.',
      'Fits stress-prevention programs before peak demand.',
    ],
    cropSuitability: ['Cucumber', 'Brassicas', 'Capsicum'],
    image: orthoSil,
  },
  {
    id: 9,
    name: 'Calcium Guard',
    category: 'Micronutrients',
    cropType: 'Flowers',
    application: 'Drip Irrigation',
    productType: 'Liquid',
    description:
      'A clean chelated calcium formulation for flower quality, tissue strength, and better control over calcium-related disorders.',
    benefit: 'Protects quality in delicate flowers and fruiting crops.',
    benefits: [
      'Supports cell-wall integrity during peak demand.',
      'Helps prevent calcium-linked quality losses.',
      'Moves smoothly through drip systems.',
    ],
    cropSuitability: ['Carnation', 'Strawberry', 'Capsicum'],
    image: calciumChelate,
  },
  {
    id: 10,
    name: 'Magnesium Max',
    category: 'Micronutrients',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Liquid',
    description:
      'A photosynthesis support formula built around high-availability magnesium for greener canopies and more dependable metabolic activity.',
    benefit: 'Restores leaf color and keeps photosynthesis running efficiently.',
    benefits: [
      'Supports chlorophyll formation under heavy demand.',
      'Helps recover pale or chlorotic foliage.',
      'Suitable across broad crop groups.',
    ],
    cropSuitability: ['Field vegetables', 'Pulses', 'Oilseeds'],
    image: magnesiumChelate,
  },
  {
    id: 11,
    name: 'Stress Shield 505',
    category: 'Bio-Stimulants',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Liquid',
    description:
      'A broad-spectrum anti-stress formula designed to help crops recover after heat, transplanting, moisture swings, or foliar shock.',
    benefit: 'Accelerates crop recovery during stressful growing windows.',
    benefits: [
      'Softens drought and heat-stress impact.',
      'Improves bounce-back after transplant shock.',
      'Pairs well with foliar support programs.',
    ],
    cropSuitability: ['Vegetables', 'Fruit crops', 'Field crops'],
    image: stress505,
  },
  {
    id: 12,
    name: 'Vigor Bio 13-12-18',
    category: 'Organic Fertilizers',
    cropType: 'General Crops',
    application: 'Soil Application',
    productType: 'Liquid',
    description:
      'An organic-led nutrition program with balanced macro support for farms that want soft-release vigor and stronger root-zone activity.',
    benefit: 'Maintains whole-crop vigor with gentle, steady nutrition.',
    benefits: [
      'Supports sustained crop energy without harsh spikes.',
      'Encourages healthier soil biological activity.',
      'Adapts well to diverse crop rotations.',
    ],
    cropSuitability: ['Open-field crops', 'Fruit blocks', 'Nursery beds'],
    image: vigora131218,
  },
  {
    id: 13,
    name: 'CombiTrace Vital',
    category: 'Micronutrients',
    cropType: 'Vegetables',
    application: 'Drip Irrigation',
    productType: 'Powder',
    description:
      'A combined trace-element program for complete micronutrient coverage in fast-moving vegetable and protected-crop systems.',
    benefit: 'Provides broad trace nutrition in one precise correction step.',
    benefits: [
      'Delivers multiple trace elements in one mix.',
      'Supports uniform crop color and metabolism.',
      'Ideal for intensive fertigation programs.',
    ],
    cropSuitability: ['Tomato', 'Bell pepper', 'Leafy vegetables'],
    image: ultraCombi,
  },
  {
    id: 14,
    name: 'Manganese Guard',
    category: 'Micronutrients',
    cropType: 'Fruits',
    application: 'Foliar Application',
    productType: 'Liquid',
    description:
      'A manganese correction line focused on stronger photosynthetic balance, leaf health, and consistent enzyme activity.',
    benefit: 'Supports healthy foliage and more efficient metabolism.',
    benefits: [
      'Encourages cleaner green leaf expression.',
      'Helps maintain metabolic efficiency during active growth.',
      'Suitable for repeated foliar use.',
    ],
    cropSuitability: ['Banana', 'Citrus', 'Stone fruit'],
    image: manganeseChelate,
  },
  {
    id: 15,
    name: 'Cell-Calix Boost',
    category: 'Bio-Stimulants',
    cropType: 'Flowers',
    application: 'Soil Application',
    productType: 'Liquid',
    description:
      'A crop-activation formula that supports cellular performance, flower endurance, and cleaner transitions through demanding stages.',
    benefit: 'Improves bloom endurance and overall crop stamina.',
    benefits: [
      'Supports longer-lasting flowering quality.',
      'Improves crop consistency during transition stages.',
      'Complements premium ornamental programs.',
    ],
    cropSuitability: ['Tulips', 'Cut flowers', 'Nursery ornamentals'],
    image: cellCalix,
  },
];

export const landscapeAssets = {
  hero: agri2,
  story: agri1,
};
