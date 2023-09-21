//project setup
//objects
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
const gravity = 0.5

console.log(c)
//gamescreen
canvas.width=1024
canvas.height=576

//new player
class Player{
  //everytime a player is created, their "x" "y" positions are used
  constructor(position){
    this.position = position
    //speeds up pllayer movement
     this.velocity = {
       //default
       x:0,
       y:1,
     }
     this.height = 100
  }
   //function for drawing player
   draw(){
   c.fillStyle = "red"
   //ref 'y' and 'x' here  to redraw "player"
   c.fillRect(this.position.x, this.position.y, 100, this.height)
    
   }
   //function update for "Player"
   update(){
    //whenever update() called in animate(), player is redrawn
    this.draw()
    //velocity ref for movement spd
    this.position.y += this.velocity.y
    //if statement for stopping movement
    if(this.position.y + this.height + this.velocity.y < canvas.height) 
    this.velocity.y += gravity
    else this.velocity.y = 0
    
   }

}
//player obj
const player = new Player({
  //position
x:0,
y:0,
})
const player2 = new Player({
  //position
x:300,
y:0,
})
//Movement(gravity)

function animate(){
  //need to keep calling function(animation loop)
  window.requestAnimationFrame(animate)

  //for clearing space behind "player"
  c.fillStyle = "white"
  c.fillRect(0,0,canvas.width,canvas.height)//x=0 y=0 to start at top corner

  //player animation
  player.update()
  player2.update()
}
//initiates movement
animate()