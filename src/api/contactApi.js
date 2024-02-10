import axios from 'axios';
const BASE_URL = 'https://65c63eb3e5b94dfca2e142a3.mockapi.io/api/v1';

export const fetchContactsAll = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  // console.log(data);
  // array
  return data;
};

export const fetchContactsAdd = async body => {
  const { data } = await axios.post(`${BASE_URL}/contacts`, body);
  // console.log(data);
  // array
  return data;
};

export const fetchContactsDelId = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  // console.log(id);
  return data;
};
