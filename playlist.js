const playlistInput = document.querySelector('input');
const songButton = document.querySelector('button');
const songList = document.querySelector('.song-list');

songButton.addEventListener('click', function() {
    const playlistInput = input.value;
    const song = document.createElement('li');
    song.className = 'song';
    song.innerText = playlistInput;
    songList.appendChild(song);
});
