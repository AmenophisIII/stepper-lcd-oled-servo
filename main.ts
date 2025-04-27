input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Let's go !", 0, 1)
    OLED12864_I2C.showString(
    0,
    1,
    "Let's go !",
    1
    )
    motor.moveClockwise(1, stepUnit.Rotations)
    motor.stopMotor()
    basic.pause(100)
    motor.moveAntiClockwise(1, stepUnit.Rotations)
    motor.stopMotor()
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P6, 90)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P6, 0)
    basic.pause(1000)
})
let motor: stepperMotor.Motor = null
basic.showIcon(IconNames.StickFigure)
basic.pause(2000)
led.enable(false)
pins.servoWritePin(AnalogPin.P6, 0)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.ShowString("Hi Jack !", 0, 0)
I2C_LCD1602.ShowString("push A button", 0, 1)
OLED12864_I2C.init(60)
OLED12864_I2C.showString(
0,
0,
"Hi Jack!",
1
)
motor = stepperMotor.createMotor(
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3,
DigitalPin.P4
)
basic.forever(function () {
	
})
