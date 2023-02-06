let scoreHome = document.getElementById("score-tracker-home")
let scoreAway = document.getElementById("score-tracker-away")
let totalHomeScore = 0 
let totalAwayScore = 0


function increaseByOneHome(){

    totalHomeScore = totalHomeScore+1
    scoreHome.innerText = totalHomeScore

}

function increaseByThreeHome(){

    totalHomeScore = totalHomeScore+3
    scoreHome.innerText = totalHomeScore

}

function increaseByFiveHome(){

    totalHomeScore = totalHomeScore+5
    scoreHome.innerText = totalHomeScore

}



//AWAY
function increaseByOneAway(){

    totalAwayScore = totalAwayScore+1
    scoreAway.innerText = totalAwayScore

}

function increaseByThreeAway(){

    totalAwayScore = totalAwayScore+3
    scoreAway.innerText = totalAwayScore

}

function increaseByFiveAway(){

    totalAwayScore = totalAwayScore+5
    scoreAway.innerText = totalAwayScore

}

function Reset(){
   scoreHome.innerText = 0;
   scoreAway.innerText = 0;

   totalAwayScore = 0;
   totalHomeScore = 0;

}