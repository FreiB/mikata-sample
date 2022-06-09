import axios from 'axios';

export const apiClient = {
  verifyLogin: async (idToken: string) => {
    const res = await axios.post(
      'https://googlesigninapi.f7dev.com/api/auth/verifyGoogle',
      {
        idToken: idToken,
      }
    );
    return res;
  },
};
