def on_button_pressed_a():
    I2C_LCD1602.show_string("Let's go !", 0, 1)
    OLED12864_I2C.show_string(0, 1, "Let's go !", 1)
    motor.move_anti_clockwise(1, stepUnit.ROTATIONS)
    motor.stop_motor()
    basic.pause(100)
    motor.move_clockwise(1, stepUnit.ROTATIONS)
    motor.stop_motor()
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

motor: stepperMotor.Motor = None
basic.show_icon(IconNames.STICK_FIGURE)
basic.pause(2000)
led.enable(False)
I2C_LCD1602.lcd_init(39)
I2C_LCD1602.clear()
I2C_LCD1602.show_string("Hi Jacques !", 0, 0)
OLED12864_I2C.init(60)
OLED12864_I2C.show_string(0, 0, "Hi Jack!", 1)
motor = stepperMotor.create_motor(DigitalPin.P1, DigitalPin.P2, DigitalPin.P3, DigitalPin.P4)

def on_forever():
    pass
basic.forever(on_forever)
