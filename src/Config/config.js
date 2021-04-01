import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'space_shooter',
  width: 800,
  height: 600,
  pixelArt: true,
  backgroundColor: '#2d2d2d',
  roundPixels: true,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
};