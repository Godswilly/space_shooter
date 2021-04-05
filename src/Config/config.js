import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'star-fall',
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  pixelArt: true,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};