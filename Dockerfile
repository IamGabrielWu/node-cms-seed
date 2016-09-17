

# Base image to use, this must be set as the first line
FROM gabrielwu/nodejs

# Maintainer: docker_user <docker_user at email.com> (@docker_user)
MAINTAINER gabrielwu yingpingwdz@163.com

RUN git clone https://github.com/GCTech/metinvest_site.git 
RUN cd metinvest_site;npm install

#setting up mongodb enviroment
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb



ENTRYPOINT mongod -f metinvest_site/mongo/mongod.conf & node metinvest_site/web.js