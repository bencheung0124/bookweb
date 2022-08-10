import React from 'react';
import OrderDetailsGrid from '../component/OrdeDetailsGrid';

export default function OrderDetailsPage() {
  const bookInfo = JSON.parse(sessionStorage.getItem('bookInfo'));
  const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));
  return (
    <OrderDetailsGrid bookInfo={bookInfo} orderDetails={orderDetails} />
  );
}
