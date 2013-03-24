
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('PForm', '/js/');
Ext.application({
    name: 'PForm',
    appFolder: 'js/app/',
    controllers: [
        'mantenedor.Pacientes',
        'admin.ControlGeneral'
    ],
    launch: function(){

    },
    autoCreateViewport: true
});
