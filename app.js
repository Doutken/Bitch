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
function timer(min, sec) {
  if (sec == 0) {
    min--;
    sec += 59;
  }
  const intervalID = setInterval(() => {
    sec--;
    changeTitle(min + ":" + sec);
    if (sec <= 0) {
      stopInterval();
      if(min > 0) timer(min, sec)
    }
  }, 1000);

  function stopInterval() {
    clearInterval(intervalID);
  }
  return stopInterval;
  }

function changeTitle(title) {
  const h1 = document.getElementsByClassName("test")[0]
  h1.innerHTML = title
}

