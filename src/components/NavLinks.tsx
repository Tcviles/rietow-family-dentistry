import React from 'react';
import { Button, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { tss } from 'tss-react'

const useStyles = tss.create({
    NavContainer: {
        background: '#DDD',
        border: '2px solid #999',
        borderRadius: '5px',
        height: '100%',
        minWidth: '100%'
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
    menuContainer: {
        maxWidth: '100%',
        padding: '5px',
        "@media (min-width: 1000px)": {
            display: "none",
        },
    },
})

export type Page = {
    title: string,
    href: string
};

const pages: Page[] = [
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
];

function NavLinks() {
    const { classes } = useStyles()

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Grid container className={classes.NavContainer}>
            <Grid item xs={12} justifyContent='space-between' alignContent='center'>
                <Grid item className={classes.menuContainer}>
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
            </Grid>
            <Grid item xs={12} className={classes.links}>
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
        </Grid>
    );
}

export default NavLinks;
