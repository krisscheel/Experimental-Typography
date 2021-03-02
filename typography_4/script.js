let font
let graphic

function preload() {
  font = loadFont("./fonts/spacegrotesk-medium.otf")
}

function setup() {
  createCanvas(600, 600)

  graphic = createGraphics(600, 600)

  graphic.fill("#E0FFDDF")
  graphic.textFont(font)
  graphic.textSize(800)
  graphic.textAlign(CENTER, CENTER)
  graphic.text("a", 300, 240)
}

function draw() {
  background("#065635")
  const tileSize = 60

  for (let x = 0; x < 12; x = x + 1) {

    for (let y = 0; y < 12; y = y + 1) {

      const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50
      // source
      const sx = x * tileSize + distortion
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize

      // destination
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}

