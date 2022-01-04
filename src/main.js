import Phaser, { Physics } from 'phaser'
import TitleScreen from './scenes/TitleScreen'
import Preloader from './scenes/Preloader'
import Game from './scenes/Game'


const config = {
    width: 800,
    height: 500, 
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:0 }
        },
    scene: [Preloader,  Game]
    
    }
}

export default new Phaser.Game (

    {
        width: 800,
        height: 500, 
        type: Phaser.AUTO,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y:0 }
            },
        scene: [Preloader,  Game],
        scale : {
            zoom: 2
        }
        
        }
    }

    )


