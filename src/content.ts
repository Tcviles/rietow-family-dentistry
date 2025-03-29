// src/content.ts

const content = {
  colors: {
    darkGrey: "#999",
    lightGrey: "#DDD",
    white: "#fff",
    red: "#BD1919",
  },
  contactInfo: {
    phone: "317-888-7576",
    phoneLink: "tel:317-888-7576",
    email: "info@rietowdentistry.com",
    address: "1234 Smile Street, Indianapolis, IN 46201",
    addressLine1: "1259 N State Rd 135 E",
    addressLine2: "Greenwood, IN 46142",
    mapLink: "https://maps.google.com/?q=1234+Smile+Street+Indianapolis+IN",
    payLink: "/pay",
    contactPage: "/contact",
  },
  homePage: {
    welcomeTitle: "Welcome to Rietow Family Dentistry!",
    aboutDentistry: {
      heading: "Rietow Family Dentistry",
      description: `
        At Rietow Family Dentistry, we believe in providing high-quality, compassionate dental care for the whole family.
        Led by Dr. Joseph Rietow, our team is dedicated to creating a comfortable and welcoming environment for all patients.
        Whether you're in need of routine check-ups, advanced cosmetic procedures, or restorative treatments, we are here 
        to ensure your dental health is in great hands.

        With a focus on patient comfort, we use the latest techniques and technologies to make every visit stress-free 
        and efficient. Experience the difference with personalized care tailored to meet your needs. Book an appointment 
        today and let us take care of your smile!
      `
    }
  },
  officeHours: [
    { day: "Mon", hours: "8AM - 5PM" },
    { day: "Tues", hours: "8AM - 5PM" },
    { day: "Wed", hours: "8AM - 5PM" },
    { day: "Thurs", hours: "8AM - 5PM" },
    { day: "Fri", hours: "CLOSED" },
    { day: "Sat", hours: "CLOSED" },
    { day: "Sun", hours: "CLOSED" },
  ],
  team: {
    drJoe: {
      name: "Dr. Joe Rietow, DDS",
      clinic: "Rietow Family Dentistry",
      quote: `"As my patient, you can expect that I will help you achieve the smile that you have always wanted while using the latest technology available in dentistry."`,
      headshot: require('./media/JoeHeadshot1x1.png'),
      teamPageLink: '/',
    },
  },
  servicesPage: {
    heading: "Our Services",
    description: `
      Rietow Family Dentistry offers an honest, compassionate, and experienced approach to family dentistry. 
      Our practice in Greenwood, Indiana follows a simple philosophy: we treat patients like family while 
      delivering the highest standard of dental care.

      Our team prioritizes your health, comfort, and satisfaction. We proudly offer advanced comfort techniques — 
      including Dr. Rietow’s gentle injection methods and complimentary nitrous oxide. Dental care doesn't have to 
      be stressful — let us show you a more comfortable experience!
    `,
  },

};

export default content;
