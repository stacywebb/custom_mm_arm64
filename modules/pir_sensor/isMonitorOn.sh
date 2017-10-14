#!/bin/bash
isMonitorOn=$(/opt/vc/bin/tvservice --status | grep off | wc -l)
if [ "$isMonitorOn" = "0" ]; then
	echo True
fi