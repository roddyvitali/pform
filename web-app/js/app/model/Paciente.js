Ext.define('PForm.model.Paciente', {
    extend: 'Ext.data.Model',
    fields: [
    	'id', 'rut', 'nombre', 'email', 'apellidoPaterno', 
	    'apellidoMaterno', 'fechaNacimiento', 'edad', 'prevision',
	    'telefonos', 'patologias'
    ]
});