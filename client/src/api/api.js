import axios from 'axios';

const queryBooklist = async ({ pagePerRequest, currentPage }) => {
  const booklist = await axios({
    method: 'GET',
    url: '/books',
    params: { pagePerRequest, currentPage },
  }).then((res) => res.data)
    .catch((e) => e.data.msg);
  return booklist;
};

const postPreorder = async ({ customerName, phoneNumber, bookId }) => {
  const orderDetails = await axios({
    method: 'POST',
    url: '/preorder',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      customerName,
      customerPhoneNumber: phoneNumber,
      bookId,
    }),
  }).then((res) => res.data)
    .catch((e) => e.data.msg);
  return orderDetails;
};

export {
  queryBooklist,
  postPreorder,
};
