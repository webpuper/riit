Ext.define('appUsers.view.main.Filter', {
    extend: 'Ext.panel.Panel',
    xtype: 'filtergrid',

    viewModel: {
        type: 'main'
    },
    dock: 'top',
    height: 100,
    width: '100%',
    bind: {
        title: '{filterTitle}',
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'combobox',
            itemId: 'filter_education',
            controller: 'main',
            margin: 10,
            width: '80%',
            bind: {
                fieldLabel: '{filterLabel1}'
            },
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
                    this.getController().FilterEducationSelect(combo);
                }
            }
        },
        {
            xtype: 'button',
            controller: 'main',
            width: 32,
            height: 32,
            margin: '10 0 0 0',
            iconCls: 'x-fa fa-times-circle',
            handler: function()
            {
                this.getController().FilterEducationClear(this.up().child('#filter_education'));
            }
        }
    ]

});