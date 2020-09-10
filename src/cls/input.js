export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 39:
          paddle.moveRight();
          break;
        case 37:
          paddle.moveLeft();
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
      }
    });
  }
}
