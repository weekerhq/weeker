FROM node:23.9.0-slim AS dependencies
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

COPY ./src .

CMD ["node", "./index.ts"]
