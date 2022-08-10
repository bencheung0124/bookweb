import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function HeaderBar() {
  return (
    <Box
      position="sticky"
      top="0px"
      textAlign="left"
      bgcolor="#90EE90"
      marginBottom="10px"
      padding="10px"
      maxWidth="100%"
      minHeight="20px"
      zIndex="999"
    >
      <Link href="/" variant="h4">Home</Link>
    </Box>
  );
}
