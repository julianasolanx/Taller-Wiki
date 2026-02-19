## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Docker Desktop
- Docker Engine en ejecución


## Limpiar imágenes y contenedores antiguos

Este comando elimina imágenes y contenedores no utilizados para evitar conflictos o problemas de caché:

```bash
docker system prune -a
```


## Construir la imagen Docker

Desde la raíz del proyecto (donde se encuentra el `Dockerfile`), ejecuta:

```bash
docker build -t thymeleaf-app .
```

## Ejecutar el contenedor

Una vez construida la imagen, ejecuta:

```bash
docker run -p 8080:8080 thymeleaf-app
```

Esto:

* Inicia el contenedor
* Expone el puerto `8080` del contenedor
* Lo enlaza con el puerto `8080` de tu máquina local

Abre tu navegador y entra a:

```
http://localhost:8080
```
