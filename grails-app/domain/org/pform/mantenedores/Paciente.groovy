package org.pform.mantenedores

class Paciente {
	String rut
	String nombre
	String apellidoPaterno
	String apellidoMaterno
	Date fechaNacimiento
	String prevision
	List telefonos
	List patologias
	
	static hasMany = [patologias: String, telefonos: String]
	
	
    static constraints = {
		rut nullable: true
		apellidoMaterno nullable: true
		prevision nullable: true
		telefonos nullable: true
		patologias nullable: true
    }
}
