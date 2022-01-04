import Phaser from 'phaser'

export default class Game extends Phaser.Scene {

    constructor() {
        super('game')
    }

    preload() {

    }

    create() {
        const map = this.make.tilemap({ key : 'PrototypeMap' })
        const tileset = map.addTilesetImage('PrototypeMap', 'tiles')

        map.createStaticLayer()
    }
}