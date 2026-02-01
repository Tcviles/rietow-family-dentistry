import React, { useEffect, useMemo, useState } from 'react';
import { Alert, AlertTitle, Box, Button, Collapse, Link } from '@mui/material';

type AnnouncementBannerProps = {
  storageKey?: string;
};

const DEFAULT_KEY = 'rietow_site_announcement_dismissed_v1';

export default function AnnouncementBanner({ storageKey = DEFAULT_KEY }: AnnouncementBannerProps) {
  const [open, setOpen] = useState(false);

  const dismissed = useMemo(() => {
    try {
      return localStorage.getItem(storageKey) === '1';
    } catch {
      return false;
    }
  }, [storageKey]);

  useEffect(() => {
    // show banner unless previously dismissed
    if (!dismissed) setOpen(true);
  }, [dismissed]);

  const handleClose = () => {
    setOpen(false);
    try {
      localStorage.setItem(storageKey, '1');
    } catch {
      // ignore (private mode, etc.)
    }
  };

  return (
    <Collapse in={open}>
      <Box sx={{ width: '100%' }}>
        <Alert
          severity="info"
          variant="filled"
          sx={{
            borderRadius: 0,
            alignItems: 'center',
          }}
          action={
            <Button color="inherit" size="small" onClick={handleClose}>
              Dismiss
            </Button>
          }
        >
          <AlertTitle>Website update in progress</AlertTitle>
          Please be patient with us — our new site is still under construction. Thanks for your understanding!
          {/* Optional: link to contact */}
          {' '}
          <Link href="/contact" color="inherit" underline="always">
            Need to reach us?
          </Link>
        </Alert>
      </Box>
    </Collapse>
  );
}
