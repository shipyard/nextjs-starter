FROM node:15.2.1-alpine

WORKDIR /app

# Add the package.json files and install the dependencies before adding the code.
# This avoids having Docker install the dependencies every time the code changes.
COPY package*.json ./
RUN npm install

# Add the code
COPY pages/ pages/
COPY public/ public/
COPY src/ src/
COPY styles/ styles/
COPY README.md tsconfig.json next-env.d.ts ./

# Start app in development mode
CMD ["npm", "run", "dev"]