import { Box, Typography } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        minHeight: '70px',
        width: '100%',
        marginTop: '10px'
    },
    footerText: {
        color: '#9c9c9c',
        padding: '20px 25px'
    },
    textLeft: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white'
    },
    textRight: {
        fontSize: '13px',
        textAlign: 'end'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
})

function Footer() {
    const { classes } = useStyles()

    return (
        <Box className={classes.footer}>
            <Box className={classes.footerText}>
                <Typography className={classes.textLeft}>Rietow Family Dentistry</Typography>
            </Box>

            <Box className={classes.footerText}>
                <Typography className={classes.textRight}>@2024 All Rights Reserved </Typography>
                <Typography className={classes.textRight}>Developed and maintained by <a href='https://tviles.com' className={classes.link} target='_blank' rel='noreferrer'>Tcviles</a></Typography>
            </Box>
        </Box>
    )
}
export default Footer
