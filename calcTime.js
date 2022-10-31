function calcTime(time) {
    let secs = time % 60
    let mins = (time - secs) / 60;
    let timeFormatted = ""
    if (secs < 10) {
        timeFormatted = mins + ":0" + secs;
    }
    else {
        timeFormatted = mins + ":" + secs;
    }
    return timeFormatted
}

console.log(calcTime(61));