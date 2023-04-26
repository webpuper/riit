/**
 * This view is an example list of people.
 */
Ext.define('appUsers.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'appUsers.store.Personnel'
    ],
    viewModel: 'main',

    title: 'Пользователи',

    store: {
        type: 'personnel'
    },

    columns: [
        { bind: { text: '{gridNameUser}' }, dataIndex: 'name', flex: 2 },
        {
            xtype: 'widgetcolumn',
            bind: { text: '{gridEducation}' },
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
        { bind: { text: '{gridCity}' }, dataIndex: 'city', flex: 1 }
    ],

    listeners: {
        //   select: 'onItemSelected'
    }
});
