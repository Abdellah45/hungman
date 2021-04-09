if (localStorage.getItem("loss")) {

} else {
  localStorage.setItem("loss", 0)
}

if (localStorage.getItem("win")) {

} else {
  localStorage.setItem("win", 0)
}


let win = localStorage.getItem("win");

let loss = localStorage.getItem("loss");


document.querySelector(".game_name span").innerHTML = loss;
document.querySelector(".category span").innerHTML = win;

const myLetters = "qwertyuiopasdfghjklzxcvbnm";

let randomWord = "";

let url = 'https://api.wordnik.com/v4/words.json/randomWords?' +
  'hasDictionaryDef=true' +
  '&minCorpusCount=0' +
  '&minLength=5' +
  '&maxLength=11' +
  '&limit=1' +
  '&api_key=a23a625ee3c10010f500a0a8e3c0c77c5969f550ddac408f3';
  
  

let myLettersArray = Array.from(myLetters);

let letterContainer = document.querySelector(".letters");


myLettersArray.forEach(letter => {
  let span = document.createElement("span");
  
  let spanText = document.createTextNode(letter);
  
  span.appendChild(spanText);
  
  span.className = "Letter_box";
  
  letterContainer.appendChild(span);
});


/*let allKeys = Object.keys(words);*/







let lettersGuss = document.querySelector(".letters_guess");

let worongNumber = 0;

let SuccessNumber = 0;

let level = "";

let hangDrow = document.querySelector(".hangman_drow");

let wordLetters = "";

fetch(url)
  .then(res => res.json())
  .then(out => {
    randomWord = out[0].word;

console.log(randomWord);

let wordLetters = Array.from(randomWord);

wordLetters.forEach(lett => {
  
  let emptySpan = document.createElement("span");
  
  if (lett == " ") {
    emptySpan.className = "has_space";
  }
  
  lettersGuss.appendChild(emptySpan);
});


let Spans = document.querySelectorAll(".letters_guess span");




document.addEventListener("click",function (e){
  
  let theStutos = false;
  
  if (e.target.classList.contains("Letter_box")) {
    e.target.classList.add("clicked");
    
    let clickedLett = e.target.innerHTML.toLowerCase();
    
    let WLetters = Array.from(randomWord.toLowerCase());
    
    WLetters.forEach((Lett,index) => {
      
      if (Lett == clickedLett) {
        
        theStutos = true;
        
        Spans.forEach((span,spanIn) => {
          
          if (spanIn == index) {
            
            span.innerHTML = Lett;
            
            SuccessNumber++;
          }
          
          

        });
        
      }
       
    });
    
    if (theStutos !== true) {
      
      worongNumber++;
      
      hangDrow.classList.add(`wrong-${worongNumber}`);
      if (worongNumber < 8) {
      document.getElementById("fail1").play();
      }
      if (worongNumber == 8) {
        endGame();
        document.querySelector(".container").style.opacity = ".4";
        document.getElementById("fail2").play();
        letterContainer.classList.add("finiched");
        localStorage.setItem("loss",parseInt(loss) + 1);
      }
    }else{
      
      let randomTrue = wordLetters.filter(sp => sp !== " ");
      
      if(SuccessNumber < randomTrue.length) {
      document.getElementById("sucess1").play();
      }
      
    
      if(SuccessNumber === randomTrue.length) {
        
        if (worongNumber <= 2) {
          level = "Professional";
        }
        if (worongNumber > 2 && worongNumber <= 5) {
          level = "Medium";
        }
        if (worongNumber > 5) {
          level = "Beginner";
        }
        
        GameWin();
        document.querySelector(".container").style.opacity = ".4";
        localStorage.setItem("win",parseInt(win) + 1);
        document.getElementById("sucess2").play();
        letterContainer.classList.add("finiched");
        
      }
    }
 //   console.log(level);
  }
  
  if (e.target.classList.contains("ok")){
    
    document.querySelector(".popup").remove();
    
    window.location.reload();
  }
  
});

});

function endGame() {
  
  let popupDiv = document.createElement("div");
  
  let button = document.createElement("span");
  
  let worspan = document.createElement("span");
  
  let textWord = document.createTextNode(randomWord);
  
  worspan.appendChild(textWord);
  
  worspan.className = "Word";
  
  let buttonText = document.createTextNode("Ok");
  
  let DivMsg = document.createTextNode("Game Over, Word is");
  
  button.appendChild(buttonText);
  button.className = "ok";
  popupDiv.appendChild(DivMsg);
  popupDiv.appendChild(worspan);
  popupDiv.appendChild(button);
  popupDiv.className = "popup";
  document.body.appendChild(popupDiv);
}

function GameWin() {

  let popupDiv = document.createElement("div");

  let button = document.createElement("span");

  let worspan = document.createElement("span");
  
  let textWord = document.createTextNode(level);
  
  worspan.appendChild(textWord);

  worspan.className = "Word_level";

  let buttonText = document.createTextNode("Ok");

  let DivMsg = document.createTextNode(`Win over, The number of your mistakes is ${worongNumber} And your level is`);

  button.appendChild(buttonText);
  button.className = "ok";
  popupDiv.appendChild(DivMsg);
  popupDiv.appendChild(worspan);
  popupDiv.appendChild(button);
  popupDiv.className = "popup";
  document.body.appendChild(popupDiv);
}

