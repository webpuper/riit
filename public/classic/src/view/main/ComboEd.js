Ext.define('appUsers.view.main.ComboEd', {
    extend: 'Ext.form.ComboBox',
    xtype: 'comboeducation',
    displayField: 'name',
    valueField: 'id',
    //editable: false,
    store: {
        type: 'education'
    },
    typeAhead: true,
    triggerAction: 'all',
    selectOnFocus: false,
    queryMode: 'local'
});