# Plantilla para juegos en Phaser

## Instalación

El repositorio está publicado como plantilla, de forma que se puede crear un nuevo proyecto propio en GitHub simplemente pulsando el botón `Use this template` (arriba a la derecha). Después, solo hay que clonar el repositorio propio y trabajar sobre él.

## Publicar

Para publicar, hay que asegurarse de que en `Settings` 🡒 `Pages` tiene en `Source` la opción `GitHub Actions`.

Además es útil que en la sección de `About`, en las opciones (rueda dentada), en `Website` se active `Use your GitHub Pages website`.

## Clonar

También se puede clonar el repositorio:

```
git clone https://github.com/cleongh/plantillaphaser
```

Podemos modificar el archivo `package.json` para configurar nuestro proyecto (nombre, autor...)

Para iniciar el proyecto (sólo 1 vez) instalamos las dependencias automáticamente (`vite`, `phaser`):

```
npm install
```

## Electron y navegador

La plantilla funciona con Electron (para ver una ventana de escritorio) y en navegador. Ambas opciones permiten depuración.

## Uso

Cada vez que queramos usarlo, tenemos que arrancar el servidor de desarrollo que monitorizará los cambios, procesará el contenido y cambiará la página. Usa [Vite](https://es.vitejs.dev/).

Para arrancar el servidor de desarrollo:

```
npm start
```

Con esto, solo tenemos que programar y guardar los archivos, Vite se encargará del resto.

## Distribución

El repositorio tiene una acción de GitHub (*GitHub Action*) que genera una versión de *release* y la publica en GitHub Pages. De este modo, cada vez que se hace `push`, se construye y publica en la página pública.

Se publica el contenido de la rama *main*.

Si no se está usando GitHub, o se quiere publicar a mano, podemos crear una *build* de *release*. Vite optimizará los archivos y, con la configuración que hay en `package.json`, generará en la carpeta `docs/` una versión "pública" de nuestro proyecto.

```sh
npm run build
```

<!-- ### En GitHub -->

<!-- Está todo configurado para que se active "GitHub Pages", y se use, en la rama principal (se suele llamar `main`), la carpeta `docs/`. Simplemente hay que activarlo en "Settings" → "Pages" → "Build and deployment". -->

## VSCode

En la carpeta `.vscode/` hay una configuración para usar Visual Studio Code, tanto para construir el *release* (`npm run build`) como para ejecutar y depurar. Simplemente hay que ejecutar "Run" → "Start debugging..." (or presionar `F5`).

## TypeScript

TypeScript está automáticamente habilitado (gracias a Vite). Para usarlo, simplemente hay que crear archivos con extensión `.ts`.
