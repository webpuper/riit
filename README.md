<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>
<br />
## Приложение appUser

Тестовое задание для РИИТ

## Основные файлы

# Laravel
<br /><br />
routes\api.php - маршруты для API // использовал три ручки<br />
database\migrations - миграции // создано три миграции для таблиц users, education и cities<br />
factories\UserFactory.php - Фабрика данных // сделал только для таблицы users. Данные для других таблиц были "ручными"<br />
seeders\DatabaseSeeder.php - Сидер для users<br />
app\Http\Controllers\Api - API контроллеры<br />
views\appusers.blade.php - Основной шаблон для приложения с подключением EXTJS<br /><br />

# ExtJS 6
<br />
Все файлы фреймворка EXTJS находятся в папке /public Laravel
<br /><br />
app\model\MainModel.js - Основная модель<br />
classic\src\view\main - View для компонентов<br />
app\controller\MainController.js - Основной контроллер<br />
app\store\Education.js - Store для Образование<br />
app\store\Personnel.js - Store для Пользователей<br />