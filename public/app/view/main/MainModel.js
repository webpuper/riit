/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('appUsers.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'appUsers',
        gridNameUser: 'Пользователь',
        gridEducation: 'Образование',
        gridCity: 'Город'
    }

    //TODO - add data, formulas and/or methods to support your view
});
