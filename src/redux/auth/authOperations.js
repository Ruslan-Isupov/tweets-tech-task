import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6458f27d8badff578eff9149.mockapi.io/';

export const fetchTweets = createAsyncThunk(
  'auth/fetchTweets',
  async (numberPage, thunkAPI) => {
    try {
      const response = await axios.get('/tweets', {
        params: {
          p: `${numberPage}`,
          l: 3,
        },
      });

      return response.data;
    } catch (e) {
      Notiflix.Notify.failure('Bad Request! Try It again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
