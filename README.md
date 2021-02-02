# APP Rest Turno de caja de Banco
La siguiente API REST consiste en la generacion de un turno automatico al momento de presionar un
boton el cual almacena un turno en una base de datos previamente creada en MondoDB Atlas en conjunto con 
fecha y hora actual del sistema, para luego presentar el reporte creado en un dato tipo JSON, dicho
sistema cuenta con la posibilidad de filtrar la informacion almcenada mediante filtros de hora y fecha
y la eliminacion de Id de usuarios si es necesario, cabe mencionar que para el uso de los metodos mencionados
lo podra realizar solo los Admin registrados en el sistema con un token generado automaticamente cuando se ingrese al
sistema, como ya se menciono todos los usuarios y administradores se encuentran de igual forma almacenados en MongoDB Atlas

 
# Aplicacion Web

La aplicacion se encuentra alojada en un repositorio de Heroku (https://gentle-waters-83350.herokuapp.com/) donde se puede comprobar su funcionalidad con la aplicacion de su agrado en este caso se opto por usar "Postman"



