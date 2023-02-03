let gigi = document.querySelector('.quote')  //ASSIGNING THE SECTION INTENDED FOR TEXT GENERATION TO A VARIABLE
let butt = document.querySelector('.joke')   //ASSIGNING THE BUTTON INTENDED TO ACTIVATE THE FUNCTION

//ASSIGNING THE URL OF THE API TO A VARIABLE
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let joker = () => {
    //FETCHING THE API
    fetch(url)
    .then(dat => dat.json())      //LOADING THE RESULTS IN JSON
    .then(item => {
         gigi.textContent = `${item.joke}`   //LOADING THE JOKE TO THE DOM ELEMENT
        }).catch(()=>{
            gigi.textContent = "No Internet Connection"   //MESSAGE TO LOG TO THE DOM ELEMENT WHEN THERE IS AN ERROR IN RETRIEVING DATA
        }
        )
}

butt.addEventListener('click',joker)  //PROVIDING THE BUTTON THE FUNCTIONALITY OF ACTIVATING THE API FUNCTION

