Feature: Creación de Empleado

@creacion_empleado
Scenario: Crear un empleado con datos válidos
    Given que se ingresa a la página de OrangeHRM con mis credenciales username "Admin" y password "admin123"
    When creo un nuevo empleado con nombre "Eliana", segundo nombre "Fransis" y apellido "Villafuerte"
    Then el empleado es creado satisfactoriamente