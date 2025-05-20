import { Button } from "@mui/material";

export default function ContactButton({ link, text }: { link: string, text: string }) {
  return (
    <Button href={link} sx={{ textTransform: 'none' }}>
      {text}
    </Button>
  );
}
