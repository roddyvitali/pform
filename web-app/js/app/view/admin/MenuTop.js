Ext.define('PForm.view.admin.MenuTop', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'menutop',

    initComponent: function() {
        Ext.apply(this, {
            width: 500,
            items: [{
                xtype: 'button',
                text: 'Mantenedores',
                menu: [{
                    text:'Paciente',
                    iconCls: 'icon-grid',
                    action: 'ac_mpaciente'
                }]
            }, 
            '-',
            {
                xtype: 'button',
                text: 'Informes',
                menu: [{
                    text:'Embarazo Inicial',
                    iconCls: 'icon-grid'
                }]
            },
            '->', 
            {
                xtype: 'combo'
            },
            {
                text:'Log Out'
            }]
        });
        this.callParent();
    }
});