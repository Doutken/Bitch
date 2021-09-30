function backwardsCount(seconds) {
  const intervalID = setInterval(() => {
    seconds--;
    console.log(seconds);
    if (seconds <= 0) stopInterval();
  }, 1000);

  function stopInterval() {
    clearInterval(intervalID);
  }
}

let isTimerActived = false
/**
 * Funcion que consuma 2 parametros
 * @param minutes
 * @param seconds
 * Hará una cuenta regresiva hasta que 'minutes' y 'seconds' sea 0
 */
function timer(min, sec) {
  isTimerActived = true
  const intervalID2 = setInterval(() => {
    
    if(isTimerActived == false) {stopInterval()}
  }, 100);
  const intervalID = setInterval(() => {
    if(sec <= 0) {
      min--
      sec += 60
    }
    changeTitle(min + ":" + sec);
    sec--;
    if (sec <= 0 && min <= 0) {
      stopInterval();
      if (min > 0) {};
    }
  }, 1000);

  function stopInterval() {
    clearInterval(intervalID);
    clearInterval(intervalID2);
  }
}

function changeTitle(title) {
  const h1 = document.getElementsByClassName("test")[0];
  h1.innerHTML = title;
}

function pauseTimer() {
  isTimerActived = false
}

/**
 * This function does:
 * -Changes the value to zero
 * -Stops counting
 */
function resetTimer() {
  pauseTimer();
  changeTitle(0+":"+0);
}