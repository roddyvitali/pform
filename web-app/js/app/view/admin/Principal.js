Ext.define('PForm.view.admin.Principal', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminprincipal',
    layout: {
        type: 'fit',
        tdAttrs: { style: 'padding: 5px;' }
    },
    requires: [
        'PForm.view.admin.MenuTop'
    ],
    defaults: {
        xtype: 'panel',
        frame: true
    },
    title: 'Panel Administracion',
    tbar:  {xtype: 'menutop', itemId: 'tbarId'},
    initComponent: function () {
        this.items = [
        ];
        this.callParent();
    }
});