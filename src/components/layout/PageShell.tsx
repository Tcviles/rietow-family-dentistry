import { ReactNode } from 'react';
import { Container, Divider, Paper, SxProps, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';

type PageShellProps = {
  title: string;
  children: ReactNode;
  paperSx?: SxProps<Theme>;
};

function PageShell({ title, children, paperSx }: PageShellProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 3,
          ...paperSx,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
          }}
        >
          {title}
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

        {children}
      </Paper>
    </Container>
  );
}

export default PageShell;
