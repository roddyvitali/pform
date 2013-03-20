/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('PForm.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'PForm.view.mantenedor.paciente.Grid',
        'PForm.view.mantenedor.paciente.Formulario'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'pacientegrid'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});