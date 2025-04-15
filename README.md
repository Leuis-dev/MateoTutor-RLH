# Front-End Mateo Tutor
- v0.2.5.1 (Última versión única correspondiente a este repositorio - 14 abril 2025)

## A tener en cuenta:
Este repositorio corresponde a una copia de la rama "frontend-creacion-modificacion" del proyecto [https://github.com/learner-model-uach/TutorIntegrado.git]
Y todo el trabajo realizado aquí, es bajo el contexto de la asignatura "MÉTODOS Y MODELOS DE ING DE SOFTWARE (INFO 290)"

Las tareas para el ramo de metodos y modelos estan dentro del siguente folder en drive: https://drive.google.com/drive/folders/1wXrHARQr8OX4KNQcf90KCcFOI0xAFX-b?usp=sharing


## Documentación original del proyecto MATEO TUTOR INTELIGENTE:
[https://docs.lm.inf.uach.cl/instructions/client-side-template]
En el link anterior está TODA la información relacionada a este sistema, desde las instalaciones necesarias, las librerias que se usaron, las tecnologías utilizadas, información de la API, administración, base de datos, etc...

╔══════════════════╗
║ Despliegue Local ║
╚══════════════════╝
## Pasos necesarios para ejecutar localmente sin usar Docker (WINDOWS)

NOTAS:
- "Next.js" y "React" son FRAMEWORKS de desarrollo (Se ocupan en este proyecto)
- "npm" y "pnpm" son administradores de paquetes para proyectos JavaScript

[*] Para VERIFICAR si tenemos instalado "Node" y "npm", ejecutar en "cmd"
	"node -v" y "npm -v"
	
[*] Para INSTALAR "Node.js" (INCLUYE el "npm")
	Descargar e instalar desde el navegador "https://nodejs.org/en"

[*] Para VERIFICAR si tenemos instalado "pnpm", ejecutar en "cmd"
	"pnpm -v"

[*] Para INSTALAR "pnpm" de manera GLOBAL en el sistema, ejecutar en "cmd"
	"npm install -g pnpm"

[*] Para INSTALAR las dependencias necesarias para el proyecto en la carpeta (node_modules)
	ESTANDO EN la carpeta del proyecto, ejecutar en "cmd":
		"pnpm install"

## Desplegar la APP en LOCAL

[*] ESTANDO En la carpeta del proyecto, ejecutar en "cmd":
		"npm run dev" o "pnpm dev"

[*] Ver la APP en ejecucion:
	http://localhost:3000/

╔═══════════════════════════════════╗
║ Despliegue en el Server del Curso ║
╚═══════════════════════════════════╝
## INSTALAR y EJECUTAR VPN de la UACh (Para VER la APP o ENTRAR al server del curso)

[1] Ingresar a https://www.fortinet.com/support/product-downloads
[2] Seleccionar "FortiClient VPN Only"
[3] Seleccionar Windows/Downloads
[4] Ejecutar el archivo descargado y esperar a que termine la instalación

[5] Ejecutar acceso directo creado en el escritorio
[6] Ingresar a configurar VPN
[7] Ingresar los siguientes datos:
    Nombre de Conexión: VPN UACh
    Descripción: Conexión UACh
    Gateway Remoto: vpn.uach.cl
    Método de Autenticación: Clave pre-compartida
    Clave pre-compartida: uaustral.,2016
[8] Presionar el botón guardar

[9] Ingresar con credenciales de "infoalumnos" o "siveducmd"
    ** Así debe ingresarse el Rut: 20123456-7 **

[*] Para desconectar la VPN:
    a) buscar el icono de FortiClient en la bandeja de apps ocultas (de la barra inferior)
    b) click derecho y darle a "Desconectar VPN UACh"

## VER la APP desplegada en el server

NOTAS:
	- NO es necesario conectarse al server mediante SSH para ver la APP desplegada, solo es necesario estar conectado con la VPN
	- Si al ingresar a la url no aparece NADA, es por que NO hay ningun CONTAINER de la imagen EJECUTANDOSE
	
[*] http://146.83.216.166:5007/

	- La APP está corriendo en el puerto 3007, pero se accede mediante el 5007, ya que esa es la ruta con el certificado
	- Se configuró nginx para que la ruta https://146.83.216.166:5007/ mapee al puerto 3007
	- Como el certificado es autogenerado, Cuando entren les va a decir que el sitio no es confiable, pero ingresan de todas maneras

## INSTALAR SSH (WINDOWS)(Para entrar al server del curso)

[*] Verificar si tenemos instalado SSH:
	a) En "cmd" escribir "ssh" y presionar enter
	b) Si SSH está instalado verás algo como: "usage: ssh [-46AaCfGgKkMN ..."
	c) Si NO está instalado verás algo como: "ssh is not recognized as ..."

[*] Instalar el CLIENTE SSH:
	a) Configuracion -> Sistema -> Características opcionales -> Agregar una característica opcional
	b) En el cuadro de búsqueda, escribe "Cliente de OpenSSH"
	c) Seleccionalo y haz clic en "Siguiente" y luego en "Agregar"

[*] Instalar el SERVIDOR SSH (Para recibir conexiones SSH)(OPCIONAL):
	a) Configuracion -> Sistema -> Características opcionales -> Agregar una característica opcional
	b) En el cuadro de búsqueda, escribe "Servidor de OpenSSH"
	c) Seleccionalo y haz clic en "Siguiente" y luego en "Agregar"

## Conectarse al SERVER/HOST del curso (WINDOWS / LINUX)
NOTAS:
	- ssh nombreServer@ipServidor -p nroDePuerto
	- Para conectarse al server NO es necesario especificar un puerto
	- En los puertos 3007 y 4007 se despliega la APP

[*] En "cmd" ejecutar:
		ssh grupo7@146.*******
		password: *****

╔══════════════════════════════╗
║ TODO lo Relacionado a DOCKER ║
╚══════════════════════════════╝
## INSTALAR Subsistema LINUX en Windows (WSL / WSL 2)(WINDOWS)(Necesario para usar Docker)

[1] Buscar e instalar desde la "Microsoft Store", "Windows Subsystem for Linux"
[2] Habilita la característica WSL, Abrir una terminal Powershell como admin y ejecutar:
	"dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart"
[3] Habilita la característica de máquina virtual opcional, en PowerShell ejecutar:
	"dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart"
[4] Reiniciar el PC
[5] Descarga "Ubuntu" desde Microsoft Store
[6] Después de la instalación, abre Ubuntu desde el menú de inicio, y configura el usuario y contraseña
[7] Por último ejecutar:
	a) sudo apt update
	b) sudo apt upgrade

## INSTALAR DOCKER Desktop (WINDOWS)

[*] Verificar que tenemos Docker instalado:
NOTA: En una terminal "WSL" es necesario iniciar primero el docker desktop desde WINDOWS por que si no, nos dirá falsamente que no está instalado

	a) En "cmd", ejecutar:
		"docker -v" o "docker --version"

[*] Instalar Docker:
	a) La virtualización tiene que estar activada (Se ve en el admin de Tareas, apartado de "CPU")
	b) Verificar que tengamos "WSL 2" instalado en windows:
		En "PowerShell" ejecutar:
			"wsl -l -v"
		- Verás una lista de las distribuciones instaladas en WSL, en la columna "VERSION" dirá si estás usando WSL 1 o WSL 2
		Para establecer "WSL 2" como version predeterminada ejecutar:
			wsl --set-default-version 2

	c) Descargar Docker desde "https://docs.docker.com/desktop/install/windows-install/"
	d) Durante la instalación, habilitar el "Soporte para WSL 2"
		- Si tenemos Windows Home, no nos aparecerá la opcion
	e) Al terminar de instalar pedirá que cerremos sesión
	f) Iniciar Docker con la "configuración predeterminada"
	g) Crear una cuenta en "Docker" (OPCIONAL)(Usar la de GitHub)

## Crear IMAGEN Docker del PROYECTO

NOTAS:
- ANTES de crear una nueva imagen, verificar si ya hay una existente que corresponda al proyecto
- NO es necesario hacer "gitclone" del proyecto, ya que el propio dockerfile lo hace e instala TODO
- Si tienes "Windows Home", Sólo puedes usar imágenes base y contenedores de y para LINUX

[*] INICIAR Docker:
	Abrir el programa "Docker Desktop" (windows)
	No es necesario (linux)

[*] Para Ver las imágenes existentes:
	docker images (windows)
	sudo docker images (linux)

[*] Para CREAR una nueva imágen:
	Estando en el MISMO directorio del archivo "Docker":
        docker build --no-cache -t mtutor-img:tag . (windows)
		sudo docker build --no-cache -t mtutor-img:tag . (linux)

## Ejecutar un NUEVO CONTAINER basado en una IMAGEN Docker

NOTA:
- ANTES de ejecutar un container, verificar si ya hay alguno en ejecucion que corresponda al proyecto
- Un contenedor es una instancia en ejecución de una imagen
- Al ejecutar una imagen, se ejecuta un nuevo "contenedor" basado en dicha imagen
- Se pueden ejecutar simultáneamente distintos "contenedores" basados en una misma imagen

[*] INICIAR Docker:
	Abrir el programa "Docker Desktop" (windows)
	No es necesario (linux)

[*] Ejecutar el Container:
	docker run --name MTutor-app -p 3007:3000 mtutor-img:tag (windows)
	sudo docker run --name MTutor-app -p 3007:3000 mtutor-img:tag (linux)

	- 3007 Es el puerto de la maquina host (local)
	- 3000 Es el puerto dentro del contenedor Docker

[*] Ver la APP en ejecucion:
	http://localhost:3007/ (local)
	http://146.83.216.166:5007/ (server)


## Comandos útiles DOCKER

	[*] Ver las imágenes EXISTENTES
		docker images (windows)
		sudo docker images (linux)

	[*] Borrar una imagen EXISTENTE
		docker rmi mtutor-img:tag (windows)
		sudo docker rmi mtutor-img:tag (linux)

	[*] Ver TODOS los contenedores EXISTENTES
		docker ps -a (windows)
		sudo docker ps -a (linux)

	[*] Ver SÓLO los contenedores en EJECUCIÓN
		docker ps (windows)
		sudo docker ps (linux)

	[*] Iniciar la ejecucion de un contenedor EXISTENTE
		docker start Mateo (windows)
		sudo docker start Mateo (linux)

	[*] Detener la ejecucion de un contenedor
		docker stop Mateo (windows)
		sudo docker stop Mateo (linux)

	[*] Eliminar un contenedor detenido
		docker rm Mateo (windows)
		sudo docker rm Mateo (linux)

╔════════════════╗
║ Requerimientos ║
╚════════════════╝
1 - Despliegue local funcional:

El sistema debe poder ejecutarse localmente en una máquina con Windows sin necesidad de Docker.

2 - Soporte para contenedores Docker:

El sistema debe ser compatible con Docker para facilitar su distribución y despliegue en distintos entornos.

3 - Accesibilidad a través de navegador web:

Los usuarios deben poder acceder al sistema mediante una URL local o del servidor.

4 - Acceso al servidor institucional mediante VPN:

El sistema debe permitir su ejecución remota en el servidor del curso, siendo accesible sólo mediante conexión VPN de la UACh.

╔══════════════════╗
║ Especificaciones ║
╚══════════════════╝
1 - Comando de ejecución local:

Para ejecutar el sistema localmente, se debe correr el comando pnpm dev o npm run dev dentro del directorio del proyecto.

2 - Puerto de acceso local y remoto:

En local: el sistema corre por defecto en http://localhost:3000/.
En el servidor: se accede mediante http://146.83.216.166:5007/.

3 - Creación de imagen Docker:

La imagen del sistema debe crearse usando el comando docker build --no-cache -t mtutor-img:tag . en el directorio donde está el Dockerfile.

4 - Configuración de VPN FortiClient:

La VPN debe ser configurada con los siguientes datos:
	Gateway: vpn.uach.cl
	Clave pre-compartida: uaustral.,2016
	Método de autenticación: Clave pre-compartida
  
╔════════════════════════════╗
║ Requisitos Funcionales (RF)║
╚════════════════════════════╝
1 - Despliegue local de la aplicación:

El sistema debe permitir ejecutar la aplicación de manera local mediante los comandos npm run dev o pnpm dev, y estar disponible en http://localhost:3000.

2 - Despliegue en servidor institucional (UACh):

La aplicación debe poder desplegarse en un servidor remoto al que se accede mediante VPN y, eventualmente, SSH. La aplicación debe ser accesible mediante la URL http://146.83.216.166:5007.

3 - Crear contenedores Docker a partir del proyecto:

El sistema debe permitir generar imágenes y contenedores Docker funcionales para ejecutar el proyecto, utilizando el archivo Dockerfile provisto.

╔═════════════════════════════════╗
║ Requisitos No Funcionales (RNF) ║
╚═════════════════════════════════╝
1 - Compatibilidad multiplataforma para el desarrollo:

El proyecto debe poder ejecutarse en sistemas Windows (con WSL) y también en entornos Linux para fines de desarrollo y despliegue.

2 - Documentación accesible y actualizada:

La documentación del sistema debe estar centralizada en el sitio [https://docs.lm.inf.uach.cl/instructions/client-side-template], incluyendo instrucciones sobre instalación, tecnologías, API y despliegue.

╔═══════════════════════╗
║ Modelo Arquitectónico ║
╚═══════════════════════╝
Con respecto al modelo arquitectonico, es el que esta descrito en el diagrama correspondiente corresponde a una arquitectura por capas

Diagramas UML: 

en la carpeta de recursos del proyecto estan los diagramas uml de secuencia, arquitectura y actividad que describen el proceso que se aborda con el software y la arquitectura del proyecto.
