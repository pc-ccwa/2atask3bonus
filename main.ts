input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    while (num >= 0) {
        num += -1
        basic.showNumber(num)
    }
})
input.onButtonPressed(Button.B, function () {
    num += 10
    basic.showNumber(num)
})
let num = 0
num = 0
basic.forever(function () {
	
})
