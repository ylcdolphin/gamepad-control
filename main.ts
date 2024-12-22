radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendNumber(2)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendNumber(3)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendNumber(4)
    }
})
