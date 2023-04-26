/**
 * This view is an example list of people.
 */
Ext.define('appUsers.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'appUsers.store.Personnel'
    ],

    title: 'Пользователи',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Пользователь', dataIndex: 'name', flex: 2 },
        {
            xtype: 'widgetcolumn',
            text: 'Образование',
            widget: {
                xtype: 'combo',
                editable: false,
                store: [
                    'Local',
                    'Remote'
                ]
            },
            dataIndex: 'education',
            flex: 1
        },
        { text: 'Город', dataIndex: 'city', flex: 1 }
    ],

    listeners: {
        //   select: 'onItemSelected'
    }
});
