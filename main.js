//! KEY API cCt4ccSuJnZEeSfQ2utofa4zf24ZDP3fcrnUEfGz //

/*  const { default: fetch } = require("node-fetch") */
 
//* import and use fetch *//

/* import fetch from "node-fetch"; */
/* import { markAsUntransferable } from 'worker_threads'; */
/* const answer = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${keyApi}`) */

const marsAsk = async (rover)=>{
    const information = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}&api_key=${keyApi}`)
    const info = await information.json()
    console.log(info)
}


var roverS =""
function selection(){
    let selectOptions = document.getElementById('selectOptions')
    roverS = selectOptions.value
    /* marsAsk(roverS) */
    console.log(roverS)
}

function selection2(){
    let selectOptions = document.getElementById('selectOptions2')
    var selcamera = selectOptions.value
    console.log(selcamera)
    mars(roverS,selcamera)
}

const keyApi = 'cCt4ccSuJnZEeSfQ2utofa4zf24ZDP3fcrnUEfGz'
const mars = async(rover,camera) =>{
    var answerPhotos = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?sol=1000&page=1&camera=${camera.toLowerCase()}&api_key=${keyApi}`)
    var {photos:photosMars} = await answerPhotos.json()
    var D = document.getElementById('tarjet')
    while(D.firstChild){
        D.removeChild(D.firstChild);
    }
    
    photosMars.forEach((photo) => {
        document.getElementById('tarjet').innerHTML += `
         <div class="relative border rounded shadow" id="son">
            <img src=${photo.img_src} alt=${photo.id} class="rounded"/>
            <div class="bg-white opacity-70 p-5 absolute bottom-0 text-black font-bold flex flex-col">
                <span>${photo.earth_date}</span>
                <span>${photo.camera.name}</span>
            </div>
         </div>        
         `
    })
    
}


















/* 
var image = document.createElement('img')
image.id = 'firstPhoto'
var imageURL = photosMars.photos[i].img_src
document.getElementById('tarjet').appendChild(image)
document.getElementById(image.id).src = imageURL
console.log(photosMars.photos[i].camera.full_name)
console.log(photosMars.photos[i].rover)
*/
























