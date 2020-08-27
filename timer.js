class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    ///////////////EVENT LISTENERS///////////////
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.stop);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick(); //only calls one time
    this.tickTimer = setInterval(this.tick, 50); //shares info across app
  }
  tick = () => {
    let timeRemaining = this.timeRemaining;
    this.timeRemaining = timeRemaining - 0.05;
    if (this.onTick) {
      this.onTick(this.timeRemaining);
    }
    if (this.timeRemaining === 0 || this.timeRemaining < 0) {
      if (this.onComplete) {
        this.onComplete();
      }
      clearInterval(this.tickTimer);
      this.timeRemaining = 0;
    }
  }
  get timeRemaining() { //treated as an instance variable
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
  stop = () => {
    clearInterval(this.tickTimer);
  }
}
