Ext.define('PForm.controller.mantenedor.Pacientes', {
    extend: 'Ext.app.Controller',

    stores: ['Pacientes'],

    models: ['Paciente'],

    views: ['mantenedor.paciente.Formulario', 'mantenedor.paciente.Grid'],

    refs: [{
            ref: 'pacientePanel',
            selector: 'panel'
        },{
            ref: 'pacienteGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
            'pacientegrid dataview': {
                itemdblclick: this.editarPaciente
            },
            'pacientegrid button[action=agregar]': {
            	click: this.editarPaciente
            },
            'pacientegrid button[action=eliminar]': {
                click: this.deletePaciente
            },
            'pacienteform button[action=grabar]': {
                click: this.updatePaciente
            }
        });
    },

    validateModel: function(record, form) {
        var f = form.getForm()
        //validamos via model, y mostramos el primer error
        var errors = record.validate();
        if(errors.items.length > 0){
            Ext.MessageBox.show({
               title: 'Error',
               msg: errors.items[0].message,
               buttons: Ext.MessageBox.OK,
               icon: Ext.MessageBox.ERROR
            });
            f.findField(errors.items[0].field).markInvalid(errors.items[0].message)
            return;
        }
        return true;
    },

    editarPaciente: function(grid, record) {
        var edit = Ext.create('PForm.view.mantenedor.paciente.Formulario').show();
        if(record.data){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updatePaciente: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues(),
            nuevo = false,
            me = this;

        //validamos via form
        if(!form.isValid()){
            Ext.MessageBox.show({
               title: 'Error',
               msg: "Rellene todos los campos del formulario.",
               buttons: Ext.MessageBox.OK,
               icon: Ext.MessageBox.ERROR
            });
            return;
        }

        
		if (values.id > 0){
			record.set(values);
            if(!this.validateModel(record, form)){
                return;   
            }

		} else{
			record = Ext.create('PForm.model.Paciente');
			record.set(values);
            nuevo = true;
            if(!this.validateModel(record, form))
                return;
            me.getPacientesStore().add(record);
		}

		
        me.getPacientesStore().sync({
            success: function(rec, op) { 
                if (nuevo){ 
                    Ext.Msg.alert("Informacion","Registro Creado Exitosamente");
                }else{
                    Ext.Msg.alert("Informacion","Registro Actualizado Exitosamente");
                }
                me.getPacientesStore().reload();
            },
            failure: function(rec, op, e) {
                var mensaje = op.batch.proxy.reader.jsonData.message
                Ext.MessageBox.show({
                   title: 'Error',
                   msg: mensaje,
                   buttons: Ext.MessageBox.OK,
                   icon: Ext.MessageBox.ERROR
                });
                me.getPacientesStore().remove(record);
            }
        });
        win.close();
    },
    
    deletePaciente: function(button) {
    	
    	var grid = this.getPacienteGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getPacientesStore(),
        me = this;

	    store.remove(record);
	    this.getPacientesStore().sync({
            success: function(rec, op) { 
                Ext.Msg.alert("Informacion","Registro Eliminado Exitosamente");
                me.getPacientesStore().reload();
            },
            failure: function(rec, op, e) {
                var mensaje = op.batch.proxy.reader.jsonData.message
                Ext.MessageBox.show({
                   title: 'Error',
                   msg: mensaje,
                   buttons: Ext.MessageBox.OK,
                   icon: Ext.MessageBox.ERROR
                });
            }
        });
    }
});
