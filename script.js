

// place x and o  if turn is odd its x if turn is even its Os turn



let turn = 1
const h1 = document.querySelector('h1')
function placeXorO(e){

    const element = document.getElementById(e.target.id) 



    if(element.innerHTML != '' ){
        h1.innerHTML = 'Invalid option'
    }
    else if(turn % 2 != 0){
        element.innerText = "X"
        turn += 1
    }else if (turn % 2 == 0){
        element.innerText = "O"
        turn += 1
    }
    
    winLoseOrDraw()
}


// Selecting all cells & and adding event listener to each cell

cells = document.querySelectorAll('.cell')

cells.forEach(e => {
    e.addEventListener('click', placeXorO)
});



// Win Conditions 

// making each cell a variable


function winLoseOrDraw(){

    const cell1 = document.getElementById('cell1').innerText
    const cell2 = document.getElementById('cell2').innerText
    const cell3 = document.getElementById('cell3').innerText
    const cell4 = document.getElementById('cell4').innerText
    const cell5 = document.getElementById('cell5').innerText
    const cell6 = document.getElementById('cell6').innerText
    const cell7 = document.getElementById('cell7').innerText
    const cell8 = document.getElementById('cell8').innerText
    const cell9 = document.getElementById('cell9').innerText
    

    console.log(cell1,cell2,cell3)
    if(cell1 === 'X' && cell2 === 'X' && cell3 === 'X' && cell1 !== ''){
        h1.innerHTML = 'We have a winner (X)'
    }else if (cell1 === 'X' && cell2 === 'X' && cell3 === 'X' && cell1 !== ''){
        
    }

}