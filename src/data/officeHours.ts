// src/data/officeHours.ts

// Define a type for a single day's hours for type-safety
export interface OfficeHour {
  day: string;
  hours: string;
}

// Export the office hours data as a typed array
export const officeHours: OfficeHour[] = [
  { day: "Mon", hours: "8AM - 5PM" },
  { day: "Tues", hours: "8AM - 5PM" },
  { day: "Wed", hours: "8AM - 5PM" },
  { day: "Thurs", hours: "8AM - 5PM" },
  { day: "Fri", hours: "CLOSED" },
  { day: "Sat", hours: "CLOSED" },
  { day: "Sun", hours: "CLOSED" },
];