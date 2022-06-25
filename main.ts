namespace SpriteKind {
    export const vanish = SpriteKind.create()
    export const block = SpriteKind.create()
    export const duck = SpriteKind.create()
    export const fallingduck = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fallingduck, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 18; index++) {
        mySprite.x += -1
        pause(50)
    }
})
function createsideducks () {
    if (Math.percentChance(50)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b 5 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . b 5 5 5 5 5 5 5 b b b b b . 
            . . b 5 5 5 5 5 5 5 5 b 5 d b . 
            . . f 4 d 5 f 1 d 5 b 5 5 b . . 
            . . c 4 4 5 f f 1 b 5 5 d b . . 
            . b 4 4 4 4 b f d 5 5 5 b d b b 
            b 4 4 4 4 4 4 5 b 5 5 d c d d b 
            . b 5 5 5 5 5 5 5 b c c d d d c 
            . b 5 5 5 5 5 5 5 d d d d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `, SpriteKind.duck)
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b 5 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . b 5 5 5 5 5 5 5 b b b b b . 
            . . b 5 5 5 5 5 5 5 5 b 5 d b . 
            . . f 4 d 5 f 1 d 5 b 5 5 b . . 
            . . c 4 4 5 f f 1 b 5 5 d b . . 
            . b 4 4 4 4 b f d 5 5 5 b d b b 
            b 4 4 4 4 4 4 5 b 5 5 d c d d b 
            . b 5 5 5 5 5 5 5 b c c d d d c 
            . b 5 5 5 5 5 5 5 d d d d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . b 5 5 5 5 5 5 5 b b b b b . 
            . . b 5 5 5 5 5 5 5 5 b 5 d b . 
            . . f 4 d 5 f 1 d 5 b 5 5 b . . 
            . . c 4 4 5 f f 1 b 5 5 d b . . 
            b 4 4 4 4 4 b f d 5 5 5 b d b b 
            . b 4 4 4 4 4 5 b 5 5 d c d d b 
            . b 5 5 5 5 5 5 5 b c c d d d c 
            . b 5 5 5 5 5 5 5 d d d d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . . c b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . f d 5 5 f 1 d 5 b b . . . . 
            . . c 4 d 5 f f 1 5 5 b . . . . 
            . . 4 4 d d b f d 5 5 b . . . . 
            b 4 4 4 4 4 5 5 5 d b b d d d b 
            . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
            . . b 5 5 5 5 5 d 5 5 5 5 c d b 
            . b 5 5 5 5 5 5 b 5 5 d c d d c 
            . b 5 5 5 5 5 5 5 b c c d d b c 
            . b d 5 5 5 5 5 d d d d d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . c 4 d 5 f 1 d 5 b b . . . . 
            b 4 4 4 d d f f 1 5 5 b . . . . 
            . b 4 4 4 4 b f d 5 5 b . . . . 
            . . b 4 4 4 4 5 5 5 5 d b . . . 
            . . b 5 5 5 5 5 5 5 5 d d b . . 
            . b 5 5 5 5 5 5 5 5 d d d d b . 
            . b 5 5 5 5 5 5 5 b b b d d d b 
            . b 5 5 5 5 5 5 c d 5 5 b d d c 
            . b 5 5 5 5 5 5 d c d 5 d b b c 
            . b d 5 5 5 5 5 d d c b 5 5 b . 
            . . b b 5 5 5 d d d d c c c b b 
            . . . b b c c c c c c c c . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . c 4 d 5 f 1 d 5 b b . . . . 
            b 4 4 4 d d f f 1 5 5 b . . . . 
            . b 4 4 4 4 b f d 5 5 b . . . . 
            . . b 4 4 4 4 5 5 5 5 d b . . . 
            . . b 5 5 5 5 5 5 5 d d d b b . 
            . b 5 5 5 5 5 5 5 b b b d d d b 
            . b 5 5 5 5 5 5 c d 5 5 b d d c 
            . b 5 5 5 5 5 5 d c d 5 d b b c 
            . b 5 5 5 5 5 5 d d c b 5 5 b c 
            . b d 5 5 5 5 5 d d d c c c b b 
            . . b b 5 5 5 d d d c c . . . . 
            . . . b b c c c c c . . . . . . 
            `,img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . f d 5 5 f 1 d 5 b b . . . . 
            . . c 4 d 5 f f 1 5 5 b . . . . 
            . . 4 4 d d b f d 5 5 b . . . . 
            b 4 4 4 4 4 5 5 5 5 5 d b b b . 
            . b 4 4 4 4 4 5 5 d b b d d d b 
            . . b 5 5 5 5 5 5 b 5 5 5 d b b 
            . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
            . b 5 5 5 5 5 5 b 5 5 d c d b c 
            . b d 5 5 5 5 5 d b c c d d c . 
            . . b b 5 5 5 d d d d d b c . . 
            . . . b b c c c c c c c c . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        mySprite3.setPosition(153, 87)
        mySprite3.setVelocity(-100, 0)
        mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(2000)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 18; index++) {
        mySprite.x += 1
        pause(50)
    }
})
function createfood () {
    if (Math.percentChance(20)) {
        mySprite3 = sprites.create(img`
            . . 2 2 b b b b b . . . . . . . 
            . 2 b 4 4 4 4 4 4 b . . . . . . 
            2 2 4 4 4 4 d d 4 4 b . . . . . 
            2 b 4 4 4 4 4 4 d 4 b . . . . . 
            2 b 4 4 4 4 4 4 4 d 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 e . . . . 
            2 2 b 4 4 4 4 4 4 4 b e . . . . 
            . 2 b b b 4 4 4 b b b e . . . . 
            . . e b b b b b b b e e . . . . 
            . . . e e b 4 4 b e e e b . . . 
            . . . . . e e e e e e b d b b . 
            . . . . . . . . . . . b 1 1 1 b 
            . . . . . . . . . . . c 1 d d b 
            . . . . . . . . . . . c 1 b c . 
            . . . . . . . . . . . . c c . . 
            `, SpriteKind.Food)
        mySprite3.setPosition(153, 97)
        mySprite3.setVelocity(-100, 0)
        mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(2000)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.duck, function (sprite, otherSprite) {
    if (!(in_shell)) {
        info.changeLifeBy(-1)
        pause(500)
    }
})
info.onLifeZero(function () {
    gamisgoing = false
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (ispunching) {
        info.changeLifeBy(1)
        pause(500)
    }
})
function createground () {
    mySprite2 = sprites.create(img`
        . . . . . . c c . . . . . c c . 
        . . . c c . c 3 c . c c . c 3 c 
        . . c 3 6 c 3 3 c . c 3 c 6 3 c 
        . . c 3 3 3 3 6 c . c 3 6 3 3 c 
        . . . c 6 3 6 6 c c c 3 3 3 c . 
        . . . . c c 6 6 c 6 c 6 3 3 c . 
        . . . . c 3 c 6 c 3 3 c 6 6 c . 
        c c . c 3 3 c c c c 3 3 c 6 c . 
        c 3 c c 3 6 6 c 3 c 3 6 c 6 c . 
        c 3 3 6 3 6 3 6 3 3 3 c c c c c 
        . c 3 3 3 c 3 3 6 3 6 c c 3 3 c 
        . . c 3 3 c c 3 3 3 6 c 3 3 6 . 
        c c c 6 3 6 c c 6 3 6 6 3 6 c c 
        c 3 3 3 3 3 c c c 3 6 3 3 3 3 c 
        . c c 6 6 3 6 6 c 6 3 3 6 c c . 
        . . . c 6 3 3 6 6 6 6 3 c . . . 
        `, SpriteKind.block)
    mySprite2.setPosition(153, 113)
    mySprite2.setVelocity(-100, 0)
    mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
    pause(150)
}
function createdivingducks () {
    if (Math.percentChance(50)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . b b c c . . . 
            . . . . . b b . . b d d b c . . 
            . . . . . b d b b d d d d d c . 
            . . . . . b 5 5 d b c d d d b c 
            . . . . . b b 5 5 5 d c d d d c 
            . . . . b b 5 b 5 5 5 c d d d c 
            . . . b b 5 5 5 b 5 5 b d d d c 
            . . . b 5 5 5 d 1 d b 5 5 d d c 
            . . . b 5 5 5 1 f f 5 5 5 5 d c 
            . . b b 5 5 5 f f b 4 5 5 5 5 c 
            . . 5 b 5 5 5 5 5 4 4 5 5 5 5 c 
            . . 5 b 5 5 5 d 4 4 4 5 5 5 5 b 
            . . b . b 5 5 4 4 4 4 5 5 5 b b 
            . . . . . b b f c 4 4 5 5 d b . 
            . . . . . . . . . b 4 b b b . . 
            . . . . . . . . . . b . . . . . 
            `, SpriteKind.fallingduck)
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . b b c c . . . 
            . . . . . b b . . b d d b c . . 
            . . . . . b d b b d d d d d c . 
            . . . . . b 5 5 d b c d d d b c 
            . . . . . b b 5 5 5 d c d d d c 
            . . . . b b 5 b 5 5 5 c d d d c 
            . . . b b 5 5 5 b 5 5 b d d d c 
            . . . b 5 5 5 d 1 d b 5 5 d d c 
            . . . b 5 5 5 1 f f 5 5 5 5 d c 
            . . b b 5 5 5 f f b 4 5 5 5 5 c 
            . . 5 b 5 5 5 5 5 4 4 5 5 5 5 c 
            . . 5 b 5 5 5 d 4 4 4 5 5 5 5 b 
            . . b . b 5 5 4 4 4 4 5 5 5 b b 
            . . . . . b b f c 4 4 5 5 d b . 
            . . . . . . . . . b 4 b b b . . 
            . . . . . . . . . . b . . . . . 
            `,img`
            . . . . . . . . . b b c c . . . 
            . . . . . b b . . b d d b c . . 
            . . . . . b d b b d d d d d c . 
            . . . . . b 5 5 d b c d d d b c 
            . . . . . b b 5 5 5 d c d d d c 
            . . . . b b 5 b 5 5 5 c d d d c 
            . . . b b 5 5 5 b 5 5 b d d d c 
            . . . b 5 5 5 d 1 d b 5 5 d d c 
            . . . b 5 5 5 1 f f 5 5 5 5 d c 
            . . b b 5 5 5 f f b 4 5 5 5 5 c 
            . b 5 b 5 5 5 5 5 4 4 5 5 5 5 c 
            . 5 b b 5 5 5 d 4 4 4 5 5 5 5 b 
            . b . . b 5 5 4 4 4 4 5 5 5 b b 
            . . . . . b b f c 4 4 5 5 d b . 
            . . . . . . . . . 4 b b b b . . 
            . . . . . . . . . b . . . . . . 
            `,img`
            . . . . . . . . b b b c c . . . 
            . . . . . . . . d b d d b c . . 
            . . . . . . . . d d c d d d c . 
            . . . . . . . . d 5 5 c d d b c 
            . . . . . b b b b 5 5 d c d d c 
            . . . . b b 5 5 b 5 5 5 c d d c 
            . . . b b 5 5 5 d b 5 5 b d d c 
            . . . b 5 d 1 d 5 5 d b 5 d d c 
            . . . b 5 1 f f 5 5 5 5 5 5 d c 
            . b b b 5 f f b 5 4 5 5 5 5 5 c 
            b 5 c b 5 5 5 d 4 4 5 5 5 5 5 c 
            5 b . b 5 5 d d 4 4 5 5 5 5 5 b 
            b . . . b d 4 4 4 4 5 5 5 5 b b 
            . . . . . f c 4 4 4 b 5 5 d b . 
            . . . . . . . . 4 b . b b b . . 
            . . . . . . . . b . . . . . . . 
            `,img`
            . . . . . . . . . . b c c . b . 
            . . . . . . . . . b d d b b b . 
            . . . . . . . . b d d d b 5 c . 
            . . . . . . . b d d d b d 5 c c 
            . . . . b b b d d d b 5 5 b c c 
            . . . b b 5 5 5 5 d b 5 d c d c 
            . . b b 5 5 5 5 5 5 b d c d d c 
            . . b 5 d 1 d 5 5 5 5 c d d d c 
            . . b 5 1 f f 5 5 5 5 5 5 5 d c 
            . b b 5 f f b 4 5 5 5 5 5 5 5 c 
            b 5 b 5 5 d 4 4 5 5 5 5 5 5 5 c 
            5 b b 5 d d 4 4 5 5 5 5 5 5 5 b 
            b . . b 4 4 4 4 5 5 5 5 5 5 b b 
            . . . . c 4 4 b b 5 5 5 5 d b . 
            . . . . . 4 b . . b b b b b . . 
            . . . . . b . . . . . . . . . . 
            `,img`
            . . . . . . . . . . b c c . b . 
            . . . . . . . . . b d d b b b . 
            . . . . . . . . b d d d b 5 c . 
            . . . . . . . b d d d b d 5 c c 
            . . . . b b b d d d b 5 5 b c c 
            . . . b b 5 5 5 5 d b 5 d c d c 
            . . b b 5 5 5 5 5 5 b d c d d c 
            . . b 5 d 1 d 5 5 5 5 c d d d c 
            . . b 5 1 f f 5 5 5 5 5 5 5 d c 
            . b b 5 f f b 4 5 5 5 5 5 5 5 c 
            b 5 b 5 5 d 4 4 5 5 5 5 5 5 5 c 
            5 b b 5 d d 4 4 5 5 5 5 5 5 5 b 
            b . . b 4 4 4 4 5 5 5 5 5 5 b b 
            . . . . c 4 4 b b 5 5 5 5 d b . 
            . . . . . 4 b . . b b b b b . . 
            . . . . . b . . . . . . . . . . 
            `,img`
            . . . . . . . . . b c c c b . . 
            . . . . . . . . b d d b b b . . 
            . . . . . . . . b d d b 5 c . . 
            . . . . . . . b d d b d 5 c . . 
            . . . . b b b d d b 5 5 b c c . 
            . . . b b 5 5 5 d b 5 d c d c . 
            . . b b 5 5 5 5 5 b d c d d d c 
            . . b 5 d 1 d 5 5 5 c d d d d c 
            . . b 5 1 f f 5 5 5 5 5 5 5 d c 
            . b b 5 f f b 4 5 5 5 5 5 5 5 c 
            b 5 b 5 5 d 4 4 5 5 5 5 5 5 5 c 
            5 b b 5 d d 4 4 5 5 5 5 5 5 5 b 
            b . . b 4 4 4 4 5 5 5 5 5 5 b b 
            . . . . c 4 4 b b 5 5 5 5 d b . 
            . . . . . 4 b . . b b b b b . . 
            . . . . . b . . . . . . . . . . 
            `,img`
            . . . . . . . . b b c c . . . . 
            . . . . . . . b d b d b c . . . 
            . . . . . . . b d d c d d c . . 
            . . . . . . . b d 5 5 c d b c . 
            . . . . b b b d b 5 5 d c d c . 
            . . . b b 5 5 5 b 5 5 5 c d c . 
            . . b b 5 5 5 5 d b 5 5 b d c . 
            . . b 5 d 1 d 5 5 5 d b d d c . 
            . . b 5 1 f f 5 5 5 5 5 5 d c . 
            . b b 5 f f b 5 4 5 5 5 5 5 c . 
            b 5 b 5 5 5 d 4 4 5 5 5 5 5 c . 
            5 b b 5 5 d d 4 4 5 5 5 5 5 b . 
            b . . b d 4 4 4 4 5 5 5 5 b b . 
            . . . . f c 4 4 4 b 5 5 d b . . 
            . . . . . . . 4 b . b b b . . . 
            . . . . . . . b . . . . . . . . 
            `],
        100,
        true
        )
        mySprite3.setPosition(randint(0, 153), 0)
        mySprite3.setVelocity(0, 100)
        mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(2000)
}
let mySprite2: Sprite = null
let ispunching = false
let in_shell = false
let mySprite3: Sprite = null
let gamisgoing = false
let mySprite: Sprite = null
game.showLongText("press down or S on the computer to go in you're shell to avoid the ducks coming at you from the side.", DialogLayout.Center)
game.showLongText("you can't guard the falling ducks so dodge them by pressing left and right or A and D on the computer.", DialogLayout.Center)
game.showLongText("press A or space or z on the computer to grab the food.", DialogLayout.Center)
effects.bubbles.startScreenEffect()
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 f f 5 3 c 3 5 f f . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 c c b 5 5 5 5 5 c c . 
    . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
    . . b b c 5 b b 4 4 4 4 b 4 5 b 
    . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
    . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
    . c c c . . c c c c c c c c c . 
    `, SpriteKind.Player)
info.setLife(3)
animation.runImageAnimation(
mySprite,
[img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 3 c c b 5 5 5 5 c . . 
    . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
    . . b b b c c 5 b b 4 4 b 5 c . 
    . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
    . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
    . c c c 4 4 4 c 5 5 5 5 c 5 c . 
    . . . . . . . c c c c c c c . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . c c . . . . . . . . . . 
    . . . c 3 6 c c c c . . . . . . 
    . . . c 6 3 3 3 6 6 c . . . . . 
    . . c 3 3 3 3 3 3 6 6 c . . . . 
    . c 3 3 3 3 3 3 c c 6 6 c c c b 
    . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
    . c c 3 3 3 6 f f 5 c 6 c 5 f f 
    . c c 6 6 6 6 f f 5 c c c 5 f f 
    . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
    . c 3 3 3 3 c c c 4 5 5 5 5 c . 
    . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
    . . . c b b c 5 b b 4 4 b 5 c . 
    . . . c 5 c c 5 5 5 c 4 5 c c . 
    . . . c c c c 5 5 5 5 c c . . . 
    . . . . . . c c c c c c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 6 6 c . . . . . . 
    . c 3 3 3 3 3 3 6 6 c . . . . . 
    c 3 3 3 3 3 3 c c 6 6 c c c b . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 f f 5 c c c 5 f f . 
    c 3 3 3 3 c c c 5 5 3 5 5 b . . 
    c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
    . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
    . . c b 5 5 5 b 4 4 4 b 5 5 c . 
    . . b c 5 5 5 c 4 4 4 5 5 5 c . 
    . . c c 5 5 5 5 c 4 c c c c . . 
    . . c c c c c c c c c c . . . . 
    `,img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
    . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
    . . c c b 5 5 5 c 4 4 4 b 4 5 b 
    . . b b c 5 5 5 c 4 4 b 5 5 4 c 
    . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
    . c 5 c c c c c c 4 c 5 5 5 5 c 
    . c c c . . . . . c c c c c c . 
    `],
100,
true
)
mySprite.setPosition(75, 97)
gamisgoing = true
game.onUpdateInterval(1000, function () {
    if (gamisgoing) {
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        ispunching = true
        animation.runImageAnimation(
        mySprite,
        [img`
            ...cc...................
            ..c36cccc...............
            ..c633336c..............
            .c33333cc6c.cc..........
            c33333c55c6c55b.........
            c33333ff5c6c5ff.........
            cc3336ff5c6c5ff.........
            cc6666c553c355b.........
            c333333c55355b..........
            c3333ccb55555cc.........
            .c33c55b4555455c........
            ..bbc5bb4444b45b........
            .b54c4555b4b554c........
            .c5c4c555c4c555c........
            .c5c4c5555c5555c........
            .ccc..ccccccccc.........
            `,img`
            ........................
            ...cc...................
            ..c36cccc...............
            ..c633336c..............
            .c33333366c.............
            c33333cc66cccb..........
            c3333c55c6c55b..........
            cc333ff5c6c5ff..........
            cc666ff5ccc5ff..........
            c33333c55355b...........
            c333ccb55555cc..........
            .c3c5cccccccc5c.........
            ..bc55555c5555c.........
            .b5c4555c4c555c.........
            .c54c555c4c554c.........
            .ccccccc444ccc..........
            `,img`
            ...cc...................
            ..c36cccc...............
            ..c633336c..............
            .c333ccccccc............
            c333c555c555c...........
            c33c555c4c555c..........
            c33c555c4c555c..........
            cc3c555ccc55cc..........
            cc6c55c55c5c55c.........
            c33c4cff5ccc5ff.........
            c33c5cff5ccc5ff.........
            .ccc54c553c355c.........
            .c54c44c55555c..........
            .c5cccc45555cc..........
            .c5cccc4555cc...........
            .ccc..cccccc............
            `,img`
            ..cc....................
            .c36cccccccc............
            cc63c555c555c...........
            c33c555c4c555c..........
            c33c555c4c555c..........
            c33c555c4c555c..........
            cc3c555ccc55cc..........
            cc6c55ff5ccc5ff.........
            c33c4cff5ccc5ff.........
            c33c5cc55ccc55c.........
            c33c5cc55ccc55c.........
            .ccc54c553c355c.........
            .c54c44c55555c..........
            .c5cccc45555cc..........
            .c5cccc4555cc...........
            .ccc..cccccc............
            `,img`
            ........................
            ........................
            ........................
            .....cc.................
            ....c36cccc.............
            ...cc633336cc...........
            ..c3333336666c..........
            ..c3333366666c..........
            ..cc333666cccc.cc.......
            ..cc66666c55ccc55c......
            ..c333366ff5ccc5ff......
            ..c333336ff5ccc5ff......
            ..c333333c5555bbbbbbbb..
            ...c54c3ccccc455555c55c.
            ...c5cccc45554555555c55c
            ...ccc.ccccccccccccccccc
            `,img`
            ...cc...................
            ..c36cccc...............
            ..c633336c..............
            .c33333366c.............
            c3333336666c............
            c333336cc66cccb.........
            cc3336c55c6c55b.........
            cc6666ff5c6c5ff.........
            c33333ff5cc35ff.........
            c33333c555355b..........
            .c33333c45554c..........
            ..bbccccb44bbbbbb.......
            .b54ccc55cbb555b5c......
            .c5ccccc5545555c5c......
            .c5c...cc5455555c5c.....
            .ccc....ccccccccccc.....
            `],
        100,
        false
        )
        pause(600)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 3 c c b 5 5 5 5 c . . 
            . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
            . . b b b c c 5 b b 4 4 b 5 c . 
            . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
            . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
            . c c c 4 4 4 c 5 5 5 5 c 5 c . 
            . . . . . . . c c c c c c c . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c . . . . . . . . . . 
            . . . c 3 6 c c c c . . . . . . 
            . . . c 6 3 3 3 6 6 c . . . . . 
            . . c 3 3 3 3 3 3 6 6 c . . . . 
            . c 3 3 3 3 3 3 c c 6 6 c c c b 
            . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
            . c c 3 3 3 6 f f 5 c 6 c 5 f f 
            . c c 6 6 6 6 f f 5 c c c 5 f f 
            . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
            . c 3 3 3 3 c c c 4 5 5 5 5 c . 
            . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
            . . . c b b c 5 b b 4 4 b 5 c . 
            . . . c 5 c c 5 5 5 c 4 5 c c . 
            . . . c c c c 5 5 5 5 c c . . . 
            . . . . . . c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 6 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 c c 6 6 c c c b . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 c c c 5 f f . 
            c 3 3 3 3 c c c 5 5 3 5 5 b . . 
            c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
            . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
            . . c b 5 5 5 b 4 4 4 b 5 5 c . 
            . . b c 5 5 5 c 4 4 4 5 5 5 c . 
            . . c c 5 5 5 5 c 4 c c c c . . 
            . . c c c c c c c c c c . . . . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
            . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
            . . c c b 5 5 5 c 4 4 4 b 4 5 b 
            . . b b c 5 5 5 c 4 4 b 5 5 4 c 
            . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
            . c 5 c c c c c c 4 c 5 5 5 5 c 
            . c c c . . . . . c c c c c c . 
            `],
        100,
        true
        )
        ispunching = false
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        in_shell = true
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 3 c 3 5 f f . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c 3 c c c c . c c . . 
            . . c 6 3 3 f f 5 c 6 c 5 f f . 
            . c 3 3 3 3 f f 5 c 6 c 5 f f . 
            c 3 3 3 3 3 c 5 5 5 c 5 5 5 b . 
            c 3 3 3 3 6 c 5 5 5 c 5 5 5 b . 
            c c 3 3 3 6 3 c 5 5 3 5 5 b b . 
            c c 6 6 3 3 3 c 5 5 3 5 5 b b . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
            . . b b c 4 5 5 5 b 4 b 5 5 4 c 
            . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 c c 6 6 c c c c c . 
            c c 3 3 3 c 5 5 c c 3 3 c 5 5 b 
            c c 6 6 6 f f 5 c 3 c c c 5 f f 
            c 3 3 3 3 f f 5 c c c c c 5 f f 
            c 3 3 3 3 3 c 5 5 3 c 3 5 5 b . 
            . c 3 3 3 c c 4 5 5 5 5 4 4 c . 
            . . b b c 4 5 5 4 4 4 4 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c c . . . . . . 
            . c c 6 3 3 3 3 6 6 c . . . . . 
            c 6 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c . . . . 
            c 3 3 3 3 6 6 6 6 6 6 c c c . . 
            c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
            c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
            c 3 3 3 3 3 6 c c c c c c c c c 
            . c c c 6 6 c 4 5 5 c c 4 5 5 c 
            . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
            . . . . c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . c 3 6 c c c c c . . . . . . . 
            . c 6 6 3 3 3 6 6 c . . . . . . 
            c 3 3 3 3 3 3 6 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c c c . . 
            c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
            c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
            c c 6 6 6 6 6 6 c 3 c c c c 6 c 
            c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
            c 6 3 3 3 3 6 c 6 c c c c 6 c . 
            . c 6 3 3 3 6 c c c c c 6 c . . 
            . . c c c c c c c c c c c . . . 
            `],
        100,
        false
        )
        pause(600)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . c 3 6 c c c c c . . . . . . . 
            . c 6 6 3 3 3 6 6 c . . . . . . 
            c 3 3 3 3 3 3 6 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c c c . . 
            c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
            c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
            c c 6 6 6 6 6 6 c 3 c c c c 6 c 
            c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
            c 6 3 3 3 3 6 c 6 c c c c 6 c . 
            . c 6 3 3 3 6 c c c c c 6 c . . 
            . . c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c c . . . . . . 
            . c c 6 3 3 3 3 6 6 c . . . . . 
            c 6 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c . . . . 
            c 3 3 3 3 6 6 6 6 6 6 c c c . . 
            c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
            c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
            c 3 3 3 3 3 6 c c c c c c c c c 
            . c c c 6 6 c 4 5 5 c c 4 5 5 c 
            . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
            . . . . c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 c c 6 6 c c c c c . 
            c c 3 3 3 c 5 5 c c 3 3 c 5 5 b 
            c c 6 6 6 f f 5 c 3 c c c 5 f f 
            c 3 3 3 3 f f 5 c c c c c 5 f f 
            c 3 3 3 3 3 c 5 5 3 c 3 5 5 b . 
            . c 3 3 3 c c 4 5 5 5 5 4 4 c . 
            . . b b c 4 5 5 4 4 4 4 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c 3 c c c c . c c . . 
            . . c 6 3 3 f f 5 c 6 c 5 f f . 
            . c 3 3 3 3 f f 5 c 6 c 5 f f . 
            c 3 3 3 3 3 c 5 5 5 c 5 5 5 b . 
            c 3 3 3 3 6 c 5 5 5 c 5 5 5 b . 
            c c 3 3 3 6 3 c 5 5 3 5 5 b b . 
            c c 6 6 3 3 3 c 5 5 3 5 5 b b . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
            . . b b c 4 5 5 5 b 4 b 5 5 4 c 
            . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 3 c 3 5 f f . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `],
        100,
        false
        )
        pause(600)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 3 c c b 5 5 5 5 c . . 
            . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
            . . b b b c c 5 b b 4 4 b 5 c . 
            . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
            . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
            . c c c 4 4 4 c 5 5 5 5 c 5 c . 
            . . . . . . . c c c c c c c . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c . . . . . . . . . . 
            . . . c 3 6 c c c c . . . . . . 
            . . . c 6 3 3 3 6 6 c . . . . . 
            . . c 3 3 3 3 3 3 6 6 c . . . . 
            . c 3 3 3 3 3 3 c c 6 6 c c c b 
            . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
            . c c 3 3 3 6 f f 5 c 6 c 5 f f 
            . c c 6 6 6 6 f f 5 c c c 5 f f 
            . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
            . c 3 3 3 3 c c c 4 5 5 5 5 c . 
            . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
            . . . c b b c 5 b b 4 4 b 5 c . 
            . . . c 5 c c 5 5 5 c 4 5 c c . 
            . . . c c c c 5 5 5 5 c c . . . 
            . . . . . . c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 6 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 c c 6 6 c c c b . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 c c c 5 f f . 
            c 3 3 3 3 c c c 5 5 3 5 5 b . . 
            c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
            . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
            . . c b 5 5 5 b 4 4 4 b 5 5 c . 
            . . b c 5 5 5 c 4 4 4 5 5 5 c . 
            . . c c 5 5 5 5 c 4 c c c c . . 
            . . c c c c c c c c c c . . . . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
            . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
            . . c c b 5 5 5 c 4 4 4 b 4 5 b 
            . . b b c 5 5 5 c 4 4 b 5 5 4 c 
            . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
            . c 5 c c c c c c 4 c 5 5 5 5 c 
            . c c c . . . . . c c c c c c . 
            `],
        100,
        true
        )
        in_shell = false
        pause(1000)
    }
})
forever(function () {
    createground()
})
forever(function () {
    createfood()
})
forever(function () {
    createsideducks()
})
forever(function () {
    createdivingducks()
})
