#!/bin/bash
createTunnel() {
  /usr/bin/ssh -i "~/bongo.pem" -N -R 2222:localhost:22 ubuntu@18.222.75.162
  if [[ $? -eq 0 ]]; then
    echo Tunnel to jumpbox created successfully
  else
    echo An error occurred creating a tunnel to jumpbox. RC was $?
  fi
}
/bin/pidof ssh
if [[ $? -ne 0 ]]; then
  echo Creating new tunnel connection
  createTunnel
fi
