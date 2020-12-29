radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    soundExpression.giggle.play()
    if (receivedNumber == 0) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
    
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
radio.setGroup(1)
