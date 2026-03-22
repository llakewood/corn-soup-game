// ═══════════════════════════════════════════════════════
// CORN SOUP — A Story of Community
// A Phaser 3 storytelling game based on
// "Stories From The Land" documentary
// ═══════════════════════════════════════════════════════

const GAME_W = 800;
const GAME_H = 600;

// Color palette — warm, earthy tones
const C = {
  sky:        0x87CEEB,
  skyDusk:    0xE8967A,
  earth:      0x5C4033,
  earthLight: 0x8B6914,
  grass:      0x6B8E23,
  grassLight: 0x9ACD32,
  corn:       0xF5DEB3,
  cornDark:   0xDAA520,
  bean:       0x8B4513,
  beanGreen:  0x228B22,
  squash:     0xE8A317,
  water:      0x4A90D9,
  fire:       0xE8651A,
  fireGlow:   0xFFA500,
  wood:       0x6B4226,
  text:       0xFFF8E7,
  textDark:   0x3E2723,
  accent:     0xC0392B,
  gold:       0xDAA520,
  night:      0x1A1207,
  parchment:  0xF5E6CA,
};

// ═══════════════════════════════════════════════════════
// BOOT SCENE — load minimal assets
// ═══════════════════════════════════════════════════════
class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  create() {
    // Generate all pixel-art style textures procedurally
    this.generateTextures();
    this.scene.start('Title');
  }

  generateTextures() {
    const g = this.make.graphics({ add: false });

    // ── Corn seed ──
    g.clear();
    g.fillStyle(0xF5DEB3);
    g.fillEllipse(8, 8, 10, 14);
    g.fillStyle(0xDAA520);
    g.fillEllipse(8, 8, 6, 10);
    g.generateTexture('corn-seed', 16, 16);

    // ── Bean seed ──
    g.clear();
    g.fillStyle(0x8B4513);
    g.fillEllipse(8, 8, 12, 8);
    g.fillStyle(0x6B3410);
    g.fillEllipse(8, 7, 8, 5);
    g.generateTexture('bean-seed', 16, 16);

    // ── Squash seed ──
    g.clear();
    g.fillStyle(0xC9B458);
    g.fillEllipse(8, 8, 8, 12);
    g.fillStyle(0xB8A040);
    g.fillEllipse(8, 8, 5, 8);
    g.generateTexture('squash-seed', 16, 16);

    // ── Corn stalk (grown) ──
    g.clear();
    g.fillStyle(0x228B22);
    g.fillRect(14, 10, 4, 80);
    // Leaves
    g.fillStyle(0x2E8B2E);
    g.fillTriangle(14, 30, 0, 45, 14, 50);
    g.fillTriangle(18, 35, 32, 50, 18, 55);
    g.fillTriangle(14, 50, 0, 65, 14, 70);
    // Corn ear
    g.fillStyle(0xF5DEB3);
    g.fillEllipse(24, 42, 8, 14);
    g.fillStyle(0xDAA520);
    g.fillEllipse(24, 42, 5, 10);
    // Tassel
    g.fillStyle(0xCDA04D);
    g.fillTriangle(12, 10, 16, 0, 20, 10);
    g.fillTriangle(10, 8, 16, 0, 14, 12);
    g.fillTriangle(18, 8, 16, 0, 22, 12);
    g.generateTexture('corn-stalk', 32, 90);

    // ── Bean plant (grown) ──
    g.clear();
    g.fillStyle(0x228B22);
    g.fillRect(14, 20, 3, 50);
    // Leaves
    g.fillStyle(0x2E8B2E);
    g.fillEllipse(8, 30, 10, 6);
    g.fillEllipse(22, 38, 10, 6);
    g.fillEllipse(8, 48, 10, 6);
    // Bean pods
    g.fillStyle(0x8B4513);
    g.fillEllipse(24, 28, 4, 10);
    g.fillEllipse(6, 42, 4, 10);
    g.generateTexture('bean-plant', 32, 70);

    // ── Squash plant (grown) ──
    g.clear();
    // Vines
    g.fillStyle(0x228B22);
    g.fillRect(6, 30, 20, 3);
    g.fillRect(14, 20, 3, 30);
    // Leaves
    g.fillStyle(0x2E8B2E);
    g.fillCircle(6, 22, 8);
    g.fillCircle(24, 26, 7);
    g.fillCircle(10, 40, 6);
    // Squash
    g.fillStyle(0xE8A317);
    g.fillEllipse(22, 40, 10, 8);
    g.fillStyle(0xD4941A);
    g.lineStyle(1, 0xC08010);
    g.strokeEllipse(22, 40, 10, 8);
    g.generateTexture('squash-plant', 32, 50);

    // ── Soil mound ──
    g.clear();
    g.fillStyle(0x5C4033);
    g.fillEllipse(20, 16, 36, 16);
    g.fillStyle(0x6B4D3A);
    g.fillEllipse(20, 14, 28, 10);
    g.generateTexture('soil-mound', 40, 24);

    // ── Watering can ──
    g.clear();
    g.fillStyle(0x708090);
    g.fillRect(8, 10, 16, 18);
    g.fillRect(4, 8, 24, 4);
    g.fillStyle(0x607080);
    g.fillRect(24, 4, 8, 10);
    g.fillRect(28, 2, 6, 4);
    // Spout dots
    g.fillStyle(0x4A90D9);
    g.fillCircle(30, 2, 1);
    g.fillCircle(32, 3, 1);
    g.fillCircle(34, 2, 1);
    g.generateTexture('watering-can', 36, 30);

    // ── Water drops ──
    g.clear();
    g.fillStyle(0x4A90D9);
    g.fillTriangle(4, 0, 2, 6, 6, 6);
    g.fillCircle(4, 7, 3);
    g.generateTexture('water-drop', 8, 10);

    // ── Sun ──
    g.clear();
    g.fillStyle(0xFDB813);
    g.fillCircle(30, 30, 20);
    g.fillStyle(0xFFD700);
    g.fillCircle(30, 30, 14);
    // Rays
    g.lineStyle(3, 0xFDB813);
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI * 2 / 8) * i;
      g.lineBetween(
        30 + Math.cos(a) * 22, 30 + Math.sin(a) * 22,
        30 + Math.cos(a) * 30, 30 + Math.sin(a) * 30
      );
    }
    g.generateTexture('sun', 60, 60);

    // ── Tobacco ──
    g.clear();
    g.fillStyle(0x8B6914);
    g.fillEllipse(8, 12, 12, 8);
    g.fillStyle(0x7A5C10);
    g.fillEllipse(8, 10, 8, 5);
    g.generateTexture('tobacco', 16, 16);

    // ── Fire/smoke ──
    g.clear();
    g.fillStyle(0xE8651A);
    g.fillTriangle(10, 24, 6, 32, 14, 32);
    g.fillTriangle(14, 20, 10, 32, 18, 32);
    g.fillTriangle(18, 22, 14, 32, 22, 32);
    g.fillStyle(0xFFA500);
    g.fillTriangle(12, 26, 9, 32, 15, 32);
    g.fillTriangle(16, 24, 13, 32, 19, 32);
    g.generateTexture('fire', 28, 32);

    // ── Sprout stages ──
    // Small sprout
    g.clear();
    g.fillStyle(0x228B22);
    g.fillRect(7, 6, 2, 10);
    g.fillStyle(0x2E8B2E);
    g.fillTriangle(5, 6, 8, 0, 11, 6);
    g.generateTexture('sprout-small', 16, 16);

    // Medium sprout
    g.clear();
    g.fillStyle(0x228B22);
    g.fillRect(7, 10, 2, 16);
    g.fillStyle(0x2E8B2E);
    g.fillTriangle(4, 14, 8, 6, 12, 14);
    g.fillTriangle(3, 10, 8, 2, 13, 10);
    g.generateTexture('sprout-medium', 16, 28);

    // ── Particle ──
    g.clear();
    g.fillStyle(0xFFFFFF);
    g.fillCircle(2, 2, 2);
    g.generateTexture('particle', 4, 4);

    // ── Dried corn stalk (autumn) ──
    g.clear();
    g.fillStyle(0x8B7355);
    g.fillRect(14, 10, 4, 80);
    g.fillStyle(0x9B8565);
    g.fillTriangle(14, 30, 2, 48, 14, 50);
    g.fillTriangle(18, 35, 30, 52, 18, 55);
    g.fillTriangle(14, 50, 2, 68, 14, 70);
    // Dried corn ear
    g.fillStyle(0xF5DEB3);
    g.fillEllipse(24, 42, 8, 14);
    g.fillStyle(0xDAA520);
    g.fillEllipse(24, 42, 5, 10);
    // Husk
    g.fillStyle(0xC9B887);
    g.fillTriangle(20, 30, 30, 42, 20, 54);
    // Tassel
    g.fillStyle(0x9B8050);
    g.fillTriangle(12, 10, 16, 0, 20, 10);
    g.fillTriangle(10, 8, 16, 0, 14, 12);
    g.generateTexture('dried-corn-stalk', 32, 90);

    // ── Corn cob (harvestable) ──
    g.clear();
    g.fillStyle(0xF5DEB3);
    g.fillEllipse(12, 20, 10, 18);
    g.fillStyle(0xDAA520);
    // Kernel rows
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 3; col++) {
        g.fillCircle(8 + col * 4, 10 + row * 5, 2);
      }
    }
    // Husk leaves
    g.fillStyle(0xC9B887);
    g.fillTriangle(4, 8, 0, 20, 4, 32);
    g.fillTriangle(20, 8, 24, 20, 20, 32);
    g.generateTexture('corn-cob', 24, 40);

    // ── Corn braid ──
    g.clear();
    g.fillStyle(0xF5DEB3);
    g.fillEllipse(10, 8, 8, 12);
    g.fillEllipse(18, 10, 8, 12);
    g.fillEllipse(14, 16, 8, 12);
    g.fillStyle(0xDAA520);
    g.fillEllipse(10, 8, 5, 8);
    g.fillEllipse(18, 10, 5, 8);
    g.fillEllipse(14, 16, 5, 8);
    // Braid strings
    g.lineStyle(2, 0xC9B887);
    g.lineBetween(14, 0, 10, 8);
    g.lineBetween(14, 0, 18, 10);
    g.lineBetween(14, 0, 14, 16);
    g.generateTexture('corn-braid', 28, 28);

    // ── Log ──
    g.clear();
    g.fillStyle(0x6B4226);
    g.fillRoundedRect(2, 8, 36, 14, 4);
    g.fillStyle(0x5A3620);
    g.fillCircle(4, 15, 7);
    g.fillCircle(36, 15, 7);
    // Tree rings
    g.lineStyle(1, 0x4A2E18);
    g.strokeCircle(36, 15, 3);
    g.strokeCircle(36, 15, 5);
    g.fillStyle(0x7B5236);
    g.fillRoundedRect(4, 10, 32, 10, 3);
    g.generateTexture('log', 40, 28);

    // ── Kidney bean (large) ──
    g.clear();
    g.fillStyle(0x8B2500);
    g.fillEllipse(12, 10, 16, 12);
    g.fillStyle(0x6B1A00);
    g.lineStyle(1, 0x5A1500);
    g.lineBetween(6, 4, 18, 16);
    g.fillStyle(0x9B3510);
    g.fillEllipse(10, 8, 6, 4);
    g.generateTexture('kidney-bean', 24, 20);

    // ── Basket ──
    g.clear();
    g.fillStyle(0x8B6914);
    // Basket body
    g.fillRoundedRect(4, 10, 40, 28, 4);
    g.fillStyle(0x7A5C10);
    g.fillRoundedRect(6, 12, 36, 24, 3);
    // Weave pattern
    g.lineStyle(1, 0x6B4D0A);
    for (let i = 0; i < 5; i++) {
      g.lineBetween(6, 14 + i * 5, 42, 14 + i * 5);
    }
    // Rim
    g.fillStyle(0x9B7924);
    g.fillRoundedRect(2, 8, 44, 5, 2);
    // Handle
    g.lineStyle(3, 0x8B6914);
    g.beginPath();
    g.arc(24, 8, 14, Math.PI, 0, false);
    g.strokePath();
    g.generateTexture('basket', 48, 40);

    // ── Bean bowl ──
    g.clear();
    g.fillStyle(0x8B6914);
    g.fillEllipse(20, 18, 30, 14);
    g.fillStyle(0x7A5C10);
    g.fillEllipse(20, 16, 26, 10);
    // Beans inside
    g.fillStyle(0x8B2500);
    g.fillEllipse(14, 14, 5, 3);
    g.fillEllipse(22, 13, 5, 3);
    g.fillEllipse(18, 16, 5, 3);
    g.fillEllipse(26, 15, 5, 3);
    g.generateTexture('bean-bowl', 40, 28);

    // ── Harvestable squash ──
    g.clear();
    g.fillStyle(0xE8A317);
    g.fillEllipse(16, 14, 20, 14);
    g.fillStyle(0xD4941A);
    g.lineStyle(1, 0xC08010);
    g.strokeEllipse(16, 14, 20, 14);
    // Ridges
    g.lineStyle(1, 0xC08010);
    g.lineBetween(8, 4, 8, 24);
    g.lineBetween(16, 2, 16, 26);
    g.lineBetween(24, 4, 24, 24);
    // Stem
    g.fillStyle(0x5A9E3E);
    g.fillRect(14, 0, 4, 4);
    g.generateTexture('squash-harvest', 32, 28);

    // ── Ash pile ──
    g.clear();
    g.fillStyle(0x808080);
    g.fillEllipse(16, 14, 24, 12);
    g.fillStyle(0x909090);
    g.fillEllipse(16, 12, 18, 8);
    g.fillStyle(0xA0A0A0);
    g.fillEllipse(14, 11, 10, 5);
    g.generateTexture('ash-pile', 32, 20);

    g.destroy();
  }
}

// ═══════════════════════════════════════════════════════
// TITLE SCENE
// ═══════════════════════════════════════════════════════
class TitleScene extends Phaser.Scene {
  constructor() { super('Title'); }

  create() {
    // Background
    this.cameras.main.setBackgroundColor(C.night);

    // Soft gradient bg
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x1A1207, 0x1A1207, 0x3E2723, 0x3E2723);
    bg.fillRect(0, 0, GAME_W, GAME_H);

    // Fire glow
    const fireGlow = this.add.graphics();
    fireGlow.fillStyle(0xE8651A, 0.08);
    fireGlow.fillCircle(GAME_W / 2, GAME_H * 0.65, 200);
    fireGlow.fillStyle(0xFFA500, 0.05);
    fireGlow.fillCircle(GAME_W / 2, GAME_H * 0.65, 140);

    // Fire
    const fire = this.add.image(GAME_W / 2, GAME_H * 0.62, 'fire').setScale(3);
    this.tweens.add({
      targets: fire, scaleX: 3.2, scaleY: 2.8, y: GAME_H * 0.61,
      duration: 800, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
    });

    // Title
    this.add.text(GAME_W / 2, GAME_H * 0.2, 'CORN SOUP', {
      fontSize: '64px', fontFamily: 'Georgia, serif',
      color: '#F5DEB3', fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(GAME_W / 2, GAME_H * 0.32, 'A Story of Community', {
      fontSize: '22px', fontFamily: 'Georgia, serif',
      color: '#C0A060', fontStyle: 'italic'
    }).setOrigin(0.5);

    // Quote
    this.add.text(GAME_W / 2, GAME_H * 0.46, '"It\'s not just a bowl of soup."', {
      fontSize: '16px', fontFamily: 'Georgia, serif',
      color: '#A08060', fontStyle: 'italic'
    }).setOrigin(0.5);

    // Start prompt
    const startText = this.add.text(GAME_W / 2, GAME_H * 0.82, 'Click to begin', {
      fontSize: '20px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: startText, alpha: 0.3,
      duration: 1200, yoyo: true, repeat: -1
    });

    // Attribution
    this.add.text(GAME_W / 2, GAME_H * 0.93, 'Inspired by "Stories From The Land"', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#706040'
    }).setOrigin(0.5);

    this.input.once('pointerdown', () => {
      this.cameras.main.fadeOut(800, 26, 18, 7);
      this.time.delayedCall(800, () => this.scene.start('Narrative', {
        lines: [
          'Corn Soup.',
          'When these two words are mentioned to anyone from the Haudenosaunee Communities, they will smile, they will get excited.',
          'Because what corn soup represents is so much more than food.',
          'Recipes and techniques are passed down from generation to generation.',
          'To make it the right way can take eight to twelve hours. Some say it can take days.',
          'Today, you will learn to make this dish — from seed to bowl.',
          'You will plant the Three Sisters. You will tend the earth.',
          'You will prepare the corn in the old way.',
          'And you will share it with your community.',
          'Let us begin with a good mind.',
        ],
        nextScene: 'Level1_Intro'
      }));
    });
  }
}

// ═══════════════════════════════════════════════════════
// NARRATIVE SCENE — Reusable text display between levels
// ═══════════════════════════════════════════════════════
class NarrativeScene extends Phaser.Scene {
  constructor() { super('Narrative'); }

  create(data) {
    this.cameras.main.setBackgroundColor(C.night);
    this.cameras.main.fadeIn(600, 26, 18, 7);

    const lines = data.lines || [];
    const nextScene = data.nextScene || 'Title';
    const nextData = data.nextData || {};
    let lineIndex = 0;

    // Parchment-toned bg
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x1A1207, 0x1A1207, 0x2A1F12, 0x2A1F12);
    bg.fillRect(0, 0, GAME_W, GAME_H);

    // Decorative line
    bg.lineStyle(1, 0x705830);
    bg.lineBetween(100, GAME_H * 0.25, GAME_W - 100, GAME_H * 0.25);
    bg.lineBetween(100, GAME_H * 0.75, GAME_W - 100, GAME_H * 0.75);

    const textObj = this.add.text(GAME_W / 2, GAME_H / 2, '', {
      fontSize: '20px', fontFamily: 'Georgia, serif',
      color: '#F5E6CA', align: 'center',
      wordWrap: { width: 560 }, lineSpacing: 8
    }).setOrigin(0.5).setAlpha(0);

    const promptText = this.add.text(GAME_W / 2, GAME_H * 0.88, '', {
      fontSize: '14px', fontFamily: 'Georgia, serif', color: '#706040'
    }).setOrigin(0.5);

    const showLine = () => {
      if (lineIndex >= lines.length) {
        this.cameras.main.fadeOut(600, 26, 18, 7);
        this.time.delayedCall(600, () => this.scene.start(nextScene, nextData));
        return;
      }

      textObj.setText(lines[lineIndex]);
      textObj.setAlpha(0);
      this.tweens.add({
        targets: textObj, alpha: 1, duration: 600
      });

      promptText.setText(lineIndex < lines.length - 1 ? 'click to continue' : 'click to begin');
      lineIndex++;
    };

    showLine();
    this.input.on('pointerdown', showLine);
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 1 INTRO
// ═══════════════════════════════════════════════════════
class Level1IntroScene extends Phaser.Scene {
  constructor() { super('Level1_Intro'); }

  create() {
    this.scene.start('Narrative', {
      lines: [
        'Chapter One: The Three Sisters',
        'Before the soup, there is the seed.',
        'The Haudenosaunee people plant corn, beans, and squash together.\nThey call them the Three Sisters.',
        'The corn provides a stalk for the beans to climb.\nThe beans fix nitrogen in the soil.\nThe squash shades the ground, keeping moisture in.',
        'Together, they sustain each other — as a community should.',
        'In 1779, the Sullivan Campaign burned our corn fields\nto destroy us as a people.',
        '"Had it not been for the will of our people\nto take one kernel of corn\nand put it back in the earth..."',
        '"...then it\'s possible that would have been the end\nof all the Haudenosaunee people forever."',
        'One kernel. One act of faith.',
        'Now it is your turn to plant.',
      ],
      nextScene: 'Level1'
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 1 — PLANT & CULTIVATE
// ═══════════════════════════════════════════════════════
class Level1Scene extends Phaser.Scene {
  constructor() { super('Level1'); }

  create() {
    this.cameras.main.fadeIn(800);

    // ── Sky ──
    const sky = this.add.graphics();
    sky.fillGradientStyle(0x87CEEB, 0x87CEEB, 0xB0D4E8, 0xB0D4E8);
    sky.fillRect(0, 0, GAME_W, GAME_H * 0.55);

    // Sun
    this.sun = this.add.image(680, 80, 'sun').setScale(1.2).setAlpha(0.9);

    // ── Ground ──
    const ground = this.add.graphics();
    ground.fillGradientStyle(0x6B8E23, 0x6B8E23, 0x5C4033, 0x5C4033);
    ground.fillRect(0, GAME_H * 0.55, GAME_W, GAME_H * 0.45);
    ground.fillStyle(0x5C4033);
    ground.fillRect(0, GAME_H * 0.62, GAME_W, GAME_H * 0.38);

    // ── Planting mounds — 3 spots for Three Sisters ──
    this.mounds = [];
    this.plants = [];
    this.plantStage = [0, 0, 0]; // 0=empty, 1=seeded, 2=sprouted, 3=growing, 4=grown
    this.plantType = ['corn', 'bean', 'squash'];

    const moundPositions = [
      { x: 200, y: 420, label: 'Corn' },
      { x: 400, y: 440, label: 'Beans' },
      { x: 600, y: 430, label: 'Squash' },
    ];

    moundPositions.forEach((pos, i) => {
      const mound = this.add.image(pos.x, pos.y, 'soil-mound').setScale(2.5);
      this.mounds.push(mound);

      // Label
      this.add.text(pos.x, pos.y + 28, pos.label, {
        fontSize: '13px', fontFamily: 'Georgia, serif',
        color: '#A08860'
      }).setOrigin(0.5);
    });

    // ── Seed tray at bottom ──
    const trayBg = this.add.graphics();
    trayBg.fillStyle(0x3E2723, 0.85);
    trayBg.fillRoundedRect(GAME_W / 2 - 180, GAME_H - 80, 360, 70, 12);
    trayBg.lineStyle(1, 0x705830);
    trayBg.strokeRoundedRect(GAME_W / 2 - 180, GAME_H - 80, 360, 70, 12);

    this.add.text(GAME_W / 2, GAME_H - 75, 'Seeds', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    // Draggable seeds
    const seedTypes = [
      { key: 'corn-seed', x: GAME_W / 2 - 100, type: 0 },
      { key: 'bean-seed', x: GAME_W / 2, type: 1 },
      { key: 'squash-seed', x: GAME_W / 2 + 100, type: 2 },
    ];

    seedTypes.forEach(seed => {
      const img = this.add.image(seed.x, GAME_H - 40, seed.key)
        .setScale(2.5)
        .setInteractive({ draggable: true });

      img.seedType = seed.type;
      img.originX = seed.x;
      img.originY = GAME_H - 40;

      img.on('drag', (pointer, dragX, dragY) => {
        img.x = dragX;
        img.y = dragY;
      });

      img.on('dragend', () => {
        // Check if dropped on matching mound
        let planted = false;
        this.mounds.forEach((mound, i) => {
          if (i === img.seedType && this.plantStage[i] === 0) {
            const dist = Phaser.Math.Distance.Between(img.x, img.y, mound.x, mound.y);
            if (dist < 50) {
              this.plantSeed(i);
              planted = true;
              img.setVisible(false);
            }
          }
        });
        if (!planted) {
          img.x = img.originX;
          img.y = img.originY;
        }
      });
    });

    // ── Instructions ──
    this.instructionText = this.add.text(GAME_W / 2, 30, 'Drag each seed to its mound', {
      fontSize: '18px', fontFamily: 'Georgia, serif',
      color: '#FFF8E7', stroke: '#000', strokeThickness: 2
    }).setOrigin(0.5);

    // ── Watering can (appears after planting) ──
    this.wateringCan = this.add.image(700, GAME_H - 40, 'watering-can')
      .setScale(2).setInteractive({ draggable: true }).setVisible(false).setAlpha(0.9);

    this.wateringCan.on('drag', (pointer, dragX, dragY) => {
      this.wateringCan.x = dragX;
      this.wateringCan.y = dragY;
    });

    this.wateringCan.on('dragend', () => {
      // Check if over a planted mound
      this.mounds.forEach((mound, i) => {
        if (this.plantStage[i] >= 1 && this.plantStage[i] < 4) {
          const dist = Phaser.Math.Distance.Between(
            this.wateringCan.x, this.wateringCan.y, mound.x, mound.y
          );
          if (dist < 60) {
            this.waterPlant(i);
          }
        }
      });
      this.wateringCan.x = 700;
      this.wateringCan.y = GAME_H - 40;
    });

    // Track progress
    this.allPlanted = false;
    this.allGrown = false;
    this.waterCount = [0, 0, 0];
  }

  plantSeed(index) {
    this.plantStage[index] = 1;

    // Seed in ground
    const mound = this.mounds[index];
    const seedKey = ['corn-seed', 'bean-seed', 'squash-seed'][index];
    const seedInGround = this.add.image(mound.x, mound.y - 5, seedKey).setScale(1.5).setAlpha(0.7);

    // Little particles
    for (let i = 0; i < 6; i++) {
      const p = this.add.image(mound.x, mound.y, 'particle')
        .setScale(1).setTint(0x5C4033);
      this.tweens.add({
        targets: p,
        x: mound.x + Phaser.Math.Between(-30, 30),
        y: mound.y + Phaser.Math.Between(-20, -40),
        alpha: 0, duration: 600, delay: i * 50,
        onComplete: () => p.destroy()
      });
    }

    // Fade seed into ground
    this.tweens.add({
      targets: seedInGround, alpha: 0, y: mound.y + 5,
      duration: 1000, delay: 300,
      onComplete: () => seedInGround.destroy()
    });

    // Check if all planted
    if (this.plantStage.every(s => s >= 1)) {
      this.allPlanted = true;
      this.time.delayedCall(1200, () => {
        this.instructionText.setText('Water each mound to help them grow');
        this.wateringCan.setVisible(true);
        this.tweens.add({
          targets: this.wateringCan, alpha: 1, duration: 400
        });
      });
    }
  }

  waterPlant(index) {
    const mound = this.mounds[index];
    this.waterCount[index]++;

    // Water drop particles
    for (let i = 0; i < 5; i++) {
      const drop = this.add.image(
        mound.x + Phaser.Math.Between(-15, 15),
        mound.y - 30,
        'water-drop'
      ).setScale(1.5).setTint(0x4A90D9);

      this.tweens.add({
        targets: drop,
        y: mound.y + 5, alpha: 0,
        duration: 500, delay: i * 80,
        onComplete: () => drop.destroy()
      });
    }

    // Grow stages
    const stage = this.waterCount[index];
    if (stage === 1 && this.plantStage[index] === 1) {
      this.plantStage[index] = 2;
      const sprout = this.add.image(mound.x, mound.y - 12, 'sprout-small').setScale(2).setAlpha(0);
      this.plants[index] = sprout;
      this.tweens.add({ targets: sprout, alpha: 1, y: mound.y - 16, duration: 800 });
    } else if (stage === 2 && this.plantStage[index] === 2) {
      this.plantStage[index] = 3;
      if (this.plants[index]) this.plants[index].destroy();
      const med = this.add.image(mound.x, mound.y - 18, 'sprout-medium').setScale(2).setAlpha(0);
      this.plants[index] = med;
      this.tweens.add({ targets: med, alpha: 1, y: mound.y - 24, duration: 800 });
    } else if (stage === 3 && this.plantStage[index] === 3) {
      this.plantStage[index] = 4;
      if (this.plants[index]) this.plants[index].destroy();
      const plantKey = ['corn-stalk', 'bean-plant', 'squash-plant'][index];
      const yOffset = [70, 50, 35][index];
      const plant = this.add.image(mound.x, mound.y - yOffset, plantKey)
        .setScale(2).setAlpha(0);
      this.plants[index] = plant;
      this.tweens.add({ targets: plant, alpha: 1, duration: 1000 });

      // Check if all grown
      if (this.plantStage.every(s => s >= 4)) {
        this.allGrown = true;
        this.time.delayedCall(1500, () => this.levelComplete());
      }
    }
  }

  levelComplete() {
    this.wateringCan.setVisible(false);
    this.instructionText.setText('');

    // Celebration particles
    for (let i = 0; i < 20; i++) {
      const colors = [0xF5DEB3, 0x228B22, 0xE8A317, 0xDAA520];
      const p = this.add.image(
        Phaser.Math.Between(100, 700),
        Phaser.Math.Between(300, 500),
        'particle'
      ).setScale(2).setTint(Phaser.Utils.Array.GetRandom(colors));

      this.tweens.add({
        targets: p,
        y: p.y - Phaser.Math.Between(50, 150),
        alpha: 0, duration: 1500, delay: i * 80,
        onComplete: () => p.destroy()
      });
    }

    this.time.delayedCall(2500, () => {
      this.cameras.main.fadeOut(1000);
      this.time.delayedCall(1000, () => {
        this.scene.start('Narrative', {
          lines: [
            'The Three Sisters grow strong together.',
            'The corn stands tall. The beans climb. The squash shelters the earth.',
            'Just as our ancestors intended.',
            '"There\'s something about the health of a corn field\nthat reflects the health of a community."',
            '— Karl Dockstader, Oneida Bear Clan',
            'The harvest is near...',
          ],
          nextScene: 'Level2_Intro'
        });
      });
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 2 INTRO
// ═══════════════════════════════════════════════════════
class Level2IntroScene extends Phaser.Scene {
  constructor() { super('Level2_Intro'); }

  create() {
    this.scene.start('Narrative', {
      lines: [
        'Chapter Two: The Gathering',
        'The corn has dried on the stalk.',
        'Now we harvest, and we gather what we need.',
        '"We had about thirty people helping us.\nEach one of those people put their thoughts,\nand their energy into the corn."',
        'Collect the dried corn.\nGather hardwood for the ash.\nPrepare the kidney beans.',
        'Everything we need to begin.',
      ],
      nextScene: 'Level2'
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 2 — HARVEST & GATHER
// Three tasks: harvest corn cobs, collect logs, gather beans
// ═══════════════════════════════════════════════════════
class Level2Scene extends Phaser.Scene {
  constructor() { super('Level2'); }

  create() {
    this.cameras.main.fadeIn(800);

    // ── Autumn sky ──
    const sky = this.add.graphics();
    sky.fillGradientStyle(0xD4956B, 0xC48560, 0xE8B87A, 0xE8C89A);
    sky.fillRect(0, 0, GAME_W, GAME_H * 0.5);

    // Autumn sun lower in sky
    this.add.image(120, 100, 'sun').setScale(1).setAlpha(0.7).setTint(0xFFA060);

    // ── Ground ──
    const ground = this.add.graphics();
    ground.fillGradientStyle(0x8B7E45, 0x8B7E45, 0x5C4033, 0x5C4033);
    ground.fillRect(0, GAME_H * 0.5, GAME_W, GAME_H * 0.5);
    ground.fillStyle(0x5C4033);
    ground.fillRect(0, GAME_H * 0.58, GAME_W, GAME_H * 0.42);

    // ── Collection areas at bottom ──
    const trayBg = this.add.graphics();
    trayBg.fillStyle(0x3E2723, 0.85);
    trayBg.fillRoundedRect(20, GAME_H - 90, GAME_W - 40, 80, 12);
    trayBg.lineStyle(1, 0x705830);
    trayBg.strokeRoundedRect(20, GAME_H - 90, GAME_W - 40, 80, 12);

    // Four collection targets
    this.collected = { corn: 0, squash: 0, logs: 0, beans: 0 };
    this.targets = { corn: 4, squash: 3, logs: 3, beans: 3 };

    // Basket for corn
    this.add.image(110, GAME_H - 55, 'basket').setScale(1.6);
    this.cornCountText = this.add.text(110, GAME_H - 30, '0 / 4', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);
    this.add.text(110, GAME_H - 18, 'Corn', {
      fontSize: '10px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    // Squash area
    this.add.image(290, GAME_H - 55, 'squash-harvest').setScale(1.6);
    this.squashCountText = this.add.text(290, GAME_H - 30, '0 / 3', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);
    this.add.text(290, GAME_H - 18, 'Squash', {
      fontSize: '10px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    // Log pile area
    this.add.image(470, GAME_H - 58, 'log').setScale(1.6);
    this.logCountText = this.add.text(470, GAME_H - 30, '0 / 3', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);
    this.add.text(470, GAME_H - 18, 'Hardwood', {
      fontSize: '10px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    // Bean bowl
    this.add.image(650, GAME_H - 55, 'bean-bowl').setScale(1.6);
    this.beanCountText = this.add.text(650, GAME_H - 30, '0 / 3', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);
    this.add.text(650, GAME_H - 18, 'Beans', {
      fontSize: '10px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    // ── Instructions ──
    this.instructionText = this.add.text(GAME_W / 2, 25, 'Tap the corn cobs to harvest them', {
      fontSize: '18px', fontFamily: 'Georgia, serif',
      color: '#FFF8E7', stroke: '#000', strokeThickness: 2
    }).setOrigin(0.5);

    // ── Phase 1: Corn harvest ──
    this.phase = 1;
    this.createCornField();
  }

  createCornField() {
    this.cornStalks = [];
    this.cornCobs = [];

    // Row of dried corn stalks
    const stalkPositions = [
      { x: 120, y: 340 }, { x: 240, y: 350 }, { x: 380, y: 335 },
      { x: 500, y: 345 }, { x: 620, y: 340 }, { x: 700, y: 350 },
    ];

    stalkPositions.forEach((pos, i) => {
      const stalk = this.add.image(pos.x, pos.y, 'dried-corn-stalk')
        .setScale(2.2).setOrigin(0.5, 0.8);
      this.cornStalks.push(stalk);

      // Harvestable corn cobs on first 4 stalks
      if (i < 4) {
        const cobX = pos.x + 14;
        const cobY = pos.y - 60;
        const cob = this.add.image(cobX, cobY, 'corn-cob')
          .setScale(1.8).setInteractive({ cursor: 'pointer' });

        // Gentle sway
        this.tweens.add({
          targets: cob, angle: 3, duration: 1500 + i * 200,
          yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });

        cob.on('pointerdown', () => this.harvestCorn(cob, i));
        this.cornCobs.push(cob);
      }
    });
  }

  harvestCorn(cob, index) {
    if (this.phase !== 1) return;
    cob.disableInteractive();

    // Snap off animation
    this.tweens.add({
      targets: cob,
      y: cob.y + 10, angle: 15, alpha: 0.5,
      duration: 200, ease: 'Quad.easeIn',
      onComplete: () => {
        // Fly to basket
        this.tweens.add({
          targets: cob,
          x: 110, y: GAME_H - 55,
          scaleX: 0.8, scaleY: 0.8, angle: 0, alpha: 1,
          duration: 600, ease: 'Quad.easeInOut',
          onComplete: () => {
            cob.destroy();
            this.collected.corn++;
            this.cornCountText.setText(`${this.collected.corn} / ${this.targets.corn}`);

            // Collect particle burst
            this.collectBurst(110, GAME_H - 55, 0xF5DEB3);

            if (this.collected.corn >= this.targets.corn) {
              this.time.delayedCall(800, () => this.startSquashPhase());
            }
          }
        });
      }
    });

    // Kernel particles from stalk
    for (let i = 0; i < 4; i++) {
      const p = this.add.image(cob.x, cob.y, 'particle')
        .setScale(1.5).setTint(0xDAA520);
      this.tweens.add({
        targets: p,
        x: cob.x + Phaser.Math.Between(-20, 20),
        y: cob.y + Phaser.Math.Between(-30, 10),
        alpha: 0, duration: 400, delay: i * 40,
        onComplete: () => p.destroy()
      });
    }
  }

  startSquashPhase() {
    this.phase = 2;
    this.instructionText.setText('Tap the squash to harvest them');

    const squashPositions = [
      { x: 180, y: 420 }, { x: 400, y: 430 }, { x: 580, y: 415 },
    ];

    squashPositions.forEach((pos, i) => {
      // Squash vine/leaves underneath
      const vine = this.add.image(pos.x, pos.y - 10, 'squash-plant')
        .setScale(1.8).setAlpha(0);
      this.tweens.add({
        targets: vine, alpha: 0.7, duration: 400, delay: i * 200
      });

      const squash = this.add.image(pos.x + 5, pos.y + 5, 'squash-harvest')
        .setScale(2.2).setInteractive({ cursor: 'pointer' }).setAlpha(0);
      this.tweens.add({
        targets: squash, alpha: 1, duration: 400, delay: i * 200 + 100
      });

      squash.on('pointerdown', () => {
        squash.disableInteractive();
        this.tweens.add({
          targets: squash,
          x: 290, y: GAME_H - 55,
          scaleX: 1.2, scaleY: 1.2, angle: 0,
          duration: 500, ease: 'Quad.easeInOut',
          onComplete: () => {
            squash.destroy();
            vine.destroy();
            this.collected.squash++;
            this.squashCountText.setText(`${this.collected.squash} / ${this.targets.squash}`);
            this.collectBurst(290, GAME_H - 55, 0xE8A317);

            if (this.collected.squash >= this.targets.squash) {
              this.time.delayedCall(800, () => this.startLogPhase());
            }
          }
        });
      });
    });
  }

  startLogPhase() {
    this.phase = 3;
    this.instructionText.setText('Tap the hardwood logs to collect them');

    // Scatter logs in the scene
    const logPositions = [
      { x: 150, y: 400 }, { x: 420, y: 380 }, { x: 650, y: 410 },
    ];

    logPositions.forEach((pos, i) => {
      const log = this.add.image(pos.x, pos.y, 'log')
        .setScale(2.2).setAngle(Phaser.Math.Between(-15, 15))
        .setInteractive({ cursor: 'pointer' }).setAlpha(0);

      this.tweens.add({
        targets: log, alpha: 1, duration: 400, delay: i * 200
      });

      log.on('pointerdown', () => {
        log.disableInteractive();
        this.tweens.add({
          targets: log,
          x: 470, y: GAME_H - 55,
          scaleX: 1.2, scaleY: 1.2, angle: 0,
          duration: 500, ease: 'Quad.easeInOut',
          onComplete: () => {
            log.destroy();
            this.collected.logs++;
            this.logCountText.setText(`${this.collected.logs} / ${this.targets.logs}`);
            this.collectBurst(470, GAME_H - 55, 0x6B4226);

            if (this.collected.logs >= this.targets.logs) {
              this.time.delayedCall(800, () => this.startBeanPhase());
            }
          }
        });
      });
    });
  }

  startBeanPhase() {
    this.phase = 4;
    this.instructionText.setText('Tap the bean plants to gather the beans');

    // Bean plants scattered
    const beanPositions = [
      { x: 200, y: 370 }, { x: 450, y: 390 }, { x: 600, y: 375 },
    ];

    beanPositions.forEach((pos, i) => {
      // Bean plant
      const plant = this.add.image(pos.x, pos.y - 20, 'bean-plant')
        .setScale(2).setAlpha(0);
      this.tweens.add({
        targets: plant, alpha: 1, duration: 400, delay: i * 200
      });

      // Clickable bean cluster
      const bean = this.add.image(pos.x + 10, pos.y - 15, 'kidney-bean')
        .setScale(2).setInteractive({ cursor: 'pointer' }).setAlpha(0);
      this.tweens.add({
        targets: bean, alpha: 1, duration: 400, delay: i * 200 + 100
      });

      // Gentle sway on plant
      this.tweens.add({
        targets: [plant, bean], angle: 2,
        duration: 1800 + i * 200, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
      });

      bean.on('pointerdown', () => {
        bean.disableInteractive();
        // Pluck animation
        this.tweens.add({
          targets: bean,
          x: 650, y: GAME_H - 55,
          scaleX: 1.2, scaleY: 1.2, angle: 0,
          duration: 500, ease: 'Quad.easeInOut',
          onComplete: () => {
            bean.destroy();
            this.collected.beans++;
            this.beanCountText.setText(`${this.collected.beans} / ${this.targets.beans}`);
            this.collectBurst(650, GAME_H - 55, 0x8B2500);

            if (this.collected.beans >= this.targets.beans) {
              this.time.delayedCall(1000, () => this.levelComplete());
            }
          }
        });
      });
    });
  }

  collectBurst(x, y, color) {
    for (let i = 0; i < 8; i++) {
      const p = this.add.image(x, y, 'particle').setScale(2).setTint(color);
      this.tweens.add({
        targets: p,
        x: x + Phaser.Math.Between(-25, 25),
        y: y + Phaser.Math.Between(-30, -60),
        alpha: 0, duration: 500, delay: i * 30,
        onComplete: () => p.destroy()
      });
    }
  }

  levelComplete() {
    this.instructionText.setText('');

    // Show gathered totals with narrative text
    const completeText = this.add.text(GAME_W / 2, GAME_H * 0.3,
      'Everything is gathered.', {
      fontSize: '24px', fontFamily: 'Georgia, serif',
      color: '#F5DEB3', align: 'center'
    }).setOrigin(0.5).setAlpha(0);

    this.tweens.add({
      targets: completeText, alpha: 1, duration: 800
    });

    // Celebration
    for (let i = 0; i < 15; i++) {
      const colors = [0xF5DEB3, 0x8B2500, 0x6B4226, 0xDAA520];
      const p = this.add.image(
        Phaser.Math.Between(100, 700),
        Phaser.Math.Between(250, 450),
        'particle'
      ).setScale(2).setTint(Phaser.Utils.Array.GetRandom(colors));
      this.tweens.add({
        targets: p, y: p.y - Phaser.Math.Between(50, 120),
        alpha: 0, duration: 1500, delay: i * 60,
        onComplete: () => p.destroy()
      });
    }

    this.time.delayedCall(3000, () => {
      this.cameras.main.fadeOut(1000);
      this.time.delayedCall(1000, () => {
        this.scene.start('Narrative', {
          lines: [
            'The corn is harvested. The hardwood gathered. The beans are ready.',
            '"Each one of those cobs, each kernel...\nhas the thoughts and energy of everyone who helped."',
            '"We always made sure we had an abundance.\nYou had to think at least three years ahead."',
            '— Edgar, Cayuga Wolf Clan',
            'Seeds saved. Animals fed. And what remains is ours.',
            'Now comes the hardest part — the preparation.',
            'It is a labour of love.',
          ],
          nextScene: 'Level3_Intro'
        });
      });
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 3 INTRO
// ═══════════════════════════════════════════════════════
class Level3IntroScene extends Phaser.Scene {
  constructor() { super('Level3_Intro'); }

  create() {
    this.scene.start('Narrative', {
      lines: [
        'Chapter Three: Labour of Love',
        'Making corn soup the real way is a labour of love.',
        'We begin with tobacco and a prayer.\nWe put our good mind into the work.',
        '"I put my tobacco in the fire\nand I put my sense of mind into this.\nThe smoke will go up where He lives.\nAnd that\'s the Creator we\'re talking about."',
        '— Edgar, Cayuga Wolf Clan',
        '"Now our minds are one."',
      ],
      nextScene: 'Level3'
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 3 — PREPARE THE SOUP
// Five steps: offering, shelling, nixtamalization, washing, cooking
// ═══════════════════════════════════════════════════════
class Level3Scene extends Phaser.Scene {
  constructor() { super('Level3'); }

  create() {
    this.cameras.main.fadeIn(800);

    // ── Indoor/fire scene — warm dark background ──
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x2A1F12, 0x2A1F12, 0x1A1207, 0x1A1207);
    bg.fillRect(0, 0, GAME_W, GAME_H);

    // Ground
    bg.fillStyle(0x3E2723);
    bg.fillRect(0, GAME_H * 0.7, GAME_W, GAME_H * 0.3);

    // Instructions
    this.instructionText = this.add.text(GAME_W / 2, 30, '', {
      fontSize: '18px', fontFamily: 'Georgia, serif',
      color: '#FFF8E7', stroke: '#000', strokeThickness: 2
    }).setOrigin(0.5);

    // Quote area (bottom)
    this.quoteText = this.add.text(GAME_W / 2, GAME_H - 30, '', {
      fontSize: '13px', fontFamily: 'Georgia, serif',
      color: '#A08060', fontStyle: 'italic', align: 'center'
    }).setOrigin(0.5);

    this.step = 0;
    this.startStep1_Offering();
  }

  // ── Step 1: Tobacco offering ──
  startStep1_Offering() {
    this.step = 1;
    this.instructionText.setText('Place the tobacco in the fire');
    this.quoteText.setText('"We\'re bundling our minds. Now our minds are one."');

    // Fire
    const fireGlow = this.add.graphics();
    fireGlow.fillStyle(0xE8651A, 0.1);
    fireGlow.fillCircle(GAME_W / 2, GAME_H * 0.6, 120);
    fireGlow.fillStyle(0xFFA500, 0.06);
    fireGlow.fillCircle(GAME_W / 2, GAME_H * 0.6, 80);
    this.fireGlow = fireGlow;

    this.fire = this.add.image(GAME_W / 2, GAME_H * 0.58, 'fire').setScale(3);
    this.tweens.add({
      targets: this.fire, scaleX: 3.2, scaleY: 2.8,
      duration: 700, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
    });

    // Firepit base
    const pit = this.add.graphics();
    pit.fillStyle(0x4A3828);
    pit.fillEllipse(GAME_W / 2, GAME_H * 0.65, 120, 30);
    pit.lineStyle(2, 0x5C4033);
    pit.strokeEllipse(GAME_W / 2, GAME_H * 0.65, 120, 30);

    // Tobacco — draggable
    this.tobacco = this.add.image(200, GAME_H * 0.5, 'tobacco')
      .setScale(3).setInteractive({ draggable: true, cursor: 'pointer' });

    this.add.text(200, GAME_H * 0.5 + 30, 'Tobacco', {
      fontSize: '12px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    this.tobacco.on('drag', (p, x, y) => {
      this.tobacco.x = x;
      this.tobacco.y = y;
    });

    this.tobacco.on('dragend', () => {
      const dist = Phaser.Math.Distance.Between(
        this.tobacco.x, this.tobacco.y, GAME_W / 2, GAME_H * 0.58
      );
      if (dist < 60) {
        this.tobacco.disableInteractive();
        // Tobacco into fire
        this.tweens.add({
          targets: this.tobacco,
          x: GAME_W / 2, y: GAME_H * 0.58, alpha: 0, scaleX: 0.5, scaleY: 0.5,
          duration: 600,
          onComplete: () => {
            this.tobacco.destroy();
            // Smoke rises
            this.createSmoke(GAME_W / 2, GAME_H * 0.5, 15);
            // Fire flares
            this.tweens.add({
              targets: this.fire, scaleX: 4, scaleY: 4,
              duration: 400, yoyo: true
            });
            this.time.delayedCall(2500, () => this.transitionStep(2));
          }
        });
      } else {
        this.tobacco.x = 200;
        this.tobacco.y = GAME_H * 0.5;
      }
    });
  }

  createSmoke(x, y, count) {
    for (let i = 0; i < count; i++) {
      const smoke = this.add.image(
        x + Phaser.Math.Between(-10, 10), y, 'particle'
      ).setScale(2).setTint(0xC0C0C0).setAlpha(0.4);

      this.tweens.add({
        targets: smoke,
        x: x + Phaser.Math.Between(-40, 40),
        y: y - Phaser.Math.Between(100, 200),
        scaleX: 4, scaleY: 4, alpha: 0,
        duration: 2000 + Math.random() * 1000,
        delay: i * 150,
        onComplete: () => smoke.destroy()
      });
    }
  }

  transitionStep(nextStep) {
    this.cameras.main.fadeOut(600, 26, 18, 7);
    this.time.delayedCall(600, () => {
      // Clear scene objects
      this.children.removeAll(true);

      // Rebuild bg
      const bg = this.add.graphics();
      bg.fillGradientStyle(0x2A1F12, 0x2A1F12, 0x1A1207, 0x1A1207);
      bg.fillRect(0, 0, GAME_W, GAME_H);
      bg.fillStyle(0x3E2723);
      bg.fillRect(0, GAME_H * 0.7, GAME_W, GAME_H * 0.3);

      this.instructionText = this.add.text(GAME_W / 2, 30, '', {
        fontSize: '18px', fontFamily: 'Georgia, serif',
        color: '#FFF8E7', stroke: '#000', strokeThickness: 2
      }).setOrigin(0.5);

      this.quoteText = this.add.text(GAME_W / 2, GAME_H - 30, '', {
        fontSize: '13px', fontFamily: 'Georgia, serif',
        color: '#A08060', fontStyle: 'italic', align: 'center'
      }).setOrigin(0.5);

      this.cameras.main.fadeIn(600, 26, 18, 7);

      switch (nextStep) {
        case 2: this.startStep2_Shelling(); break;
        case 3: this.startStep3_Nixtamalization(); break;
        case 4: this.startStep4_Washing(); break;
        case 5: this.startStep5_Cooking(); break;
      }
    });
  }

  // ── Step 2: Shell the corn ──
  startStep2_Shelling() {
    this.step = 2;
    this.instructionText.setText('Click the corn cobs to shell them');
    this.quoteText.setText('"I\'ll start the first one with my hand.\nIt\'s kind of harsh on the skin."');

    this.kernelsCollected = 0;
    this.kernelsNeeded = 4;

    // Bowl to collect kernels
    const bowl = this.add.graphics();
    bowl.fillStyle(0x8B6914);
    bowl.fillEllipse(GAME_W / 2, GAME_H * 0.65, 80, 30);
    bowl.fillStyle(0x7A5C10);
    bowl.fillEllipse(GAME_W / 2, GAME_H * 0.63, 70, 22);

    this.kernelCountText = this.add.text(GAME_W / 2, GAME_H * 0.72, '0 / 4 cobs shelled', {
      fontSize: '14px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);

    // Corn cobs to shell
    const cobPositions = [
      { x: 150, y: GAME_H * 0.45 }, { x: 320, y: GAME_H * 0.42 },
      { x: 480, y: GAME_H * 0.46 }, { x: 650, y: GAME_H * 0.43 },
    ];

    cobPositions.forEach((pos, i) => {
      const cob = this.add.image(pos.x, pos.y, 'corn-cob')
        .setScale(2.5).setInteractive({ cursor: 'pointer' });

      cob.on('pointerdown', () => {
        cob.disableInteractive();

        // Kernels fly off
        for (let k = 0; k < 8; k++) {
          const kernel = this.add.image(cob.x, cob.y, 'corn-seed')
            .setScale(1.5).setTint(0xDAA520);
          this.tweens.add({
            targets: kernel,
            x: GAME_W / 2 + Phaser.Math.Between(-20, 20),
            y: GAME_H * 0.63,
            duration: 500, delay: k * 60, ease: 'Quad.easeIn',
            onComplete: () => kernel.destroy()
          });
        }

        // Cob fades to husk
        this.tweens.add({
          targets: cob, alpha: 0.3, scaleX: 2, scaleY: 2,
          duration: 500, onComplete: () => {
            cob.setTint(0x888888);
            this.kernelsCollected++;
            this.kernelCountText.setText(`${this.kernelsCollected} / ${this.kernelsNeeded} cobs shelled`);

            // Add kernels to bowl visually
            const bowlKernel = this.add.image(
              GAME_W / 2 + Phaser.Math.Between(-15, 15),
              GAME_H * 0.62 + Phaser.Math.Between(-5, 5),
              'corn-seed'
            ).setScale(1).setTint(0xDAA520);

            if (this.kernelsCollected >= this.kernelsNeeded) {
              this.time.delayedCall(1200, () => this.transitionStep(3));
            }
          }
        });
      });
    });
  }

  // ── Step 3: Nixtamalization with hardwood ashes ──
  startStep3_Nixtamalization() {
    this.step = 3;
    this.instructionText.setText('Add the hardwood ashes to the boiling corn');
    this.quoteText.setText('"It\'ll cause a chemical reaction — nixtamalization.\nThis is my favourite part."');

    // Pot over fire
    const fireGlow = this.add.graphics();
    fireGlow.fillStyle(0xE8651A, 0.08);
    fireGlow.fillCircle(GAME_W / 2, GAME_H * 0.55, 100);

    const fire = this.add.image(GAME_W / 2, GAME_H * 0.6, 'fire').setScale(2);
    this.tweens.add({
      targets: fire, scaleX: 2.2, scaleY: 1.8,
      duration: 600, yoyo: true, repeat: -1
    });

    // Pot
    const pot = this.add.graphics();
    pot.fillStyle(0x404040);
    pot.fillRoundedRect(GAME_W / 2 - 50, GAME_H * 0.42, 100, 70, 8);
    pot.fillStyle(0x505050);
    pot.fillRect(GAME_W / 2 - 55, GAME_H * 0.42, 110, 10);
    // Corn inside pot
    pot.fillStyle(0xDAA520, 0.5);
    pot.fillRect(GAME_W / 2 - 40, GAME_H * 0.47, 80, 30);

    // Steam from pot
    this.time.addEvent({
      delay: 400, repeat: -1,
      callback: () => {
        if (this.step !== 3) return;
        const s = this.add.image(
          GAME_W / 2 + Phaser.Math.Between(-20, 20),
          GAME_H * 0.42, 'particle'
        ).setScale(1.5).setTint(0xCCCCCC).setAlpha(0.3);
        this.tweens.add({
          targets: s, y: GAME_H * 0.3, scaleX: 3, scaleY: 3, alpha: 0,
          duration: 1200, onComplete: () => s.destroy()
        });
      }
    });

    // Ash pile — draggable
    this.ashPile = this.add.image(150, GAME_H * 0.5, 'ash-pile')
      .setScale(3).setInteractive({ draggable: true, cursor: 'pointer' });

    this.add.text(150, GAME_H * 0.5 + 25, 'Hardwood Ashes', {
      fontSize: '11px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    this.ashPile.on('drag', (p, x, y) => {
      this.ashPile.x = x;
      this.ashPile.y = y;
    });

    this.ashPile.on('dragend', () => {
      const dist = Phaser.Math.Distance.Between(
        this.ashPile.x, this.ashPile.y, GAME_W / 2, GAME_H * 0.45
      );
      if (dist < 70) {
        this.ashPile.disableInteractive();
        // Ashes into pot
        this.tweens.add({
          targets: this.ashPile,
          x: GAME_W / 2, y: GAME_H * 0.45, alpha: 0,
          duration: 500,
          onComplete: () => {
            this.ashPile.destroy();
            // Color change — corn turns darker (nixtamalization)
            this.instructionText.setText('The ashes transform the corn...');
            this.quoteText.setText('"If roasted umami was a word, I would say that is just\nmouth-wateringly delicious."');

            // Visual reaction — bubbling
            this.time.addEvent({
              delay: 200, repeat: 12,
              callback: () => {
                const bubble = this.add.image(
                  GAME_W / 2 + Phaser.Math.Between(-30, 30),
                  GAME_H * 0.46, 'particle'
                ).setScale(2).setTint(0xA09070);
                this.tweens.add({
                  targets: bubble, y: GAME_H * 0.4, alpha: 0, scaleX: 3, scaleY: 3,
                  duration: 600, onComplete: () => bubble.destroy()
                });
              }
            });

            this.time.delayedCall(3000, () => this.transitionStep(4));
          }
        });
      } else {
        this.ashPile.x = 150;
        this.ashPile.y = GAME_H * 0.5;
      }
    });
  }

  // ── Step 4: Washing the corn ──
  startStep4_Washing() {
    this.step = 4;
    this.instructionText.setText('Click to wash the corn — put your good thoughts in');
    this.quoteText.setText('"This is a good time to offer your words of thankfulness."');

    // Wash basin
    const basin = this.add.graphics();
    basin.fillStyle(0x708090);
    basin.fillRoundedRect(GAME_W / 2 - 80, GAME_H * 0.4, 160, 80, 12);
    basin.fillStyle(0x4A90D9, 0.6);
    basin.fillRect(GAME_W / 2 - 70, GAME_H * 0.44, 140, 55);

    // Corn kernels in water (dirty)
    this.washKernels = [];
    for (let i = 0; i < 12; i++) {
      const k = this.add.image(
        GAME_W / 2 + Phaser.Math.Between(-50, 50),
        GAME_H * 0.48 + Phaser.Math.Between(-10, 20),
        'corn-seed'
      ).setScale(1.5).setTint(0x8B7355); // Dirty brown
      this.washKernels.push(k);
    }

    this.washCount = 0;
    this.washNeeded = 5;

    this.washProgress = this.add.text(GAME_W / 2, GAME_H * 0.35, 'Wash: 0 / 5', {
      fontSize: '14px', fontFamily: 'Georgia, serif', color: '#F5DEB3'
    }).setOrigin(0.5);

    // Click basin to wash
    const washZone = this.add.zone(GAME_W / 2, GAME_H * 0.48, 160, 80)
      .setInteractive({ cursor: 'pointer' });

    washZone.on('pointerdown', () => {
      this.washCount++;
      this.washProgress.setText(`Wash: ${this.washCount} / ${this.washNeeded}`);

      // Swirl animation
      this.washKernels.forEach((k, i) => {
        this.tweens.add({
          targets: k,
          x: k.x + Phaser.Math.Between(-20, 20),
          y: k.y + Phaser.Math.Between(-5, 5),
          duration: 300, yoyo: true, delay: i * 20
        });
      });

      // Water splash
      for (let i = 0; i < 5; i++) {
        const splash = this.add.image(
          GAME_W / 2 + Phaser.Math.Between(-40, 40),
          GAME_H * 0.45, 'water-drop'
        ).setScale(1.5).setTint(0x4A90D9);
        this.tweens.add({
          targets: splash,
          y: GAME_H * 0.38, alpha: 0,
          duration: 400, delay: i * 50,
          onComplete: () => splash.destroy()
        });
      }

      // Gradually clean the kernels (change tint)
      const cleanness = this.washCount / this.washNeeded;
      const tint = Phaser.Display.Color.Interpolate.ColorWithColor(
        Phaser.Display.Color.ValueToColor(0x8B7355),
        Phaser.Display.Color.ValueToColor(0xF5DEB3),
        100, Math.floor(cleanness * 100)
      );
      const tintHex = Phaser.Display.Color.GetColor(tint.r, tint.g, tint.b);
      this.washKernels.forEach(k => k.setTint(tintHex));

      if (this.washCount >= this.washNeeded) {
        washZone.disableInteractive();
        this.instructionText.setText('The corn is clean and ready');
        this.quoteText.setText('"I feel like I\'m one with this corn right now."');
        this.time.delayedCall(2000, () => this.transitionStep(5));
      }
    });
  }

  // ── Step 5: Build the broth and cook ──
  startStep5_Cooking() {
    this.step = 5;
    this.instructionText.setText('Add ingredients to the pot to build the broth');
    this.quoteText.setText('"Corn\'s got a delicate flavour.\nI want a broth that is strong enough, but not too strong."');

    // Big pot
    const pot = this.add.graphics();
    pot.fillStyle(0x404040);
    pot.fillRoundedRect(GAME_W / 2 - 60, GAME_H * 0.35, 120, 100, 10);
    pot.fillStyle(0x505050);
    pot.fillRect(GAME_W / 2 - 65, GAME_H * 0.35, 130, 12);
    // Water in pot
    pot.fillStyle(0x4A90D9, 0.3);
    pot.fillRect(GAME_W / 2 - 50, GAME_H * 0.4, 100, 60);

    // Fire under pot
    const fire = this.add.image(GAME_W / 2, GAME_H * 0.72, 'fire').setScale(2.5);
    this.tweens.add({
      targets: fire, scaleX: 2.7, scaleY: 2.3,
      duration: 600, yoyo: true, repeat: -1
    });

    const fireGlow = this.add.graphics();
    fireGlow.fillStyle(0xE8651A, 0.06);
    fireGlow.fillCircle(GAME_W / 2, GAME_H * 0.65, 100);

    // Ingredients to add
    this.ingredientsAdded = 0;
    this.ingredientsNeeded = 3;

    const ingredients = [
      { key: 'corn-seed', x: 120, y: GAME_H * 0.45, label: 'Corn', tint: 0xF5DEB3 },
      { key: 'kidney-bean', x: 120, y: GAME_H * 0.55, label: 'Beans', tint: 0x8B2500 },
      { key: 'corn-seed', x: 120, y: GAME_H * 0.65, label: 'Salt Pork', tint: 0xE8B0B0 },
    ];

    ingredients.forEach((ing, i) => {
      const item = this.add.image(ing.x, ing.y, ing.key)
        .setScale(2.5).setTint(ing.tint)
        .setInteractive({ draggable: true, cursor: 'pointer' });

      this.add.text(ing.x + 25, ing.y, ing.label, {
        fontSize: '12px', fontFamily: 'Georgia, serif', color: '#A08860'
      }).setOrigin(0, 0.5);

      item.origX = ing.x;
      item.origY = ing.y;

      item.on('drag', (p, x, y) => { item.x = x; item.y = y; });

      item.on('dragend', () => {
        const dist = Phaser.Math.Distance.Between(
          item.x, item.y, GAME_W / 2, GAME_H * 0.45
        );
        if (dist < 70) {
          item.disableInteractive();
          this.tweens.add({
            targets: item,
            x: GAME_W / 2, y: GAME_H * 0.45, alpha: 0,
            scaleX: 1, scaleY: 1,
            duration: 400,
            onComplete: () => {
              item.destroy();
              this.ingredientsAdded++;

              // Splash
              for (let s = 0; s < 4; s++) {
                const sp = this.add.image(
                  GAME_W / 2 + Phaser.Math.Between(-20, 20),
                  GAME_H * 0.42, 'particle'
                ).setScale(1.5).setTint(ing.tint);
                this.tweens.add({
                  targets: sp, y: GAME_H * 0.35, alpha: 0,
                  duration: 400, delay: s * 40,
                  onComplete: () => sp.destroy()
                });
              }

              if (this.ingredientsAdded >= this.ingredientsNeeded) {
                this.time.delayedCall(800, () => this.cookingComplete());
              }
            }
          });
        } else {
          item.x = item.origX;
          item.y = item.origY;
        }
      });
    });
  }

  cookingComplete() {
    this.instructionText.setText('The soup is ready.');
    this.quoteText.setText('');

    // Steam rising — the soup is done
    this.time.addEvent({
      delay: 300, repeat: 15,
      callback: () => {
        const s = this.add.image(
          GAME_W / 2 + Phaser.Math.Between(-25, 25),
          GAME_H * 0.35, 'particle'
        ).setScale(2).setTint(0xDDDDDD).setAlpha(0.4);
        this.tweens.add({
          targets: s, y: GAME_H * 0.15, scaleX: 5, scaleY: 5, alpha: 0,
          duration: 1500, onComplete: () => s.destroy()
        });
      }
    });

    // Warm glow
    const glow = this.add.graphics();
    glow.fillStyle(0xFFA500, 0.05);
    glow.fillCircle(GAME_W / 2, GAME_H * 0.45, 150);

    this.time.delayedCall(4000, () => {
      this.cameras.main.fadeOut(1000);
      this.time.delayedCall(1000, () => {
        this.scene.start('Narrative', {
          lines: [
            'The soup simmers. The aroma fills the air.',
            '"This just brings me back to my childhood.\nAnd that\'s that medicine that we talk about."',
            '"If roasted umami was a word,\nI would say that roasted umami is just that —\nmouth-wateringly delicious."',
            '— Karl Dockstader, Oneida Bear Clan',
            'But the soup is not complete until it is shared.',
            '"At the end of the day, this bowl is about community."',
          ],
          nextScene: 'Level4_Intro'
        });
      });
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 4 INTRO
// ═══════════════════════════════════════════════════════
class Level4IntroScene extends Phaser.Scene {
  constructor() { super('Level4_Intro'); }

  create() {
    this.scene.start('Narrative', {
      lines: [
        'Chapter Four: Closing the Circle',
        'The soup is ready.',
        'Now we share it with our community —\nour elders, our families, those who give so much.',
        '"I love being able to serve corn soup to our elders.\nIt\'s a real honour."',
        'Each bowl carries the energy of everyone\nwho planted, harvested, and prepared.',
        'Deliver the soup. Close the circle.',
      ],
      nextScene: 'Level4'
    });
  }
}

// ═══════════════════════════════════════════════════════
// LEVEL 4 — SHARE WITH COMMUNITY
// Deliver bowls of soup to community members
// ═══════════════════════════════════════════════════════
class Level4Scene extends Phaser.Scene {
  constructor() { super('Level4'); }

  create() {
    this.cameras.main.fadeIn(800);

    // ── Evening sky — warm dusk ──
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x4A3060, 0x6A4070, 0xE8967A, 0xF0B87A);
    bg.fillRect(0, 0, GAME_W, GAME_H * 0.45);

    // Ground — community path
    bg.fillGradientStyle(0x5C4033, 0x5C4033, 0x3E2723, 0x3E2723);
    bg.fillRect(0, GAME_H * 0.45, GAME_W, GAME_H * 0.55);

    // Path
    bg.fillStyle(0x6B5240);
    bg.fillRect(0, GAME_H * 0.62, GAME_W, 40);
    bg.fillStyle(0x7A6250);
    bg.fillRect(0, GAME_H * 0.64, GAME_W, 20);

    // Stars in sky
    for (let i = 0; i < 15; i++) {
      bg.fillStyle(0xFFFFFF, 0.3 + Math.random() * 0.4);
      bg.fillCircle(
        Phaser.Math.Between(20, GAME_W - 20),
        Phaser.Math.Between(10, GAME_H * 0.25),
        1
      );
    }

    // Instructions
    this.instructionText = this.add.text(GAME_W / 2, 25, 'Drag a bowl of soup to each person', {
      fontSize: '18px', fontFamily: 'Georgia, serif',
      color: '#FFF8E7', stroke: '#000', strokeThickness: 2
    }).setOrigin(0.5);

    // Quote area
    this.quoteText = this.add.text(GAME_W / 2, GAME_H - 20, '', {
      fontSize: '13px', fontFamily: 'Georgia, serif',
      color: '#A08060', fontStyle: 'italic', align: 'center',
      wordWrap: { width: 600 }
    }).setOrigin(0.5);

    // ── Community members ──
    this.deliveries = 0;
    this.totalDeliveries = 4;

    const people = [
      {
        x: 120, y: GAME_H * 0.5,
        name: 'Geralda',
        desc: 'Community leader',
        quote: '"Her dad was regarded as one of the better corn soup makers.\nShe\'s given a lot to our community."',
        color: 0xC0392B,
      },
      {
        x: 320, y: GAME_H * 0.48,
        name: 'Jill',
        desc: 'Regalia maker & mother',
        quote: '"She does a lot of community favours.\nShe has a big heart."',
        color: 0x2980B9,
      },
      {
        x: 520, y: GAME_H * 0.51,
        name: 'Gary',
        desc: 'Knowledge keeper',
        quote: '"The more corn soup makers we have is important.\nIt\'s not just a bowl of soup."',
        color: 0x27AE60,
      },
      {
        x: 700, y: GAME_H * 0.49,
        name: 'The Elders',
        desc: 'Our grandmothers\' generation',
        quote: '"I love being able to serve corn soup to our elders.\nIt\'s a real honour."',
        color: 0x8E44AD,
      },
    ];

    this.peopleData = people;
    this.personSprites = [];

    people.forEach((person, i) => {
      // Simple person figure
      const g = this.add.graphics();

      // Body
      g.fillStyle(person.color);
      g.fillRoundedRect(person.x - 12, person.y - 10, 24, 35, 6);

      // Head
      g.fillStyle(0xDEB887);
      g.fillCircle(person.x, person.y - 20, 12);

      // Eyes
      g.fillStyle(0x1A1A1A);
      g.fillCircle(person.x - 4, person.y - 22, 2);
      g.fillCircle(person.x + 4, person.y - 22, 2);

      // Smile
      g.lineStyle(1, 0x1A1A1A);
      g.beginPath();
      g.arc(person.x, person.y - 18, 5, 0.2, Math.PI - 0.2, false);
      g.strokePath();

      // Hair
      g.fillStyle(0x1A1A1A);
      g.fillEllipse(person.x, person.y - 28, 20, 10);

      this.personSprites.push(g);

      // Name label
      this.add.text(person.x, person.y + 32, person.name, {
        fontSize: '13px', fontFamily: 'Georgia, serif',
        color: '#F5DEB3', fontStyle: 'bold'
      }).setOrigin(0.5);

      this.add.text(person.x, person.y + 46, person.desc, {
        fontSize: '10px', fontFamily: 'Georgia, serif', color: '#A08860'
      }).setOrigin(0.5);

      // Drop zone
      person.zone = this.add.zone(person.x, person.y, 60, 70)
        .setInteractive({ dropZone: true });
      person.delivered = false;
    });

    // ── Soup pot (source of bowls) ──
    const potX = GAME_W / 2;
    const potY = GAME_H * 0.82;

    const potGlow = this.add.graphics();
    potGlow.fillStyle(0xE8651A, 0.06);
    potGlow.fillCircle(potX, potY, 60);

    const potFire = this.add.image(potX, potY + 10, 'fire').setScale(1.5);
    this.tweens.add({
      targets: potFire, scaleX: 1.6, scaleY: 1.3,
      duration: 600, yoyo: true, repeat: -1
    });

    // Pot graphic
    const potG = this.add.graphics();
    potG.fillStyle(0x404040);
    potG.fillRoundedRect(potX - 30, potY - 20, 60, 40, 6);
    potG.fillStyle(0x505050);
    potG.fillRect(potX - 33, potY - 20, 66, 8);

    this.add.text(potX, potY + 28, 'Drag a bowl to each person', {
      fontSize: '11px', fontFamily: 'Georgia, serif', color: '#A08860'
    }).setOrigin(0.5);

    // Spawn draggable bowls
    this.spawnBowl(potX, potY);

    // Enable drag-and-drop
    this.input.on('drop', (pointer, gameObject, dropZone) => {
      // Find which person this zone belongs to
      const person = this.peopleData.find(p => p.zone === dropZone);
      if (person && !person.delivered) {
        person.delivered = true;
        gameObject.disableInteractive();

        // Bowl arrives
        this.tweens.add({
          targets: gameObject,
          x: person.x, y: person.y + 10,
          scaleX: 1.2, scaleY: 1.2,
          duration: 300,
          onComplete: () => {
            this.deliveries++;

            // Warm particle burst
            for (let i = 0; i < 10; i++) {
              const p = this.add.image(person.x, person.y, 'particle')
                .setScale(2).setTint(0xFFA500);
              this.tweens.add({
                targets: p,
                x: person.x + Phaser.Math.Between(-30, 30),
                y: person.y + Phaser.Math.Between(-40, -70),
                alpha: 0, duration: 800, delay: i * 40,
                onComplete: () => p.destroy()
              });
            }

            // Show person's quote
            this.quoteText.setText(person.quote);

            if (this.deliveries >= this.totalDeliveries) {
              this.time.delayedCall(3000, () => this.levelComplete());
            } else {
              // Spawn next bowl
              this.time.delayedCall(1000, () => this.spawnBowl(potX, potY));
            }
          }
        });
      } else {
        // Return to pot
        this.tweens.add({
          targets: gameObject, x: potX, y: potY - 30,
          duration: 300
        });
      }
    });
  }

  spawnBowl(potX, potY) {
    // Create a bowl graphic as a texture on the fly
    const bowl = this.add.graphics();
    bowl.fillStyle(0x8B6914);
    bowl.fillEllipse(0, 0, 28, 14);
    bowl.fillStyle(0x7A5C10);
    bowl.fillEllipse(0, -2, 22, 9);
    // Soup inside
    bowl.fillStyle(0xDAA520, 0.7);
    bowl.fillEllipse(0, -2, 18, 7);
    // Steam
    bowl.fillStyle(0xFFFFFF, 0.3);
    bowl.fillCircle(-4, -10, 2);
    bowl.fillCircle(2, -12, 2);
    bowl.fillCircle(6, -9, 2);

    bowl.setPosition(potX, potY - 30);
    bowl.setInteractive(
      new Phaser.Geom.Rectangle(-20, -15, 40, 30),
      Phaser.Geom.Rectangle.Contains
    );
    this.input.setDraggable(bowl);

    bowl.on('drag', (pointer, dragX, dragY) => {
      bowl.x = dragX;
      bowl.y = dragY;
    });

    bowl.on('dragend', () => {
      // If not dropped on a valid zone, return
      bowl.x = potX;
      bowl.y = potY - 30;
    });

    // Pop in
    bowl.setScale(0);
    this.tweens.add({
      targets: bowl, scaleX: 1, scaleY: 1,
      duration: 400, ease: 'Back.easeOut'
    });
  }

  levelComplete() {
    this.instructionText.setText('');
    this.quoteText.setText('');

    // Final message
    const finalText = this.add.text(GAME_W / 2, GAME_H * 0.3,
      'The circle is closed.', {
      fontSize: '28px', fontFamily: 'Georgia, serif',
      color: '#F5DEB3'
    }).setOrigin(0.5).setAlpha(0);

    this.tweens.add({
      targets: finalText, alpha: 1, duration: 1000
    });

    // Warm glow over the whole scene
    const glow = this.add.graphics();
    glow.fillStyle(0xFFA500, 0);
    glow.fillRect(0, 0, GAME_W, GAME_H);
    this.tweens.add({
      targets: glow, alpha: 0.08, duration: 2000
    });

    this.time.delayedCall(4000, () => {
      this.cameras.main.fadeOut(1500, 26, 18, 7);
      this.time.delayedCall(1500, () => {
        this.scene.start('Narrative', {
          lines: [
            '"Corn soup has a very important meaning."',
            '"We\'ve gotta remember that our ancestors\nkept this alive for us to have today."',
            '"There\'s a lot of things that happen\nwhen soup is going together.\nYou use a good mind, tell a lot of good stories, you share."',
            '"And all that energy is going into the soup\nand it\'s very meaningful."',
            '"It\'s not just a bowl of soup."',
            '— Gary Parker',
            '"A little bowl of corn soup\ncan teach you a lot about life."',
            'Thank you for playing.',
            'Inspired by "Stories From The Land"\nfeaturing Karl Dockstader & Edgar\nof the Haudenosaunee Confederacy.',
            'Nia:wen.',
          ],
          nextScene: 'Title'
        });
      });
    });
  }
}

// ═══════════════════════════════════════════════════════
// GAME CONFIG
// ═══════════════════════════════════════════════════════
const config = {
  type: Phaser.AUTO,
  width: GAME_W,
  height: GAME_H,
  parent: 'game-container',
  backgroundColor: '#1A1207',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    BootScene,
    TitleScene,
    NarrativeScene,
    Level1IntroScene,
    Level1Scene,
    Level2IntroScene,
    Level2Scene,
    Level3IntroScene,
    Level3Scene,
    Level4IntroScene,
    Level4Scene,
  ]
};

const game = new Phaser.Game(config);
