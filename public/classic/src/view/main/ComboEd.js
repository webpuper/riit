Ext.define('appUsers.view.main.ComboEd', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'comboeducation',
                editable: false,
                store: {
                    type: 'education'
                }
});