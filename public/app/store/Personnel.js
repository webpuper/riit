Ext.define('appUsers.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    storeId: 'personnel',
    fields: [
        'id', 'name', 'education', 'city'
    ],

    proxy: {

        api: {
            read: '/api/users',
            //create  : '/api/create',
            update: '/api/update',
            // destroy : 'deleteLab.php'
        },

        type: 'ajax',
        timeout: 10000,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoSync: true,
    autoLoad: false
});