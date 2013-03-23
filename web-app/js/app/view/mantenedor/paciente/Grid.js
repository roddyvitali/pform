Ext.define('PForm.view.mantenedor.paciente.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.pacientegrid',
    
    requires: ['Ext.toolbar.Paging'],
    
    iconCls: 'icon-grid',

    title : 'Pacientes',
    store: 'Pacientes',

    columns: [{
    	header: "Rut",
		width: 90,
		dataIndex: 'rut'
	},{
		header: "Nombre",
		width: 180,
		dataIndex: 'nombre'
	},{
		header: "Apellido Paterno",
		width: 180,
		dataIndex: 'apellidoPaterno'
	},{
        header: "Apellido Materno",
        width: 180,
        dataIndex: 'apellidoMaterno'
    },{
        header: "Fecha Nacimiento",
        width: 140,
        xtype:'datecolumn', 
        format: 'd/m/Y',
        dataIndex: 'fechaNacimiento'
    },{
        header: "Prevision",
        width: 50,
        flex:1,
        dataIndex: 'prevision'
    }],
	
	initComponent: function() {
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-add',
                itemId: 'add',
                text: 'Agregar',
                action: 'agregar'
            },{
                iconCls: 'icon-delete',
                text: 'Eliminar',
                action: 'eliminar'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'bottom',
            store: 'Pacientes',
            displayInfo: true,
            displayMsg: 'Mostrando {0} - {1} de {2}',
            emptyMsg: "No encontrado."
        }];
		
		this.callParent(arguments);
	}
});
