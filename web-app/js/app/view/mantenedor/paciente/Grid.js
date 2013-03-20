Ext.define('PForm.view.mantenedor.paciente.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.pacientegrid',
    
    requires: ['Ext.toolbar.Paging'],
    
    iconCls: 'icon-grid',

    title : 'Pacientes',
    store: 'Pacientes',

    columns: [{
    	header: "NOME",
		width: 170,
		flex:1,
		dataIndex: 'nombre'
	},{
		header: "TELEFONE",
		width: 160,
		flex:1,
		dataIndex: 'phone'
	},{
		header: "EMAIL",
		width: 170,
		flex:1,
		dataIndex: 'email'
	}],
	
	initComponent: function() {
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Pacientes',
            displayInfo: true,
            displayMsg: 'Mostrando Contatos {0} - {1} de {2}',
            emptyMsg: "Nenhum contato encontrado."
        }];
		
		this.callParent(arguments);
	}
});
