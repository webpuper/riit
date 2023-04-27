/**
 * This view is an example list of people.
 */

Ext.define('appUsers.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'appUsers.store.Personnel',
        'appUsers.store.Education',
        'appUsers.view.main.ComboEd'
    ],

    columnLines: true,
    height: screen.height - 200,
    width: '100%',

    frame: true,

    viewModel: 'main',

    bind: { 
        title: '{gridTitle}'
    },

    store: {
        type: 'personnel'
    },    
    plugins: {ptype: 'cellediting', clicksToEdit: 1},

    columns: [
        { bind: { text: '{gridNameUser}' }, dataIndex: 'name', flex: 2 },
        {
            bind: { text: '{gridEducation}' },
            editor: {
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
