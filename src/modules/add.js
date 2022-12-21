const addFunc = async (usr, scr) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EeYWP4zCOnVuHLR8pvoH/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: usr,
        score: scr,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  return data;
};

export default addFunc;
