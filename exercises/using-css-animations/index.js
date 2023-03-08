const element = document.querySelector(".first");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

function listener(event){
    const msg = document.createElement("div");
    switch(event.type){
        case "animationstart":
            msg.textContent = `started: elapsed time is ${event.elapsedTime}`;
            break;
        case "animationend":
            msg.textContent = `ended: elapsed time is ${event.elapsedTime}`;
            break;
        case "animationiteration":
            msg.textContent = `new loop: elapsed time is ${event.elapsedTime}`;
            break;
        default: break;
    }

    document.querySelector(".container").appendChild(msg);
}