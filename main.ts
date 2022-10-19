let num = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
    count = num
})
input.onButtonPressed(Button.AB, function () {
    while (count > 0) {
        count += -1
        basic.showNumber(count)
    }
})
input.onButtonPressed(Button.B, function () {
    num += 10
    basic.showNumber(num)
    count = num
})
basic.forever(function () {
	
})
