export const routes = {
  home: '/',
  services: '/services',
  contact: '/contact',
  team: '/team',
  discount: '/discount',
  forms: '/forms',
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
