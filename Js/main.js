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

let jsonWords = [
  {
    "rank": "1",
    "word": "the"
  },
  {
    "rank": "2",
    "word": "be"
  },
  {
    "rank": "3",
    "word": "to"
  },
  {
    "rank": "4",
    "word": "of"
  },
  {
    "rank": "5",
    "word": "and"
  },
  {
    "rank": "6",
    "word": "a"
  },
  {
    "rank": "7",
    "word": "in"
  },
  {
    "rank": "8",
    "word": "that"
  },
  {
    "rank": "9",
    "word": "have"
  },
  {
    "rank": "10",
    "word": "I"
  },
  {
    "rank": "11",
    "word": "it"
  },
  {
    "rank": "12",
    "word": "for"
  },
  {
    "rank": "13",
    "word": "not"
  },
  {
    "rank": "14",
    "word": "on"
  },
  {
    "rank": "15",
    "word": "with"
  },
  {
    "rank": "16",
    "word": "he"
  },
  {
    "rank": "17",
    "word": "as"
  },
  {
    "rank": "18",
    "word": "you"
  },
  {
    "rank": "19",
    "word": "do"
  },
  {
    "rank": "20",
    "word": "at"
  },
  {
    "rank": "21",
    "word": "this"
  },
  {
    "rank": "22",
    "word": "but"
  },
  {
    "rank": "23",
    "word": "his"
  },
  {
    "rank": "24",
    "word": "by"
  },
  {
    "rank": "25",
    "word": "from"
  },
  {
    "rank": "26",
    "word": "they"
  },
  {
    "rank": "27",
    "word": "we"
  },
  {
    "rank": "28",
    "word": "say"
  },
  {
    "rank": "29",
    "word": "her"
  },
  {
    "rank": "30",
    "word": "she"
  },
  {
    "rank": "31",
    "word": "or"
  },
  {
    "rank": "32",
    "word": "an"
  },
  {
    "rank": "33",
    "word": "will"
  },
  {
    "rank": "34",
    "word": "my"
  },
  {
    "rank": "35",
    "word": "one"
  },
  {
    "rank": "36",
    "word": "all"
  },
  {
    "rank": "37",
    "word": "would"
  },
  {
    "rank": "38",
    "word": "there"
  },
  {
    "rank": "39",
    "word": "their"
  },
  {
    "rank": "40",
    "word": "what"
  },
  {
    "rank": "41",
    "word": "so"
  },
  {
    "rank": "42",
    "word": "up"
  },
  {
    "rank": "43",
    "word": "out"
  },
  {
    "rank": "44",
    "word": "if"
  },
  {
    "rank": "45",
    "word": "about"
  },
  {
    "rank": "46",
    "word": "who"
  },
  {
    "rank": "47",
    "word": "get"
  },
  {
    "rank": "48",
    "word": "which"
  },
  {
    "rank": "49",
    "word": "go"
  },
  {
    "rank": "50",
    "word": "me"
  },
  {
    "rank": "51",
    "word": "when"
  },
  {
    "rank": "52",
    "word": "make"
  },
  {
    "rank": "53",
    "word": "can"
  },
  {
    "rank": "54",
    "word": "like"
  },
  {
    "rank": "55",
    "word": "time"
  },
  {
    "rank": "56",
    "word": "no"
  },
  {
    "rank": "57",
    "word": "just"
  },
  {
    "rank": "58",
    "word": "him"
  },
  {
    "rank": "59",
    "word": "know"
  },
  {
    "rank": "60",
    "word": "take"
  },
  {
    "rank": "61",
    "word": "people"
  },
  {
    "rank": "62",
    "word": "into"
  },
  {
    "rank": "63",
    "word": "year"
  },
  {
    "rank": "64",
    "word": "your"
  },
  {
    "rank": "65",
    "word": "good"
  },
  {
    "rank": "66",
    "word": "some"
  },
  {
    "rank": "67",
    "word": "could"
  },
  {
    "rank": "68",
    "word": "them"
  },
  {
    "rank": "69",
    "word": "see"
  },
  {
    "rank": "70",
    "word": "other"
  },
  {
    "rank": "71",
    "word": "than"
  },
  {
    "rank": "72",
    "word": "then"
  },
  {
    "rank": "73",
    "word": "now"
  },
  {
    "rank": "74",
    "word": "look"
  },
  {
    "rank": "75",
    "word": "only"
  },
  {
    "rank": "76",
    "word": "come"
  },
  {
    "rank": "77",
    "word": "its"
  },
  {
    "rank": "78",
    "word": "over"
  },
  {
    "rank": "79",
    "word": "think"
  },
  {
    "rank": "80",
    "word": "also"
  },
  {
    "rank": "81",
    "word": "back"
  },
  {
    "rank": "82",
    "word": "after"
  },
  {
    "rank": "83",
    "word": "use"
  },
  {
    "rank": "84",
    "word": "two"
  },
  {
    "rank": "85",
    "word": "how"
  },
  {
    "rank": "86",
    "word": "our"
  },
  {
    "rank": "87",
    "word": "work"
  },
  {
    "rank": "88",
    "word": "first"
  },
  {
    "rank": "89",
    "word": "well"
  },
  {
    "rank": "90",
    "word": "way"
  },
  {
    "rank": "91",
    "word": "even"
  },
  {
    "rank": "92",
    "word": "new"
  },
  {
    "rank": "93",
    "word": "want"
  },
  {
    "rank": "94",
    "word": "because"
  },
  {
    "rank": "95",
    "word": "any"
  },
  {
    "rank": "96",
    "word": "these"
  },
  {
    "rank": "97",
    "word": "give"
  },
  {
    "rank": "98",
    "word": "day"
  },
  {
    "rank": "99",
    "word": "most"
  },
  {
    "rank": "100",
    "word": "us"
  }
];

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

let randomRepoNumber = Math.floor(Math.random() * jsonWords.length);

let randomObj = jsonWords[randomRepoNumber];

let randomWord = randomObj.word;





let lettersGuss = document.querySelector(".letters_guess");

let worongNumber = 0;

let SuccessNumber = 0;

let level = "";

let hangDrow = document.querySelector(".hangman_drow");

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