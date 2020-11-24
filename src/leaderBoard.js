const sendScore = (username, score) => {
  const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pUSZ5NTzWWRBiQrQHoFp/scores'
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

const showScore = () => {
  const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pUSZ5NTzWWRBiQrQHoFp/scores'
  // Send a GET request without any data to the server
  fetch(URL, {method: "GET"})
  // Get the JSON data from the raw response
    .then(res => res.json())
  // Print the result
    .then(console.log)
}

export { sendScore, showScore };