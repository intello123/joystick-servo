let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    angle = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    )
    servos.P0.setAngle(angle)
})
