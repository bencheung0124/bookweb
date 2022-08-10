import { useEffect, useState } from 'react';
import { queryBooklist } from '../api/api';

export default function useBookSearch(pagePerRequest, currentPage) {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [pagePerRequest]);

  useEffect(() => {
    setLoading(true);
    setErrorMsg(null);
    queryBooklist({ pagePerRequest, currentPage }).then((res) => {
      if (res?.booklist) {
        setBooks((prevBooks) => [...new Set([...prevBooks, ...res.booklist])]);
        setHasMore(res.booklist.length > 0);
        setLoading(false);
      }
      throw res?.msg;
    }).catch((e) => {
      setLoading(false);
      setErrorMsg(e);
    });
  }, [currentPage]);

  return {
    loading, errorMsg, books, hasMore,
  };
}
