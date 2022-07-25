
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let selectedDoggos = []

function getTeamName(doggo) {
    return doggo.parentNode.parentNode.className;
}
function getDoggoName(doggo) {
    return doggo.getElementsByTagName("h1")[0].textContent
}


document.querySelectorAll(".doggo.fighter").forEach(doggo => {
    doggo.addEventListener("click", e => {
        selectedDoggos.push(doggo);
        if(selectedDoggos.length > 1) {
            if(getTeamName(selectedDoggos[0]) !== getTeamName(selectedDoggos[1])) {
                let selectedDoggoName = getDoggoName(selectedDoggos[0]);
                let opponentName = getDoggoName(selectedDoggos[1]);;
                let sure = window.prompt(selectedDoggoName + " is picking a fight with " + opponentName + ". Are you sure?");
                if(sure && sure.toLocaleLowerCase() === "sure") {
                    let winner = randomIntFromInterval(1,2) === 1 ? selectedDoggoName : opponentName;
                    new Audio("./sounds/tada.wav").play();
                    alert("The winner is " + winner);
                }
            }
            selectedDoggos.shift();
        }
    })
})


document.body.addEventListener('click', event => {
	const { target } = event;
	if (!target.closest('.team')) selectedDoggos = [];
});
