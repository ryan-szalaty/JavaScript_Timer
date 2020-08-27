const timerArea = document.querySelector('input');
const playButton = document.getElementsByTagName('button')[0];
const pauseButton = document.getElementsByTagName('button')[1];
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * Math.PI * 2

circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(timerArea, playButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
    perimeter * timeRemaining / duration - perimeter);
  },
  onComplete() {
    console.log('Timer reached zero.');
  }
});
