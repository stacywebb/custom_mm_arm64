from gpiozero import MotionSensor
#from picamera import PiCamera
from datetime import datetime

pir = MotionSensor (4)
#camera = PiCamera()
now = datetime.now()

while True:
	pir.wait_for_motion()
	print("Motion detected.")
	print("occurance at {0:%A} at {0:%I}:{0:%M} {0:%p}".format(now))
	#camera.start_preview()
	pir.wait_for_no_motion()
	#camera.stop_preview()
        print("Motion stopped.")