console.log("Probando git en usandoGit.js");

console.log("Probando por segunda vez git en usandoGit.js");

// git init -> crea un repositorio local, que por supuesto aun está vacío

//luego para establer usuario y correo hay que poner git config user.name/email "usuario/email"
// o para que cada repositorio lo guarde baje el mismo nombre git config --global user.name/email "usuario/email"
// para revisar bajo qué nombre o correo está el repositorio vasta con escribir git config user.name/email

// git add "nombre del archivo" guarda un archivo en específico y git add . guarda todos los archivos
// git status devuelve el estado en el que se encuentran los archivos

// para sincronizar el repositorio local con el remoto hay que crear uno en la página (https://github.com/) y luego escribir el comando y copiar la url. Por ejemplo: git remote add origin https://github.com/roberts6/practicaGit.git
// para ver en qué repositorio remoto estoy guardando las cosas git remote -v


// git commit -m "el mensaje que querramos poner" nos guarda el commit, o sea que es la marca de tiempo que necesitamos establecer para revisar futuros cambios

// para subir los archivos del repositorio local al remoto necesitamos el comando git push origin master
// no se puede subir el archivo hasta que todo este añadido (add) y comiteado (commit)

// para descargar archivos desde el repositorio remoto al local (para tener la última versión del repositorio en caso de estar trabajando en equipo y alguien más haya hecho un cambio) vamos a ejecutar git clone. Este comando descarga una copia exacta de todos los archivos remotos en el repo local
