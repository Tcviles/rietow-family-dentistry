import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

interface StaffMember {
  name: string;
  image: string;
}

const staffMembers: StaffMember[] = [
  { name: 'Bethany', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Chelsea', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Dana', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Emme', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Gloria', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Kim', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Lisa', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Libby', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Rachel', image: require('../media/JoeHeadshot1x1.png') },
  { name: 'Tracie', image: require('../media/JoeHeadshot1x1.png') },
];

const StaffCard: React.FC<StaffMember> = ({ name, image }) => (
  <Card
    sx={{
      textAlign: 'center',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      transition: '0.2s ease-in-out',
      border: '2px solid #444',
      '&:hover': {
        boxShadow: 4,
        transform: 'translateY(-4px)',
      },
    }}
  >
    <CardContent>
      <Avatar
        alt={name}
        src={image}
        sx={{
          width: 100,
          height: 100,
          margin: 'auto',
          border: '2px solid #ddd',
        }}
      />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {name}
      </Typography>
    </CardContent>
  </Card>
);

const TeamPage: React.FC = () => (
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

      {/* Grid of Staff Cards */}
      <Grid container spacing={4} justifyContent="center">
        {staffMembers.map((staff) => (
          <Grid item xs={12} sm={6} md={3} key={staff.name}>
            <StaffCard name={staff.name} image={staff.image} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  </Container>
);

export default TeamPage;
