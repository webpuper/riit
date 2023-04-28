<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Приложение appUser

Тестовое задание для РИИТ

## Основные файлы

# Laravel

routes\api.php - маршруты для API // использовал три ручки
database\migrations - миграции // создано три миграции для таблиц users, education и cities
factories\UserFactory.php - Фабрика данных // сделал только для таблицы users. Данные для других таблиц были "ручными"
seeders\DatabaseSeeder.php - Сидер для users
app\Http\Controllers\Api - API контроллеры
views\appusers.blade.php - Основной шаблон для приложения с подключением EXTJS

# ExtJS 6

Все файлы фреймворка EXTJS находятся в папке /public Laravel

app\model\MainModel.js - Основная модель
classic\src\view\main - View для компонентов
app\controller\MainController.js - Основной контроллер
app\store\Education.js - Store для Образование
app\store\Personnel.js - Store для Пользователей