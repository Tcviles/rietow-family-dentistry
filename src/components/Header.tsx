import React from 'react';
import { Grid, Menu, MenuItem, Button, IconButton } from '@mui/material';
import { tss } from 'tss-react'
import MenuIcon from '@mui/icons-material/Menu'
import Contact from './Contact';

const useStyles = tss.create({
    headerContainer: {
        height: '14vh',
        width: '100vw !important',
        position: 'fixed',
        background: 'white',
    },
    servingYou: {
        fontFamily: 'Caveat, cursive',
        letterSpacing: '5px',
        background: '#999',
        color: 'white',
        height: '3vh',
        textAlign: 'center',
    },
    imageContainer: {
        maxWidth: '100%',
        padding: '5px',
        margin: '0 20px',
        '& img': {
            maxWidth: '100%',
            maxHeight: '10vh',
            height: 'auto',
        },
    },
    menuContainer: {
        maxWidth: '100%',
        padding: '5px',
        "@media (min-width: 1000px)": {
            display: "none",
        },
    },
    linkButtons: {
        color: 'black',
        padding: '5px',
    },
    links: {
        color: 'black',
        padding: '5px',
        "@media (max-width: 1000px)": {
            display: "none",
        },
    },
    contact: {
        padding: '15px',
        height: '100%',
        "@media (max-width: 750px)": {
            display: "none",
        },
    },
    innerContact: {
        padding: '5px',
        border: '2px solid #999',
        borderRadius: '5px',
        height: '100%',
        "@media (max-width: 750px)": {
            display: "none",
        },
    }
});

export type Page = {
    title: string,
    href: string
};

const pages: Page[] = [
    { title: 'Resume', href: '/resume' },
    { title: 'Portfolio', href: '/portfolio' },
];

function Header() {
    const { classes } = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Grid container className={classes.headerContainer}>
            <Grid container item xs={12} sm={8} justifyContent='space-between' alignContent='center'>
                <Grid item xs={4} md={5} className={classes.menuContainer}>
                    <IconButton size="large" onClick={handleOpenNavMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    className={classes.linkButtons}
                                >
                                    {page.title}
                                </Button>
                            </MenuItem>
                        ))}
                    </Menu>
                </Grid>
                <Grid item xs={6} className={classes.imageContainer}>
                    <img src={require('../media/Rietow DDS JPG.jpg')} alt='' />
                </Grid>
            </Grid>
            <Grid container item xs={6} className={classes.links}>
                {pages.map((page) => (
                    <Grid item key={page.title}>
                        <Button
                            key={page.title}
                            onClick={handleCloseNavMenu}
                            className={classes.linkButtons}
                        >
                            {page.title}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={2} sm={4} className={classes.contact}>
                <Contact />
            </Grid>
        </Grid>
    );
}

export default Header;
