let font
let graphic
letgraphic2


function preload () {
font = loadFont("spacegrotesk-medium.otf")
}


function setup() {
createCanvas(500, 500)

graphic = createGraphics(500, 500)

graphic.textFont(font)
graphic.textSize(400)
graphic.fill("#000000")
graphic.textAlign(CENTER, CENTER)
graphic.text("no", width / 2, height / 2)

graphic2 = createGraphics(500, 500)

graphic2.textFont(font)
graphic2.textSize(400)
graphic2.fill("#0f0d7c")
graphic2.textAlign(CENTER, CENTER)
graphic2.text("ja", width / 2, height / 2)




}

function draw() {
    background("#ef5ddc")

    let val = sin(frameCount * 0.02) * 250

    copy(graphic, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500)
    copy(graphic2, 250 + val, 0, 250 - val, 500, 250 + val, 0, 250 - val, 500)
}