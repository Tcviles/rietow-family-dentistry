// src/content.ts

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import SpaIcon from '@mui/icons-material/Spa';
import FaceIcon from '@mui/icons-material/Face';
import ConstructionIcon from '@mui/icons-material/Construction';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BiotechIcon from '@mui/icons-material/Biotech';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import BuildIcon from '@mui/icons-material/Build';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

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
    email: 'info@rietowfamilydentistry.com',
    address: "1234 Smile Street, Indianapolis, IN 46201",
    addressLine1: '1234 Dentist Way',
    addressLine2: 'Greenwood, IN 46143',
    mapLinkGoogle: 'https://www.google.com/maps/place/...',
    mapLinkApple: 'https://maps.apple.com/?address=...',
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
    intro: `
      Rietow Family Dentistry offers an honest, compassionate, and experienced approach to Family Dentistry. 
      Our office has a simple philosophy; We treat our patients like family while providing the highest standard of dental care. 
      Our dental team recognizes our patient’s health, comfort, and satisfaction as our number one priority. 
      Ask about our Comfortable Dental Injections Technique, with complimentary “Nitrous Oxide!” 
      At our dental clinic in Greenwood, IN. Your family’s trip to the dentist doesn’t have to be an unpleasant experience. 
      Never fear injections or treatment again!
    `,
    servicesContent: [
      {
        id: 'emergency',
        title: 'Emergency Care',
        icon: LocalHospitalIcon,
        services: [
          {
            title: "Emergency Care",
            id: 'emergency',
            subtitle: "Welcome Rietow Family Dentistry: Your Trusted Partner for Same-Day Emergency Care",
            icon: LocalHospitalIcon,
            buttonText: 'Call Now for Emergency Care',
            description: `
            At Dr. Joe Rietow’s Dental Clinic, we understand that dental emergencies can happen when you least expect them. 
            A sudden toothache, a broken tooth, or an injury can disrupt your day and cause anxiety. 
            That’s why we are committed to providing prompt, compassionate, and effective same-day emergency dental care.
          `,
            sections: [
              {
                type: 'list',
                title: "Why Choose Us?",
                listItems: [
                  {
                    primary: 'Immediate Attention',
                    secondary: `
                    Our team is dedicated to addressing your dental emergencies as soon as you walk through our doors. 
                    We reserve time in our schedule specifically for urgent cases, ensuring you receive the care you need without long waits.
                  `
                  },
                  {
                    primary: 'Expert Care',
                    secondary: `
                    Dr. Rietow brings years of experience and a gentle touch to every patient. 
                    Our clinic is equipped with the latest technology and techniques, 
                    allowing us to diagnose and treat your emergency efficiently and effectively.
                  `
                  },
                  {
                    primary: 'Comforting Environment',
                    secondary: `
                   We know that dental visits can be stressful, especially during emergencies. 
                   Our friendly staff and welcoming atmosphere are designed to put you at ease, 
                   ensuring you feel safe and cared for during your visit.
                  `
                  }
                ]
              },
              {
                type: 'list',
                title: "Common Dental Emergencies We Treat",
                listItems: [
                  {
                    primary: 'Toothaches',
                    secondary: 'Whether it’s a sharp pain or a dull ache, we’ll determine the cause and provide relief.',
                  },
                  {
                    primary: 'Chipped or Broken Teeth',
                    secondary: 'Accidents happen! We’ll restore your smile quickly and effectively.',
                  },
                  {
                    primary: 'Knocked-Out Teeth',
                    secondary: 'Time is of the essence. If you act fast, we can help save your tooth.',
                  },
                  {
                    primary: 'Abscessed Teeth',
                    secondary: 'These painful infections need urgent attention, and we’re here to help.',
                  },
                  {
                    primary: 'Lost Fillings or Crowns',
                    secondary: 'Don’t suffer with discomfort; we can fix it on the same day.',
                  },
                ]
              },
              {
                type: 'paragraph',
                title: 'How to Reach Us',
                content: `
                  If you’re experiencing a dental emergency, don’t hesitate! Call us immediately at (317) 888-7576 to speak with our team. 
                  We’ll guide you on the next steps and get you scheduled for your visit. 
            
                  For your convenience, we offer extended hours and weekend availability to accommodate your needs.
                `
              },
              {
                type: 'paragraph',
                title: 'Your Smile Matters',
                content: `
                  At Rietow Family Dentistry, your health and comfort are our top priorities. 
                  With our same-day emergency care, you can trust that we’ll get you back to your daily routine—and your smile—quickly.
                  
                  Don’t let a dental emergency disrupt your life; contact us today!
                  
                  We look forward to serving you and ensuring your dental health remains a priority. 
                  Remember, we’re just a call away for all your emergency needs!
                `
              }
            ]
          }
        ]
      },
      {
        id: 'routine',
        title: 'Routine Dentistry',
        icon: CleanHandsIcon,
        services: [
          {
            title: "Cleanings",
            id: "cleanings",
            subtitle: "Keep Your Smile Healthy with Routine Cleanings and X-Rays at Rietow Family Dentistry",
            icon: HealthAndSafetyIcon, // Make sure this is imported from MUI
            buttonText: "Schedule Your Cleaning",
            description: `
            At Rietow Family Dentistry, we believe that a healthy smile is the cornerstone of overall well-being. 
            Our commitment to providing exceptional dental care includes routine cleanings and X-rays, 
            essential components of maintaining your oral health.
          `,
            sections: [
              {
                type: "list",
                title: "Why Choose Routine Cleanings and X-Rays?",
                listItems: [
                  {
                    primary: "Preventive Care",
                    secondary: `
                    Regular dental cleanings help remove plaque and tartar buildup that can lead to cavities and gum disease. 
                    When combined with routine X-rays, we can identify issues early on, ensuring you receive the necessary care 
                    before problems escalate.
                  `,
                  },
                  {
                    primary: "Comprehensive Assessments",
                    secondary: `
                    X-rays give us a detailed view of your oral health, allowing us to spot potential concerns like cavities, 
                    impacted teeth, and bone loss that might not be visible during a regular examination.
                  `,
                  },
                  {
                    primary: "Expert Care",
                    secondary: `
                    Led by Dr. Joe Rietow, our experienced team is dedicated to providing gentle, thorough care. 
                    We utilize the latest technology to ensure both cleanings and X-rays are efficient, effective, and comfortable.
                  `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Visit",
                listItems: [
                  {
                    primary: "Friendly Atmosphere",
                    secondary: "From the moment you arrive, our welcoming staff will make you feel at ease in our clinic.",
                  },
                  {
                    primary: "Thorough Examination",
                    secondary: "Dr. Rietow will conduct a detailed examination of your teeth and gums, assessing your overall oral health.",
                  },
                  {
                    primary: "X-Ray Evaluation",
                    secondary: "If needed, we’ll take digital X-rays, which are quick and safe, providing valuable insights into your dental health.",
                  },
                  {
                    primary: "Professional Cleaning",
                    secondary: "Our skilled hygienists will remove plaque and tartar and polish your teeth for a fresh, clean feeling.",
                  },
                  {
                    primary: "Personalized Care",
                    secondary: "We’ll offer tailored advice on brushing, flossing, and diet to help maintain your oral health between visits.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Family-Friendly Dental Care for All Ages",
                content: `
                At Rietow Family Dentistry, we pride ourselves on offering family-friendly care. 
                Whether it’s your child’s first cleaning or routine care for seniors, 
                our team is here to ensure a positive and comfortable experience for every member of your family.
              `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Routine Cleaning and X-Ray Today!",
                content: `
                Taking proactive steps to protect your dental health has never been easier! 
                Call us at (317) 888-7576 to schedule your routine cleaning and X-ray appointment. 
        
                We offer flexible scheduling options to fit your busy life, ensuring you never miss out on essential dental care.
        
                At Rietow Family Dentistry, we are dedicated to helping you achieve and maintain a healthy, beautiful smile. 
                With our routine cleanings and X-rays, you can trust that your dental health is in expert hands. 
                We look forward to welcoming you to our practice soon!
              `,
              },
            ],
          },
          {
            title: "Scaling/Root Planing (Deep Cleanings)",
            id: "scaling-root-planing",
            subtitle: "Achieve Optimal Gum Health with Scaling and Root Planing at Rietow Family Dentistry",
            icon: SpaIcon, // Swap for another if you want — this one suggests wellness/calm
            buttonText: "Book a Deep Cleaning Appointment",
            description: `
            At Rietow Family Dentistry, we understand that maintaining healthy gums is just as important as caring for your teeth. 
            If you’re experiencing signs of gum disease, our scaling and root planing services can help restore your oral health and keep your smile bright.
          `,
            sections: [
              {
                type: "paragraph",
                title: "What is Scaling and Root Planing?",
                content: `
                Scaling and root planing is a deep-cleaning procedure designed to treat gum disease by removing plaque and tartar buildup from below the gumline. 
                This thorough cleaning helps eliminate harmful bacteria, reduces inflammation, and promotes healthy gums.
              `,
              },
              {
                type: "list",
                title: "Why Choose Scaling and Root Planing?",
                listItems: [
                  {
                    primary: "Effective Treatment for Gum Disease",
                    secondary: `
                    If you’re noticing symptoms like swollen or bleeding gums, persistent bad breath, or gum recession, 
                    scaling and root planing can be an effective solution to halt the progression of gum disease.
                  `,
                  },
                  {
                    primary: "Improved Gum Health",
                    secondary: `
                    By thoroughly cleaning the roots of your teeth, we can help your gums heal and reattach to the tooth surface, 
                    improving overall gum health and stability.
                  `,
                  },
                  {
                    primary: "Personalized Care",
                    secondary: `
                    Our experienced team, led by Dr. Joe Rietow, tailors each treatment plan to your specific needs, 
                    ensuring you receive the best care for your individual situation.
                  `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Appointment",
                listItems: [
                  {
                    primary: "Comprehensive Examination",
                    secondary: "Dr. Rietow will examine your gums and teeth to assess the severity of your condition.",
                  },
                  {
                    primary: "Treatment Overview",
                    secondary: "We’ll explain the scaling and root planing process step by step so you feel comfortable and informed.",
                  },
                  {
                    primary: "Gentle Deep Cleaning",
                    secondary: "Our hygienists will carefully remove plaque and tartar from beneath the gumline to promote healing.",
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: "We’ll provide personalized aftercare instructions to help maintain your gum health long-term.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "A Commitment to Your Oral Health",
                content: `
                At Rietow Family Dentistry, we prioritize your comfort and well-being. 
                Our team is dedicated to providing gentle, compassionate care throughout your scaling and root planing experience. 
                We want to ensure that you leave our office feeling confident in your oral health journey.
              `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Scaling and Root Planing Appointment Today!",
                content: `
                If you’re experiencing signs of gum disease, don’t wait! 
                Call us at (317) 888-7576 to schedule your appointment for scaling and root planing. 
                Taking proactive steps toward your gum health is essential, and our team is here to support you every step of the way.
        
                At Rietow Family Dentistry, we’re committed to helping you achieve and maintain optimal oral health. 
                With our scaling and root planing services, you can take control of your gum health and enjoy a brighter, healthier smile. 
                We look forward to welcoming you to our practice!
              `,
              },
            ],
          }
        ]
      },
      {
        id: 'general',
        title: 'General Dentistry',
        icon: ConstructionIcon,
        services: [
          {
            title: "Resin Fillings (White Fillings)",
            id: "resin-fillings",
            subtitle: "Restore Your Smile with Resin Fillings at Rietow Family Dentistry",
            icon: ConstructionIcon, // Suggests repair/restoration — change if you'd prefer a different vibe
            buttonText: "Schedule a Filling Appointment",
            description: `
          At Rietow Family Dentistry, we understand that dental cavities can be concerning, 
          but restoring your smile shouldn’t be! Our resin fillings offer a safe, effective, 
          and aesthetically pleasing solution for cavities, ensuring your teeth remain healthy and beautiful.
        `,
            sections: [
              {
                type: "list",
                title: "Why Choose Resin Fillings?",
                listItems: [
                  {
                    primary: "Natural Appearance",
                    secondary: `
                  Resin fillings blend seamlessly with your natural tooth color — no metal, no dark spots, just a clean, natural look.
                `,
                  },
                  {
                    primary: "Durability and Strength",
                    secondary: `
                  Our high-quality composite materials are strong, long-lasting, and designed to handle everyday chewing forces.
                `,
                  },
                  {
                    primary: "Minimally Invasive",
                    secondary: `
                  Resin fillings typically require less drilling than traditional options, preserving more of your natural tooth structure.
                `,
                  },
                  {
                    primary: "Versatile Applications",
                    secondary: `
                  In addition to treating cavities, resin fillings can repair chips and even enhance your smile cosmetically.
                `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Visit",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                  Dr. Rietow will assess your teeth and walk you through the best treatment options for your smile and comfort.
                `,
                  },
                  {
                    primary: "Painless Procedure",
                    secondary: `
                  After numbing the area, we’ll remove decay and apply the resin in layers, curing each one for strength and precision.
                `,
                  },
                  {
                    primary: "Natural Finish",
                    secondary: `
                  The filling is shaped and polished to blend with your tooth and maintain a comfortable bite.
                `,
                  },
                  {
                    primary: "Aftercare Guidance",
                    secondary: `
                  We’ll give you easy tips to care for your filling and keep your teeth healthy long-term.
                `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "A Commitment to Your Comfort and Health",
                content: `
              At Rietow Family Dentistry, your comfort is our priority. 
              We create a welcoming and stress-free environment, and our team provides top-quality care tailored to your needs.
            `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Appointment for Resin Fillings Today!",
                content: `
              Don’t let cavities compromise your smile! Call us at (317) 888-7576 to schedule your appointment today.
      
              With our expert team and natural-looking resin fillings, 
              we’ll help restore both the function and beauty of your teeth. We look forward to seeing you!
            `,
              },
            ],
          },
          {
            title: "Crowns",
            id: "crowns",
            subtitle: "Restore Your Smile with Durable Crowns at Rietow Family Dentistry",
            icon: VolunteerActivismIcon, // Symbolic of support/protection — feel free to switch it!
            buttonText: "Schedule a Crown Consultation",
            description: `
          At Rietow Family Dentistry, we understand that your smile is important to you. 
          If you have a damaged or compromised tooth, our custom crowns can provide the strength and support needed 
          to restore both function and aesthetics—giving you the confidence to smile again.
        `,
            sections: [
              {
                type: "list",
                title: "Why Choose Crowns?",
                listItems: [
                  {
                    primary: "Enhanced Protection",
                    secondary: `
                  Crowns fully cover and protect damaged teeth, preventing further decay or wear 
                  and restoring natural function so you can eat and speak comfortably.
                `,
                  },
                  {
                    primary: "Natural Appearance",
                    secondary: `
                  Made from high-quality materials, our crowns are crafted to match the color and shape of your natural teeth 
                  for a seamless, beautiful finish.
                `,
                  },
                  {
                    primary: "Versatile Solutions",
                    secondary: `
                  Crowns can be used to:
                  - Protect a weakened tooth after a root canal
                  - Cover large fillings with insufficient natural tooth remaining
                  - Restore broken or severely worn teeth
                  - Improve appearance of misshaped or discolored teeth
                `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Crown Procedure",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                  Dr. Rietow will examine your tooth and review treatment options with you, 
                  ensuring you feel informed and comfortable moving forward.
                `,
                  },
                  {
                    primary: "Custom Fit",
                    secondary: `
                  We take precise impressions for a crown that fits perfectly. 
                  We offer both traditional and same-day crowns to suit your needs.
                `,
                  },
                  {
                    primary: "Temporary Protection",
                    secondary: `
                  If your crown is being fabricated in a lab, you’ll receive a temporary crown to protect your tooth in the meantime.
                `,
                  },
                  {
                    primary: "Placement of the Crown",
                    secondary: `
                  Once ready, we’ll make sure the crown fits comfortably and securely before permanently bonding it in place.
                `,
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: `
                  You’ll receive aftercare tips to help protect your crown and maintain excellent oral health.
                `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
              At Rietow Family Dentistry, we’re dedicated to ensuring a stress-free experience with personalized care 
              that meets your comfort level and expectations. You’ll feel supported at every step of your treatment.
            `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Crown Consultation Today!",
                content: `
              Don’t let damaged teeth affect your confidence. 
              Call us at (317) 888-7576 to schedule a consultation for crowns.
      
              Our friendly and experienced team is ready to help you restore your smile with long-lasting, natural-looking solutions. 
              Let us bring strength and beauty back to your smile!
            `,
              },
            ],
          },
          {
            title: "Bridges",
            id: "bridges",
            subtitle: "Restore Your Smile with Custom Bridges at Rietow Family Dentistry",
            icon: BiotechIcon, // Represents structure/connection — swap if you prefer something else
            buttonText: "Schedule a Bridge Consultation",
            description: `
              At Rietow Family Dentistry, we understand that missing teeth can affect not only your smile 
              but also your confidence and overall dental health. 
              Our custom bridges are designed to fill gaps left by missing teeth, 
              restoring both function and aesthetics to your smile.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Dental Bridges?",
                listItems: [
                  {
                    primary: "Effective Tooth Replacement",
                    secondary: `
                      Bridges replace one or more missing teeth using artificial teeth 
                      anchored to your natural teeth for support and stability.
                    `,
                  },
                  {
                    primary: "Improved Oral Health",
                    secondary: `
                      Filling gaps helps prevent neighboring teeth from shifting out of position, 
                      reducing the risk of misalignment and uneven wear.
                    `,
                  },
                  {
                    primary: "Natural Appearance",
                    secondary: `
                      Crafted from high-quality materials, our bridges blend seamlessly with your natural teeth 
                      for a confident, natural-looking smile.
                    `,
                  },
                  {
                    primary: "Enhanced Functionality",
                    secondary: `
                      A bridge restores your ability to eat, speak, and chew comfortably, 
                      improving your daily quality of life.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Bridge Procedure",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                      Dr. Rietow will assess your oral health and help you understand your treatment options for bridges.
                    `,
                  },
                  {
                    primary: "Custom Design",
                    secondary: `
                      We’ll take detailed impressions to create a bridge that fits your mouth comfortably and looks natural.
                    `,
                  },
                  {
                    primary: "Preparation of Anchor Teeth",
                    secondary: `
                      The adjacent (abutment) teeth are reshaped to support the bridge. 
                      This is done gently and with your comfort in mind.
                    `,
                  },
                  {
                    primary: "Temporary Bridge",
                    secondary: `
                      While your permanent bridge is being crafted, a temporary version will protect your teeth and maintain your smile.
                    `,
                  },
                  {
                    primary: "Final Placement",
                    secondary: `
                      Your permanent bridge is placed and adjusted to ensure a precise fit and natural function.
                    `,
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: `
                      We’ll give you care tips to keep your bridge in excellent shape and your smile healthy.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Commitment",
                content: `
                  At Rietow Family Dentistry, we prioritize your comfort and satisfaction. 
                  Our compassionate team delivers personalized care in a supportive and stress-free environment.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Bridge Consultation Today!",
                content: `
                  Don’t let missing teeth keep you from enjoying life. 
                  Call us at (317) 888-7576 to schedule your consultation for a custom dental bridge.
          
                  We’re here to help you restore your smile with confidence and lasting comfort!
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'pediatrics',
        title: 'Pediatrics',
        icon: ChildCareIcon,
        services: [
          {
            title: "Pediatrics",
            id: "pediatrics",
            subtitle: "Gentle Pediatric Dentistry at Rietow Family Dentistry: Caring for Your Child’s Smile",
            icon: ChildCareIcon, // already in use in your imports
            buttonText: "Schedule a Pediatric Visit",
            description: `
              At Rietow Family Dentistry, we understand that a positive dental experience is crucial for your child’s lifelong oral health. 
              Our pediatric dentistry services are designed to provide a friendly, nurturing environment where kids can feel safe 
              and comfortable while receiving the care they need.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Pediatric Dentistry?",
                listItems: [
                  {
                    primary: "Specialized Care for Growing Smiles",
                    secondary: `
                      Children have unique dental needs as their teeth and jaws develop. 
                      Our team is trained in pediatric dentistry, ensuring we provide age-appropriate care 
                      that promotes healthy growth and development.
                    `,
                  },
                  {
                    primary: "Building Positive Associations",
                    secondary: `
                      We strive to make dental visits fun and stress-free, helping your child develop a positive attitude toward oral health. 
                      Our friendly staff takes the time to explain procedures in a way that kids can understand, turning potential anxiety into excitement.
                    `,
                  },
                  {
                    primary: "Preventive Focus",
                    secondary: `
                      Early dental visits are key to preventing cavities and other dental issues. 
                      We offer comprehensive examinations, cleanings, and education on proper oral hygiene habits 
                      to set your child up for a lifetime of healthy smiles.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Child’s Visit",
                listItems: [
                  {
                    primary: "Warm Welcome",
                    secondary: "From the moment you arrive, our friendly team will greet your child with a smile, ensuring they feel at ease.",
                  },
                  {
                    primary: "Comprehensive Examination",
                    secondary: "Dr. Joe Rietow will gently examine your child’s teeth, gums, and overall oral health.",
                  },
                  {
                    primary: "Fun and Engaging Education",
                    secondary: "We teach the importance of dental hygiene with interactive, kid-friendly explanations.",
                  },
                  {
                    primary: "Gentle Cleanings",
                    secondary: "Our hygienists perform thorough but gentle cleanings, making sure your child is comfortable throughout.",
                  },
                  {
                    primary: "Personalized Care Plans",
                    secondary: "We create customized care plans including preventive treatments and at-home hygiene tips.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Family-Friendly Environment",
                content: `
                  At Rietow Family Dentistry, we pride ourselves on providing a family-friendly atmosphere where children can thrive. 
                  Our team is dedicated to making dental visits enjoyable for kids of all ages, from toddlers to teenagers.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Child’s Appointment Today!",
                content: `
                  Ensure your child’s dental health is in expert hands! 
                  Call us at (317) 888-7576 to schedule their appointment for pediatric dentistry. 
          
                  We offer flexible scheduling options to accommodate your family’s busy lifestyle, 
                  making it easy to prioritize your child’s oral health.
          
                  At Rietow Family Dentistry, we’re committed to helping your child achieve and maintain a healthy, happy smile. 
                  With our gentle pediatric dentistry services, your child will learn to love their dental visits and embrace good oral hygiene habits. 
                  We can’t wait to welcome your family to our practice!
                `,
              },
            ],
          },
        ]
      },
      {
        id: 'oralSurgery',
        title: 'Oral Surgery',
        icon: ScienceIcon,
        services: [
          {
            title: "Extractions",
            id: "extractions",
            subtitle: "Expert Tooth Extractions at Rietow Family Dentistry",
            icon: ScienceIcon, // Suggests precision and surgical care — feel free to change
            buttonText: "Schedule an Extraction Consultation",
            description: `
              At Rietow Family Dentistry, we understand that sometimes, a tooth extraction may be necessary for your overall oral health. 
              Whether it’s due to severe decay, overcrowding, or infection, our compassionate team is here to provide safe, gentle, 
              and effective extraction services.
            `,
            sections: [
              {
                type: "list",
                title: "Why Might You Need a Tooth Extraction?",
                listItems: [
                  {
                    primary: "Severe Decay or Damage",
                    secondary: `
                      When a tooth is damaged beyond repair, extraction may prevent complications 
                      and protect surrounding teeth and gums.
                    `,
                  },
                  {
                    primary: "Overcrowding",
                    secondary: `
                      Extractions can make room in your mouth to support orthodontic treatment 
                      or improve overall bite function.
                    `,
                  },
                  {
                    primary: "Impacted Teeth",
                    secondary: `
                      Wisdom teeth are often impacted, causing pain, infection, or crowding. 
                      Removing them can prevent further dental problems.
                    `,
                  },
                  {
                    primary: "Infection",
                    secondary: `
                      If a tooth infection can’t be treated with a root canal, 
                      extraction is often necessary to prevent it from spreading.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Extraction",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: "Dr. Rietow will examine your teeth and medical history to determine if extraction is the best option.",
                  },
                  {
                    primary: "Personalized Care Plan",
                    secondary: "We’ll explain the entire process, answer your questions, and ensure you feel confident and informed.",
                  },
                  {
                    primary: "Gentle Procedure",
                    secondary: "Our team uses advanced techniques and anesthesia to ensure your comfort throughout the extraction.",
                  },
                  {
                    primary: "Post-Extraction Instructions",
                    secondary: "You'll receive clear aftercare steps and guidance for managing recovery and planning for any future tooth replacement.",
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: "We'll check in to ensure healing is on track and help with any questions or concerns after your visit.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we provide a calm, supportive setting so you feel comfortable and cared for. 
                  Our team is here to make your experience as smooth and stress-free as possible.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Extraction Consultation Today!",
                content: `
                  Think you may need a tooth extracted? Call us at (317) 888-7576 to schedule your consultation.
          
                  Our friendly team is here to help you make informed decisions about your dental care and get back to smiling with confidence!
                `,
              },
            ],
          },
          {
            title: "Implants",
            id: "implants",
            subtitle: "Transform Your Smile with Dental Implants at Rietow Family Dentistry",
            icon: HealthAndSafetyIcon, // Suggests long-term stability and medical reliability — feel free to switch
            buttonText: "Schedule a Dental Implant Consultation",
            description: `
              At Rietow Family Dentistry, we believe that everyone deserves a confident and complete smile. 
              If you’re dealing with missing teeth, our dental implant services offer a durable and natural-looking solution 
              to restore both function and aesthetics to your smile.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Dental Implants?",
                listItems: [
                  {
                    primary: "Permanent Solution",
                    secondary: `
                      Implants fuse with your jawbone, offering unmatched stability and longevity—just like a natural tooth root.
                    `,
                  },
                  {
                    primary: "Natural Appearance",
                    secondary: `
                      Our custom-crafted crowns blend perfectly with your other teeth so you can smile, eat, and speak confidently.
                    `,
                  },
                  {
                    primary: "Improved Oral Health",
                    secondary: `
                      Implants help preserve bone structure, prevent shifting of adjacent teeth, 
                      and support long-term oral health.
                    `,
                  },
                  {
                    primary: "Enhanced Functionality",
                    secondary: `
                      Enjoy your favorite foods again with full chewing ability and clarity of speech.
                      Implants restore both strength and comfort.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Implant Procedure",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                      Dr. Rietow will examine your dental health and discuss whether implants are right for you, 
                      answering all of your questions and outlining next steps.
                    `,
                  },
                  {
                    primary: "Personalized Treatment Plan",
                    secondary: `
                      Every patient is different—we’ll design a plan that fits your specific smile, 
                      including any prep work needed before implant placement.
                    `,
                  },
                  {
                    primary: "Implant Placement",
                    secondary: `
                      A titanium post is carefully placed into the jawbone. 
                      We use modern techniques to make this as smooth and comfortable as possible.
                    `,
                  },
                  {
                    primary: "Healing Period",
                    secondary: `
                      You'll heal over a few months while the implant fuses with your jawbone. 
                      We'll guide you with simple aftercare to ensure successful osseointegration.
                    `,
                  },
                  {
                    primary: "Crown Placement",
                    secondary: `
                      Once healed, we’ll design and attach a crown that looks and functions like a natural tooth—completing your new smile.
                    `,
                  },
                  {
                    primary: "Ongoing Care",
                    secondary: `
                      With regular dental visits and great hygiene, your implant can last for decades. 
                      We're here for check-ups and maintenance whenever you need.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Commitment",
                content: `
                  We know dental surgery can feel intimidating, but at Rietow Family Dentistry, 
                  we provide a compassionate, welcoming space and personalized care to help you feel confident throughout your entire experience.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Dental Implant Consultation Today!",
                content: `
                  Don’t let missing teeth affect your confidence or health. 
                  Call us at (317) 888-7576 to schedule your implant consultation today.
          
                  Let us help you reclaim your smile with a solution that’s built to last.
                `,
              },
            ],
          },
          {
            title: "Bone Grafting",
            id: "bone-grafting",
            subtitle: "Restore Your Smile with Bone Grafting at Rietow Family Dentistry",
            icon: BiotechIcon,
            buttonText: "Schedule Your Bone Graft Consultation",
            description: `
              At Rietow Family Dentistry, we understand that a healthy foundation is essential for a beautiful smile. 
              If you’ve experienced tooth loss or significant bone loss in your jaw, our bone grafting procedures can help rebuild 
              and restore the support your teeth need. With our skilled team and advanced techniques, we’re here to guide you 
              on your journey to optimal oral health.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What is Bone Grafting?",
                content: `
                  **A Vital Foundation:** Bone grafting is a surgical procedure designed to create a solid base for dental implants 
                  or to support existing teeth. It involves transplanting bone tissue to the jawbone, encouraging new bone growth 
                  and enhancing its strength.
          
                  **Types of Bone Grafts:**
                  - **Autografts:** Using bone from your own body.
                  - **Allografts:** Using donor bone from a tissue bank.
                  - **Xenografts:** Using bone from animal sources, typically processed to ensure safety.
                  - **Synthetic Grafts:** Using biocompatible materials to stimulate bone growth.
                `,
              },
              {
                type: "list",
                title: "Benefits of Bone Grafting",
                listItems: [
                  {
                    primary: "Supports Dental Implants",
                    secondary: "Helps create sufficient bone density for secure and successful implant placement.",
                  },
                  {
                    primary: "Restores Jaw Structure",
                    secondary: "Improves jawbone shape and density, enhancing facial aesthetics.",
                  },
                  {
                    primary: "Prevents Further Bone Loss",
                    secondary: "Strengthens the jaw and helps prevent ongoing bone deterioration.",
                  },
                  {
                    primary: "Improves Oral Function",
                    secondary: "Enables better chewing, speaking, and long-term dental support.",
                  },
                  {
                    primary: "Long-Term Solution",
                    secondary: "Provides a stable foundation for future dental treatments and overall oral health.",
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During the Bone Grafting Process",
                listItems: [
                  {
                    primary: "Consultation",
                    secondary: "Dr. Joe Rietow will evaluate your needs and determine if bone grafting is appropriate for you.",
                  },
                  {
                    primary: "Treatment Planning",
                    secondary: "We’ll tailor a treatment plan specific to your jaw structure and dental goals.",
                  },
                  {
                    primary: "Procedure",
                    secondary: "Performed under local anesthesia or sedation; graft material is placed where needed in your jawbone.",
                  },
                  {
                    primary: "Healing and Recovery",
                    secondary: "Most patients return to normal activities within a few days; we'll guide your healing every step.",
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: "We’ll monitor integration and healing with regular visits to ensure long-term success.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we are committed to providing compassionate care in a welcoming environment. 
                  Our experienced team is here to support you every step of the way, ensuring you feel comfortable and informed 
                  throughout your treatment.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Bone Grafting Today!",
                content: `
                  If you’re ready to restore your smile and enhance your oral health with bone grafting, 
                  call us at (317) 888-7576 to schedule your consultation at Rietow Family Dentistry. 
                  Let us help you achieve a strong foundation for a beautiful smile!
          
                  At Rietow Family Dentistry, we’re dedicated to providing high-quality solutions tailored to your individual needs. 
                  With our bone grafting services, you can take an important step toward restoring your smile and confidence. 
                  We look forward to welcoming you to our practice!
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'prosthetics',
        title: 'Prosthetics',
        icon: BuildIcon,
        services: [
          {
            title: "Removable Partial Dentures",
            id: "partial-dentures",
            subtitle: "Restore Your Smile with Removable Partial Dentures at Rietow Family Dentistry",
            icon: PsychologyAltIcon, // Represents flexibility/adaptability — feel free to update
            buttonText: "Schedule a Denture Consultation",
            description: `
              At Rietow Family Dentistry, we understand that missing teeth can impact not just your smile, 
              but your confidence and overall quality of life. 
              Our removable partial dentures offer a flexible, effective solution to restore function and aesthetics, 
              helping you enjoy your favorite foods and speak clearly again.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Removable Partial Dentures?",
                listItems: [
                  {
                    primary: "Custom Fit and Comfort",
                    secondary: `
                      Designed just for you, our partial dentures fit securely and comfortably. 
                      Precise impressions ensure a natural feel.
                    `,
                  },
                  {
                    primary: "Improved Appearance",
                    secondary: `
                      Partial dentures fill in gaps from missing teeth, restoring the symmetry and confidence in your smile.
                    `,
                  },
                  {
                    primary: "Enhanced Functionality",
                    secondary: `
                      With restored chewing and speaking ability, you can enjoy meals and conversations again with ease.
                    `,
                  },
                  {
                    primary: "Convenient and Versatile",
                    secondary: `
                      Easy to remove, clean, and adjust as your needs change. Partial dentures offer flexible, ongoing support.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Partial Denture Process",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                      Dr. Rietow will assess your oral health and help you explore treatment options, 
                      making sure you feel informed and supported.
                    `,
                  },
                  {
                    primary: "Custom Design",
                    secondary: `
                      We’ll take detailed impressions and match materials to your natural teeth for a seamless, functional result.
                    `,
                  },
                  {
                    primary: "Fitting and Adjustments",
                    secondary: `
                      After fitting your dentures, we’ll make sure they feel just right and work well for your lifestyle.
                    `,
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: `
                      We'll guide you on caring for your dentures so they stay clean, comfortable, and long-lasting.
                    `,
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: `
                      We’ll schedule check-ins to monitor the fit and make adjustments as needed to keep you smiling comfortably.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Commitment",
                content: `
                  At Rietow Family Dentistry, we create a calm and supportive space where your care is tailored to your needs. 
                  Our experienced team is here to make sure your denture experience is smooth, comfortable, and rewarding.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Removable Partial Dentures Today!",
                content: `
                  Don’t let missing teeth limit your lifestyle. 
                  Call us at (317) 888-7576 to schedule your denture consultation today.
          
                  Our team is here to help you regain a confident smile and get back to doing the things you love.
                `,
              },
            ],
          },
          {
            title: "Complete Dentures",
            id: "complete-dentures",
            subtitle: "Rediscover Your Smile with Complete Dentures at Rietow Family Dentistry",
            icon: VolunteerActivismIcon, // Symbolizes care and renewal – feel free to update
            buttonText: "Schedule a Denture Consultation",
            description: `
              At Rietow Family Dentistry, we understand that losing all of your natural teeth can be a significant life change, 
              affecting not just your smile but also your confidence and overall quality of life. 
              Our complete dentures are designed to restore function and aesthetics, 
              helping you enjoy everyday activities like eating and speaking with ease.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Complete Dentures?",
                listItems: [
                  {
                    primary: "Comprehensive Restoration",
                    secondary: `
                      Complete dentures replace all missing teeth, providing a full, natural-looking smile 
                      that can restore your confidence and appearance.
                    `,
                  },
                  {
                    primary: "Custom Fit and Comfort",
                    secondary: `
                      Designed using precise measurements and high-quality materials, 
                      our dentures are built for long-term comfort and security.
                    `,
                  },
                  {
                    primary: "Enhanced Functionality",
                    secondary: `
                      Enjoy your favorite foods again and speak with clarity. 
                      Our dentures are optimized for chewing efficiency and oral function.
                    `,
                  },
                  {
                    primary: "Improved Quality of Life",
                    secondary: `
                      A restored smile makes it easier to eat, speak, socialize, and feel confident in your everyday life.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Complete Denture Process",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                      Dr. Rietow will review your oral health, medical history, and expectations 
                      to determine if complete dentures are the best solution.
                    `,
                  },
                  {
                    primary: "Personalized Treatment Plan",
                    secondary: `
                      We'll create a custom plan and take precise impressions to ensure your dentures fit comfortably and naturally.
                    `,
                  },
                  {
                    primary: "Fitting and Adjustments",
                    secondary: `
                      After crafting your dentures, we’ll make sure they’re aligned, functional, 
                      and comfortable—adjusting as needed.
                    `,
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: `
                      You'll receive guidance on cleaning, storage, and daily care to keep your dentures in excellent condition.
                    `,
                  },
                  {
                    primary: "Follow-Up Appointments",
                    secondary: `
                      We’ll check in regularly to ensure your dentures continue to fit and function perfectly over time.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we believe in compassionate, patient-centered care. 
                  Our friendly team is here to make your denture journey smooth and stress-free.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Complete Dentures Today!",
                content: `
                  Don’t let missing teeth keep you from enjoying life. 
                  Call us at (317) 888-7576 to book your complete denture consultation today.
          
                  Let us help you rediscover the power of a full, confident smile.
                `,
              },
            ],
          },
          {
            title: "Snap-In Dentures (Overdentures)",
            id: "overdentures",
            subtitle: "Experience the Benefits of Overdentures at Rietow Family Dentistry",
            icon: ConstructionIcon, // Suggests structural support – feel free to swap
            buttonText: "Schedule an Overdenture Consultation",
            description: `
              At Rietow Family Dentistry, we understand that transitioning from traditional dentures to something more stable 
              can significantly enhance your comfort and confidence. 
              Our overdentures are a cutting-edge solution designed to provide you with the best of both worlds: 
              the security of dental implants and the convenience of removable dentures.
            `,
            sections: [
              {
                type: "list",
                title: "What Are Overdentures?",
                listItems: [
                  {
                    primary: "Enhanced Stability",
                    secondary: `
                      Overdentures fit securely over implants, drastically reducing movement and providing a stable, confident bite.
                    `,
                  },
                  {
                    primary: "Natural Feel",
                    secondary: `
                      With a design that mimics natural teeth, overdentures offer improved chewing, speaking, and aesthetics.
                    `,
                  },
                  {
                    primary: "Preservation of Jawbone",
                    secondary: `
                      The implant foundation helps stimulate bone and prevent bone loss, supporting long-term oral health.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "Why Choose Overdentures?",
                listItems: [
                  {
                    primary: "Custom Fit and Comfort",
                    secondary: `
                      We craft overdentures that are uniquely fitted to your anatomy, maximizing comfort and minimizing irritation.
                    `,
                  },
                  {
                    primary: "Improved Quality of Life",
                    secondary: `
                      Enjoy your favorite foods and smile confidently in any setting with dentures that stay in place.
                    `,
                  },
                  {
                    primary: "Easy Maintenance",
                    secondary: `
                      Snap-in design allows for simple removal and cleaning—giving you the best of both stability and convenience.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Overdenture Process",
                listItems: [
                  {
                    primary: "Comprehensive Consultation",
                    secondary: `
                      Dr. Rietow will examine your oral health and walk you through your treatment options and goals.
                    `,
                  },
                  {
                    primary: "Custom Treatment Plan",
                    secondary: `
                      We'll build a personalized plan for implant placement and denture design that suits your specific needs.
                    `,
                  },
                  {
                    primary: "Implant Placement",
                    secondary: `
                      We carefully place the implants using advanced technology, ensuring safety, comfort, and precision.
                    `,
                  },
                  {
                    primary: "Denture Fitting",
                    secondary: `
                      Once healed, we’ll fit your overdentures and make adjustments for the perfect fit and feel.
                    `,
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: `
                      You’ll receive detailed care instructions to help you maintain your new smile for years to come.
                    `,
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: `
                      We’ll check in regularly to monitor your comfort and make any necessary adjustments to your fit.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Commitment",
                content: `
                  We take pride in delivering care that’s not only high quality but also highly compassionate. 
                  Our goal is to help you feel confident, comfortable, and supported at every step.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Overdentures Today!",
                content: `
                  Don’t let slipping dentures limit your lifestyle! 
                  Call us at (317) 888-7576 to book your overdenture consultation today.
          
                  Discover the freedom and confidence that comes with a stable, secure smile.
                `,
              },
            ],
          },
          {
            title: "Screw-In Dentures (All-on-4 / All-on-6)",
            id: "screw-in-dentures",
            subtitle: "Discover the Benefits of Screw-Retained Dentures at Rietow Family Dentistry",
            icon: BiotechIcon, // Suggests precision + implant tech — feel free to swap
            buttonText: "Schedule a Screw-Retained Denture Consultation",
            description: `
              At Rietow Family Dentistry, we believe everyone deserves a comfortable and confident smile. 
              If you’re considering options for tooth replacement, our screw-retained dentures offer a stable and secure solution 
              that combines the functionality of dental implants with the aesthetics of traditional dentures.
            `,
            sections: [
              {
                type: "list",
                title: "What Are Screw-Retained Dentures?",
                listItems: [
                  {
                    primary: "Stability and Security",
                    secondary: `
                      Anchored to dental implants, these dentures won’t slip, shift, or fall out—giving you complete peace of mind.
                    `,
                  },
                  {
                    primary: "Natural Feel",
                    secondary: `
                      Designed to closely mimic your natural teeth, these dentures feel and function like the real thing.
                    `,
                  },
                  {
                    primary: "Easier Maintenance",
                    secondary: `
                      Easily removed by your dental provider for deep cleaning, screw-retained dentures offer optimal hygiene and care.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "Why Choose Screw-Retained Dentures?",
                listItems: [
                  {
                    primary: "Custom Fit",
                    secondary: `
                      We use precise measurements to create dentures tailored to your bite and facial structure for optimal comfort.
                    `,
                  },
                  {
                    primary: "Bone Preservation",
                    secondary: `
                      Dental implants help preserve jawbone structure, preventing the facial sagging often associated with missing teeth.
                    `,
                  },
                  {
                    primary: "Improved Quality of Life",
                    secondary: `
                      Speak, laugh, and eat confidently—no adhesives, no slipping, no hassle.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Screw-Retained Denture Process",
                listItems: [
                  {
                    primary: "Initial Consultation",
                    secondary: `
                      Dr. Rietow will assess your oral health and talk through your goals and expectations.
                    `,
                  },
                  {
                    primary: "Personalized Treatment Plan",
                    secondary: `
                      You'll receive a fully customized plan including implant placement and denture fabrication tailored to you.
                    `,
                  },
                  {
                    primary: "Implant Placement",
                    secondary: `
                      Implants are surgically placed into your jawbone using advanced techniques to ensure optimal comfort and healing.
                    `,
                  },
                  {
                    primary: "Denture Fitting",
                    secondary: `
                      Once healed, your custom denture is securely attached to the implants and adjusted for perfect fit and feel.
                    `,
                  },
                  {
                    primary: "Post-Treatment Care",
                    secondary: `
                      We’ll provide instructions for caring for your new smile and ensuring long-term success.
                    `,
                  },
                  {
                    primary: "Regular Follow-Ups",
                    secondary: `
                      We’ll monitor the health of your implants and denture over time, making sure everything continues to function beautifully.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  We offer care that’s as compassionate as it is advanced. 
                  You’ll feel welcome, heard, and confident in every visit to Rietow Family Dentistry.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Screw-Retained Dentures Today!",
                content: `
                  Ready for a secure, confident smile? Call us at (317) 888-7576 to schedule your consultation for All-on-4 or All-on-6 screw-retained dentures. 
                  Our team is here to walk you through every step of the journey to full-mouth restoration.
                `,
              },
            ],
          },
          {
            title: "Same-Day Flippers",
            id: "same-day-flippers",
            subtitle: "Get Your Smile Back Today with Same-Day Flippers at Rietow Family Dentistry",
            icon: SentimentSatisfiedAltIcon,
            buttonText: "Schedule Your Same-Day Flipper Appointment",
            description: `
              At Rietow Family Dentistry, we understand that losing a tooth can be distressing. That’s why we offer same-day flippers, 
              a convenient and effective solution to restore your smile instantly. Our dedicated team is committed to providing you 
              with quality care and quick results, so you can feel confident and comfortable again.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What Are Flippers?",
                content: `
                  **Temporary Tooth Replacement:** Flippers are removable partial dentures designed to replace one or more missing teeth. 
                  They are lightweight and easy to wear, making them an ideal temporary solution while you explore long-term options.
          
                  **Custom-Fit Design:** Our same-day flippers are crafted to fit comfortably in your mouth, ensuring that you can speak, 
                  eat, and smile with ease.
                `,
              },
              {
                type: "list",
                title: "Benefits of Same-Day Flippers",
                listItems: [
                  {
                    primary: "Instant Gratification",
                    secondary: "We’ll have your flipper ready the same day, so you can leave our office with a confident smile.",
                  },
                  {
                    primary: "Improved Aesthetics",
                    secondary: "Flippers fill gaps in your smile immediately, enhancing your overall appearance.",
                  },
                  {
                    primary: "Functional Restoration",
                    secondary: "Enjoy improved chewing and speech while maintaining natural function.",
                  },
                  {
                    primary: "Affordable Option",
                    secondary: "Flippers offer a cost-effective way to temporarily replace missing teeth.",
                  },
                  {
                    primary: "Easy Maintenance",
                    secondary: "Simply remove for cleaning and follow our care instructions for long-lasting wear.",
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Visit",
                listItems: [
                  {
                    primary: "Consultation",
                    secondary: "Dr. Joe Rietow will evaluate your needs and determine if a same-day flipper is right for you.",
                  },
                  {
                    primary: "Custom Measurement",
                    secondary: "We’ll take impressions and measurements to ensure a perfect fit.",
                  },
                  {
                    primary: "Fabrication Process",
                    secondary: "Using in-house technology, your custom flipper is created while you wait.",
                  },
                  {
                    primary: "Fitting and Adjustments",
                    secondary: "We’ll make sure your flipper fits comfortably and functions properly before you leave.",
                  },
                  {
                    primary: "Aftercare Guidance",
                    secondary: "You’ll receive detailed instructions for care, cleaning, and next steps for a permanent replacement.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we prioritize your comfort and satisfaction. 
                  Our friendly team is here to support you every step of the way, ensuring a positive experience as you restore your smile.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Appointment for Same-Day Flippers Today!",
                content: `
                  Don’t let a missing tooth hold you back! Call us at (317) 888-7576 to schedule your appointment for same-day flippers 
                  at Rietow Family Dentistry. We’re here to help you regain your confidence and enjoy a beautiful, functional smile.
          
                  At Rietow Family Dentistry, we’re dedicated to providing high-quality, timely solutions for your dental needs. 
                  With our same-day flippers, you can walk out of our office with a smile that makes you feel great. 
                  We look forward to welcoming you to our practice!
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'cosmetics',
        title: 'Cosmetic Dentistry',
        icon: SpaIcon,
        services: [
          {
            title: "Whitening",
            id: "whitening",
            subtitle: "Brighten Your Smile with Professional Teeth Whitening at Rietow Family Dentistry",
            icon: VolunteerActivismIcon, // You can swap this for a better match if you'd like
            buttonText: "Schedule Your Whitening Consultation",
            description: `
              At Rietow Family Dentistry, we believe that a bright, radiant smile can transform your confidence and enhance your overall appearance. 
              If you’re looking to achieve a whiter smile, our professional teeth whitening services are designed to deliver stunning results safely and effectively.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Professional Teeth Whitening?",
                listItems: [
                  {
                    primary: "Safe and Effective",
                    secondary: `
                      Our in-office whitening treatments are supervised by professionals, 
                      ensuring dramatic results without compromising the health of your teeth or gums.
                    `,
                  },
                  {
                    primary: "Customized Treatments",
                    secondary: `
                      No two smiles are the same—your whitening plan is tailored to your goals and current dental condition.
                    `,
                  },
                  {
                    primary: "Immediate Results",
                    secondary: `
                      Choose in-office treatment for a noticeably whiter smile in just one visit—or opt for a gradual approach with custom take-home trays.
                    `,
                  },
                  {
                    primary: "Long-Lasting Effects",
                    secondary: `
                      Our whitening solutions are designed for longevity. With good hygiene and a few smart habits, your smile can stay bright for months.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Teeth Whitening Process",
                listItems: [
                  {
                    primary: "Initial Consultation",
                    secondary: `
                      We’ll evaluate your teeth and recommend the best whitening option based on your needs and preferences.
                    `,
                  },
                  {
                    primary: "Customized Treatment Plan",
                    secondary: `
                      You’ll choose between in-office whitening for instant results or custom at-home trays for gradual brightening.
                    `,
                  },
                  {
                    primary: "Whitening Procedure",
                    secondary: `
                      For in-office whitening, we’ll apply a powerful gel and activate it with light. The entire process takes about an hour.
                    `,
                  },
                  {
                    primary: "At-Home Care",
                    secondary: `
                      If you go with take-home trays, you’ll receive everything needed for safe, effective whitening on your schedule.
                    `,
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: `
                      We’ll help you maintain your results with tips on hygiene, diet, and lifestyle habits that keep stains away.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  Our team is here to make every step of your whitening experience smooth, comfortable, and personalized. 
                  We’ll answer all your questions and ensure you leave smiling brighter than ever.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Teeth Whitening Consultation Today!",
                content: `
                  Call us at (317) 888-7576 to schedule your whitening consultation and take the first step toward a more radiant smile.
                  At Rietow Family Dentistry, we’re excited to help you love your smile again!
                `,
              },
            ],
          },
          {
            title: "Cosmetic Botox and Xeomin",
            id: "cosmetic-botox",
            subtitle: "Enhance Your Smile with Cosmetic Botox and Xeomin at Rietow Family Dentistry",
            icon: FaceIcon,
            buttonText: "Schedule Your Cosmetic Consultation",
            description: `
              At Rietow Family Dentistry, we believe that your smile is more than just your teeth—it’s also about your overall facial appearance. 
              That’s why we offer cosmetic Botox and Xeomin treatments to help you achieve a youthful, refreshed look while complementing your dental care. 
              Our skilled team is dedicated to providing safe, effective solutions that enhance your natural beauty.
            `,
            sections: [
              {
                type: 'paragraph',
                title: "What Are Botox and Xeomin?",
                content: `
                  **Botox:** A well-known injectable that temporarily relaxes facial muscles, reducing fine lines and wrinkles such as frown lines, crow’s feet, and forehead creases.
          
                  **Xeomin:** Similar to Botox, Xeomin blocks nerve signals to muscles, resulting in a refreshed look without invasive procedures.
                `
              },
              {
                type: 'list',
                title: "Benefits of Cosmetic Botox and Xeomin",
                listItems: [
                  {
                    primary: "Immediate Results",
                    secondary: "Notice improvements within days and leave the office looking rejuvenated."
                  },
                  {
                    primary: "Non-Surgical Solution",
                    secondary: "No downtime required—resume your day right after treatment."
                  },
                  {
                    primary: "Customizable Treatments",
                    secondary: "Personalized plans tailored to your unique facial structure and goals."
                  },
                  {
                    primary: "Enhance Your Smile",
                    secondary: "Reduce wrinkles around your mouth and eyes to boost the impact of your smile."
                  },
                  {
                    primary: "Long-Lasting Effects",
                    secondary: "Enjoy smoother skin and a vibrant look for months before needing touch-ups."
                  }
                ]
              },
              {
                type: 'list',
                title: "What to Expect During Your Treatment",
                listItems: [
                  {
                    primary: "Consultation",
                    secondary: "Dr. Joe Rietow will assess your aesthetics and goals to design the ideal treatment plan."
                  },
                  {
                    primary: "Treatment Process",
                    secondary: "Botox or Xeomin is precisely injected in targeted areas during a quick, comfortable procedure."
                  },
                  {
                    primary: "Aftercare",
                    secondary: "We’ll guide you on post-treatment care. Any minor swelling or bruising typically fades quickly."
                  },
                  {
                    primary: "Follow-Up",
                    secondary: "Follow-up visits allow us to track your progress and adjust your treatment as needed."
                  }
                ]
              },
              {
                type: 'paragraph',
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we create a welcoming environment focused on compassion and excellence. 
                  Our team is dedicated to making sure you feel confident and cared for at every step of the process.
                `
              },
              {
                type: 'paragraph',
                title: "Schedule Your Consultation for Botox and Xeomin Today!",
                content: `
                  Ready to enhance your smile and boost your confidence? Call us at (317) 888-7576 to book your consultation. 
                  Let us help you achieve the youthful, vibrant look you deserve!
          
                  Discover how cosmetic Botox and Xeomin treatments at Rietow Family Dentistry can complement your natural beauty. 
                  We look forward to welcoming you to our practice!
                `
              }
            ]
          },
          {
            title: "Veneers",
            id: "veneers",
            subtitle: "Transform Your Smile with Custom Veneers at Rietow Family Dentistry",
            icon: FaceIcon,
            buttonText: "Schedule a Veneer Consultation",
            description: `
              At Rietow Family Dentistry, we believe that everyone deserves a smile they can be proud of. 
              If you're looking to enhance your appearance and boost your confidence, our custom veneers offer a beautiful solution. 
              Designed to correct imperfections and create a flawless smile, veneers are a popular choice for many of our patients.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What Are Veneers?",
                content: `
                  **Aesthetic Enhancements:** Veneers are thin, custom-made shells crafted from high-quality porcelain or composite resin. 
                  They are bonded to the front surfaces of your teeth to improve their appearance, providing a natural and stunning look.
          
                  **Versatile Solutions:** Whether you’re dealing with chipped, stained, misaligned, or uneven teeth, 
                  veneers can address a variety of cosmetic concerns, giving you the smile you’ve always wanted.
                `,
              },
              {
                type: "list",
                title: "Benefits of Choosing Veneers",
                listItems: [
                  {
                    primary: "Natural Appearance",
                    secondary:
                      "Our veneers are designed to mimic the natural look of your teeth, ensuring a seamless blend with your smile.",
                  },
                  {
                    primary: "Durability",
                    secondary:
                      "Made from strong materials, veneers are built to last, providing a long-term solution for enhancing your smile.",
                  },
                  {
                    primary: "Stain Resistance",
                    secondary:
                      "Porcelain veneers are highly resistant to staining—feel free to enjoy coffee, wine, and your favorite foods.",
                  },
                  {
                    primary: "Quick Transformation",
                    secondary:
                      "Most patients complete their veneer treatment in just a few visits, achieving dramatic results fast.",
                  },
                  {
                    primary: "Minimal Tooth Alteration",
                    secondary:
                      "Veneers require less enamel removal than crowns, preserving more of your natural tooth structure.",
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Veneer Journey",
                listItems: [
                  {
                    primary: "Initial Consultation",
                    secondary:
                      "We’ll evaluate your dental health and discuss your goals to ensure veneers are the right fit for you.",
                  },
                  {
                    primary: "Custom Design",
                    secondary:
                      "We’ll take precise impressions and create a personalized plan to craft your dream smile.",
                  },
                  {
                    primary: "Preparation",
                    secondary:
                      "We’ll gently prepare your teeth and place temporary veneers while your custom ones are being crafted.",
                  },
                  {
                    primary: "Placement of Veneers",
                    secondary:
                      "Your custom veneers will be bonded and polished for a secure fit and natural appearance.",
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary:
                      "We’ll provide care instructions and check in at future appointments to ensure long-term success.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Commitment",
                content: `
                  At Rietow Family Dentistry, we are dedicated to providing a comfortable, welcoming environment for all our patients. 
                  Our experienced team is here to support you through every step of your cosmetic journey.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Veneers Today!",
                content: `
                  Ready to enhance your smile with custom veneers? Call us at (317) 888-7576 to schedule your consultation at Rietow Family Dentistry. 
                  Let us help you achieve the beautiful, confident smile you deserve.
                  
                  At Rietow Family Dentistry, we’re committed to offering high-quality cosmetic solutions tailored to your individual needs. 
                  With our veneers, you can transform your smile and boost your confidence in no time. 
                  We look forward to welcoming you to our practice!
                `,
              },
            ],
          },
          {
            title: "Cosmetic Bonding",
            id: "cosmetic-bonding",
            subtitle: "Enhance Your Smile with Cosmetic Bonding at Rietow Family Dentistry",
            icon: ConstructionIcon,
            buttonText: "Schedule a Cosmetic Bonding Consultation",
            description: `
              At Rietow Family Dentistry, we understand that a beautiful smile can boost your confidence and enhance your overall appearance. 
              If you’re looking to address minor imperfections in your teeth, our cosmetic bonding services offer a quick and effective solution. 
              With our expert team and advanced techniques, we can help you achieve the smile you’ve always wanted.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What is Cosmetic Bonding?",
                content: `
                  **A Versatile Solution:** Cosmetic bonding involves applying a tooth-colored resin material to repair and improve the appearance of your teeth. 
                  This procedure can effectively address issues such as chips, cracks, gaps, and discoloration, giving you a natural-looking smile.
          
                  **Quick and Convenient:** One of the best aspects of cosmetic bonding is that it can typically be completed in a single visit to our office, 
                  making it an excellent option for those seeking immediate results.
                `,
              },
              {
                type: "list",
                title: "Benefits of Cosmetic Bonding",
                listItems: [
                  {
                    primary: "Natural Appearance",
                    secondary: "The composite resin used in bonding can be color-matched to your natural teeth for a flawless, seamless result.",
                  },
                  {
                    primary: "Minimally Invasive",
                    secondary: "Bonding requires little to no removal of natural tooth structure, preserving your healthy enamel.",
                  },
                  {
                    primary: "Cost-Effective",
                    secondary: "Compared to veneers or crowns, bonding is an affordable way to improve your smile’s appearance.",
                  },
                  {
                    primary: "Quick Results",
                    secondary: "Many bonding procedures take less than an hour and provide immediate improvement to your smile.",
                  },
                  {
                    primary: "Durability",
                    secondary: "With proper care, bonding can last several years and maintain its aesthetic appeal.",
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Cosmetic Bonding Appointment",
                listItems: [
                  {
                    primary: "Initial Consultation",
                    secondary: "Dr. Rietow will evaluate your smile and determine if bonding is the right cosmetic solution for you.",
                  },
                  {
                    primary: "Shade Matching",
                    secondary: "We’ll choose a composite resin color that blends perfectly with your natural teeth.",
                  },
                  {
                    primary: "Application Process",
                    secondary: "We gently prepare the tooth, apply the resin, and shape it to enhance your smile’s appearance.",
                  },
                  {
                    primary: "Final Touches",
                    secondary: "The material is cured and polished to match the texture and shine of your enamel.",
                  },
                  {
                    primary: "Aftercare",
                    secondary: "We’ll provide tips for maintaining your bonded teeth, including good hygiene and avoiding habits like nail-biting or chewing ice.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we prioritize your comfort and satisfaction. 
                  Our friendly and experienced team is dedicated to creating a welcoming environment where you can feel confident and cared for.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Cosmetic Bonding Consultation Today!",
                content: `
                  Ready to enhance your smile with cosmetic bonding? Call us at (317) 888-7576 to schedule your consultation at Rietow Family Dentistry. 
                  Let us help you achieve a beautiful, confident smile that you can be proud of.
          
                  At Rietow Family Dentistry, we’re committed to providing high-quality cosmetic solutions tailored to your individual needs. 
                  With our cosmetic bonding services, you can address minor imperfections and enjoy a stunning smile. 
                  We look forward to welcoming you to our practice!
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'tmjd',
        title: 'TMJ & Jaw',
        icon: FavoriteIcon,
        services: [
          {
            title: "Night Guards",
            id: "night-guards",
            subtitle: "Protect Your Smile with Custom Night Guards at Rietow Family Dentistry",
            icon: SportsBasketballIcon, // Swap if you prefer something more dental-specific
            buttonText: "Get a Custom Night Guard",
            description: `
              At Rietow Family Dentistry, we know that a good night’s sleep is essential for your overall health—and that includes protecting your smile! 
              If you grind your teeth at night or suffer from jaw clenching, our custom night guards can help safeguard your teeth 
              and enhance your comfort while you sleep.
            `,
            sections: [
              {
                type: "list",
                title: "Why Consider a Night Guard?",
                listItems: [
                  {
                    primary: "Prevent Tooth Damage",
                    secondary: `
                      Teeth grinding (bruxism) can cause chips, cracks, and tooth loss. 
                      A custom night guard protects your teeth by absorbing pressure and preventing damage.
                    `,
                  },
                  {
                    primary: "Reduce Jaw Pain",
                    secondary: `
                      Clenching and grinding can lead to pain in your jaw, neck, and shoulders. 
                      Night guards help relieve tension, allowing you to wake up feeling refreshed.
                    `,
                  },
                  {
                    primary: "Improved Sleep Quality",
                    secondary: `
                      Night guards reduce grinding and clenching, helping you achieve deeper, more restful sleep.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect When You Get a Night Guard",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: "Dr. Rietow will evaluate your dental health and symptoms to determine if a night guard is right for you.",
                  },
                  {
                    primary: "Custom Fit",
                    secondary: "We take precise impressions to craft a night guard that fits comfortably and securely to your bite.",
                  },
                  {
                    primary: "Education and Guidance",
                    secondary: "You'll receive care instructions and tips for managing grinding and clenching.",
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: "We offer follow-ups to monitor your progress and adjust the guard as needed.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Comfort and Quality You Can Trust",
                content: `
                  At Rietow Family Dentistry, we prioritize your comfort and satisfaction. 
                  Our night guards are made from high-quality materials for long-lasting protection and a perfect fit. 
                  Rest easy knowing your smile is safe while you sleep.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for a Night Guard Today!",
                content: `
                  Don’t let grinding damage your teeth or ruin your rest. 
                  Call us at (317) 888-7576 to schedule your custom night guard consultation.
          
                  Our friendly team is here to help you protect your teeth and enjoy a healthier, more peaceful night’s sleep.
          
                  At Rietow Family Dentistry, we’re committed to delivering personalized care tailored to your unique needs. 
                  We look forward to helping you maintain a strong, vibrant smile!
                `,
              },
            ],
          },
          {
            title: "TMJ Treatment",
            id: "tmj-treatment",
            subtitle: "Find Relief from TMJ Discomfort at Rietow Family Dentistry",
            icon: FavoriteIcon, // Suggests care and wellness — feel free to swap!
            buttonText: "Schedule a TMJ Consultation",
            description: `
              At Rietow Family Dentistry, we understand that temporomandibular joint (TMJ) disorders can significantly impact your daily life. 
              If you’re experiencing jaw pain, headaches, or difficulty chewing, our specialized TMJ treatments can help restore your comfort 
              and improve your quality of life.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What is TMJ Disorder?",
                content: `
                  TMJ disorders affect the joints that connect your jaw to your skull, often leading to pain and dysfunction. 
                  Common symptoms include:
                  
                  - Jaw pain or tenderness
                  - Frequent headaches or migraines
                  - Clicking or popping sounds when moving your jaw
                  - Difficulty opening or closing your mouth
                  - Earaches or ringing in the ears
                `,
              },
              {
                type: "list",
                title: "Why Choose Rietow Family Dentistry for TMJ Treatment?",
                listItems: [
                  {
                    primary: "Comprehensive Evaluation",
                    secondary: `
                      Our approach begins with a thorough examination of your jaw, teeth, and overall oral health. 
                      Dr. Joe Rietow will assess your symptoms and medical history to determine the best treatment plan tailored to your needs.
                    `,
                  },
                  {
                    primary: "Personalized Treatment Plans",
                    secondary: `
                      We offer a range of treatment options such as:
                      - Oral Appliances (night guards/splints)
                      - Physical Therapy exercises and stretches
                      - Pain management (medications/muscle relaxants)
                      - Lifestyle guidance (posture, diet, stress)
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Visit",
                listItems: [
                  {
                    primary: "Warm Welcome",
                    secondary: "Our friendly staff will ensure you feel comfortable in our inviting environment.",
                  },
                  {
                    primary: "Thorough Examination",
                    secondary: "Dr. Rietow will evaluate your jaw function and symptoms to uncover the root cause of your TMJ discomfort.",
                  },
                  {
                    primary: "Customized Treatment Plan",
                    secondary: "You’ll receive a personalized plan that fits your lifestyle and focuses on real, lasting relief.",
                  },
                  {
                    primary: "Ongoing Support",
                    secondary: "We’ll monitor your progress and make any necessary adjustments along the way to optimize your results.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Take the First Step Toward Relief",
                content: `
                  Don’t let TMJ pain hold you back. 
                  Call us at (317) 888-7576 to schedule your consultation today and take the first step toward long-term relief.
                `,
              },
              {
                type: "paragraph",
                title: "Your Comfort Is Our Priority",
                content: `
                  At Rietow Family Dentistry, we’re dedicated to helping you find relief from TMJ discomfort and improve your overall quality of life. 
                  With our personalized approach and commitment to your health, you can trust that you’re in good hands. 
                  We look forward to welcoming you to our practice!
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'sleep',
        title: 'Sleep Apnea',
        icon: BedtimeIcon,
        services: [
          {
            title: "Sleep Appliances",
            id: "sleep-appliances",
            subtitle: "Enhance Your Sleep with Custom Oral Sleep Appliances at Rietow Family Dentistry",
            icon: PsychologyAltIcon, // Suggests sleep/brain/jaw wellness — feel free to swap
            buttonText: "Schedule a Sleep Appliance Consultation",
            description: `
              At Rietow Family Dentistry, we understand the importance of a good night’s sleep for your overall health and well-being. 
              If you or a loved one suffers from sleep apnea or snoring, our custom oral sleep appliances can provide an effective 
              and comfortable solution to improve your sleep quality and restore restful nights.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Oral Sleep Appliances?",
                listItems: [
                  {
                    primary: "Combat Sleep Apnea",
                    secondary: `
                      Oral sleep appliances are designed to keep your airways open while you sleep, 
                      reducing airway obstruction and promoting better oxygen flow.
                    `,
                  },
                  {
                    primary: "Reduce Snoring",
                    secondary: `
                      These appliances reposition your jaw and tongue to minimize airway blockage, 
                      leading to quieter nights and improved rest for you and your partner.
                    `,
                  },
                  {
                    primary: "Comfort and Convenience",
                    secondary: `
                      Unlike CPAP machines, oral appliances are compact, custom-fitted, and easy to wear — 
                      helping patients stick with treatment long term.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect When You Get an Oral Sleep Appliance",
                listItems: [
                  {
                    primary: "Thorough Evaluation",
                    secondary: "Dr. Rietow will assess your oral health and sleep symptoms to determine the best course of action.",
                  },
                  {
                    primary: "Custom Design",
                    secondary: "We’ll take impressions of your teeth to craft a personalized appliance that fits comfortably and securely.",
                  },
                  {
                    primary: "Education and Support",
                    secondary: "Our team will walk you through care instructions and provide ongoing support for managing your sleep health.",
                  },
                  {
                    primary: "Follow-Up Care",
                    secondary: "Regular visits ensure your appliance is working effectively and adjustments can be made as needed.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "A Commitment to Your Health",
                content: `
                  At Rietow Family Dentistry, your comfort and health are our top priorities. 
                  Our oral appliances are crafted with quality materials to ensure lasting comfort and effectiveness. 
                  We’re dedicated to helping you sleep better and live healthier.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for an Oral Sleep Appliance Today!",
                content: `
                  Don’t let sleep apnea or snoring impact your quality of life. 
                  Call us at (317) 888-7576 to schedule your consultation today.
          
                  Our caring team is here to guide you toward a solution that brings restful, rejuvenating sleep.
          
                  At Rietow Family Dentistry, we’re committed to personalized care that supports your well-being. 
                  Let us help you achieve better sleep and a healthier, more energized life!
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'ortho',
        title: 'Orthodontics',
        icon: EmojiEmotionsIcon,
        services: [
          {
            title: "Orthodontics (Brackets and Wires)",
            id: "orthodontics",
            subtitle: "Achieve a Beautiful Smile with Traditional Braces at Rietow Family Dentistry",
            icon: VolunteerActivismIcon, // You can swap this for something more ortho-specific later
            buttonText: "Schedule Your Braces Consultation",
            description: `
              At Rietow Family Dentistry, we believe that everyone deserves a confident, healthy smile. 
              Traditional braces are a time-tested and effective solution for correcting misalignment and achieving the smile you’ve always wanted. 
              Our skilled team is here to guide you through the process and ensure a comfortable experience from start to finish.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Traditional Braces?",
                listItems: [
                  {
                    primary: "Proven Effectiveness",
                    secondary: `
                      Traditional braces are one of the most effective orthodontic treatments available. 
                      They correct overcrowding, gaps, and bite misalignments for long-term results.
                    `,
                  },
                  {
                    primary: "Durability and Strength",
                    secondary: `
                      Made from high-quality materials, braces are built to last and deliver consistent pressure for reliable alignment.
                    `,
                  },
                  {
                    primary: "Personalized Treatment",
                    secondary: `
                      Every orthodontic plan is customized to your needs, timeline, and goals by our expert team.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Braces Journey",
                listItems: [
                  {
                    primary: "Initial Consultation",
                    secondary: `
                      Dr. Rietow will assess your teeth, bite, and goals to determine if braces are the best treatment for you.
                    `,
                  },
                  {
                    primary: "Custom Treatment Plan",
                    secondary: `
                      We’ll map out your expected treatment timeline and walk you through every step of the journey.
                    `,
                  },
                  {
                    primary: "Placement of Braces",
                    secondary: `
                      Brackets are carefully bonded to your teeth and connected with archwire—all with your comfort in mind.
                    `,
                  },
                  {
                    primary: "Regular Adjustments",
                    secondary: `
                      You’ll visit us for periodic adjustments to keep your treatment on track and your progress steady.
                    `,
                  },
                  {
                    primary: "Retainers",
                    secondary: `
                      After treatment, a custom retainer helps ensure your teeth stay in their new position long-term.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Commitment",
                content: `
                  We make orthodontic care feel approachable, supportive, and stress-free. 
                  From the first appointment to the last, our team is by your side every step of the way.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Traditional Braces Today!",
                content: `
                  Ready to start your smile transformation? Call us at (317) 888-7576 to schedule a braces consultation today.
                  Let’s achieve the confident smile you deserve—together.
                `,
              },
            ],
          },
          {
            title: "Clear Aligners (Invisalign)",
            id: "clearAligners",
            subtitle: "Transform Your Smile with Clear Aligners at Rietow Family Dentistry",
            icon: SentimentSatisfiedAltIcon, // Swap for a better-fitting icon if preferred
            buttonText: "Schedule Your Invisalign Consultation",
            description: `
              At Rietow Family Dentistry, we understand that achieving a straighter smile is a goal for many, 
              but traditional braces aren’t always the preferred choice. 
              That’s why we offer clear aligners—an innovative, discreet solution that allows you to straighten your teeth comfortably and effectively.
            `,
            sections: [
              {
                type: "list",
                title: "Why Choose Clear Aligners?",
                listItems: [
                  {
                    primary: "Discreet and Invisible",
                    secondary: `
                      Clear aligners are transparent and fit snugly over your teeth, making them virtually invisible. 
                      Smile confidently throughout your treatment!
                    `,
                  },
                  {
                    primary: "Comfort and Convenience",
                    secondary: `
                      With no wires or brackets, aligners offer a more comfortable experience. 
                      Plus, they're removable—so you can eat what you want and brush with ease.
                    `,
                  },
                  {
                    primary: "Customized Treatment",
                    secondary: `
                      Using advanced digital technology, each aligner is custom-made to gradually move your teeth into alignment.
                    `,
                  },
                  {
                    primary: "Effective Results",
                    secondary: `
                      Aligners are a great solution for mild to moderate crowding, spacing, and bite alignment issues—without lifestyle disruption.
                    `,
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Clear Aligner Journey",
                listItems: [
                  {
                    primary: "Initial Consultation",
                    secondary: `
                      Dr. Rietow will evaluate your smile, discuss your goals, and determine if clear aligners are the best fit.
                    `,
                  },
                  {
                    primary: "Custom Treatment Plan",
                    secondary: `
                      We’ll use digital imaging to plan your treatment and show a 3D preview of how your smile will transform.
                    `,
                  },
                  {
                    primary: "Receiving Your Aligners",
                    secondary: `
                      You’ll receive a series of aligners to wear in sequence—typically changing every 1–2 weeks.
                    `,
                  },
                  {
                    primary: "Regular Check-Ins",
                    secondary: `
                      We’ll schedule periodic visits to monitor your progress and provide your next sets of aligners.
                    `,
                  },
                  {
                    primary: "Retention Phase",
                    secondary: `
                      After treatment, we’ll provide a custom retainer to help maintain your new, beautiful smile.
                    `,
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  At Rietow Family Dentistry, we prioritize your comfort and confidence. 
                  Our team supports you every step of the way to ensure a smooth and rewarding clear aligner experience.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Consultation for Clear Aligners Today!",
                content: `
                  Ready to start your journey to a straighter smile? Call us at (317) 888-7576 to schedule your Invisalign consultation today. 
                  Let’s achieve the smile you’ve always wanted—discreetly and comfortably.
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Comfort Options',
        icon: SelfImprovementIcon,
        services: [
          {
            title: "Laughing Gas",
            id: "laughing-gas",
            subtitle: "Experience Comfort and Relaxation with Laughing Gas at Rietow Family Dentistry",
            icon: SpaIcon,
            buttonText: "Learn About Laughing Gas",
            description: `
              At Rietow Family Dentistry, we understand that dental visits can sometimes cause anxiety or discomfort for patients. 
              That’s why we offer laughing gas (nitrous oxide) as a safe and effective way to help you relax during your dental procedures. 
              Our goal is to ensure that your experience is as comfortable and stress-free as possible.
            `,
            sections: [
              {
                type: 'paragraph',
                title: "What is Laughing Gas?",
                content: `
                  **Gentle Sedation:** Laughing gas is a colorless, odorless gas administered through a small nose mask. 
                  It promotes a sense of calm and relaxation while keeping you fully awake and responsive.
          
                  **Quick Recovery:** Effects begin and fade quickly, allowing patients to return to their day shortly after treatment—ideal for both kids and adults.
                `
              },
              {
                type: 'list',
                title: "Benefits of Laughing Gas",
                listItems: [
                  {
                    primary: "Anxiety Reduction",
                    secondary: "Helps ease fear or nervousness, making dental visits more comfortable and approachable."
                  },
                  {
                    primary: "Pain Management",
                    secondary: "Enhances comfort during procedures and works alongside local anesthetics to improve your overall experience."
                  },
                  {
                    primary: "Conscious Sedation",
                    secondary: "You remain aware and able to communicate with our team while feeling calm and relaxed."
                  },
                  {
                    primary: "Safe for All Ages",
                    secondary: "Laughing gas is an excellent choice for both adults and children, with a strong safety record and minimal side effects."
                  }
                ]
              },
              {
                type: 'list',
                title: "What to Expect During Your Visit",
                listItems: [
                  {
                    primary: "Consultation",
                    secondary: "We’ll review your medical history and discuss your comfort preferences to see if laughing gas is right for you."
                  },
                  {
                    primary: "Administration",
                    secondary: "A small mask is placed over your nose. You’ll begin to feel relaxed within minutes."
                  },
                  {
                    primary: "Monitoring",
                    secondary: "We monitor your response closely and can adjust dosage throughout the procedure to ensure optimal comfort."
                  },
                  {
                    primary: "Post-Treatment",
                    secondary: "Effects wear off quickly after the procedure, and you can typically resume your normal day right away."
                  }
                ]
              },
              {
                type: 'paragraph',
                title: "Your Comfort is Our Commitment",
                content: `
                  At Rietow Family Dentistry, we create a warm and stress-free environment where you feel in control. 
                  Our skilled and compassionate team is here to ensure every visit is as comfortable as possible.
                `
              },
              {
                type: 'paragraph',
                title: "Schedule Your Appointment and Experience Laughing Gas Today!",
                content: `
                  Don’t let dental anxiety stand in the way of your health! 
                  Call us at (317) 888-7576 to schedule your visit and learn how laughing gas can help you enjoy a more relaxed experience.
          
                  At Rietow Family Dentistry, we’re committed to safe, modern sedation options that make oral care easier and more accessible. 
                  We look forward to helping you feel at ease!
                `
              }
            ]
          },
          {
            title: "Oral Conscious Sedation",
            id: "oral-sedation",
            subtitle: "Experience Relaxation with Oral Conscious Sedation at Rietow Family Dentistry",
            icon: PsychologyAltIcon,
            buttonText: "Learn About Oral Sedation",
            description: `
              At Rietow Family Dentistry, we understand that for some patients, dental visits can be a source of anxiety or discomfort. 
              That’s why we offer oral sedation as a safe and effective way to help you feel calm and relaxed during your dental procedures. 
              Our goal is to ensure that your experience is as pleasant and stress-free as possible.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What is Oral Sedation?",
                content: `
                  **Gentle and Effective:** Oral sedation involves taking a prescribed medication before your appointment, 
                  helping you enter a state of deep relaxation. You’ll remain awake and responsive, but may feel drowsy or drift in and out of sleep.
          
                  **Customizable Dosing:** We tailor your sedation dosage to match your comfort level and treatment type.
                `,
              },
              {
                type: "list",
                title: "Benefits of Oral Sedation",
                listItems: [
                  {
                    primary: "Anxiety Relief",
                    secondary:
                      "Ideal for patients with dental fear or anxiety—this option helps you relax while still remaining conscious during treatment.",
                  },
                  {
                    primary: "Amnesia Effect",
                    secondary:
                      "Many patients remember little to nothing of the procedure, making dental visits feel shorter and more manageable.",
                  },
                  {
                    primary: "Comfortable Experience",
                    secondary:
                      "Sedation allows for longer or more complex procedures to be performed comfortably in a single visit.",
                  },
                  {
                    primary: "Safe and Convenient",
                    secondary:
                      "Oral sedation is safe for most patients and administered under the supervision of trained dental professionals.",
                  },
                ],
              },
              {
                type: "list",
                title: "What to Expect During Your Oral Sedation Experience",
                listItems: [
                  {
                    primary: "Consultation",
                    secondary:
                      "We’ll discuss your concerns and determine if oral sedation is right for you based on your dental and medical history.",
                  },
                  {
                    primary: "Pre-Treatment Instructions",
                    secondary:
                      "You’ll receive detailed preparation guidelines, including any dietary restrictions or transportation needs.",
                  },
                  {
                    primary: "Administration",
                    secondary:
                      "Take your prescribed medication before your appointment. By the time your procedure starts, you'll feel at ease.",
                  },
                  {
                    primary: "Monitoring",
                    secondary:
                      "Our trained team monitors your vital signs and comfort throughout your entire visit to ensure safety and relaxation.",
                  },
                  {
                    primary: "Recovery",
                    secondary:
                      "You’ll feel groggy after your procedure. A trusted friend or family member should drive you home while you rest.",
                  },
                ],
              },
              {
                type: "paragraph",
                title: "Your Comfort is Our Priority",
                content: `
                  We’re committed to creating a calming environment for all patients. 
                  Our team is here to ensure a stress-free experience from the moment you walk in the door to the moment you leave.
                `,
              },
              {
                type: "paragraph",
                title: "Schedule Your Appointment for Oral Sedation Today!",
                content: `
                  Don’t let anxiety hold you back from a healthy, beautiful smile. 
                  Call us at (317) 888-7576 to learn how oral sedation can transform your dental experience.
          
                  At Rietow Family Dentistry, your comfort is our mission. Let us help you rediscover confidence in your care.
                `,
              },
            ],
          }
        ]
      },
      {
        id: 'holistic',
        title: 'Holistic Dentistry',
        icon: PsychologyAltIcon,
        services: [
          {
            title: "Holistic Dentistry",
            id: "holistic",
            subtitle: "Experience Holistic Dentistry at Rietow Family Dentistry",
            icon: VolunteerActivismIcon,
            buttonText: "Schedule Your Holistic Consultation",
            description: `
              At Rietow Family Dentistry, we believe that dental health is intricately connected to your overall well-being. 
              Our holistic approach to dentistry emphasizes the importance of treating the whole person, not just their teeth. 
              We’re committed to providing you with compassionate care that considers your physical, emotional, and environmental health.
            `,
            sections: [
              {
                type: "paragraph",
                title: "What is Holistic Dentistry?",
                content: `
                  **Whole-Person Care:** Holistic dentistry focuses on the relationship between oral health and overall health. 
                  We take into account your unique lifestyle, dietary habits, and health history to create personalized treatment plans 
                  that support both your dental and overall wellness.
          
                  **Biocompatible Materials:** We prioritize the use of safe, non-toxic materials in all our dental procedures. 
                  From fillings to crowns, we choose biocompatible options that minimize the risk of allergic reactions and support your body’s 
                  natural healing processes.
                `
              },
              {
                type: "list",
                title: "Benefits of Choosing Holistic Dentistry",
                listItems: [
                  {
                    primary: "Comprehensive Wellness",
                    secondary: "Our approach promotes healthy teeth and gums while supporting your whole-body health and reducing systemic disease risks.",
                  },
                  {
                    primary: "Natural Treatments",
                    secondary: "We integrate therapies like nutritional counseling and herbal remedies to support natural healing.",
                  },
                  {
                    primary: "Patient Education",
                    secondary: "We empower you with the knowledge to understand and improve your oral and overall health through lifestyle choices.",
                  },
                  {
                    primary: "Stress Reduction",
                    secondary: "Our calming environment and gentle techniques help ease dental anxiety and promote peace of mind.",
                  },
                  {
                    primary: "Sustainable Practices",
                    secondary: "We’re committed to eco-conscious choices—from the materials we use to our waste management systems.",
                  },
                ]
              },
              {
                type: "list",
                title: "Our Holistic Services",
                listItems: [
                  {
                    primary: "Preventive Care",
                    secondary: "Check-ups, cleanings, and hygiene plans to maintain oral and systemic health.",
                  },
                  {
                    primary: "Natural Restorations",
                    secondary: "Restorative treatments using non-toxic, biocompatible materials for a healthier you.",
                  },
                  {
                    primary: "Nutritional Counseling",
                    secondary: "Personalized guidance on diet and nutrition to support oral and overall health.",
                  },
                  {
                    primary: "Alternative Therapies",
                    secondary: "Options such as essential oils and herbal remedies to complement conventional care.",
                  },
                  {
                    primary: "Patient-Centered Approach",
                    secondary: "We listen to your needs, involve you in your care, and value your input every step of the way.",
                  },
                ]
              },
              {
                type: "paragraph",
                title: "Your Comfort and Health Are Our Priority",
                content: `
                  At Rietow Family Dentistry, we are dedicated to creating a caring, respectful environment where your health and comfort come first. 
                  Our experienced team is here to support you on your journey to optimal oral and overall health.
                `
              },
              {
                type: "paragraph",
                title: "Schedule Your Holistic Dentistry Consultation Today!",
                content: `
                  If you’re ready to experience the benefits of holistic dentistry, call us at (317) 888-7576 to schedule your consultation at Rietow Family Dentistry. 
                  Let us help you achieve a healthier, happier smile that supports your well-being!
          
                  At Rietow Family Dentistry, we’re committed to providing high-quality, holistic dental care tailored to your individual needs. 
                  Join us in prioritizing your health and wellness through a comprehensive approach to dentistry. 
                  We look forward to welcoming you to our practice!
                `
              }
            ]
          },
          {
            title: "Fluoride-Free (Nano-Hydroxyapatite)",
            id: "fluoride-free",
            subtitle: "Enhance Your Oral Health with Fluoride-Free Nano Hydroxyapatite Toothpaste at Rietow Family Dentistry",
            icon: BiotechIcon, // Swap with a better-suited icon if desired
            buttonText: "Explore Fluoride-Free Options",
            description: `
              At Rietow Family Dentistry, we prioritize your dental health and well-being. 
              That’s why we proudly offer fluoride-free nano hydroxyapatite toothpaste—an innovative alternative 
              that promotes strong, healthy teeth without the use of fluoride. 
              This cutting-edge product is designed to provide effective protection and restoration for your smile.
            `,
            sections: [
              {
                type: 'paragraph',
                title: "What is Nano Hydroxyapatite?",
                content: `
                  **Nature’s Building Block:** Hydroxyapatite is a naturally occurring mineral that makes up the majority of our teeth. 
                  Nano hydroxyapatite is a smaller, more bioavailable form that can effectively penetrate tooth enamel, 
                  helping to remineralize and strengthen your teeth.
          
                  **Fluoride-Free Option:** For those seeking a fluoride-free dental care routine, 
                  nano hydroxyapatite toothpaste offers a safe and effective alternative. 
                  It’s perfect for individuals with sensitivities to fluoride or those looking for a more natural approach to oral health.
                `
              },
              {
                type: 'list',
                title: "Benefits of Using Fluoride-Free Nano Hydroxyapatite Toothpaste",
                listItems: [
                  {
                    primary: "Remineralization",
                    secondary: "Helps repair early signs of tooth decay by remineralizing enamel and restoring strength."
                  },
                  {
                    primary: "Reduced Sensitivity",
                    secondary: "Seals microscopic tubules in dentin, reducing sensitivity to hot, cold, and sweet stimuli."
                  },
                  {
                    primary: "Whitening Properties",
                    secondary: "Gently polishes teeth and removes surface stains for a brighter smile without harsh abrasives."
                  },
                  {
                    primary: "Safe for All Ages",
                    secondary: "Suitable for both adults and children, supporting healthy smiles at every stage of life."
                  },
                  {
                    primary: "Biocompatibility",
                    secondary: "Naturally occurring and gentle on your body, nano hydroxyapatite is highly biocompatible."
                  }
                ]
              },
              {
                type: 'list',
                title: "Making the Switch to Nano Hydroxyapatite Toothpaste",
                listItems: [
                  {
                    primary: "Consultation",
                    secondary: "Schedule an appointment with Dr. Rietow to discuss how nano hydroxyapatite can fit into your care routine."
                  },
                  {
                    primary: "Personalized Recommendations",
                    secondary: "Our team will recommend usage strategies tailored to your oral health needs."
                  },
                  {
                    primary: "Continued Care",
                    secondary: "We'll monitor your progress through regular check-ups and ensure it's working effectively for you."
                  }
                ]
              },
              {
                type: 'paragraph',
                title: "Your Comfort and Health Matter",
                content: `
                  At Rietow Family Dentistry, we are committed to providing high-quality, innovative solutions for your dental care needs. 
                  Our friendly team is dedicated to creating a welcoming environment where you can feel confident and cared for.
                `
              },
              {
                type: 'paragraph',
                title: "Explore Fluoride-Free Nano Hydroxyapatite Toothpaste Today!",
                content: `
                  Take the first step toward a healthier smile with fluoride-free nano hydroxyapatite toothpaste. 
                  Call us at (317) 888-7576 to schedule your consultation or visit our office to learn more about this exciting product.
          
                  Discover the benefits of fluoride-free care and embrace a brighter, healthier smile. 
                  We look forward to welcoming you to Rietow Family Dentistry!
                `
              }
            ]
          }
        ]
      }
    ]
  }
};

export default content;
