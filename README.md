# Del Diseño a la Realidad Digital: "TEATRO DIGITAL"
## 1.- Introducción
Para el proyecto, se ha creado el teatro digital "Risas y Tragedias", especializado en obras clásicas (tales como "_Hamlet_", "_La Celestina_" o "_La Divina Comedia_"). Los usuarios tienen la oportunidad de explorar información detallada sobre las obras a través de dos secciones principales: "Cartelera" y "Programación". En "Cartelera", pueden encontrar una visión general de las obras disponibles, mientras que en "Programación", disponen de un calendario con el que pueden acceder a las obras, así como a sus detalles específicos (director, sinopsis, duración, etc.).

Una característica destacada de esta plataforma es la posibilidad de interactuar con un panel de asientos, donde los usuarios pueden visualizar los asientos reservados y seleccionar aquellos que estén disponibles para su elección. Este enfoque intuitivo facilita a los espectadores la elección de butacas para disfrutar de las obras clásicas ofrecidas por el teatro digital "Risas y Tragedias".

## <br>2.- Objetivos del proyecto
La propuesta “Del Diseño a la Realidad Digital: Tu Creatividad, Nuestra Guía” está
pensada para desafiar a los estudiantes en el desarrollo de habilidades técnicas y de
colaboración, con el fin de lograr un producto que no solo cumpla con los requisitos
técnicos, sino que también ofrezca una experiencia de usuario superior.
- Crear una interfaz de usuario intuitiva y elegante basada en las especificaciones
del cliente.
- Implementar un sistema de reservas y venta de entradas en línea eficiente.
- Desarrollar una API REST con Node.js con Express.js.
- Asegurar una experiencia de usuario responsiva y atractiva en distintos
dispositivos.
- Fomentar el trabajo en equipo y aplicar las mejores prácticas de desarrollo
colaborativo.

### 2.1.- Tecnologías a utilizar
| Front-End  | Back-End | Otras herramientas 
| ------------- | ------------- | ------------- |
| <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" height="40px"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" height="40px"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/800px-Sass_Logo_Color.svg.png" height="40px"> <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" height="40px"> | <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" height="50px"> | <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" height="40px"> <img src="https://gitforwindows.org/img/gwindows_logo.png" height="40px"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="40px"> <img src="https://static-00.iconduck.com/assets.00/sourcetree-icon-1626x2048-87bhm33f.png" height="40px"> <img src="https://help.apiary.io/images/swagger-logo.png" height="40px">  <img src="https://avatars.githubusercontent.com/u/56705483" height="40px"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Bing_Fluent_Logo.svg" height="40px">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png" height="40px">

### 2.2.- Estructura del trabajo en ETAPAS
Es obligatorio uso de Git y GitHub para el control de versiones y testear API con Postman.
Se deben entregar todas las etapas en orden progresivo y fechas establecidas. La no entrega
de una etapa cerrará la entrega de las siguientes fases.
El alumnado solo podrá presentarse a la prueba de autoría y a la presentación ante tribunal
siempre y cuando haya entregado todas las fases en su fecha correspondiente.

| ETAPA 1: <br>Análisis y diseño | ETAPA 2: <br>Codificación | ETAPA 3: <br>Despliegue en la nube | ETAPA 4: <br>Prueba de autoría y exposición
| ------------- | ------------- | ------------- | ------------- |
| - Elaborar la guía de estilo con branding y especificaciones para desarrolladores. <br> - Diseñar prototipos interactivos en Figma.| - **Front-End:** Maquetación HTML + CSS con precompilado Sass, con enfoque _responsive_ y _Mobile First_. <br>- **Front-End:** Programación con JavaScript puro Vanilla.js: Interactividad y consumo de APIS.<br>- **Back-End:** Consumir un API Rest utilizando Node con Express.js.| - Contenerización en local del front (web HTML) y del back API (Node). <br>- Despliegue del front-end en AWS S3. <br>- Despliegue del back-end y configuración de la API en AWS siguiendo una arquitectura de capas en un EC2. <br>- Publicar y registro en DNS público.| Demostración y defensa del proyecto completo ante un tribunal educativo. |
| 30% | 40% | 15% | 15% |

## <br>3.- API
Para iniciar la API, es necesario lanzar el siguiente comando en la terminal:

    npm start

### 3.1.- Testeo mediante Hoppscotch 
**- Espectáculos (shows)**<br>
`GET` all shows | `GET` show by id | `POST` show | `DELETE` show | `PUT` show<br>
<br>![image](https://github.com/paulamateo/RETO2DAW_TeatroDigital/assets/118843344/447f21eb-b598-45e2-af81-80d300190743)

**- Géneros**<br>
`GET` all genres | `GET` shows by genre<br>
<div align="center">
    <img src="https://github.com/paulamateo/RETO2DAW_TeatroDigital/assets/118843344/7876951e-abff-476a-8788-6d91573c4840" alt="Imagen" height="120px">
</div>

