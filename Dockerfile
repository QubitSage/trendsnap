FROM node:18
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY api ./api
COPY web ./web
COPY .config ./config
RUN yarn install
CMD ["yarn", "dev"]
