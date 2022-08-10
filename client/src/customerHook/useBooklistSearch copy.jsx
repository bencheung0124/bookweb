import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(pagePerRequest, currentPage) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [pagePerRequest]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: '/books',
      params: { pagePerRequest, currentPage },
      // eslint-disable-next-line no-return-assign
      cancelToken: new axios.CancelToken((c) => cancel = c),
    }).then((res) => {
      setBooks((prevBooks) => [...new Set([...prevBooks, ...res.data.booklist])]);
      setHasMore(res.data.booklist.length > 0);
      setLoading(false);
    }).catch((e) => {
      if (axios.isCancel(e)) return;
      setError(true);
    });
    return () => cancel();
  }, [currentPage]);

  return {
    loading, error, books, hasMore,
  };
}
