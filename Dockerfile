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

# 1. Copie d'abord TOUT le code source (ce qui inclut artisan, composer.json et composer.lock)
COPY . .

# 2. Ensuite seulement, on lance composer install (ainsi 'artisan' est déjà présent)
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

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
