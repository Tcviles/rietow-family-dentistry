// src/data/contactInfo.ts

// Define a type for the contact information for better type-safety
export interface ContactInfo {
  phone: string;
  phoneLink: string;
  email: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  payLink: string;
  contactPage: string;
}

// Export the contact information as a constant
export const contactInfo: ContactInfo = {
  phone: "317-888-7576",
  phoneLink: "tel:317-888-7576",
  email: 'info@rietowfamilydentistry.com',
  address: "1234 Smile Street, Indianapolis, IN 46201", // This seems like a placeholder, but keeping it for now
  addressLine1: '1259 N State Rd 135 E',
  addressLine2: 'Greenwood, IN 46142',
  payLink: "/pay",
  contactPage: "/contact",
};