Ext.define('PForm.store.Pacientes', {
    extend: 'Ext.data.Store',
    model: 'PForm.model.Paciente',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
        	create: 'paciente/save', 
            read: 'paciente/list',
            update: 'paciente/update',
            destroy: 'paciente/delete'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'data'
        }
    }
});