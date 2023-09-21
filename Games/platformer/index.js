const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

//gamescreen
canvas.width=1024
canvas.height=576
c.fillStyle = "white"
c.fillRect(0,0,canvas.width,canvas.height)

//player
c.fillStyle = "red"
c.fillRect(200, 100, 100, 100)