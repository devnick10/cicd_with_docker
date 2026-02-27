FROM oven/bun:1-alpine 

WORKDIR /user/src/app

COPY ../packages .
COPY ../bun.lock .

COPY ../package.json .
COPY ../turbo.json .

RUN bun install 
RUN bun turbo run db:generate

COPY ../apps/ws-backend ./apps/ws-backend

EXPOSE 8080

CMD [ "bun","run","start:websocket" ]
