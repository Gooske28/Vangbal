let versnelX = 0
let balY = 0
let emmerX = 2
let balX = 2
basic.forever(function () {
    led.unplot(emmerX, 4)
    led.unplot(balX, balY)
    balY = balY + 1
    led.plot(balX, balY)
    basic.pause(300)
    versnelX = input.acceleration(Dimension.X)
    emmerX = Math.round(2 + Math.min(2, Math.max(-2, versnelX / 200)))
    led.plot(emmerX, 4)
    if (balY > 4) {
        balY = -1
        balX = randint(0, 4)
    }
    if (balY == 4) {
        if (emmerX == balX) {
            game.addScore(1)
        } else {
            game.removeLife(1)
        }
    }
    basic.pause(300)
})
