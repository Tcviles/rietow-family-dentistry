import { Button, Typography } from "@mui/material";

type ContactButtonProps = {
  link: string;
  text: string;
};

export default function ContactButton({ link, text }: ContactButtonProps) {
  return (
    <Button
      href={link}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999',
        borderRadius: '10px',
        color: 'white',
        textTransform: 'none',
        px: 2,
        '&:hover': {
          backgroundColor: '#777',
        }
      }}
    >
      <Typography sx={{ fontSize: 12 }}>{text}</Typography>
    </Button>
  );
}
