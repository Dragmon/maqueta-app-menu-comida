# Maqueta de un menú de comida

En el directorio del proyecto puede ejecutar:

```
$ npm start-react
```

Ejecuta la aplicación en modo de desarrollo..<br />
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### Deployment

- Subir el repositorio a github.
- Tener instalado heroku-cli
- Loguearse con Heroku en la linea de comandos
```
$ heroku login
```
- Creare el proyecto en heroku
```
$ heroku create nombre-proyecto
```
- Subir el proyecto a heroku
```
$ git push heroku master
```
- Iniciara una carga del proyecto y generara el build del proyecto, una vez terminado este proceso te dará una url donde podrás ver tu proyecto, o en su defecto ejecutar el siguiente comando para abrirlo en el navegador.
```
$ heroku open
```