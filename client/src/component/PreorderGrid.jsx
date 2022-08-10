/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import {
  Typography, Stack, Grid, TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import BookGrid from './BookGrid';
import { postPreorder } from '../api/api';

export default function PreorderGrid(props) {
  const { bookInfo } = props;
  const [loading, setLoading] = React.useState(false);
  const [customerName, setCustomerName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [customerNameError, setCustomerNameError] = useState(false);
  const [customerNameLabel, setCustomerNameLabel] = useState('Customer Name');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberLabel, setPhoneNumberLabel] = useState('Phone Number');
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleCustomerNameChange = (e) => {
    if (typeof e.target.value !== 'undefined') {
      const pattern = /^[a-zA-Z\b]+$/;
      if (!pattern.test(e.target.value)) {
        setCustomerNameError(true);
        setCustomerNameLabel('Please enter correct customer name.');
      } else {
        setCustomerNameError(false);
        setCustomerNameLabel('Customer Name');
        setCustomerName(e.target.value);
      }
    }
  };

  const handlePhoneNumberChange = (e) => {
    if (typeof e.target.value !== 'undefined') {
      const pattern = /^[0-9\b]+$/;
      if (!pattern.test(e.target.value) || e.target.value.length !== 8) {
        setPhoneNumberError(true);
        setPhoneNumberLabel('Please enter valid phone number.');
      } else {
        setPhoneNumberError(false);
        setPhoneNumberLabel('Phone Number');
        setPhoneNumber(e.target.value);
      }
    }
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (customerName && phoneNumber) {
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      postPreorder({
        customerName,
        phoneNumber,
        bookId: bookInfo.bookId,
      }).then((res) => {
        if (res?.preorderDetails) {
          sessionStorage.setItem('orderDetails', JSON.stringify(res.preorderDetails));
          navigate('/orderdetails');
        }
        throw res?.msg;
      }).catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
    } else {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          You are going to pre-order the book:
        </Typography>
      </Grid>
      <Grid item>
        <BookGrid bookInfo={bookInfo} />
      </Grid>
      <Stack direction="row" spacing={4}>
        <TextField
          label={customerNameLabel}
          name="customerName"
          variant="outlined"
          inputProps={{ maxLength: 50 }}
          error={customerNameError}
          onChange={handleCustomerNameChange}
          autoComplete="off"
        />
        <TextField
          label={phoneNumberLabel}
          name="phoneNumber"
          variant="outlined"
          inputProps={{ maxLength: 8 }}
          error={phoneNumberError}
          onChange={handlePhoneNumberChange}
          autoComplete="off"
        />
        <LoadingButton
          variant="contained"
          size="small"
          loading={loading}
          loadingPosition="end"
          endIcon={<SendIcon />}
          onClick={handleSubmitButton}
        >
          Submit
        </LoadingButton>
      </Stack>
      {errorMsg && (
      <Grid item xs={12}>
        <Typography gutterBottom variant="h6" sx={{ color: 'red' }}>
          {errorMsg}
        </Typography>
      </Grid>
      )}
    </Stack>
  );
}
