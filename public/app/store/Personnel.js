Ext.define('appUsers.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'education', 'city'
    ],

    data: { items: [
        { name: 'Jean Luc', education: "Высшее", city: "Москва" },
        { name: 'Worf',     education: "Высшее",  city: "Казань" },
        { name: 'Deanna',   education: "Среднее",    city: "Киров" },
        { name: 'Data',     education: "Профессиональное",    city: "С-Петербург" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
