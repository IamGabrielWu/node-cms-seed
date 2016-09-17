

# Base image to use, this must be set as the first line
FROM node:4.5.0-onbuild

# Maintainer: docker_user <docker_user at email.com> (@docker_user)
MAINTAINER gabrielwu yingpingwdz@163.com



#setting up mongodb enviroment
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get install -y mongodb
RUN mongod


ENTRYPOINT node web.js