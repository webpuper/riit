Ext.define('appUsers.view.main.ComboEd', {
    extend: 'Ext.form.ComboBox',
    xtype: 'comboeducation',
    controller: 'main',
    displayField: 'name',
    valueField: 'name',
    editable: false,
    queryMode: 'local',
    selectOnFocus: false,
    store: {
        type: 'education'
    },
    listeners:
    {
        select: function(combo, record)
        {
            this.getController().SelectComboEd(combo);
        }
    }
});