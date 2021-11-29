//Declare global variables
let positions, thisMenu;

import logoImgSrc from "../assets/logo13.png";


class Menu extends Phaser.Scene {
    constructor() { 
        super({key: 'MenuScene'}); 
    }


    preload() {
        this.load.image("logo", logoImgSrc);
    }

    create() {
        positions = {
            centerX: this.physics.world.bounds.width / 2,
            centerY: this.physics.world.bounds.height / 2,
            topEdge: 0,
            rightEdge: this.physics.world.bounds.width,
            bottomEdge: this.physics.world.bounds.height,
            leftEdge: 0
        };

        thisMenu = this;

    const logo = this.add.image(positions.centerX, positions.centerY - 100, "logo");
    logo.setScale(1.2);

    const startGameButton = this.add.text(positions.centerX, positions.centerY + 150, 'Start Game!', { 
        fill: '#FFFFFF', 
        fontSize: 50,
        color: "#FFFFFF",
    }).setOrigin(0.5);

    startGameButton.setInteractive({ useHandCursor: true  });

    // startGameButton.on('pointerover', () => { console.log('add highlight animation'); });
    // startGameButton.on('pointerout', () => { console.log('remove highlight animation'); });
    // startGameButton.on('pointerdown', () => { console.log('add pressing animation'); });
    startGameButton.on('pointerup', () => { this.scene.start('GameScene'); });
    }


    update() {
        
    }
    
}

export default Menu;