import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.0.117:3000',
});

const save = async (username, email, password) => {
  const data = { username, email, password };
  const url = "http://10.0.0.117:3000/usuarios";

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    console.error('Error:', error);
  }
};

export default save;