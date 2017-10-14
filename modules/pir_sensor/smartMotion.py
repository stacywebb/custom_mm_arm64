import RPi.GPIO as GPIO
import time
import subprocess
isMonitorOn = False
isPlaying = False
sleepyTimer = 180
#seconds until mirror goes to sleep
i = 0
counter = 0
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.IN)
print "Starting up!"
print isPlaying
while True:
	i=GPIO.input(4)
	print counter
	proc = subprocess.Popen('./isMonitorOn.sh', stdout=subprocess.PIPE)
	isMonitorOn = bool(proc.stdout.read())
	proc1 = subprocess.Popen('./isAudioOn.sh', stdout=subprocess.PIPE)
	isPlaying = bool(proc1.stdout.read())
	if i==0:
		counter += 1
		if not isMonitorOn:
			if isPlaying:
				subprocess.call("./wakeUp.sh")
				isMonitorOn = True
		if isMonitorOn:
			if isPlaying:
				counter = 0
			if counter >= sleepyTimer:
				subprocess.call("./sleep.sh")
				isMonitorOn = False
				counter = 0
			time.sleep(1)
	elif i==1:
		counter = 0
		if isMonitorOn:
			time.sleep(1)
		else:
			subprocess.call("./wakeUp.sh")
			time.sleep(1)