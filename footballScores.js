// hackajob challenge - football scores
// stuck in getting the function to return the goals scored outside the https api call, restricted in using https by hackajob environment
// works and gives the correct answer but only as a console log

const https = require('https');

function run(team) {
  function getGoalsForTeam(team, callback) {
    https
      .get(
        'https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/football_session/football.json',
        (resp) => {
          let data = '';

          resp.on('data', (chunk) => {
            data += chunk;
          });

          resp.on('end', () => {
            const jsonData = JSON.parse(data);
            let goals = 0;
            for (let i = 0; i < jsonData.rounds.length; i++) {
              for (let j = 0; j < jsonData.rounds[i].matches.length; j++) {
                if (jsonData.rounds[i].matches[j].team1.key === team) {
                  goals += jsonData.rounds[i].matches[j].score1;
                }
                if (jsonData.rounds[i].matches[j].team2.key === team) {
                  goals += jsonData.rounds[i].matches[j].score2;
                }
              }
            }
            callback(null, goals);
          });
        }
      )
      .on('error', (err) => {
        callback(err, null);
      });
  }

  getGoalsForTeam('arsenal', (err, goals) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${goals} goals scored.`);
      return goals;
    }
  });
}

console.log(run('arsenal'));
