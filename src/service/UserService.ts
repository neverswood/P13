type DataProfile = {
  body: {
    createdAt: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    updatedAt: string;
    message: string;
    status: number;
  };
};
export const getProfile = async (token: string) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  const responseJson = response.json();
  const data: DataProfile = await responseJson;
  return data.body;
};

export const putProfile = async (
  token: string,
  firstName: string,
  lastName: string
) => {
  const userData = {
    firstName,
    lastName,
  };
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

  const responseJson = response.json();
  const data: DataProfile = await responseJson;

  return data.body;
};
