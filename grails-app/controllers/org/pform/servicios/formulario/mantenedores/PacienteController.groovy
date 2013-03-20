package org.pform.servicios.formulario.mantenedores

import org.pform.mantenedores.Paciente
import grails.converters.JSON

class PacienteController {
	
	def jsonResponseOK = [success: true, data: []]
	
    def index() { }
	
	def lista() {
		def p = new Paciente(nombre: "nom1", apellidoPaterno: "ap1", fechaNacimiento: new Date())
		p.save()
		p = new Paciente(nombre: "nom2", apellidoPaterno: "ap2", fechaNacimiento: new Date()-1)
		p.save()
		
		def pacientes = Paciente.list()
		jsonResponseOK.data = pacientes
		render jsonResponseOK as JSON
		
	}
}
