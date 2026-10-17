// src/data/contactInfo.ts

import { routes } from './routes';

// Define a type for the contact information for better type-safety
export interface ContactInfo {
  phone: string;
  phoneLink: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  contactPage: string;
}

// Export the contact information as a constant
export const contactInfo: ContactInfo = {
  phone: "(317) 888-7576",
  phoneLink: "tel:+13178887576",
  email: 'info@rietowfamilydentistry.com',
  addressLine1: '1259 N State Rd 135 E',
  addressLine2: 'Greenwood, IN 46142',
  contactPage: routes.contact,
};
