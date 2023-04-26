Ext.define('appUsers.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'education', 'city'
    ],

    proxy: {
        type: 'ajax',
        timeout: 10000,
        actionMethods: {
           read: 'GET'
           },
       url: '/user',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true 
});
