FROM node:8@sha256:48d5a6f35a7c42c433ec9ff759e382a5e04c8688f1e195b2cddd2abaa68be1a8
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production
RUN npm prune
COPY dist dist

EXPOSE 80
CMD ["npm", "start"]
