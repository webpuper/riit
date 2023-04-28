/**
 Модель общая
 */
Ext.define('appUsers.model.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'appUsers',
        labelMenu1: 'Тест для РИИТ',

        //----------
        gridTitle: 'Пользователи РИИТ',
        gridNameUser: 'Пользователь',
        gridEducation: 'Образование',
        gridCity: 'Город',

        //---------
        filterTitle: 'Фильтр',
        filterLabel1: 'Образование'
    }
});
