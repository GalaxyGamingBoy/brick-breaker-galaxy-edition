export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;
    this.gameWidth = gameWidth;
    this.color = "#FFA033";
    this.maxSpeed = 10;
    this.speed = 0;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }
  update(deltaTime) {
    if (!deltaTime) return;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    this.position.x += this.speed;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }
}
