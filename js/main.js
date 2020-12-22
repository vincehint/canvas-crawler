console.log('We good bruh')

// References to Dom elements I will use.
let movementDisplay = movement
// in ye olden times we would say ; let game = document.getElementById('game')
//Get some context

game.setAttribute ('width', getComputedStyle(game)['width'])
game.setAttribute ('height', getComputedStyle(game)['height'])

//Get some context
let ctx = game.getContext('2d')

function Crawler(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

//move hero
game.addEventListener('click', e => {
    //want to draw the hero at offsetX and offsetY
    ctx.clearRect(0, 0, game.width, game.height )
    hero.x = e.offsetX
    hero.y = e.offsetY
    hero.render()
})

let hero = new Crawler(20, 20, 'purple', 20, 20)
let ogre = new Crawler(400, 150, '#bada55', 60, 120)

let gameLoop = () => {
    
    ctx.clearRect(0, 0, game.width, game.height)
    movementDisplay.innerText = `X: ${hero.x}\nY: ${hero.y}`
    if (ogre.alive) {

        ogre.render()
    }

    hero.render()
}

let movementHandler = e => {
    switch(e.key) {
        case 'w':
            // move up
            hero.y -= 10
            break
        case 'a':
            hero.x -= 10
            break
        case 's':
            hero.y += 10
            break
        case 'd':
            hero.x += 10
            break
        default:
            console.log('that key has no purpose here')
    }
}

document.addEventListener('keypress', movementHandler)


let gameInterval = setInterval(gameLoop, 30)