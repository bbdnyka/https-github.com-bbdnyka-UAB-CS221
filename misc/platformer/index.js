//project setup
//objects
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
//speed of falling animation
const gravity = 5

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
    this.position.x += this.velocity.x

    //if statements for stopping movement
    if(this.position.y + this.height + this.velocity.y < canvas.height) 
    this.velocity.y += gravity
    else this.velocity.y = 0

    //if statements for detecting wall
    //if(this.position.x + this.width + this.velocity.x < canvas.width) 
    //this.velocity.y += gravity
    //else this.velocity.x = 0

    //if statement for jump limit
    //if(this.position.y + this.height + this.velocity.y < keys.w.pressed) 
    //this.velocity.x += gravity
    //else this.velocity.x = 0
    
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
//key obj(for key pressing events)
const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
}
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

  //if/else for stopping and moving player (speed adjustment here)
  player.velocity.x=0
  if(keys.d.pressed) player.velocity.x=10

    else if(keys.a.pressed) player.velocity.x =-10
}
//initiates movement animation
animate()

//player movement(set to true to move when keys pressed)
window.addEventListener("keydown", (event) => {
  //logs when a key is used on console
  console.log(event)
  switch(event.key){

    //right movement
    case "d":
    keys.d.pressed = true
    //log for right movement
    console.log("move right")
    break

    //left movement
    case "a":
    keys.a.pressed = true
    console.log("move left")
    break

    //up movement or jump
    case "w":
    //height of jump
    player.velocity.y = -50
    console.log("jump/up")
    break
  }
})
//for stopping movement(Set to false so movement stops)
window.addEventListener("keyup", (event) => {
  //logs when a key is used on console
  console.log(event)
  switch(event.key){

    //right movement
    case "d":
    keys.d.pressed = false
    break

    //left movement. 
    case "a":
    keys.a.pressed = false
    break
    
  }
})