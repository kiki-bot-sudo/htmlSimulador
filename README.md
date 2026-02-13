# Simulador HTML Interactivo: Algoritmos de Asignación de Memoria

## 1. Introducción

Este simulador web interactivo permite visualizar y comparar en tiempo real el funcionamiento de dos algoritmos fundamentales de asignación de memoria: **Best Fit** y **Worst Fit**. La herramienta está diseñada para facilitar la comprensión de cómo los sistemas operativos gestionan la memoria RAM cuando múltiples procesos compiten por recursos limitados.

El simulador ofrece una interfaz visual intuitiva que muestra el estado de los bloques de memoria, la asignación de procesos, y las métricas de rendimiento de cada algoritmo, permitiendo a los usuarios experimentar con diferentes configuraciones y observar directamente las diferencias en el comportamiento de cada estrategia de asignación.

### ¿Qué significan los resultados?

- **Procesos Asignados**: Cantidad de procesos que lograron ser asignados a bloques de memoria.
- **Fragmentación**: Suma total de espacios libres en todos los bloques. Una fragmentación menor indica un uso más eficiente de la memoria.
- **Análisis Comparativo**: Identifica qué algoritmo presenta menor fragmentación para la configuración específica.
- **Bloques coloreados**: Los bloques ocupados se muestran en azul, mientras que los libres aparecen en gris.

## 3. Explicación de los Algoritmos

### Best Fit (Mejor Ajuste)

**Funcionamiento**: El algoritmo Best Fit busca entre todos los bloques de memoria disponibles aquel que tenga el tamaño más pequeño que sea suficiente para alojar el proceso. Es decir, busca el bloque que minimice el espacio desperdiciado.

**Proceso de decisión**:
1. Examina todos los bloques con espacio libre suficiente para el proceso
2. Calcula la diferencia entre el tamaño del bloque libre y el tamaño del proceso
3. Selecciona el bloque con la menor diferencia
4. Asigna el proceso a ese bloque y actualiza el espacio libre

**Ventajas**:
- Minimiza el espacio desperdiciado en cada asignación individual
- Tiende a preservar bloques grandes para procesos grandes futuros

**Desventajas**:
- Genera muchos fragmentos pequeños que pueden ser inútiles
- Requiere recorrer toda la lista de bloques libres (mayor tiempo de búsqueda)
- Puede llevar a una alta fragmentación externa acumulada

### Worst Fit (Peor Ajuste)

**Funcionamiento**: El algoritmo Worst Fit selecciona el bloque de memoria más grande disponible para asignar el proceso. La filosofía es dejar fragmentos residuales lo más grandes posible para que puedan ser útiles en futuras asignaciones.

**Proceso de decisión**:
1. Examina todos los bloques con espacio libre suficiente
2. Calcula la diferencia entre el tamaño del bloque libre y el tamaño del proceso
3. Selecciona el bloque con la mayor diferencia (el bloque más grande)
4. Asigna el proceso y deja un fragmento residual grande

**Ventajas**:
- Los fragmentos residuales son más grandes y potencialmente más útiles
- Puede resultar en menor fragmentación externa en algunos escenarios
- Mejor distribución del espacio libre

**Desventajas**:
- Los bloques grandes se consumen rápidamente
- Puede fallar en asignar procesos grandes que lleguen más tarde
- También requiere recorrer toda la lista de bloques

### Comparación de Rendimiento

El rendimiento de cada algoritmo depende fuertemente del patrón de llegada de procesos y sus tamaños. En el simulador, puede observar que:

- **Best Fit** funciona mejor cuando los procesos tienen tamaños variados y predecibles
- **Worst Fit** puede ser superior cuando se esperan procesos grandes en el futuro
- La **fragmentación** es la métrica clave para evaluar la eficiencia

## 4. Reflexión

Los algoritmos de asignación de memoria son fundamentales en el diseño de sistemas operativos modernos. A través de este simulador, se evidencia que no existe un algoritmo universalmente superior; cada estrategia tiene sus casos de uso óptimos.


## 5. Referencias

1. **Silberschatz, A., Galvin, P. B., & Gagne, G.** (2018). *Operating System Concepts* (10th ed.). Wiley.
   - Capítulo 8: Memory Management - Sección sobre algoritmos de asignación contígua

2. **Tanenbaum, A. S., & Bos, H.** (2015). *Modern Operating Systems* (4th ed.). Pearson.
   - Capítulo 3: Memory Management - Estrategias de ajuste de memoria

3. **Stallings, W.** (2018). *Operating Systems: Internals and Design Principles* (9th ed.). Pearson.
   - Capítulo 7: Memory Management - Dynamic Partitioning

4. **Wilson, P. R., Johnstone, M. S., Neely, M., & Boles, D.** (1995). *Dynamic Storage Allocation: A Survey and Critical Review*. International Workshop on Memory Management.
   - Análisis comparativo de algoritmos de asignación de memoria


### Información del Proyecto

- **Estudiante**: Enrique Zavala
- **Matrícula**: SW2509057
- **Materia**: Sistemas Operativos
- **Profesor**: Jorge Javier Pedroza Romero
- **Institución**: Tecnológico de Software
- **Fecha de Entrega**: 13/02/2026


### CLausula de IA 

yo Enrique Zavala Si use IA
use Claude 

promp: como peudo darle mejor formato a mi readme


Respuesta de la IA: Guía para darle mejor formato a tu README
Elementos esenciales de un buen README:
1. Título y Descripción
markdown# Nombre del Proyecto

Una breve descripción de qué hace tu proyecto (1-2 líneas).

## 📝 Descripción

Explicación más detallada del proyecto, qué problema resuelve, y por qué es útil.
2. Índice (para READMEs largos)
markdown## 📋 Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
3. Características principales
markdown## ✨ Características

- ✅ Característica 1
- ✅ Característica 2
- ✅ Característica 3
4. Capturas de pantalla
markdown## 📸 Capturas de Pantalla

![Screenshot](./screenshots/screenshot1.png)
![Demo](./images/demo.gif)
5. Instalación
markdown## 🚀 Instalación

1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
```

2. Navega al directorio
```bash
cd tu-proyecto
```

3. Instala dependencias
```bash
npm install
```
6. Uso
markdown## 💻 Uso

Para ejecutar el proyecto:
```bash
npm start
```

O simplemente abre `index.html` en tu navegador.
7. Tecnologías utilizadas
markdown## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript
- React
- Node.js
8. Estructura del proyecto
markdown## 📁 Estructura del Proyecto
```
proyecto/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```
9. Contribuciones
markdown## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request
10. Autor y Licencia
markdown## 👤 Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

🎨 Elementos de formato útiles:
Badges (insignias)
markdown![GitHub stars](https://img.shields.io/github/stars/usuario/repo)
![GitHub forks](https://img.shields.io/github/forks/usuario/repo)
![GitHub issues](https://img.shields.io/github/issues/usuario/repo)
Código con resaltado de sintaxis
markdown```javascript
function saludar() {
    console.log("Hola mundo");
}
```
Tablas
markdown| Característica | Descripción |
|----------------|-------------|
| Responsive     | Se adapta a móviles |
| Rápido         | Carga en < 2s |
Alertas/Notas
markdown> **Nota:** Esto es importante

> **Advertencia:** Ten cuidado con esto
Listas de tareas
markdown- [x] Tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente

📝 Ejemplo completo de README:
markdown# 🎮 Mi Proyecto Increíble

Un proyecto web interactivo que hace cosas increíbles.

## 📋 Descripción

Este es un proyecto personal que desarrollé para aprender desarrollo web. Incluye animaciones, diseño responsive y funcionalidades interactivas.

## ✨ Características

- ✅ Diseño responsive
- ✅ Animaciones CSS
- ✅ Interfaz intuitiva
- ✅ Compatible con todos los navegadores

## 📸 Demo

![Screenshot](./screenshot.png)

## 🚀 Instalación
```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

Abre `index.html` en tu navegador.

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript

## 👤 Autor

**Tu Nombre**
- GitHub: [@usuario](https://github.com/usuario)

## 📄 Licencia

MIT License
¿Te gustaría que te ayude a crear un README específico para tu proyecto?


