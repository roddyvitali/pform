/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('PForm.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'PForm.view.admin.Principal'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
            {
                xtype: 'adminprincipal'
            }
            ]
        });
                
        me.callParent(arguments);
    }
});