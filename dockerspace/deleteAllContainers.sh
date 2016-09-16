docker ps -a | awk '{if(!($1=="CONTAINER")){print $1}}' |xargs docker rm -f 
