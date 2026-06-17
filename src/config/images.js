import logo from '../assets/logo.png'
import logoLight from '../assets/logo-2.png'
import hero from '../assets/Hero-Team Section.png'
import officeMaintenance from '../assets/Office Maintenance.png'
import officeMaintenanceAlt from '../assets/Office Maintenance11.png'
import deepCarpetCleaning from '../assets/Deep & Carpet Cleaning.png'
import moveOutDeepClean from '../assets/Move-Out Deep Clean.png'
import residentialCleaning from '../assets/Residential Cleaning.png'

/**
 * Site images — bundled from src/assets via Vite.
 */
export const images = {
  logo,
  logoLight,

  hero,

  about: officeMaintenance,

  care: deepCarpetCleaning,

  services: {
    commercial: officeMaintenance,
    residential: residentialCleaning,
    deepCarpet: deepCarpetCleaning,
    endOfTenancy: moveOutDeepClean,
    officeMaintenance,
  },

  projects: [
    {
      src: officeMaintenance,
      alt: 'Commercial cleaning project',
      span: 'col-span-1 row-span-1',
    },
    {
      src: officeMaintenanceAlt,
      alt: 'Office maintenance cleaning',
      span: 'col-span-1 row-span-2',
    },
    {
      src: residentialCleaning,
      alt: 'Residential home cleaning',
      span: 'col-span-1 row-span-1',
    },
    {
      src: deepCarpetCleaning,
      alt: 'Deep carpet cleaning',
      span: 'col-span-1 row-span-1',
    },
    {
      src: moveOutDeepClean,
      alt: 'Move-out deep clean',
      span: 'col-span-1 row-span-1',
    },
  ],
}
