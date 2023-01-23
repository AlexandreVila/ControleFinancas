FROM node:14

WORKDIR /app
RUN ls -al

COPY ./backend/. .

RUN ls -al

EXPOSE 3333

RUN npm install

CMD ["npm", "start"]
