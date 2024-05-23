import { BASE_URL, API_KEY } from './config';

const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
};

export const fetchBreeds = async () => {
  try {
    const response = await fetch(`${BASE_URL}/breeds`, requestOptions);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCatByBreed = async breedId => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?breed_ids=${breedId}`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
