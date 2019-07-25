#!/bin/bash

cd /home/ubuntu &&
. /home/ubuntu/hardware.config
date > smth.txt
scp -o StrictHostKeyChecking=no -i "${ec2keyfile}" smth.txt "${ec2hostname}:~/"
scp -o StrictHostKeyChecking=no -i "${ec2keyfile}" every_5_min.log "${ec2hostname}:~/"

createTunnel() {
  /usr/bin/ssh -i "~/bongo.pem" -o ConnectTimeout=60 -N -R 2222:localhost:22 ubuntu@18.222.75.162
  if [[ $? -eq 0 ]]; then
    echo Tunnel to jumpbox created successfully
  else
    echo An error occurred creating a tunnel to jumpbox. RC was $?
  fi
}

/bin/pidof ssh

# Comment out when do not want to createTunnel 
# if [[ $? -ne 0 ]]; then
#   echo Creating new tunnel connection
#   createTunnel
# fi

sudo reboot
