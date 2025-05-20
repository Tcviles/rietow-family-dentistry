import { Box, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // 👈 vertical on mobile, horizontal on tablet+
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                backgroundColor: 'black',
                minHeight: '70px',
                width: '100%',
                px: 3,
                py: 2,
                gap: 1, // 👈 adds spacing between top/bottom on mobile
                boxSizing: 'border-box',
            }}
        >


            {/* Left Text */}
            <Box sx={{ color: '#9c9c9c' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                    Rietow Family Dentistry
                </Typography>
            </Box>

            {/* Right Text */}
            <Box sx={{ color: '#9c9c9c', textAlign: { xs: 'left', sm: 'right' } }}>
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