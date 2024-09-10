var progressValue = parseInt(document.getElementById("number").innerText);
let circle = document.getElementById("circle");
let maxDashOffset = 474;

function updateValue(){
    let updatedNumber = parseInt(document.getElementById("updatedNumber").value);
    if(updatedNumber > 100){
        alert("Number shouldn't be greater than 100");  
    }else{
        progressValue = updatedNumber;
    console.log(progressValue);
    cirularProgressBar();
    }        
}

function cirularProgressBar(){
    let strokeDashOffset = Math.floor(maxDashOffset - (maxDashOffset * (progressValue / 100)));
    let duration = 700; // Animation duration in milliseconds
    let stepTime = 50;   // Time interval for updates
    let steps = duration / stepTime;  // Number of steps in the animation
    let counter = 0;
    let currentOffset = maxDashOffset;
    let stepValue = progressValue / steps;
    let stepOffset = (maxDashOffset - strokeDashOffset) / steps;
    let intervalId = setInterval(function() {
        counter += stepValue;
        currentOffset -= stepOffset;

        document.getElementById("number").innerText = Math.floor(counter) + " %";
        circle.setAttribute("stroke-dashoffset", currentOffset);

        if (counter >= progressValue) {
            clearInterval(intervalId);
            document.getElementById("number").innerText = progressValue + " %"; // Ensure it ends exactly at the target value
            circle.setAttribute("stroke-dashoffset", strokeDashOffset); // Ensure the stroke ends at the correct offset
        }
    }, stepTime);
}

cirularProgressBar();