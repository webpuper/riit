Ext.define('appUsers.store.Education', {
    extend: 'Ext.data.Store',
    storeId: 'education',
    alias: 'store.education',

    fields: [
        'id', 'education'
    ],

    proxy: {
        type: 'ajax',
        timeout: 10000,
        actionMethods: {
           read: 'GET'
           },
       url: '/api/education',
        reader: {
            type: 'json',
           // rootProperty: 'data'
        }

    },
    autoLoad: false 
});
