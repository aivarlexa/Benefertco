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


/* =========================================================
   FILTER OPTIONS
========================================================= */

export const filterOptions = {
  categories: [
    'All Products',
    'Water Soluble Fertilizers',
    'Liquid Fertilizers',
    'Chelated Micronutrients',
    'Micronutrient Blends',
  ],

  cropTypes: [
    'All',
    'Vegetables',
    'Fruits',
    'Flowers',
    'Field Crops',
    'General Crops',
  ],

  applications: [
    'All',
    'Drip Irrigation',
    'Foliar Application',
  ],

  productTypes: [
    'All',
    'Water Soluble',
    'Liquid',
    'Chelated',
  ],
};


/* =========================================================
   PRODUCTS
========================================================= */

export const products = [

  /* -------------------------------------------------------
     1. AMI + K
  ------------------------------------------------------- */

  {
    id: 1,
    name: 'Glyone Ultra Ami+K',

    category: 'Liquid Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Liquid',

    description:
      'A specialized crop nutrition formulation designed to support crop colour, quality, sweetness, and overall crop performance.',

    benefit:
      'Supports improved crop colour, quality, and sweetness.',

    benefits: [
      'Supports better crop quality.',
      'Helps improve colour development.',
      'Supports improved sweetness.',
      'Suitable for different crop nutrition programs.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '1000ml',

    image: amiK,
  },


  /* -------------------------------------------------------
     2. BRIX X3054
  ------------------------------------------------------- */

  {
    id: 2,
    name: 'Brix X3054',

    category: 'Water Soluble Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer formulated with 100% PGP Technology for efficient crop nutrition and development.',

    benefit:
      'Provides efficient water-soluble nutrition for crop development.',

    benefits: [
      '100% PGP Technology.',
      'Water soluble fertilizer.',
      'Supports efficient nutrient availability.',
      'Suitable for different crop nutrition programs.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: brix3054,
  },


  /* -------------------------------------------------------
     3. FRUT X3130
  ------------------------------------------------------- */

  {
    id: 3,
    name: 'Frut X3130',

    category: 'Water Soluble Fertilizers',

    cropType: 'Fruits',

    application: 'Drip Irrigation',

    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer formulated using 100% PGP Technology to support fruit crop nutrition and development.',

    benefit:
      'Supports healthy fruit crop development.',

    benefits: [
      '100% PGP Technology.',
      'Water soluble formulation.',
      'Supports fruit crop nutrition.',
      'Suitable for fruit-growing systems.',
    ],

    cropSuitability: [
      'Fruits',
      'Vegetables',
      'Field Crops',
    ],

    packSize: '500gm',

    image: fruit3130,
  },


  /* -------------------------------------------------------
     4. GROW X2510
  ------------------------------------------------------- */

  {
    id: 4,
    name: 'Grow X2510',

    category: 'Water Soluble Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer using 100% PGP Technology designed to support crop growth and development.',

    benefit:
      'Supports strong and consistent crop growth.',

    benefits: [
      '100% PGP Technology.',
      'Water soluble fertilizer.',
      'Supports crop growth.',
      'Helps maintain balanced crop nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: grow2510,
  },


  /* -------------------------------------------------------
     5. STRESS X505
  ------------------------------------------------------- */

  {
    id: 5,
    name: 'Stress X505',

    category: 'Water Soluble Fertilizers',

    cropType: 'General Crops',

    application: 'Foliar Application',

    productType: 'Water Soluble',

    description:
      'A water-soluble formulation using 100% PGP Technology designed to support crop performance during demanding growing conditions.',

    benefit:
      'Supports crop performance during stress conditions.',

    benefits: [
      '100% PGP Technology.',
      'Water soluble formulation.',
      'Supports crop performance.',
      'Suitable for demanding crop stages.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: stress505,
  },


  /* -------------------------------------------------------
     6. VIGORA X131218
  ------------------------------------------------------- */

  {
    id: 6,
    name: 'Vigora X131218',

    category: 'Water Soluble Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer formulated with 100% PGP Technology for balanced crop nutrition and development.',

    benefit:
      'Supports balanced crop growth and development.',

    benefits: [
      '100% PGP Technology.',
      'Water soluble fertilizer.',
      'Supports balanced nutrition.',
      'Supports overall crop development.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: vigora131218,
  },


  /* -------------------------------------------------------
     7. CALMATRIX
  ------------------------------------------------------- */

  {
    id: 7,
    name: 'Calmatrix',

    category: 'Liquid Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Liquid',

    description:
      'A calcium-based crop nutrition formulation containing Calcium Di-Hydrogen Phosphate.',

    benefit:
      'Supports plant growth and structural strength.',

    benefits: [
      'Contains Calcium Di-Hydrogen Phosphate.',
      'Supports plant structure.',
      'Supports crop growth.',
      'Provides calcium nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
    ],

    packSize: '1000ml',

    image: calmatrix,
  },


  /* -------------------------------------------------------
     8. CEL-CALIX
  ------------------------------------------------------- */

  {
    id: 8,
    name: 'Cel-Calix',

    category: 'Liquid Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Liquid',

    description:
      'A calcium-support formulation designed to provide enhanced calcium nutrition for crop growth.',

    benefit:
      'Provides additional calcium support for crops.',

    benefits: [
      '3X Calcium Support.',
      'Supports faster calcium availability.',
      'Supports stronger crop growth.',
      'Helps provide calcium nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
    ],

    packSize: '1000ml',

    image: cellCalix,
  },


  /* -------------------------------------------------------
     9. GLYONE ULTRA CA
  ------------------------------------------------------- */

  {
    id: 9,
    name: 'Glyone Ultra Ca',

    category: 'Chelated Micronutrients',

    cropType: 'General Crops',

    application: 'Foliar Application',

    productType: 'Chelated',

    description:
      'A chelated calcium formulation developed using advanced molecular technology for efficient crop nutrition.',

    benefit:
      'Provides chelated calcium nutrition for crops.',

    benefits: [
      'Chelated Calcium.',
      'Advanced molecular technology.',
      'Designed for efficient nutrient delivery.',
      'Supports crop nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
    ],

    packSize: '500gm',

    image: calciumChelate,
  },


  /* -------------------------------------------------------
     10. GLYONE ULTRA MG
  ------------------------------------------------------- */

  {
    id: 10,
    name: 'Glyone Ultra Mg',

    category: 'Chelated Micronutrients',

    cropType: 'General Crops',

    application: 'Foliar Application',

    productType: 'Chelated',

    description:
      'A chelated magnesium formulation developed using advanced molecular technology for crop nutrition.',

    benefit:
      'Provides efficient magnesium nutrition to crops.',

    benefits: [
      'Chelated Magnesium.',
      'Advanced molecular technology.',
      'Supports crop nutrition.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: magnesiumChelate,
  },


  /* -------------------------------------------------------
     11. GLYONE ULTRA MN
  ------------------------------------------------------- */

  {
    id: 11,
    name: 'Glyone Ultra Mn',

    category: 'Chelated Micronutrients',

    cropType: 'General Crops',

    application: 'Foliar Application',

    productType: 'Chelated',

    description:
      'A chelated manganese formulation designed to provide efficient manganese nutrition to crops.',

    benefit:
      'Provides chelated manganese nutrition.',

    benefits: [
      'Chelated Manganese.',
      'Advanced molecular technology.',
      'Supports crop nutrition.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: manganeseChelate,
  },


  /* -------------------------------------------------------
     12. GLYONE ULTRA ZN
  ------------------------------------------------------- */

  {
    id: 12,
    name: 'Glyone Ultra Zn',

    category: 'Chelated Micronutrients',

    cropType: 'General Crops',

    application: 'Foliar Application',

    productType: 'Chelated',

    description:
      'A chelated zinc formulation developed using advanced molecular technology for efficient crop nutrition.',

    benefit:
      'Provides efficient zinc nutrition to crops.',

    benefits: [
      'Chelated Zinc.',
      'Advanced molecular technology.',
      'Supports crop nutrition.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: zincChelate,
  },


  /* -------------------------------------------------------
     13. GLYONE ULTRA COMBI
  ------------------------------------------------------- */

  {
    id: 13,
    name: 'Glyone Ultra Combi',

    category: 'Micronutrient Blends',

    cropType: 'General Crops',

    application: 'Foliar Application',

    productType: 'Chelated',

    description:
      'A combined micronutrient formulation using advanced molecular technology for comprehensive crop nutrition.',

    benefit:
      'Provides combined micronutrient support for crops.',

    benefits: [
      'Advanced molecular technology.',
      'Combined micronutrient formulation.',
      'Supports balanced crop nutrition.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',

    image: ultraCombi,
  },


  /* -------------------------------------------------------
     14. GLYONE ULTRA ORTHOSIL
  ------------------------------------------------------- */

  {
    id: 14,
    name: 'Glyone Ultra OrthoSil',

    category: 'Liquid Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Liquid',

    description:
      'A silicon-based crop nutrition formulation containing Orthosilicic Acid (OSA) 2.0% WSL.',

    benefit:
      'Supports stronger crop structure and performance.',

    benefits: [
      'Contains Orthosilicic Acid (OSA) 2.0% WSL.',
      'Supports stronger crops.',
      'Supports crop structural development.',
      'Designed for crop nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '1000ml',

    image: orthoSil,
  },


  /* -------------------------------------------------------
     15. GLYONE ULTRA ZINC-UPS
  ------------------------------------------------------- */

  {
    id: 15,
    name: 'Glyone Ultra Zinc-ups',

    category: 'Liquid Fertilizers',

    cropType: 'General Crops',

    application: 'Drip Irrigation',

    productType: 'Liquid',

    description:
      'An advanced zinc formulation designed to support zinc nutrition, absorption, and crop performance.',

    benefit:
      'Provides advanced zinc nutrition with improved absorption.',

    benefits: [
      'Advanced zinc formulation.',
      'Supports better absorption.',
      'Supports crop performance.',
      'Provides zinc nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '1000ml',

    image: zincUp,
  },
];


/* =========================================================
   LANDSCAPE / OTHER ASSETS
========================================================= */

export const landscapeAssets = {
  hero: agri2,
  story: agri1,
};