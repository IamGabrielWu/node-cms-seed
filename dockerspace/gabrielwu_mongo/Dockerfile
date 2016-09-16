# This dockerfile uses the gabrielwu/metinvest image

# Base image to use, this must be set as the first line
FROM gabrielwu/mongodb:v0.01

# Maintainer: docker_user <docker_user at email.com> (@docker_user)
MAINTAINER gabrielwu yingpingwdz@163.com

EXPOSE 27017
EXPOSE 28017

# Commands to update the image


# Commands when creating a new container
#CMD ["-f /home/mongodir/conf/mongod.conf"]

ENTRYPOINT mongod -f /home/mongodir/conf/mongod.conf