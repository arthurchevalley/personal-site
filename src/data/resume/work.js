/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * @property {boolean} OnlyYear - If only year gave.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'HES-SO Sierre & CHUV',
    position: 'PhD in Biology and Medecine',
    url: 'https://medgift.hevs.ch/wordpress/',
    startDate: '2024-04-01',
    endDate: '',
    summary: 'Development of geometric deep learning methods for Major Adverse Cardiac Events and Myocardium Viability prediction using Rubidium Imaging.',
    highlights: [],
    OnlyYear: false,
  },
  {
    name: 'CHUV Nuclear medecine',
    position: 'Medical Research Assistant Civil Duty',
    url: 'https://www.chuv.ch/fr/medecine-nucleaire/nuc-home',
    startDate: '2023-11-13',
    endDate: '2024-04-05',
    summary: 'As a part of my swiss civil duty, I\'am working in the Diagnostic Imaging and Interventional Radiology department. This work aims at implementing a 3D Bispectrum UNet for locally rotation invariant segmentation of medical data.',
    highlights: [],
    OnlyYear: false,
  },
  {
    name: 'Fondation du Levant',
    position: 'IT Heldesk Civil Duty',
    url: 'https://www.levant.ch/',
    startDate: '2023-05-01',
    endDate: '2023-10-31',
    summary: 'During half of my swiss civil duty, I worked at the IT helpdesk of the Levant Foundation.',
    highlights: [],
    OnlyYear: false,
  },
  {
    name: 'AXA',
    position: 'Data Scientist Intern',
    url: '',
    startDate: '2022-09-01',
    endDate: '2023-04-06',
    summary: 'Completed my Master Thesis in Industry working on few-shot object detection using remote sensing images.',
    highlights: [],
    OnlyYear: false,
  },
  {
    name: 'Fondation Primeroche',
    position: 'Student job in hotel service',
    url: '',
    startDate: '2017',
    endDate: '2022-08-31',
    summary: 'As a student job I worked in an retirement home, serving lunch, Cleaning and assisting the residents if needed.',
    highlights: [],
    OnlyYear: true,
  },
  {
    name: 'Villars-Ste-Croix Municipality',
    position: 'Co-Creation of an intergenerational project',
    url: '',
    startDate: '2016',
    endDate: '2017-12-01',
    summary: 'Co-Creation of a participatory project to improve Villars-Ste-Croix life quality. Multiple workshops have been organized throughout the commission to establish a few final and achievable propositions for the municipality.',
    highlights: [],
    OnlyYear: true,
  },
  {
    name: 'Festival de la Cité Lausanne',
    position: 'Volunteer Hosting artists team',
    url: '',
    startDate: '2013',
    endDate: '2018-07-18',
    summary: 'Six consecutive years I was part of the hosting team staff, taking care of the backstage and artists.',
    highlights: [],
    OnlyYear: true,
  },
];

export default work;
