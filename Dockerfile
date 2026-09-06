# FROM node:18.17.0-alpine
# WORKDIR /resources/js
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD [ "npm", "start" ]


# ============================================================
# Laravel + React + Vite + Reverb
# ============================================================

# Instead of 8.3
FROM php:8.4-fpm-alpine

FROM node:20-alpine
# ou FROM node:20

WORKDIR /var/www/html

# ============================================================
# Dépendances système
# ============================================================

# RUN apk add --no-cache \
#     bash \
#     curl \
#     git \
#     icu-dev \
#     libzip-dev \
#     oniguruma-dev \
#     mysql-client \
#     linux-headers \
#     nodejs \
#     npm \
#     $PHPIZE_DEPS

# Update apk index first (often fixes stale repo issues)
RUN apk update && apk add --no-cache \
    bash \
    curl \
    git \
    icu-dev \
    libzip-dev \
    oniguruma-dev \
    mysql-client \
    linux-headers \
    nodejs \
    npm

# If packages still fail, verify they exist:
# RUN apk search icu-dev

# Install PHP build dependencies properly
RUN apk add --no-cache --virtual .phpize_deps \
    $PHPIZE_DEPS \
    icu-dev \
    libzip-dev \
    oniguruma-dev


# ============================================================
# Extensions PHP
# ============================================================

RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    bcmath \
    intl \
    pcntl \
    opcache

# ============================================================
# Composer
# ============================================================

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# ============================================================
# Dépendances Laravel
# ============================================================

COPY composer.json composer.lock ./

RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader

# ============================================================
# Application Laravel
# ============================================================

COPY . .

# ============================================================
# Dépendances frontend
# ============================================================

COPY package.json package-lock.json ./

RUN npm ci

# ============================================================
# Build React / Vite
# ============================================================

RUN npm run build

# ============================================================
# Répertoires Laravel
# ============================================================

RUN mkdir -p \
    storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# ============================================================
# Permissions
# ============================================================

RUN chown -R www-data:www-data \
    storage \
    bootstrap/cache

RUN chmod -R 775 \
    storage \
    bootstrap/cache

# ============================================================
# Nettoyage npm
# ============================================================

RUN npm cache clean --force

# ============================================================
# PHP-FPM
# ============================================================

EXPOSE 9000

CMD ["php-fpm"]
