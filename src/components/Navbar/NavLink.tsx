import { Button, Typography } from "@mui/material";

export default function ContactButton({link, text}: {link: string, text: string}) {
  return (
    <Button href={link}>
      <Typography>{text}</Typography>
    </Button>
  )
}