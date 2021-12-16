import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    preload() {
        this.preload.image('tiles','./src/assets/overworld.png')

    }

    create() {
        const array = [
                        [0, 1, 2],
                        [0, 1, 2],
                        [0, 1, 2]
        ]
        const map = this.make.tilemap({ data:array, tileWidth: 64, tileHeight: 64}) 
        map.addTilesetImage('tiles', 64, 64)

        const layer = map.createLayer(0, 'tiles', 0, 0)


        // const ball = this.add.circle(400, 250, 10, 0xffffff, 1)
        // this.physics.add.existing(ball)

        // ball.body.setCollideWorldBounds(True, 1, 1)

        // ball.body.setVelocity(200, 200)
    }
}