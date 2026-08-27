import {getGames,getGameById,getCommentsOfGame} from './api-handler.js';
import {generateCommentSnippet, generateGameSnippet} from './functions.js';



export async function drawListGames() {
    let games = await getGames();
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'games-list');
    newDiv.setAttribute('class', 'row');
    document.getElementById('games').appendChild(newDiv);

    var i = 0;
    for (i; i < games.length; i++) {
      let snippetContainer = document.createElement('div');
      snippetContainer.setAttribute('class', 'col-6 col-sm-3');

      document.getElementById('games-list')
      .appendChild(snippetContainer).innerHTML = generateGameSnippet(games[i]);
    }
}

(async () => {
  await drawListGames();
})();
