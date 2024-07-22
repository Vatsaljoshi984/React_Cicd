FROM node:20

WORKDIR /mywebapp

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm" , "start" ]