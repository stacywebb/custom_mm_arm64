#!/bin/bash
if grep -q RUNNING /proc/asound/card*/pcm*/sub*/status; then echo "True"; fi