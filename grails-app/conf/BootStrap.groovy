import grails.converters.JSON;
class BootStrap {

    def init = { servletContext ->
		JSON.registerObjectMarshaller(Date) {
			return it?.format("dd/MM/yyyy")
		 }
    }
    def destroy = {
    }
}
