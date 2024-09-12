FROM node:22-alpine3.19 AS base
WORKDIR /app
ENV NODE_ENV=production


FROM base AS deps
ADD package*.json ./
RUN npm install --include=dev


FROM base AS prod-deps
COPY --from=deps /app/node_modules /app/node_modules
ADD package*.json ./
RUN npm prune --omit=dev


FROM base AS build
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN npm run build


FROM deps AS dev
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]


FROM base AS prod
RUN addgroup --system --gid 1001 remix
RUN adduser --system --uid 1001 remix
USER remix
COPY --from=prod-deps --chown=remix:remix /app/package*.json ./
COPY --from=prod-deps --chown=remix:remix /app/node_modules ./node_modules
COPY --from=build --chown=remix:remix /app/build ./build
COPY --from=build --chown=remix:remix /app/public ./public
ADD . .
CMD ["npm", "start"]
