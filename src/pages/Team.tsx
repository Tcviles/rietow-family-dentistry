import { ReactNode, useState } from 'react';
import { Avatar, Box, Button, Card, Grid, Modal, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import PageShell from '../components/layout/PageShell';
import { contactInfo } from '../data/contactInfo';

type Photo = { src: string; alt: string };

const chairPhotos: Photo[] = [
  { src: require('../assets/joe-with-patient/image1.webp'), alt: 'Dr. Joe Rietow cleaning a young patient’s teeth while mom smiles' },
  { src: require('../assets/joe-with-patient/image2.webp'), alt: 'Dr. Joe Rietow examining a young patient' },
  { src: require('../assets/joe-with-patient/image3.webp'), alt: 'Dr. Joe Rietow and his son examining a patient' },
];

const familyPhotos: Photo[] = [
  { src: require('../assets/joe-with-family/image1.webp'), alt: 'Hudson and Brady Rietow' },
  { src: require('../assets/joe-with-family/image2.webp'), alt: 'The Rietow family at a Christmas tree farm' },
  { src: require('../assets/joe-with-family/image3.webp'), alt: 'Dr. Joe with his boys and their dog in Buccaneers jerseys' },
  { src: require('../assets/joe-with-family/image4.webp'), alt: 'Brady Rietow brushing his teeth' },
];

const staffPhotos: Photo[] = [
  { src: require('../assets/joe-with-staff/image1.webp'), alt: 'The Rietow Family Dentistry team at a holiday party' },
  { src: require('../assets/joe-with-staff/image2.webp'), alt: 'The team at a team-building dinner' },
  { src: require('../assets/joe-with-staff/image3.webp'), alt: 'The team at Topgolf' },
  { src: require('../assets/joe-with-staff/image4.webp'), alt: 'The team dressed up as the Pink Ladies from Grease' },
  { src: require('../assets/joe-with-staff/image5.webp'), alt: 'The team dressed up as the Average Joe’s dodgeball team' },
  { src: require('../assets/joe-with-staff/image6.webp'), alt: 'The team in Halloween costumes at the office' },
];

// Staff without a headshot yet show their initial instead of a borrowed photo.
const staffMembers: { name: string; image?: string }[] = [
  { name: 'Bethany' },
  { name: 'Chelsea' },
  { name: 'Dana', image: require('../assets/staff-pics/DanaHeadshot.webp') },
  { name: 'Gloria', image: require('../assets/staff-pics/GloriaHeadshot.webp') },
  { name: 'Kim', image: require('../assets/staff-pics/KimHeadshot.webp') },
  { name: 'Lisa' },
  { name: 'Libby' },
  { name: 'Rachel' },
  { name: 'Tracie' },
];

const StaffCard = ({ name, image }: { name: string; image?: string }) => (
  <Card
    sx={{
      textAlign: 'center',
      boxShadow: 1,
      borderRadius: 3,
      p: { xs: 1.5, md: 2 },
      height: '100%',
      transition: '0.2s ease-in-out',
      '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' },
    }}
  >
    <Avatar
      alt={name}
      src={image}
      sx={{
        width: { xs: 72, sm: 96, md: 110 },
        height: { xs: 72, sm: 96, md: 110 },
        mx: 'auto',
        border: '3px solid',
        borderColor: 'grey.200',
        fontSize: { xs: 28, sm: 38 },
        '& img': { objectPosition: 'center 15%' },
      }}
    >
      {name.charAt(0)}
    </Avatar>
    <Typography sx={{ mt: 1.5, fontWeight: 600 }}>{name}</Typography>
  </Card>
);

// A row of same-height photos that wraps on small screens; tapping one enlarges it.
const PhotoRow = ({ photos, onOpen }: { photos: Photo[]; onOpen: (photo: Photo) => void }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: 'repeat(2, 1fr)',
        md: `repeat(${photos.length % 3 === 0 ? 3 : Math.min(photos.length, 4)}, 1fr)`,
      },
      gap: { xs: 1.5, md: 2 },
      my: 3,
    }}
  >
    {photos.map((photo) => (
      <Box
        key={photo.src}
        component="img"
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        onClick={() => onOpen(photo)}
        sx={{
          width: '100%',
          aspectRatio: '4 / 5',
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: 2,
          cursor: 'zoom-in',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': { transform: 'scale(1.02)', boxShadow: 4 },
        }}
      />
    ))}
  </Box>
);

const Paragraph = ({ children }: { children: ReactNode }) => (
  <Typography paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
    {children}
  </Typography>
);

const TeamPage = () => {
  const [openPhoto, setOpenPhoto] = useState<Photo | null>(null);

  return (
    <>
      <Helmet>
        <title>Meet the Team | Rietow Family Dentistry in Greenwood, IN</title>
        <meta
          name="description"
          content="Get to know the caring and experienced staff at Rietow Family Dentistry. Learn more about Dr. Joe Rietow and his team serving Greenwood, Indiana."
        />
        <meta property="og:title" content="Meet the Team | Rietow Family Dentistry" />
        <meta
          property="og:description"
          content="Meet the friendly faces behind Rietow Family Dentistry. We treat our patients like family and deliver gentle, high-quality care in Greenwood, IN."
        />
        <meta property="og:url" content="https://www.rietowfamilydentistry.com/team" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/team" />
      </Helmet>

      <Modal open={!!openPhoto} onClose={() => setOpenPhoto(null)}>
        <Box
          onClick={() => setOpenPhoto(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.85)',
            cursor: 'zoom-out',
          }}
        >
          {openPhoto && (
            <Box
              component="img"
              src={openPhoto.src}
              alt={openPhoto.alt}
              sx={{ maxHeight: '90vh', maxWidth: '92vw', borderRadius: 2, boxShadow: 5 }}
            />
          )}
        </Box>
      </Modal>

      <PageShell title="Our Team">
        {/* Meet Dr. Joe */}
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={require('../assets/JoeHeadshot1x1.webp')}
              alt="Dr. Joe Rietow, DDS"
              sx={{
                width: '100%',
                maxWidth: 260,
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
              Dr. Joe Rietow, DDS
            </Typography>
            <Typography color="text.secondary">Owner &amp; Dentist</Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Meet Dr. Joe
            </Typography>
            <Paragraph>
              I grew up in a small town in northwest Indiana called Knox. I moved to Indianapolis originally in
              2010 for undergraduate studies at IUPUI, where I obtained a bachelor's degree in exercise science in
              2015. I then continued my education at the Indiana University School of Dentistry in Indianapolis,
              where I obtained my Doctor of Dental Surgery (DDS) degree in 2019.
            </Paragraph>
            <Paragraph>
              I then practiced in Knox, Indiana for 3 years before relocating to Greenwood, Indiana in May of 2022
              and replacing Dr. Richard Gillum at Gillum Dentistry. I pride myself on excellent communication with
              patients so that they never leave an appointment uninformed while providing gentle, high quality
              family and cosmetic dentistry.
            </Paragraph>
          </Grid>
        </Grid>

        <PhotoRow photos={chairPhotos} onOpen={setOpenPhoto} />

        {/* Family */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Life Outside the Office
          </Typography>
          <Paragraph>
            My wife Rachel is a dental hygienist who also works part time at our office and full time as the mother
            of our two boys - Hudson and Brady. My two boys keep me awfully busy on a daily basis; however, in my
            free time I'm a huge sports fan and love to spend time golfing, lifting weights, and cheering for the
            Tampa Bay Buccaneers (sorry Colts fans!).
          </Paragraph>
          <PhotoRow photos={familyPhotos} onOpen={setOpenPhoto} />
        </Box>

        {/* Philosophy */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: 'grey.50',
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Our Philosophy
          </Typography>
          <Paragraph>
            We try our best to treat all of our patients like family because we quite literally have a huge amount
            of family members who are our regular patients, and we are always happy to include more.
          </Paragraph>
          <Paragraph>
            Our treatment philosophy revolves around providing as pain-free, stress-free, and long-lasting dental
            treatment as possible, all while giving the patient as many options as possible to choose which
            treatment may best suit their needs. Additionally, we understand that nearly EVERYONE hates numbing
            injections, and we pride ourselves on providing some of the most gentle numbing techniques possible -
            including use of sedatives when necessary. We also provide free nitrous oxide for numbing injections
            too!
          </Paragraph>
          <Paragraph>
            If you are on the fence about finding a new dentist, please consider giving our office a call and
            meeting our staff - it might just be the perfect fit!
          </Paragraph>
          <Button variant="contained" href={contactInfo.phoneLink}>
            Call {contactInfo.phone}
          </Button>
        </Box>

        {/* Staff */}
        <Typography variant="h4" sx={{ fontWeight: 700, mt: 8, mb: 3, textAlign: 'center' }}>
          Meet the Staff
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {staffMembers.map((staff) => (
            <Grid item xs={6} sm={4} md={3} key={staff.name}>
              <StaffCard name={staff.name} image={staff.image} />
            </Grid>
          ))}
        </Grid>

        <PhotoRow photos={staffPhotos} onOpen={setOpenPhoto} />
      </PageShell>
    </>
  );
};

export default TeamPage;
