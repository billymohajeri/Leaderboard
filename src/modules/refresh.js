const refreshFunc = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EeYWP4zCOnVuHLR8pvoH/scores',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = await response.json();

  //   Sorting the result based on the score
  data.result.sort((a, b) => b.score - a.score);

  const ul = document.getElementById('list-ul');
  ul.innerHTML = '';
  for (let index = 0; index < data.result.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = `${data.result[index].user}: ${data.result[index].score}`;
    ul.append(li);
  }
};

export default refreshFunc;
