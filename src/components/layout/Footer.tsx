import { Box, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'black',
                minHeight: '70px',
                width: '100%',
                px: 3,
                flexWrap: 'wrap',
                overflow: 'hidden',        // 👈 helps avoid overflow
                boxSizing: 'border-box',   // 👈 ensures padding doesn't push width beyond 100%
            }}
        >

            {/* Left Text */}
            <Box sx={{ color: '#9c9c9c', py: 2 }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                    Rietow Family Dentistry
                </Typography>
            </Box>

            {/* Right Text */}
            <Box sx={{ color: '#9c9c9c', py: 2, textAlign: 'end' }}>
                <Typography sx={{ fontSize: '13px' }}>
                    © 2024 All Rights Reserved
                </Typography>
                <Typography sx={{ fontSize: '13px' }}>
                    Developed and maintained by{' '}
                    <Link
                        href="https://tviles.com"
                        target="_blank"
                        rel="noreferrer"
                        sx={{ color: 'white', textDecoration: 'none' }}
                    >
                        Tcviles
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;