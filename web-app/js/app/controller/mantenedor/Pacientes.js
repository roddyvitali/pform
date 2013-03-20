Ext.define('PForm.controller.mantenedor.Pacientes', {
    extend: 'Ext.app.Controller',

    stores: ['Pacientes'],

    models: ['Paciente'],

    views: ['PForm.view.mantenedor.paciente.Formulario', 'PForm.view.mantenedor.paciente.Grid'],

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
            'pacientegrid button[action=add]': {
            	click: this.editarPaciente
            },
            'pacientegrid button[action=delete]': {
                click: this.deletePaciente
            },
            'pacienteform button[action=save]': {
                click: this.updatePaciente
            }
        });
    },

    editarPaciente: function(grid, record) {
        var edit = Ext.create('PForm.view.mantenedor.paciente.Formulario').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updatePaciente: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var novo = false;
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('PForm.model.Paciente');
			record.set(values);
			this.getPacientesStore().add(record);
            novo = true;
		}
        
		win.close();
        this.getPacientesStore().sync();

        if (novo){ //faz reload para atualziar
            this.getPacientesStore().load();
        }
    },
    
    deletePaciente: function(button) {
    	
    	var grid = this.getPacienteGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getPacientesStore();

	    store.remove(record);
	    this.getPacientesStore().sync();

        //faz reload para atualziar
        this.getPacientesStore().load();
    }
});
