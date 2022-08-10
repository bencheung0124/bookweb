/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Stack, Grid,
} from '@mui/material';
import BookGrid from './BookGrid';

export default function OrderDetailsGrid(props) {
  const { bookInfo } = props;
  const { orderDetails } = props;
  return (
    <Stack spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          The pre-order is created successfully:
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h6">
          {`Order Number: ${orderDetails.preorderId}`}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`Customer Name: ${orderDetails.customerName}`}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`Phone Number: ${orderDetails.customerPhoneNumber}`}
        </Typography>
      </Grid>
      <Grid item>
        <BookGrid bookInfo={bookInfo} />
      </Grid>
    </Stack>
  );
}
