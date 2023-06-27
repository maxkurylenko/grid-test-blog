import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const PAGES = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export default function Navbar() {
  return (
      <AppBar style={{backgroundColor: '#a5a3a3'}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">
                <Link href="/">
                  My blog site
                </Link>
              </Typography>
          </Box>
          <Box>
            {PAGES.map((page, i) => (
              <Link
                key={i}
                href={page.href}
              >
                <Button sx={{ color: 'white' }}>
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
  )
}