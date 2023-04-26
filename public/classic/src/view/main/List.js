/**
 * This view is an example list of people.
 */

Ext.define('appUsers.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'appUsers.store.Personnel',
        'appUsers.view.main.ComboEd'
    ],

    columnLines: true,
    height: screen.height - 200,
    width: '100%',

    frame: true,

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
                xtype: 'comboeducation'
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
