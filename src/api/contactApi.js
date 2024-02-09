import axios from 'axios';
const BASE_URL = 'https://65c63eb3e5b94dfca2e142a3.mockapi.io/api/v1/contacts';

export const requestFetchContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  console.log(data);
  return data;
};

const contactsInstance = axios.create({
  baseURL: 'https://65c63eb3e5b94dfca2e142a3.mockapi.io/api/v1/contacts',
});

// export const requestFetchContacts = async () => {
//   const { data } = await contactsInstance.get('/');
//   console.log(data);
//   return data;
// };

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};
export const requestDeleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};

// async function searchImg(search, page) {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '40910000-bc8f7501355e0c431b692ba0e';

//     const { data } = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//     );
//     // console.log(data);
//     return data;
//   }
//   export default searchImg;
