# Prueba Tecnica FullStack

### Tecnologias Usadas

- Para el **frontend** se utilizo el framework **Angular**, la libreria **Axios** como cliente http y la libreria **RxJs** para el patron redux
- Para el **backend** se utilizo **nodejs** + **express** con el builder de la pagina oficial y omitiendo el server side rendering ya que solo se necesitaba exponer servicios como apirest, para la conexion de bd se utilizo la libreria **mysql** que hay para nodejs
- En base de datos se utilizo **mysql** y como dbms **mysqlworkbench**

### Consideraciones

- En este repositorio usted encontrara 2 carpetas (**backend** y **frontend**) con sus respectivos proyectos internamente, accediendo a cada uno de los directorios y ejecutando el comando **npm install**, usted tendra las dependencias que le permitiran ejecutar tanto el backend como el frontend para la aplicacion de Acronimos.****
- Para el **frontend**: una vez ejecutado npm install podra ejecutar el app con el comando **ng serve -o** lo cual abrira automaticamente el aplicativo en una pestana del navegador
- Para el **backend** : debemos tener en cuenta que previo a la ejecucion del comando para levantar el servidor http el cual es **nodemon**, debemos tener configurada la instancia del motor de base de datos **mysql** y corriendo en el puerto default **3306**, de no estar en este puerto, debe de modificar el archivo **mysql_connector.js** ubicado en la carpeta **database** y colocar el puerto modificando el parametro host del objeto connection

```javascript
const connection = mysql.createConnection({
    host: 'localhost:numerodepuerto',
    user: 'root',
    password: 'root',
    database: 'siglas'
})
```
- Para la creacion de la base de datos se ejecutan los siguientes scripts:
```sql
Script Create Schema → CREATE SCHEMA `siglas` ;```
```sql
Script creation table → CREATE TABLE siglas.siglas_history (
idsiglas_history INT NOT NULL,
criteria VARCHAR(45) NOT NULL,
PRIMARY KEY (idsiglas_history));`
```

- Para consulta e insercion de datos se ejecutan los siguientes scripts:
```sql
Script select → SELECT * FROM siglas.siglas_history;
```
```sql
INSERT INTO siglas_history (criteria)
VALUES ('TEST');
```