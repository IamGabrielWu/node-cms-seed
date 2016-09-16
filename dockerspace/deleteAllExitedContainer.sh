docker ps -a | awk '{if($7=="Exited"||$10=="Exited") {print $1}}' | xargs docker rm
