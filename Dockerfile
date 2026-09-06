# --- Étape 1 : Build des assets Front-end (Vite) avec PHP & Composer pour Wayfinder ---
FROM node:24-alpine AS frontend

RUN apk add --no-cache \
    php \
    php-cli \
    php-phar \
    php-openssl \
    php-mbstring \
    php-json \
    php-iconv \
    php-tokenizer \
    php-xml \
    php-ctype \
    composer

WORKDIR /app

COPY composer.json composer.lock package*.json ./

RUN composer install --no-interaction --prefer-dist --no-progress --optimize-autoloader
RUN npm install

COPY . .

RUN npm run build


# --- Étape 2 : Application PHP / Laravel ---
FROM php:8.4-fpm-alpine

WORKDIR /var/www/html

RUN apk update && apk add --no-cache \
    bash \
    curl \
    git \
    icu-dev \
    libzip-dev \
    oniguruma-dev \
    postgresql-dev \
    mysql-client \
    linux-headers

RUN docker-php-ext-install \
    pdo_pgsql \
    pgsql \
    mbstring \
    bcmath \
    intl \
    pcntl \
    opcache

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . /var/www/html

# Récupération propre du dossier généré à l'étape 1
COPY --from=frontend /app/public/build /var/www/html/public/build

RUN composer install --no-interaction --prefer-dist --optimize-autoloader

RUN mkdir -p \
    storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 10000

CMD export CACHE_STORE=file && \
    php artisan config:clear && \
    php artisan route:clear && \
    php artisan view:clear && \
    php artisan migrate --force && \
    php artisan serve --host=0.0.0.0 --port=10000