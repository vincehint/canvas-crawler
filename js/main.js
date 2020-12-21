console.log('We good bruh')

// References to Dom elements I will use.
let movementDisplay = movement
// in ye olden times we would say ; let game = document.getElementById('game')
//Get some context

game.setAttribute =('width', '800px')
game.height = 400;


let ctx = game.getContext('2d')

// Do sum dwrraring
ctx.fillStyle = 'white'
// fill color
ctx.strokeStyle = 'red'
//line color
ctx.lineWidth = 5
//line width

ctx.fillRect(10, 10, 100, 100)
ctx.strokeRect(10, 10, 100, 100)