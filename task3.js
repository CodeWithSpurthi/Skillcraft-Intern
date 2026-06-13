let board = [
    "","","",
    "","","",
    "","",""
];

let player = "X";
let mode = "player";
let gameOver = false;

let xScore = 0;
let oScore = 0;



// Change game mode
function changeMode(selectedMode){

    mode = selectedMode;

    restart();

    document.getElementById("status").innerHTML =
        mode=="computer"
        ? "Player X vs Computer"
        : "Player X Turn";
}



// Player click
function play(index){


    if(board[index] !== "" || gameOver)
        return;


    board[index] = player;


    display();


    if(checkWinner())
        return;



    if(mode=="computer" && player=="X"){

        player="O";

        document.getElementById("status")
        .innerHTML="Computer Turn";

        setTimeout(computerMove,700);

    }
    else{

        changePlayer();

    }

}



// Computer move
function computerMove(){


    let empty=[];


    for(let i=0;i<board.length;i++){

        if(board[i]=="")
            empty.push(i);

    }



    if(empty.length==0)
        return;



    let random =
    empty[Math.floor(Math.random()*empty.length)];



    board[random]="O";


    display();



    if(checkWinner())
        return;



    player="X";

    document.getElementById("status")
    .innerHTML="Player X Turn";

}



// Change player
function changePlayer(){


    player =
    player=="X" ? "O":"X";


    document.getElementById("status")
    .innerHTML =
    "Player "+player+" Turn";

}



// Display board
function display(){


    let cells =
    document.querySelectorAll(".cell");


    board.forEach((value,index)=>{

        cells[index].innerHTML=value;

    });

}



// Winner checking
function checkWinner(){


    let patterns=[

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];



    for(let p of patterns){


        let a=p[0];
        let b=p[1];
        let c=p[2];



        if(
        board[a] &&
        board[a]==board[b] &&
        board[a]==board[c]
        ){


            document.getElementById("status")
            .innerHTML =
            "🎉 Player "+board[a]+" Wins";


            if(board[a]=="X")
                xScore++;
            else
                oScore++;



            document.getElementById("xscore")
            .innerHTML=xScore;


            document.getElementById("oscore")
            .innerHTML=oScore;



            gameOver=true;

            return true;

        }

    }



    if(!board.includes("")){


        document.getElementById("status")
        .innerHTML="🤝 Draw Game";


        gameOver=true;

        return true;

    }


    return false;

}



// Restart button
function restart(){

    // clear board
    board = [
        "","","",
        "","","",
        "","",""
    ];

    // reset values
    player = "X";
    gameOver = false;


    // clear UI cells
    let cells = document.querySelectorAll(".cell");

    cells.forEach(cell=>{
        cell.innerHTML="";
    });


    // update message
    document.getElementById("status").innerHTML =
    "Player X Turn";

}