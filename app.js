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


/**
 * Funcion que consuma 2 parametros
 * @param minutes
 * @param seconds
 * Hará una cuenta regresiva hasta que 'minutes' y 'seconds' sea 0
 */
let isTimerActived = false

function timer(min, sec) {
  isTimerActived = true
  if (sec == 0) {
    min--;
    sec += 59;
  }
  const intervalID = setInterval(() => {
    sec--;
    changeTitle(min + ":" + sec);
    if (sec <= 0) {
      stopInterval();
      if (min > 0) timer(min, sec);
    }
    if(isTimerActived == false) {stopInterval()}
  }, 1000);

  function stopInterval() {
    clearInterval(intervalID);
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