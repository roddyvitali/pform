var types = Ext.data.Types;
Ext.define('PForm.model.Paciente', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
    	{name: 'rut', type: types.AUTO},
    	{name: 'nombre', type: types.AUTO},
    	{name: 'apellidoPaterno', type: types.AUTO},
    	{name: 'apellidoMaterno', type: types.AUTO},
    	{name: 'fechaNacimiento', type: types.DATE, dateFormat: 'd/m/Y'},
    	{name: 'prevision', type: types.AUTO}
    ],
	validations: [
        {type: 'format', field: 'rut', matcher: /^\d+-[\dkK]{1}$/, message: 'Rut invalido'}
    ]
});