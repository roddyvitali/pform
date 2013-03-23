package org.pform.servicios.formulario.mantenedores

import org.codehaus.groovy.grails.web.json.JSONObject
import org.pform.mantenedores.Paciente
import grails.converters.JSON

class PacienteController {
	
	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro"]
	def dateParser = new java.text.SimpleDateFormat("dd/MM/yyyy")
	
    def index() { }
	
	def list() {
		def resp = [:];
		def pacientes = Paciente.list()
		jsonResponseOK.data = pacientes
		render jsonResponseOK as JSON
	}
	
	def save() {
		try {
			def data = JSON.parse(params.data)
			data.fechaNacimiento = dateParser.parse(data.fechaNacimiento)
			def p = new Paciente(data)
			p.save()
			if(p.validate())
				render jsonResponseOK as JSON
			else
				render jsonResponseERROR as JSON
		}
		catch(Exception e){
			println e.message
			render jsonResponseERROR as JSON
		}
	}
	
	def update() {	
		try {
			def data = JSON.parse(params.data)
			data.fechaNacimiento = dateParser.parse(data.fechaNacimiento)
			def p = Paciente.get(data.id)
			p.properties = data
			if(p.validate())
				render jsonResponseOK as JSON
			else
				render jsonResponseERROR as JSON
		}
		catch(Exception e){
			println e.message
			render jsonResponseERROR as JSON
		}
	}
	
	def delete() {
		try {
			def data = JSON.parse(params.data)
			def p = Paciente.get(data.id)
			p.delete()
			if(p.validate())
				render jsonResponseOK as JSON
			else
				render jsonResponseERROR as JSON
		}
		catch(Exception e){
			println e.message
			render jsonResponseERROR as JSON
		}
		
	}
}
