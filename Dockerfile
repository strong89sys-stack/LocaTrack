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

# Copie de Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copie et installation des dépendances PHP
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# Copie du reste du code (qui contient déjà le dossier public/build fait en local)
COPY . .

# Création des dossiers de stockage Laravel nécessaires
RUN mkdir -p \
    storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Configuration des permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 9000

CMD ["php-fpm"]
