let graphic
let font

function preload() {
  font = loadFont("./fonts/spacegrotesk-medium.otf")
}

function setup() {
  createCanvas(1200, 600)

  graphic = createGraphics(1200, 600)

  graphic.textFont(font)
  graphic.fill("#ffffff")
  graphic.textSize(500)
  graphic.textAlign(CENTER, CENTER)
  graphic.text("oas", 600, 260)
}

function draw() {
  background("#000000")

  const tileSize = 50

  for (let y = 0; y < 12; y = y + 1) {

    //let position = winMouseX / windowWidth 
    let position = frameCount

    //loop over 60 frames
    position = position % 120

    //if on the back-half, we want to reverse
    if (position > 60) {
      position = 120 - position
    }

    //want to make sure it's between 0 and 1
    position = position / 60

    position = easeInOutCubic(position)

    const sx = 0
    const sy = y * tileSize * position
    const sw = 1200
    const sh = tileSize * position + (600 - tileSize) * (1 - position)

    const dx = 0
    const dy = y * tileSize
    const dw = 1200
    const dh = tileSize

    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
  }
}



