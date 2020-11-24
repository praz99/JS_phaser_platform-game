const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pUSZ5NTzWWRBiQrQHoFp/scores'
const sendScore = (username, score) => {
  const data =(
    {
      "user": username,
      "score": score
    });
  // Send a post request
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
}

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