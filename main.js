const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
c.fillStyle = "white"
c.fillRect(10, 10, canvas.width, canvas.height)

const gravity = 0.5

class Player {
    constructor(position) {
        this.position = position
        this.velocity = {
            x: 0, y: 1
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        player.draw()
        player2.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y < canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}


class Platform {
    constructor(position) {
        this.position = {
            x: position.x,
            y: position.y
        }
        this.width = 200
        this.height = 20
    }

    draw() {
        c.fillStyle = "blue"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player({
    x: 0,
    y: 0
})
const platform = new Platform({ x: 30, y: 100 })
const player2 = new Player({
    x: 300,
    y: 100
})

const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    }
}


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    player2.update()
    platform.draw()
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 4
    else if (keys.a.pressed) player.velocity.x = -4

    if (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
    ) {
        player.velocity.y = 0
    }
}

animate()

window.addEventListener('keydown', event => {
    switch (event.key) {
        case 'w':
            player.velocity.y = -15
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})
window.addEventListener('keyup', event => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})