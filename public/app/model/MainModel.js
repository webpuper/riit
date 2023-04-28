/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('appUsers.model.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'appUsers',
        gridTitle: 'Пользователи РИИТ',
        gridNameUser: 'Пользователь',
        gridEducation: 'Образование',
        gridCity: 'Город',

        //---------
        filterTitle: 'Фильтр',
        filterLabel1: 'Образование'
    }
});
