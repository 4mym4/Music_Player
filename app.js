const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const songs = ['hey', 'summer', 'Ukelele']

let songIndex = 2

loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song
    audio.src = `Songs/${song}.wav`
    cover.src = `Project/${song}.jpg`

}

function playSong(){
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')
audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
}

function prevsong(){
    songIndex--

    if(songIndex<0){
        songIndex=songs.length -1

    }

    loadSong(songs[songIndex])
    playSong()
}

function nextsong(){
    songIndex++

    if(songIndex==songs.length){
        songIndex=0

    }

    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e){
    //console.log(e.srcElement.currentTime)
    const {duration, currentTime}=e.srcElement
    const progressPercent=(currentTime/duration)*100
    progress.style.width=`${progressPercent}%`
}

function setProgress(e){
    const width =this.clientWidth
    console.log(width)
    const clickX = e.offsetX
   // console.log(clickX)
   const duration=audio.duration
   audio.currentTime=(clickX/width)*duration
}


playBtn.addEventListener('click', () =>{
    const isPlaying=musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    }
    else {
        playSong()
    }
})

prevBtn.addEventListener('click', prevsong)
nextBtn.addEventListener('click', nextsong)
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextsong)
