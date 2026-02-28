FROM oven/bun:1-alpine 

WORKDIR /user/src/app

COPY ../package.json .
COPY ../bun.lock .
COPY ../turbo.json .

COPY ../packages ./packages
COPY ../apps/ws-backend/package.json ./apps/ws-backend/package.json

RUN bun install

COPY ../apps/ws-backend ./apps/ws-backend

RUN bun turbo run db:generate

EXPOSE 8080

CMD ["bun", "run", "start:websocket"]