
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('ExtMVC', '/js/');
Ext.application({
    name: 'ExtMVC',
    appFolder: 'js/app/',
    controllers: [
        'Contatos'
    ],
    launch: function(){
    	Ext.QuickTips.init();
        Ext.Loader.setPath('ExtMVC', '/js/');
    },
    autoCreateViewport: true
});
