import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet';

const staffMembers = [
  { name: 'Bethany', image: require('../media/staff-pics/DanaHeadshot.png') },
  { name: 'Chelsea', image: require('../media/staff-pics/GloriaHeadshot.png') },
  { name: 'Dana', image: require('../media/staff-pics/DanaHeadshot.png') },
  { name: 'Gloria', image: require('../media/staff-pics/GloriaHeadshot.png') },
  { name: 'Kim', image: require('../media/staff-pics/KimHeadshot.png') },
  { name: 'Lisa', image: require('../media/staff-pics/GloriaHeadshot.png') },
  { name: 'Libby', image: require('../media/staff-pics/KimHeadshot.png') },
  { name: 'Rachel', image: require('../media/staff-pics/DanaHeadshot.png') },
  { name: 'Tracie', image: require('../media/staff-pics/KimHeadshot.png') },
];

const StaffCard = ({ name, image }: { name: string; image: string }) => (
  <Card
    sx={{
      textAlign: 'center',
      boxShadow: 1,
      borderRadius: 2,
      transition: '0.2s ease-in-out',
      border: '2px solid #444',
      '&:hover': {
        boxShadow: 4,
        transform: 'translateY(-4px)',
      },
    }}
  >
    <Grid p={{ xs: 1.5, md: 2 }}>
      <Avatar
        alt={name}
        src={image}
        sx={{
          width: { xs: 60, sm: 90, md: 100 },
          height: { xs: 60, sm: 90, md: 100 },
          margin: 'auto',
          border: '2px solid #ddd',
        }}
      />
      <Typography
        variant="body1"
        sx={{ marginTop: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}
      >
        {name}
      </Typography>
    </Grid>
  </Card>
);

const TeamPage = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

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

      {/* Image Modal */}
      <Modal open={!!modalImage} onClose={() => setModalImage(null)}>
        <Box
          onClick={() => setModalImage(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.85)',
            cursor: 'pointer',
          }}
        >
          <Box
            component="img"
            src={modalImage || ''}
            alt="Full Image"
            sx={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              borderRadius: 2,
              boxShadow: 5,
            }}
          />
        </Box>
      </Modal>

      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontStyle: 'italic',
              fontWeight: 600,
              mb: 1,
              textAlign: 'center',
            }}
          >
            Meet the Staff
          </Typography>

          <Divider
            sx={{
              width: 60,
              borderBottomWidth: 3,
              borderColor: 'primary.main',
              mx: 'auto',
              my: 3,
            }}
          />

          {/* Dr. Joe Bio */}
          <Box sx={{ mb: 6 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={require('../media/JoeHeadshot1x1.png')}
                  alt="Dr. Joe Rietow"
                  sx={{
                    width: '100%',
                    maxWidth: 240,
                    borderRadius: '50%',
                    mx: 'auto',
                    display: 'block',
                    cursor: 'pointer',
                  }}
                  onClick={() =>
                    setModalImage(require('../media/JoeHeadshot1x1.png'))
                  }
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography paragraph>
                  I grew up in a small town in northwest Indiana called Knox. I moved to Indianapolis originally in 2010 for undergraduate studies at IUPUI where I obtained a bachelor's degree in exercise science in 2015. I then continued my education at the Indiana University School of Dentistry in Indianapolis where I obtained my Doctor of Dental Surgery (DDS) Degree in 2019.
                </Typography>
                <Typography paragraph>
                  I then practiced in Knox, Indiana for 3 years before relocating to Greenwood, Indiana in May of 2022 and replacing Dr. Richard Gillum at Gillum Dentistry. I pride myself on excellent communication with patients so that they never leave an appointment uninformed while providing gentle, high quality family and cosmetic dentistry.
                </Typography>
                <Typography paragraph>
                  My wife Rachel is a dental hygienist who also works part time at our office and full time as the mother of our two boys - Hudson and Brady. My two boys keep me awfully busy on a daily basis; however in my free time I'm a huge sports fan and love to spend time golfing, lifting weights, and cheering for the Tampa Bay Buccaneers (sorry Colts fans!).
                </Typography>
                <Typography paragraph>
                  We try our best to treat all of our patient's like family because we quite literally have a huge amount of family members who are our regular patients and we are always happy to include more.
                </Typography>
                <Typography paragraph>
                  Our treatment philosophy revolves around providing as pain-free, stress-free, and long-lasting dental treatment as possible—all while giving the patient as many options as possible to choose what best suits their needs. We understand that nearly everyone hates numbing injections and we pride ourselves on providing some of the most gentle numbing techniques possible—including the use of sedatives when necessary. We also provide free nitrous oxide for numbing injections!
                </Typography>
                <Typography paragraph>
                  If you are on the fence about finding a new dentist, please consider giving our office a call and meeting our staff—it might just be the perfect fit!
                </Typography>
              </Grid>
            </Grid>

            {/* Family Images */}
            <Box
              sx={{
                overflowX: 'auto',
                display: 'flex',
                gap: 2,
                mt: 4,
                pb: 2,
                pl: { xs: 2, md: 0 },
                justifyContent: { xs: 'flex-start', md: 'center' },
              }}
            >
              {[...Array(4)].map((_, i) => {
                const src = require(`../media/joe-with-family/image${i + 1}.png`);
                return (
                  <Box
                    key={`fam-${i}`}
                    component="img"
                    src={src}
                    alt={`With Family ${i + 1}`}
                    onClick={() => setModalImage(src)}
                    sx={{
                      borderRadius: 2,
                      height: 250,
                      flex: '0 0 auto',
                      objectFit: 'cover',
                      width: 'auto',
                      maxWidth: 300,
                      cursor: 'pointer',
                      transition: '0.2s',
                      '&:hover': { opacity: 0.85 },
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          {/* Staff Cards */}
          <Grid container spacing={4} justifyContent="center">
            {staffMembers.map((staff) => (
              <Grid item xs={6} md={3} key={staff.name}>
                <StaffCard name={staff.name} image={staff.image} />
              </Grid>
            ))}
          </Grid>

          {/* Patient Images */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" fontWeight={600} textAlign="center" mb={2}>
              Moments at the Office
            </Typography>
            <Box
              sx={{
                overflowX: 'auto',
                display: 'flex',
                gap: 2,
                mt: 4,
                pb: 2,
                pl: { xs: 2, md: 0 },
                justifyContent: { xs: 'flex-start', md: 'center' },
              }}
            >
              {[...Array(3)].map((_, i) => {
                const src = require(`../media/joe-with-patient/image${i + 1}.png`);
                return (
                  <Box
                    key={`patient-${i}`}
                    component="img"
                    src={src}
                    alt={`With Patient ${i + 1}`}
                    onClick={() => setModalImage(src)}
                    sx={{
                      borderRadius: 2,
                      height: 300,
                      flex: '0 0 auto',
                      objectFit: 'cover',
                      width: 'auto',
                      maxWidth: 300,
                      cursor: 'pointer',
                      transition: '0.2s',
                      '&:hover': { opacity: 0.85 },
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          {/* Staff Group Images */}
          <Box sx={{ mt: 4 }}>
            <Box
              sx={{
                overflowX: 'auto',
                display: 'flex',
                gap: 2,
                mt: 4,
                pb: 2,
                pl: { xs: 2, md: 0 },
                justifyContent: { xs: 'flex-start' },
              }}
            >
              {[...Array(5)].map((_, i) => {
                const src = require(`../media/joe-with-staff/image${i + 1}.png`);
                return (
                  <Box
                    key={`staff-pic-${i}`}
                    component="img"
                    src={src}
                    alt={`With Staff ${i + 1}`}
                    onClick={() => setModalImage(src)}
                    sx={{
                      borderRadius: 2,
                      height: 200,
                      flex: '0 0 auto',
                      objectFit: 'cover',
                      width: 'auto',
                      maxWidth: 300,
                      cursor: 'pointer',
                      transition: '0.2s',
                      '&:hover': { opacity: 0.85 },
                    }}
                  />
                );
              })}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default TeamPage;
