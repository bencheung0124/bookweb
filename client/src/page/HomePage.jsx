/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import useBooklistSearch from '../customerHook/useBooklistSearch';
import BookGrid from '../component/BookGrid';

export default function HomePage() {
  const pagePerRequest = 20;
  const currency = 'HKD $';
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setPageNumber(0);
  }, []);

  const {
    books,
    hasMore,
    loading,
    errorMsg,
  } = useBooklistSearch(pagePerRequest, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <>
      {books.map((book, index) => {
        book.currency = currency;
        book.showAddButton = true;
        if (books.length === index + 1) {
          return (
            <div key={index} ref={lastBookElementRef}>
              <BookGrid bookInfo={book} />
            </div>
          );
        }
        return (
          <BookGrid key={index} bookInfo={book} />
        );
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{errorMsg && errorMsg}</div>
    </>
  );
}
