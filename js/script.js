const downloadUrl = document.querySelector('.url');
const mainAudio = document.querySelector('#main-audio');
const playPauseButtons = document.querySelectorAll('.play-pause-button');
const error = document.querySelector('.error');
const backArrow = document.querySelector('.back-arrow');
const forwardArrow = document.querySelector('.forward-arrow');
const progress = document.querySelector('.progress');
const progressBarPlayed = document.querySelector('.progress__played');
let playingAlbumThumb = document.querySelector('.playing-album__thumb-img');
let playingAlbumTitle = document.querySelector('.playing-album__title');
let playingAlbumArtist = document.querySelector('.playing-album__artist');
let playingAlbumGenre = document.querySelector('.playing-album__genre');
let timePassed = document.querySelector('.time__passed');
let timeAll = document.querySelector('.time__all');
let searchInput = document.getElementById('search-input');
let collection = document.querySelector('.song-list').children; // живая коллекция всех песен в открытом альбоме
let albumSongsCollection; // живая коллекция всех песен в открытом альбоме, создаем при клике на альбом


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
   item.addEventListener('click', makeAlbumActive);
})


function makeAlbumActive() {
   albums.forEach(album => {
      album.classList.remove('active');
   })
   this.classList.add('active');
}


function loadSongs() {
   // показать инфо о текущем альбоме
   showCurrentAlbum();
   createAlbumSongsCollection(); 
   songsArray = [];

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
      createSongsArray(albumsObj[albumId].songs[song].src);
   }   
}


function createAlbumSongsCollection() {
   albumSongsCollection = document.querySelector('.song-list').children;
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
   checkSongArray(songSrc);
}


// создаем массив с src песен открытого альбома
let songsArray = [];

function createSongsArray(songSrc) {
   songsArray.push(songSrc);
}

let playingSongIndex;

//проверяем, какая песня из массива сейчас играет
function checkSongArray(songSrc) {
   playingSongIndex = songsArray.indexOf(songSrc);
}

// ловим клики на back / forward arrows
forwardArrow.addEventListener('click', playNextSong);
backArrow.addEventListener('click', playPrevSong);


function playNextSong() {
   albumSongsCollection[playingSongIndex+1].querySelector('.play-pause-button').click();
}
function playPrevSong() {
   albumSongsCollection[playingSongIndex-1].querySelector('.play-pause-button').click();
}
// остановить все воспроизведение, когд азакончится последняя песня
function stopSongs() {
   for (let i = 0; i < collection.length; i++) {
      collection[i].classList.add('paused');
      collection[i].classList.remove('playing');
      collection[i].firstElementChild.classList.add('paused');
      collection[i].firstElementChild.classList.remove('playing');
   }
   mainAudio.pause();
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
   if (playingSongIndex != (songsArray.length-1)) {
      if (currentTime == mainAudio.duration) {
         console.log('конец песни');
         playNextSong();
      }
   } else {
      if (currentTime == mainAudio.duration) {
         console.log('конец альбома');
         stopSongs();
      }
   } 
})



// фильтр альбомов по названию
searchInput.addEventListener('keydown', function(event) {
   if (event.code == 'Enter' || event.code == 'NumpadEnter') {
      const albums = document.querySelectorAll('.album');
      
      let searchValue = searchInput.value.toLowerCase();
      let i = 0;

      albums.forEach(album => {
         if (album.classList.contains('hide')) {
            album.classList.remove('hide');
         }

         let dataAlbumName = album.getAttribute('data-albumName');
         
         if (dataAlbumName.slice(0, searchValue.length) !== searchValue) {
            album.classList.add('hide');
            i++;
         }
      })

      if (albums.length == i) {
         error.classList.add('show');
         setTimeout(hideError, 2000);
      }
   }
})


function hideError() {
   error.classList.remove('show');
}


// перемотка по прогресс бару
progress.addEventListener('click', function(e) {
   let progressWidthVal = progress.clientWidth;
   let clickedOffsetX = e.offsetX;
   let songDuration = mainAudio.duration;

   mainAudio.currentTime = (clickedOffsetX / progressWidthVal) * songDuration;
})