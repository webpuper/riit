Ext.define('appUsers.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    storeId: 'personnel',
    fields: [
        'id', 'name', 'education', 'city'
    ],

    proxy: {
        type: 'rest',
        api: {
            read: '/api/users',
            //create  : '/api/create',
            update: '/api/update',
            // destroy : 'deleteLab.php'
        },
        timeout: 10000,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: false
});