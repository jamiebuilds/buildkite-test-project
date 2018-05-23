FROM    node:8
WORKDIR /app
COPY    package.json yarn.lock /app/
RUN     yarn install --frozen-lockfile --silent
COPY    . /app
