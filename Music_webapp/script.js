console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Unstoppable", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Coldplay - Hymn for the weekend", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Arcade", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hall of fame", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Gold - Tolan shaw", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "NCS Digital 1 ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "NCS digital Vol 2 release", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Theme start music", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Motivation BGM rock", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Insipiration fire BGM", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Let me down slowly", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "A thousand years", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Clear Bandit - Rockabye", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "CVRTOON - İzmir Marşı", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Hey mama", filePath: "songs/15.mp3", coverPath: "covers/15.png"},
    {songName: "DJ Snake let me love you", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Drake one dance", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Shape Of You", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Who do you love - eda & serkan", filePath: "songs/19.mp3", coverPath: "covers/19.webp"},
    {songName: "Ellie Goulding - love me like you do", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Believer", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "James Young Infinity", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "G Eazy - Good life", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Lenka - everything at once", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "Despacito", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Maroon 5 - girls", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "Sia - Cheap thrills", filePath: "songs/27.mp3", coverPath: "covers/27.webp"},
    {songName: "The Chainsmokers - Closed", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Into Your Arms", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "Eminem - Sing for the moment", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "Bones", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {songName: "My baby Love Your voice song", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {songName: "Calm Down", filePath: "songs/33.mp3", coverPath: "covers/33.webp"},
    {songName: "Wolves", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"},
    {songName: "serena safari", filePath: "songs/35.mp3", coverPath: "covers/35.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=35){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})