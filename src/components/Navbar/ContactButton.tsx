import { Button, Typography } from "@mui/material";
import { tss } from "tss-react";

const useStyles = tss.create({
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    background: '#999',
    borderRadius: '10px',
    height: '100%',
    color: 'white',
    width: '100%',
    fontSize: '10px',
    textTransform: 'none',  // Ensures the text is not in all caps
  },
  buttonText: {
    fontSize: '16px',  // Slightly smaller text size
    textTransform: 'none',  // Prevent all caps
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
