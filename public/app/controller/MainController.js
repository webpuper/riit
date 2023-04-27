/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('appUsers.controller.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function() {
        this.listen({
            store: {
                '#personnel': {
                    load: function(th, records, successful)
                    {
                        console.log(records);
                    }
                }
            }
        });
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    UpdateGrid: function()
    {
     /*  setTimeout(
            ()=>{
                let storeGrid = Ext.getStore('personnel');
        storeGrid.sync({
             // scope:this,
              success : function(response){
                  Ext.Msg.show({ 
                      title: 'Information', 
                      msg: 'All OK',
                      icon: Ext.MessageBox.INFO,
                      buttons: Ext.Msg.OK
                  });
              },
              failure:function(response){
                  Ext.Msg.show({ 
                      title: 'warning',
                      msg: 'Error',
                      icon: Ext.MessageBox.WARNING,
                      buttons: Ext.Msg.OK
                  });
              }
          });
            },
            400
        );*/
        
      
    },

    SelectComboEd: function (combo) {
        // Снятие фокуса с combo чтобы сразу же сработал sync для store
        combo.up().up().focus();
    },


});
