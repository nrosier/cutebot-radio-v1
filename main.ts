radio.onReceivedNumber(function (receivedNumber) {
    soundExpression.giggle.play()
    if (receivedNumber == 0) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
