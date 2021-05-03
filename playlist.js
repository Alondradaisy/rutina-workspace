const input = document.querySelector('input');
const songButton = document.querySelector('button');
const songList = document.querySelector('.song-list');

songButton.addEventListener('click', function() {
    const playlistInput = input.value;
    const song = document.createElement('li');
    song.className = 'song';
    song.innerText = playlistInput;

    songList.appendChild(song);
});

const clearButton = document.getElementById('clear-songs');
clearButton.addEventListener('click', function(event) {
    event.target.style = 'none';
    songList.innerText = ''; 
    console.log('its working')
})