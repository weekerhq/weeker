FROM node:23.11.1-slim AS dependencies
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

COPY ./dist .

CMD ["node", "./index.ts"]
