const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pUSZ5NTzWWRBiQrQHoFp/scores';
const sendScore = async (name, score) => {
  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: Number(score) }),
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};

const showScore = async () => {
  const response = await fetch(URL, {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};

export { sendScore, showScore };