/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
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

    SelectComboEd: function (combo) {
        // Снятие фокуса с combo чтобы сразу же сработал sync для store
        combo.up().up().focus();
        this.UpdateGridStore();
    },


});
