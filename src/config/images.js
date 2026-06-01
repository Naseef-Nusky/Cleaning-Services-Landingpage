/**
 * Site images — all files live in /public and are served from the site root.
 * Add or swap files in public/, then update the paths here.
 */
export const images = {
  hero: '/hero-team.png',

  about: '/office-maintenance.png',

  care: '/deep-carpet-cleaning.png',

  services: {
    commercial: '/commercial-cleaning.png',
    residential: '/residential-cleaning.png',
    deepCarpet: '/deep-carpet-cleaning.png',
    endOfTenancy: '/move-out-deep-clean.png',
    officeMaintenance: '/office-maintenance.png',
  },

  projects: [
    {
      src: '/commercial-cleaning.png',
      alt: 'Commercial cleaning project',
      span: 'col-span-1 row-span-1',
    },
    {
      src: '/office-maintenance.png',
      alt: 'Office maintenance cleaning',
      span: 'col-span-1 row-span-2',
    },
    {
      src: '/residential-cleaning.png',
      alt: 'Residential home cleaning',
      span: 'col-span-1 row-span-1',
    },
    {
      src: '/deep-carpet-cleaning.png',
      alt: 'Deep carpet cleaning',
      span: 'col-span-1 row-span-1',
    },
    {
      src: '/move-out-deep-clean.png',
      alt: 'Move-out deep clean',
      span: 'col-span-1 row-span-1',
    },
  ],
}
