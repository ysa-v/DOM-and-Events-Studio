// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = this.document.getElementById("takeoff");
    const background = this.document.getElementById("shuttleBackground");
    const status = this.document.getElementById("flightStatus");
    const height = this.document.getElementById("spaceShuttleHeight");
    const land = this.document.getElementById("landing");
    const abort = this.document.getElementById("missionAbort");
    const up = this.document.getElementById("up");
    const down = this.document.getElementById("down");
    const right = this.document.getElementById("right");
    const left = this.document.getElementById("left");
    const rocket = this.document.getElementById("rocket");
    let heightValue = 0;

    takeOffButton.addEventListener('click', () => {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff");
        if(result){
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            heightValue += 10000;
            height.innerHTML = heightValue;
        }
    })
    land.addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed."
        background.style.backgroundColor = "green";
        heightValue = 0;
        height.innerHTML = heightValue;
    })
    abort.addEventListener('click', () => {
        let result = window.confirm('Confirm that you want to abort the mission.');
        if(result) {
            status.innerHTML = 'Mission aborted.';
            background.style.backgroundColor = "green";
            heightValue = 0;
            height.innerHTML = heightValue;
        }
    })
    up.addEventListener('click', () => {
        heightValue += 10000;
        height.innerHTML = heightValue;
        rocket.
    })
    down.addEventListener('click', () => {
        heightValue -= 10000;
        height.innerHTML = heightValue;
        
    })
}
window.addEventListener("load", init);


// function init () {
//     const takeOffButton = this.document.getElementById("takeoff");
//     const backgroundColor = this.document.getElementById("shuttleBackground");
//     const paragraph = this.document.getElementById("flightStatus");
//     const height = this.document.getElementById("spaceShuttleHeight");
//     const land = this.document.getElementById("landing");
//     const mission = this.document.getElementById("missionAbort");
//     const moveUp = this.document.getElementById("up");
//     const moveDown = this.document.getElementById("down");
//     const moveRight = this.document.getElementById("right");
//     const moveLeft = this.document.getElementById("left");
//     let rocketHeight = '75px';
//     let rocketWidth =  '75px';

// takeOffButton.addEventListener('click', () => {
//     let result = window.confirm("Confirm that the shuttle is ready for takeoff"); {
//         if(result){
//             paragraph.innerHTML = "Shuttle in flight.";
//             backgroundColor.style.backgroundColor = "blue";
//             height.innerHTML =