Feature: Vista Empleado en Lista

@vista_empleado
Scenario: Validar empleado creado en Lista
    Given que ingreso a la página de OrangeHRM con las credenciales username "Admin" y password "admin123"
    When quiero buscar el nuevo empleado con nombre "Franco Alonso Gregorini"
    Then el empleado fue creado satisfactoriamente en la lista