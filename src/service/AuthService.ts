type Data = {
  body: {
    token: string | null;
  };
  message: string;
  status: number;
};
export const login = async (email: string, password: string) => {
  const userData = {
    email,
    password,
  };
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(userData),
  });

  const responseJson = response.json();
  const data: Data = await responseJson;
  return data;
};
