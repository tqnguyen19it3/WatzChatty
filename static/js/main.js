function startRecording(button) {
    recorder && recorder.record();
    button.disabled = true;
    button.nextElementSibling.disabled = false;
    __log('Recording...');
  }

  function stopRecording(button) {
    recorder && recorder.stop();
    button.disabled = true;
    button.previousElementSibling.disabled = false;
    __log('Stopped recording.');
    
    // create WAV download link using audio data blob
    createDownloadLink();
    
    recorder.clear();
  }

  function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
      var url = URL.createObjectURL(blob);
      var li = document.createElement('li');
      var au = document.createElement('audio');
      var hf = document.createElement('a');
      
      au.controls = true;
      au.src = url;
      hf.href = url;
      hf.download = new Date().toISOString() + '.wav';
      hf.innerHTML = hf.download;
      li.appendChild(au);
      li.appendChild(hf);
      $('#recordingslist').append(li);
    });
  }
// ============================================
// full screen
// zoom btn
var html = document.querySelector('html')
const zoomBtn = document.querySelector('#zoom');
zoomBtn.onclick = (e) =>{
    e.stopPropagation()
    var isFullScreen = document.fullscreenElement
    if(isFullScreen === null){
        html.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
}

// day night video switch day night
const switchBtn = document.querySelector('#switch-btn')
let dayVideo = document.querySelector('#day-video')
let nightVideo = document.querySelector('#night-video')
switchBtn.addEventListener('click', (e) =>{e.stopPropagation()})
switchBtn.onchange = (e) =>{
    if(e.target.checked){
        dayVideo.style.opacity = 1;
        nightVideo.style.opacity = 0;
    }else {
        nightVideo.style.opacity = 1;
        dayVideo.style.opacity = 0;
    }
}
// ============================================

// ==========================================
// music
let musicTypes = document.querySelectorAll('.mood-icons--btn')
let musicGenre = 'lofi'
musicTypes.forEach(function(type){
    type.onclick = function(){
        document.querySelector('.mood-icons--btn.btn--active').classList.remove('btn--active')
        this.classList.add('btn--active')
        musicGenre = this.getAttribute('data-music')
        if(musicGenre === 'lofi'){
            mainAudio.setAttribute('src',`${mainMusic[0][0]}`)
        }
        mainAudio.play()
        changeToPauseBtn()
        renderRandomIcon()
    }
})
const mainMusic =[
    ['./static/mainmusic/lofi1.mp3','./static/mainmusic/lofi2.mp3','./static/mainmusic/lofi3.mp3','./static/mainmusic/lofi4.mp3','./static/mainmusic/lofi5.mp3']]
let playBtn = document.querySelector('#play-btn')
let pauseBtn = document.querySelector('#pause-btn')
let mainAudio = document.querySelector('#main-audio')

// change icon
function changeToPauseBtn () {
    playBtn.style.display = "none"
    pauseBtn.style.display = "block"
}
function changeToPlayBtn () {
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"
}
// play pause button
playBtn.onclick = function(e) {
    e.stopPropagation()
    changeToPauseBtn()
    // set up music
    mainAudio.play()
}
pauseBtn.onclick = function(e) {
    e.stopPropagation() 
    changeToPlayBtn()
    // set up music
    mainAudio.pause()
}
// next button previous button
let nextButton = document.querySelector('#next-btn')
let prevButton = document.querySelector('#prev-btn')
nextButton.onclick = function(e) {
    e.stopPropagation()
    playNextSong()
}
prevButton.onclick = function(e) {
    e.stopPropagation()
    playPrevSong()
}
// next song previous song function
function playNextSong() {
        if(musicGenre === 'lofi'){
            let currentMusic = mainMusic[0].indexOf(mainAudio.getAttribute('src'))
            if(currentMusic !==mainMusic[0].length-1){
                mainAudio.setAttribute('src', mainMusic[0][currentMusic+1])
            }else {
                mainAudio.setAttribute('src', mainMusic[0][0])
            }
        }
        // play
        changeToPauseBtn()
        mainAudio.play()
        renderRandomIcon()

}
function playPrevSong() {
    if(musicGenre === 'lofi'){
        let currentMusic = mainMusic[0].indexOf(mainAudio.getAttribute('src'))
        if(currentMusic !==0){
            mainAudio.setAttribute('src', mainMusic[0][currentMusic-1])
        }else {
            mainAudio.setAttribute('src', mainMusic[0][mainMusic[0].length-1])
        }
    }
    // play
    changeToPauseBtn()
    mainAudio.play()
    renderRandomIcon()
}
// end music
// ==========================================
