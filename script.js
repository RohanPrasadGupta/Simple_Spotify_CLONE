// console.log('welcome to the script.js file')

// let songIndex =0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));




// let songs= [{songName:'Jai Shree Ram', filePath:'songs/1.mp3',coverPath:'cover/cover1.jpg'},
//             {songName:'See-You-Again', filePath:'songs/See-You-Again.mp3',coverPath:'cover/seeyou.jpg'},
//             {songName:'Akon - Lonely', filePath:'songs/Akon - Lonely.mp3',coverPath:'cover/lonely.jpeg'},
//             {songName:'Ami Je Tomar', filePath:'songs/Ami Je Tomar.mp3',coverPath:'cover/Ami Je Tomar.jpg'},
//             {songName:'Dev Theme - Brahmastra', filePath:'songs/Dev Theme - Brahmastra.mp3',coverPath:'cover/Dev Theme.jpg'},
//             {songName:'Tere Hawaale', filePath:'songs/Tere Hawaale.mp3',coverPath:'cover/Tere Hawaale.jpg'}
            
// ]


// songItems.forEach((element,i)=>{
//     // console.log(element,i);
//     element.getElementsByTagName('img')[0].src = songs[i].coverPath;
//     element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
// })

// // audioElement.play()


// //Handeling play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused|| audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-pause-circle');
//         // gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-circle-play');
//         // gif.style.opacity = 0;
//     }
// })

// audioElement.addEventListener('timeupdate',()=>{
//     // console.log('timeupdate')//
//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//     // console.log(progress);
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime = myProgressBar.value*audioElement.duration/100; 
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         // console.log(e.target)
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex-1].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-pause-circle');
//     })

// })

// document.getElementById('next').addEventListener('click',()=>{
//     if(songItems>=9){
//         songIndex = 0;
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex+1].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songItems<=0){
//         songIndex = 0;
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex-1}.mp3`;
//     masterSongName.innerText = songs[songIndex+1].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-pause-circle');

// })




let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));




let songs= [{songName:'Jai Shree Ram', filePath:'songs/1.mp3',coverPath:'cover/cover1.jpg'},
            {songName:'See-You-Again', filePath:'songs/2.mp3',coverPath:'cover/seeyou.jpg'},
            {songName:'Akon - Lonely', filePath:'songs/3.mp3',coverPath:'cover/lonely.jpeg'},
            {songName:'Ami Je Tomar', filePath:'songs/4.mp3',coverPath:'cover/Ami Je Tomar.jpg'},
            {songName:'Dev Theme - Brahmastra', filePath:'songs/5.mp3',coverPath:'cover/Dev Theme.jpg'},
            {songName:'Tere Hawaale', filePath:'songs/6.mp3',coverPath:'cover/Tere Hawaale.jpg'}
            
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
        // gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
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
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
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