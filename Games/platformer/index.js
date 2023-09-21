//project setup
//objects
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

console.log(c)
//gamescreen
canvas.width=1024
canvas.height=576
c.fillStyle = "white"
c.fillRect(0,0,canvas.width,canvas.height)//x=0 y=0 to start at top corner

//player
c.fillStyle = "red"
c.fillRect(200, 100, 100, 100)

