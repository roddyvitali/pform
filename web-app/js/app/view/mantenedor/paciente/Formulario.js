Ext.define('PForm.view.mantenedor.paciente.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.pacienteform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Editar/Crear Paciente',
    layout: 'fit',
    autoShow: true,
    width: 480,
    modal: true,
    iconCls: 'icon-user',
    bodyPadding: 15,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [
					{
					    xtype: 'textfield',
					    name : 'id',
					    fieldLabel: 'id',
					    hidden:true
					},    
                    {
                        xtype: 'textfield',
                        name : 'rut',
                        fieldLabel: 'Nombre'
                    },
                    {
                        xtype: 'textfield',
                        name : 'rut',
                        fieldLabel: 'Rut'
                    },
                    {
                        xtype: 'textfield',
                        name : 'apellidoPaterno',
                        fieldLabel: 'Apellido Paterno'
                    },
                    {
                        xtype: 'textfield',
                        name : 'apellidoMaterno',
                        fieldLabel: 'Apellido Materno'
                    },
                    {
                        xtype: 'datefield',
                        name : 'fechaNacimiento',
                        fieldLabel: 'Fecha Nacimiento'
                    },
                    {
                        xtype: 'combo',
                        name : 'prevision',
                        fieldLabel: 'Prevision',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['abbr', 'name'],
                            data : [
                                {"abbr":"fonasa", "name":"Fonasa"},
                                {"abbr":"isapre", "name":"Isapre"}
                            ]
                        }),
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'abbr'
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Salvar',
                action: 'save'
            },{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
