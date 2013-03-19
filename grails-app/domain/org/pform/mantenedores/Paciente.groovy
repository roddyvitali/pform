package org.pform.mantenedores

class Paciente {
	String rut
	String nombre
	String apellidoPaterno
	String apellidoMaterno
	Date fechaNacimiento
	Integer edad
	String prevision
	List telefonos
	List patologias
	
	static hasMany = [patologias: String, telefonos: String]
	
    static constraints = {
		telefonos nullable: true
		prevision nullable: true
		patologias nullable: true
    }
}
