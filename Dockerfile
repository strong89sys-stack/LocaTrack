# ============================================================
# Étape 1 : Build des assets Frontend (React / Vite)
# ============================================================
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


# ============================================================
# Étape 2 : Application PHP / Laravel finale
# ============================================================
FROM php:8.4-fpm-alpine

WORKDIR /var/www/html

# Installation des dépendances système et outils PHP
RUN apk update && apk add --no-cache \
    bash \
    curl \
    git \
    icu-dev \
    libzip-dev \
    oniguruma-dev \
    mysql-client \
    linux-headers

# Installation des extensions PHP
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    bcmath \
    intl \
    pcntl \
    opcache

# Copie de Composer depuis l'image officielle
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copie des fichiers de dépendances PHP
COPY composer.json composer.lock ./

# Installation des dépendances Composer (production)
RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader

# Copie du reste du code source de l'application
COPY . .

# Récupération des assets compilés depuis l'étape 1 (Vite/React)
COPY --from=frontend-builder /app/public/build ./public/build

# Création des dossiers de stockage Laravel nécessaires
RUN mkdir -p \
    storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Configuration des permissions
RUN chown -R www-data:www-data \
    storage \
    bootstrap/cache

RUN chmod -R 775 \
    storage \
    bootstrap/cache

EXPOSE 9000

CMD ["php-fpm"]
