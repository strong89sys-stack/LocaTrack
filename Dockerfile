FROM php:8.4-fpm-alpine

WORKDIR /var/www/html

# Installation des dépendances système, outils PHP ET bibliothèques PostgreSQL
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

# Installation des extensions PHP (maintenant avec le support PostgreSQL)
RUN docker-php-ext-install \
    pdo_pgsql \
    pgsql \
    mbstring \
    bcmath \
    intl \
    pcntl \
    opcache

# Copie de Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copie de tout le code source
COPY . .

# Installation des dépendances PHP via Composer
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

EXPOSE 10000

# Export de la variable d'environnement pour toute la session du conteneur, 
# puis exécution séquentielle des commandes
CMD export CACHE_STORE=file && \
    php artisan config:clear && \
    php artisan cache:clear && \
    php artisan view:clear && \
    php artisan migrate --force && \
    php artisan serve --host=0.0.0.0 --port=10000