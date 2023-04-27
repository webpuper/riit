Ext.define('appUsers.view.main.Filter', {
    extend: 'Ext.panel.Panel',
    xtype: 'filtergrid',

    requires: [
        'Ext.form.field.ComboBox'
    ],

    viewModel: {
        type: 'main'
    },
    dock: 'top',
    height: 100,
    width: '100%',
    title: 'Фильтр',
    items: [
        {
            xtype: 'combobox',
            margin: 10,
            width: '80%',
            fieldLabel: 'Образование'
        }
    ]

});