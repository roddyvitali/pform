Ext.define('PForm.store.Pacientes', {
    extend: 'Ext.data.Store',
    model: 'PForm.model.Paciente',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
        	create: 'php/criaContato.php', 
            read: 'paciente/lista',
            update: 'php/atualizaContato.php',
            destroy: 'php/deletaContato.php',
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