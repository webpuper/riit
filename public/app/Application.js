/**
 Основной класс Application
 */
Ext.define('appUsers.Application', {
    extend: 'Ext.app.Application',

    name: 'appUsers',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        // Приложение загрузилось
        // Загрузка store пользователей
        Ext.getStore('personnel').load();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Обновление', 'Приложение обновилось. Загрузить новую версию?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
