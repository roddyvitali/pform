Ext.define('PForm.controller.admin.ControlGeneral', {
    extend: 'Ext.app.Controller',

    stores: [],

    models: [],

    views: ['admin.MenuTop' , 'admin.Principal'],

    refs: [

    ],
    init: function() {
        this.control({
            'login-form button[action=loginButton]':{
                click: this.login
            },
            'menutop menuitem[action=ac_mpaciente]':{
                click: this.ac_mpaciente
            }
        });
    },
    ac_mpaciente: function(){
        var main = Ext.ComponentQuery.query('viewport > adminprincipal')[0];
        var view = Ext.create('PForm.view.mantenedor.paciente.Grid', {
        });
        main.removeAll();
        main.add(view);
    },
    login: function(){
        var form = this.getLogin().getForm();
        var main = Ext.ComponentQuery.query('viewport')[0];
        form.submit({
            success: function(rec, op) {
                var admin = Ext.create('PForm.view.admin.Principal', {
                });
                main.removeAll();
                main.add(admin);
                //validar menus
                if(1==1)
                    admin.down('#tbarId').down('#menu1Id').setDisabled(true)
            },
            failure: function(rec, op) {
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: 'No se ha podido logear',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
               });
            }
        });
    }
});
