

let turn = 'o';
let count= 0;

 let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
];

let board_array=new Array(9).fill('E');
const board=document.querySelector(".board");


function checkWinner(){

    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!='E'&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1;
    }
    return 0;
    
}

const printer =(event)=>{
 
    const elem= event.target;
    if(board_array[elem.id]==='E'){
        count++;    
   if(turn==='o'){
    const img1 = document.getElementById("playerOneImage");
    img1.style.transition = "transform 0.3s ease";
    img1.style.transform = "scale(1.2)";

    const img2 = document.getElementById("playerTwoImage");
    img2.style.transition = "transform 0.3s ease";
    img2.style.transform = "scale(1)";
        elem.innerHTML= 'o';
        board_array[elem.id]='o';
        if(checkWinner()){
            document.getElementById("winner").innerHTML='Winner is O';
            board.removeEventListener("click",printer);
            return;
        }
        turn = 'x';
     
    }
   
    else{

        const img1 = document.getElementById("playerOneImage");
        img1.style.transition = "transform 0.3s ease";
        img1.style.transform = "scale(1)";
    
        const img2 = document.getElementById("playerTwoImage");
        img2.style.transition = "transform 0.3s ease";
        img2.style.transform = "scale(1.2)";

    elem.innerHTML= 'x';
    board_array[elem.id]='x';
    if(checkWinner()){
        document.getElementById("winner").innerHTML='Winner is X'; 
        board.removeEventListener("click",printer);
        return;     
    }
    turn = 'o';
   }

   if(count==9){
    document.getElementById("winner").innerHTML='Match is draw'; 
   }
    }
}



board.addEventListener("click",printer)

const restartBtn = document.querySelector(".button")

restartBtn.addEventListener('click',()=>{

    const cell = document.getElementsByClassName("cell");
  Array.from(cell).forEach((val)=>{
    val.innerHTML="";
  })
  turn ='o';
  count=0;
  board_array=new Array(9).fill('E');
  document.getElementById("winner").innerHTML='';
  board.addEventListener("click",printer)
})
