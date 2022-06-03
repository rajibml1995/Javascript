
let cards=[]
let sumResult=0
let hashBlack=false
let message=""
let isAlive=false
let message1=""

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")


 function startGame(){

  isAlive=true
  let fastCard=getRandom1()
  let secondCard=getRandom2()
  let cards=[fastCard,secondCard]
  let sumResult= fastCard + secondCard
   renderGame()
 }
// this function assign the random value to the variable//


  
  



 function getRandom(){
   randomNumber = Math.floor (Math.random() *13 ) + 1
   return randomNumber

 }
 function getRandom1(){
  randomNumber = Math.floor (Math.random() *13 ) + 1
  return randomNumber

}
function getRandom2(){
  randomNumber = Math.floor (Math.random() *13 ) + 1
  return randomNumber

}


function renderGame(){
     cardEl.textContent="Card :"
  for (let i=0; i<cards.length; ++i){
    cardEl.textContent += cards[i] + " " 
}
sumEl.textContent="sum: " + sumResult
     
 
  
    if(sumResult < 21){
      message=" do you want to draw a new card ?"

    }
    else if(sumResult===21)
    {
      message=" wohoo you got a black jack"
      hashBlack=true

    }
    else {
      message="you are out of the game"
      isAlive=false
    }
    messageEl.textContent=message
}

function newCard(){
  if(isAlive==true && hashBlack==false){
  let card= getRandom()
  sumResult+=card 
  cards.push(card)
  renderGame()
  }
}
