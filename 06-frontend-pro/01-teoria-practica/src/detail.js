import {getGames,getGameById,getCommentsOfGame} from './api-handler.js';
import {generateCommentSnippet, generateGameSnippet} from './functions.js';

import $ from 'jquery';


export async function drawGame(gameId) {
  let game = await getGameById(gameId);
  document.getElementById('game-name-title').innerHTML = game.name;
  // TODO: #4 breadcrumb???? Let's use jQuery!!
  $( ".breadcrumb span" ).html( `Game ${game.id}` )

  document.getElementById('game-image').src = game.image;
  document.getElementById('game-image').alt = game.name;

  document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;
  document.getElementById('user-score').innerHTML = game.scores.userScore;

  document.getElementById('summary').innerHTML = game.summary;

  document.getElementById('platform').innerHTML = game.platform;
  document.getElementById('release-date').innerHTML = game.relaseDate;

}

// TODO: #2 Pedir ayuda para generateCommentSnippet
export async function drawComments(gameId) {
  console.log(gameId)
  let comments = await getCommentsOfGame(gameId);
  document.getElementById('comments')
      .appendChild(document.createElement('ul'))
      .setAttribute('id', 'comments-list');
  var i = 0;
  for (i; i < comments.length; i++) {
      document.getElementById('comments-list')
          .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);
  }
}

// https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
const gameId = parseInt((new URLSearchParams(window.location.search)).get('id'));
(async () => {
  await drawGame(gameId);
  await drawComments(gameId);
})();
