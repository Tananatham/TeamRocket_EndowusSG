import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {

    constructor() {
        super('preloader')
    }

    preload() {
        this.load.image('tiles', 'public/Overworld.png')
        this.load.tilemapTiledJSON('PrototypeMap', 'resources/PrototypeMap.json')
    }

    create() {
        this.scene.start('game')
    }
}

