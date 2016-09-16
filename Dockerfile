

# Base image to use, this must be set as the first line
FROM ubuntu

# Maintainer: docker_user <docker_user at email.com> (@docker_user)
MAINTAINER gabrielwu yingpingwdz@163.com
USER root 

#setting up nodejs enviroment
RUN apt-get update
RUN apt-get -y install build-essential libssl-dev
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh
RUN source ~/.profile
RUN nvm ls-remote
RUN nvm install 4.5.0
RUN node -v
nvm alias default 4.5.0
nvm use default

#setting up mongodb enviroment
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get install -y mongodb
RUN mongod


ENTRYPOINT node web.js