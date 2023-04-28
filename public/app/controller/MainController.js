/*
Класс контроллера Main
Первый раздел меню appUsers
 */
Ext.define('appUsers.controller.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    setMaskBody: function (show) {
        if (show) Ext.getBody().mask('Сохранение...');
        else Ext.getBody().unmask();
    },

    // ----------------------------------------------
    // Для Grid Users

    UpdateGridStore: function () {
        let contr = this;
        contr.setMaskBody(true);
        Ext.getStore('personnel').sync({
            callback: function (records, operation, success) {
                contr.setMaskBody(false);
            },
            success: function (batch, options) {
                Ext.toast('Запись успешно обновлена', 'Обновление', 't');
            },
            failure: function (batch, options) {
                Ext.toast('Ошибка', 'Обновление', 't');
            }
        });
    },

    LoadGridStore: function (Params = null) {
        Ext.getStore('personnel').getModel().load(Params, {
            callback: function(records, operation, success) {
                \
            }
        });
    },

    SelectComboEd: function (combo) {
        // Снятие фокуса с combo чтобы сразу же сработал sync для store
        combo.up().up().focus();
        this.UpdateGridStore();
    },

    // ----------------------------------------------
    // Для фильтров

    getFilterParams: function(filter_education)
    {
        return 'education='+filter_education
        + '';
        // здесь можно будет добавлять другие фильтры
    },

    FilterEducationClear: function (combo) {
        // Сброс фильтра Образование
        combo.clearValue();
       
    },

    FilterEducationSelect: function (combo) {
        // Выбор фильтра Образование
        this.LoadGridStore(this.getFilterParams(combo.getValue()));
    }

    // ----------------------------------------------
    //


});
