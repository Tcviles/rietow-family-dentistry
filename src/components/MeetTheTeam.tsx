import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';

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
  <Card sx={{ textAlign: 'center', boxShadow: 'none' }}>
    <CardContent>
      <Avatar
        alt={name}
        src={image}
        sx={{ width: 120, height: 120, margin: 'auto' }}
      />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {name}
      </Typography>
    </CardContent>
  </Card>
);

const MeetTheStaff: React.FC = () => (
  <div>
    <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 2 }}>
      Meet the Staff
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {staffMembers.map((staff) => (
        <Grid item xs={12} sm={6} md={3} key={staff.name}>
          <StaffCard name={staff.name} image={staff.image} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default MeetTheStaff;
