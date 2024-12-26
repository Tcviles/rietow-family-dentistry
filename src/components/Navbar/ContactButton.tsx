import { Button, Typography } from "@mui/material";
import { tss } from "tss-react";

const useStyles = tss.create({
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    background: '#999',
    borderRadius: '10px',
    color: 'white'
  },
  buttonText: {
    fontSize: '14px',
    textTransform: 'none'
  }
});

export default function ContactButton({ link, text }: { link: string, text: string }) {
  const { classes } = useStyles();

  return (
    <Button href={link} className={classes.textContainer}>
      <Typography className={classes.buttonText}>{text}</Typography>
    </Button>
  );
}
