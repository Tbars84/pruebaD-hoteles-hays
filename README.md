# Desarrollo API node y cliente Angular
Buenos dias, este ejercicio hace parte de un code challenge creado por HAYS/Almundo con la finalidad de probar los skills como FRONTEND DEV de Angular.
En los commits de la rama master se puede ver el paso a paso que de las actividades que se realizaron hasta desarrollar el ejercicio.

### Tecnologias empleadas

BackEnd
- NodeJs
- Express/ExpressRatelimit
- Cors
- Concurrently
- Morgan
- Nodemon

FrontEnd
- Angular 7

## Eventos configurados en la APP del ejercicio:

- Lista los hoteles que se extraen de la API, agregando un evento de load more... así se facilita la carga de los elementos de 10 en 10
- Busqueda de hotel por nombre gracias a un buscador en el aside del template, que limpia la lista de hoteles y muestra sólo el que se busco

## Instrucciones:

- Descarga o clona el repositorio
- En la carpeta raiz usar el comando npm install para instalar los paquetes necesarios para que corra el back.
- Probar su correcta instalación corriendo el comando npm run dev
- Entrar a la carpeta llamada 'hotelClient', ahi correr de nuevo el comando npm install  los paquetes necesarios para que corra el front.
- retornar a la carpeta raiz del proyecto 'pruebaD-hoteles-hays'
- En el package.json de la carpeta raiz se pueden acceder a los siguientes comandos:
  npm run dev           : corre el server que consume la API Rest 
  npm run client        : corre el proyecto de angular
  npm run deploy-client : hace deploy del proyecto en angular
  npm run start-all     : corre el server(API Rest) y el lado del cliente(Angular)

