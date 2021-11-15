const downloadUrl = document.querySelector('.url');
const mainAudio = document.querySelector('#main-audio');
const playPauseButtons = document.querySelectorAll('.play-pause-button');
let playingAlbumThumb = document.querySelector('.playing-album__thumb-img');
let playingAlbumTitle = document.querySelector('.playing-album__title');
let playingAlbumArtist = document.querySelector('.playing-album__artist');
let playingAlbumGenre = document.querySelector('.playing-album__genre');
let timePassed = document.querySelector('.time__passed');
let timeAll = document.querySelector('.time__all');
let progressBarPlayed = document.querySelector('.progress__played');
let searchInput = document.getElementById('search-input');
let collection = document.querySelector('.song-list').children; // живая коллекция песен, добавленных динамически



// ===========  Firebase  ===========

let storage = firebase.storage();
// создаем ссылку на Firebase Storage
let storageRef = firebase.storage().ref();

function getUrl(link) {
   // создаем ссылку на нужный файл
   let songUrlRef = storageRef.child(link);
   // Get the download URL
   songUrlRef.getDownloadURL()
   .then((url) => {
   playAudio(url);
   })
   .catch((error) => {
      alert(error.message); 
   });
}

// ===========  Firebase конец  ===========



// ловим клик на динамически добавленных кнопках play-pause-button
document.addEventListener('click', function(e) {
   if (e.target.classList.contains('play-pause-button')) {
      if (e.target.parentNode.parentNode.classList.contains('playing')) {
         pauseSong(e.target);
      } else {
         playSong(e.target);
      }
   }
})



// кликом по альбому загружаем список песен
let albums = document.querySelectorAll('.album');
albums.forEach(item => {
   item.addEventListener('click', loadSongs);
})




function loadSongs() {
   // показать инфо о текущем альбоме
   showCurrentAlbum();

   const songList = document.querySelector('.song-list');
   let albumId = this.getAttribute('data-albumId');
   
   songList.innerHTML = '';
   songList.classList.remove('hidden');

   // for (let item in albumsObj) {
   let album = albumsObj[albumId];
   let albumSongs = album.songs;
   const songArtist = album.artist;
   const albumTitle = album.title;
   const songThumb = album.thumb;

   // инфо о текущем альбоме
   playingAlbumThumb.src = `img/thumbs/${songThumb}`;
   playingAlbumTitle.innerHTML = album.title;
   playingAlbumArtist.innerHTML = songArtist;
   playingAlbumGenre.innerHTML = album.genre;

   for (let song in albumSongs) {
      const songNumber = song;
      const songTitle = albumSongs[song].name; 
      const songTime = albumSongs[song].duration;

      // добавляем data-aтрибут с src к каждой песне
      let songSrc = albumSongs[song].src;
      
      let songTemplate = `
         <div class="song-list__item song paused">
            <div class="playing-condition paused">
               <div class="song__number">${songNumber}</div>
               <div class="play-pause-button">
               </div>
               <div class="playing-anim">
                  <div class="playing-anim__item"></div>
                  <div class="playing-anim__item"></div>
                  <div class="playing-anim__item"></div>
                  <div class="playing-anim__item"></div>
               </div>
            </div>
            <span class="song__name" data-songSrc="${songSrc}">${songTitle}</span>
            <span class="song__artist">${songArtist}</span>
            <span class="song__time">${songTime}</span>
         </div>
      `;

      songList.insertAdjacentHTML('beforeend', songTemplate);
   } 
}


// показать инфо о текущем альбоме
function showCurrentAlbum() {
   const playingAlbum = document.querySelector('.playing-album');
   const visual = document.querySelector('.visual');
   playingAlbum.classList.remove('hidden');
   visual.classList.remove('hidden');
}


// включить песню
function playSong(elem) {
   for (let i = 0; i < collection.length; i++) {
      if (collection[i].classList.contains('playing'))
      collection[i].classList.add('paused');
      collection[i].classList.remove('playing');
      collection[i].firstElementChild.classList.add('paused');
      collection[i].firstElementChild.classList.remove('playing');
   }

   elem.parentNode.classList.remove('paused');
   elem.parentNode.parentNode.classList.remove('paused');
   elem.parentNode.classList.add('playing');
   elem.parentNode.parentNode.classList.add('playing');

   let songSrc = elem.parentNode.nextElementSibling.getAttribute('data-songSrc');
   getUrl(songSrc);
}


// выключить песню
function pauseSong(elem) {
   elem.parentNode.classList.remove('playing');
   elem.parentNode.parentNode.classList.remove('playing');
   elem.parentNode.classList.add('paused');
   elem.parentNode.parentNode.classList.add('paused');
   mainAudio.pause();
}


// играть аудио
function playAudio(url) {
   mainAudio.src = url;
   mainAudio.play();
}


let items = document.querySelectorAll('.song-list__item');
// console.log(items);


// текущая песня
mainAudio.addEventListener("timeupdate", (e) => {

   // изменяем прогрессбар
   const currentTime = e.target.currentTime;
   const duration = e.target.duration;
   let progressWidth = (currentTime / duration) * 100;
   progressBarPlayed.style.width = `${progressWidth}%`;

   mainAudio.addEventListener("loadeddata", () => {
      // изменяем общую продолжительность песни
      let audioDuration = mainAudio.duration;
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);
      if (totalSec < 10) {
         totalSec = `0${totalSec}`;
      }
      timeAll.innerHTML = `${totalMin}:${totalSec}`;
   })

   // изменяем текущее время проигрывания песни
   let currentMin = Math.floor(currentTime / 60);
   let currentSec = Math.floor(currentTime % 60);
   if (currentSec < 10) {
      currentSec = `0${currentSec}`;
   }
   timePassed.innerHTML = `${currentMin}:${currentSec}`;
})



// фильтр альбомов по названию
searchInput.addEventListener('keydown', function(event) {
   if (event.code == 'Enter' || event.code == 'NumpadEnter') {
      const albums = document.querySelectorAll('.album');
      let searchValue = searchInput.value.toLowerCase();

      albums.forEach(album => {
         if (album.classList.contains('hide')) {
            album.classList.remove('hide');
         }

         let dataAlbumName = album.getAttribute('data-albumName');
         
         if (dataAlbumName.slice(0, searchValue.length) !== searchValue) {
            album.classList.add('hide');
         }
      })
   }
})



