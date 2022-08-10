/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Grid, Paper, Typography, Button,
} from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxHeight: '100%',
});

export default function BookGrid(props) {
  const {
    _id, title, category, price, image, currency, showAddButton,
  } = props.bookInfo;
  const navigate = useNavigate();

  const handleClickAddButton = async (e) => {
    e.preventDefault();
    const bookDetails = {
      bookId: _id,
      title,
      category,
      price,
      image,
      currency,
      showAddButton: false,
    };
    sessionStorage.setItem('bookInfo', JSON.stringify(bookDetails));
    navigate('/preorders');
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: 600,
        marginBottom: 2,
        border: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        '&:hover': {
          backgroundColor: '#0ABAB5',
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Typography sx={{ width: 150, height: 150 }}>
            <Img alt="Book Logo" src={image} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs marginTop={2}>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Category:
                {' '}
                {category}
              </Typography>
            </Grid>
            {showAddButton
            && (
            <Grid item>
              <Button variant="contained" size="small" onClick={handleClickAddButton}>
                Add
              </Button>
            </Grid>
            )}
          </Grid>
          <Grid item marginTop={2}>
            <Typography component="div">
              {currency}
              {price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
