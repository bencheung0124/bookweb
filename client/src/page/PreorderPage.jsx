import React from 'react';
import PreorderGrid from '../component/PreorderGrid';

export default function PreorderPage() {
  const bookInfo = JSON.parse(sessionStorage.getItem('bookInfo'));

  return (
    <PreorderGrid bookInfo={bookInfo} />
  );
}
