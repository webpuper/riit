Ext.define('appUsers.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',


    fields: [
        'id', 'name', 'education', 'city'
    ],

    proxy: {
        type: 'ajax',
        timeout: 10000,
        actionMethods: {
           read: 'GET'
           },
       url: '/api/users',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }

    },
    autoLoad: true,
    listeners:
    {
        // После полной загрузки пользователей, загрузим список "образование"
        load: function() {this.LoadStoreEduction}
    }
});