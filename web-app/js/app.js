
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('PForm', '/js/');
Ext.application({
    name: 'PForm',
    appFolder: 'js/app/',
    controllers: [
        'mantenedor.Pacientes'
    ],
    launch: function(){
    	Ext.QuickTips.init();
        Ext.Loader.setPath('PForm', '/js/');
    },
    autoCreateViewport: true
});
