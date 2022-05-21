OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("Light:" + pins.digitalReadPin(DigitalPin.P0))
    if (pins.digitalReadPin(DigitalPin.P0) < 200) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
