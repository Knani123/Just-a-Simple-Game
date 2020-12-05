//Declaration of variables
let friend=document.querySelector('.friend')
let enemy=document.querySelector('.enemy')
let block=document.querySelector('.block')
 
//create compteur
let compteur=document.createElement("p")
compteur.classList.add('c')
console.log(compteur)

// nigth and day
let bg=true
let chageTime
//change mode
const mode=()=>{
chageTime=setInterval(() => {
        bg=!bg
        console.log(bg)
        if(bg){block.style.backgroundColor="white";compteur.style.color="black"}
        else{block.style.backgroundColor="black";compteur.style.color="white"}
     }, 4000);
    
}



//create btn 
let btn=document.createElement('button')
btn.innerText="play"
btn.classList.add("replay")

btn.addEventListener("click",(e)=>{
    mode()
    block.appendChild(compteur)
    compteur.innerHTML=0;
    compteur.style.color="black"
    friend.style.left="0";
    enemy.style.left="480px"
    block.style.backgroundColor="white"
    enemy.style.animation="attac 2s infinite linear" 
    e.target.style.visibility="hidden"
    block.removeChild(lose)
     
})

block.appendChild(btn)

// Create Text
let lose=document.createElement("p")
    lose.classList.add('lose')
    lose.innerText="GAME OVER !"

// function to jump
const jump=(e)=>{
   if(e.keyCode==32){
      
    friend.classList.add("annimate")
    setTimeout(() => {
        friend.classList.remove("annimate")
    }, 500);
}
   }  
document.addEventListener('keypress',jump)

// check Dead
 let checkDead=setInterval(() => {
    let friendTop=window.getComputedStyle(friend).getPropertyValue("top")
    let enemyLeft=window.getComputedStyle(enemy).getPropertyValue("left")
    if(parseInt(enemyLeft)==0){
      compteur.innerHTML=Number(compteur.innerHTML)+1
    }
 else if(parseInt(enemyLeft)>0 && parseInt(enemyLeft)<=20 && parseInt(friendTop)>130 ){
    enemy.style.animation="none"
    block.appendChild(lose)
    alert("you lose")
    btn.innerText="replay"
    btn.style.visibility="visible"
 clearInterval(chageTime)
 block.style.backgroundColor="black"
 compteur.style.color="white"
 friend.style.left="50%";
 enemy.style.left="45%"
 }
 }, 14);


