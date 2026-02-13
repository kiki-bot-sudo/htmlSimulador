# Simulador HTML Interactivo: Algoritmos de Asignación de Memoria

## 1. Introducción

Este simulador web interactivo permite visualizar y comparar en tiempo real el funcionamiento de dos algoritmos fundamentales de asignación de memoria: **Best Fit** y **Worst Fit**. La herramienta está diseñada para facilitar la comprensión de cómo los sistemas operativos gestionan la memoria RAM cuando múltiples procesos compiten por recursos limitados.

El simulador ofrece una interfaz visual intuitiva que muestra el estado de los bloques de memoria, la asignación de procesos, y las métricas de rendimiento de cada algoritmo, permitiendo a los usuarios experimentar con diferentes configuraciones y observar directamente las diferencias en el comportamiento de cada estrategia de asignación.

## 2. Instrucciones de Uso

### ¿Qué debe hacer el usuario?

1. **Configurar los bloques de memoria**: En el campo "Bloques de Memoria", ingrese los tamaños de los bloques disponibles separados por comas (ej: 100, 500, 200, 300, 600). Estos representan las particiones de memoria disponibles en KB.

2. **Definir los procesos**: En el campo "Procesos a Asignar", ingrese los tamaños de los procesos que necesitan memoria separados por comas (ej: 212, 417, 112, 426).

3. **Inicializar**: Haga clic en el botón "Inicializar Memoria" para preparar la simulación con los valores ingresados.

4. **Ejecutar la simulación**: Puede elegir entre dos modos:
   - **"Ejecutar Simulación"**: Ejecuta la asignación de todos los procesos automáticamente con animaciones.
   - **"Paso a Paso"**: Asigna un proceso a la vez, permitiendo analizar cada decisión del algoritmo.

5. **Limpiar**: Use el botón "Limpiar" para reiniciar la simulación y comenzar con una nueva configuración.

### ¿Qué va a observar?

- **Visualización de bloques de memoria**: Cada bloque muestra su tamaño total, espacio libre y procesos asignados.
- **Barras de progreso**: Indican visualmente el porcentaje de ocupación de cada bloque.
- **Lista de procesos**: Muestra el estado de cada proceso (En espera / Asignado).
- **Comparación lado a lado**: Los algoritmos Best Fit y Worst Fit se ejecutan simultáneamente para facilitar la comparación.

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

**Observaciones clave**:

1. **Dependencia del contexto**: El rendimiento de Best Fit y Worst Fit varía significativamente según el patrón de asignación. Esto demuestra que los sistemas operativos reales deben ser adaptativos.

2. **Trade-offs inevitables**: Ambos algoritmos enfrentan el problema de la fragmentación, aunque de formas diferentes. Best Fit genera muchos fragmentos pequeños, mientras que Worst Fit consume rápidamente los bloques grandes.

3. **Importancia de la visualización**: La representación gráfica hace evidentes conceptos que en teoría pueden parecer abstractos. Ver cómo se llenan los bloques de memoria facilita la comprensión del impacto de cada decisión de asignación.

4. **Aplicaciones prácticas**: Estos algoritmos no solo se aplican a la gestión de memoria RAM, sino también a:
   - Asignación de espacio en disco
   - Gestión de recursos en sistemas embebidos
   - Optimización de packing en logística
   - Asignación de recursos en cloud computing

5. **Limitaciones del modelo**: Este simulador utiliza un modelo simplificado (particiones fijas). Los sistemas operativos modernos emplean técnicas más sofisticadas como paginación, segmentación, y algoritmos híbridos que mitigan los problemas de fragmentación.

## 5. Referencias

1. **Silberschatz, A., Galvin, P. B., & Gagne, G.** (2018). *Operating System Concepts* (10th ed.). Wiley.
   - Capítulo 8: Memory Management - Sección sobre algoritmos de asignación contígua

2. **Tanenbaum, A. S., & Bos, H.** (2015). *Modern Operating Systems* (4th ed.). Pearson.
   - Capítulo 3: Memory Management - Estrategias de ajuste de memoria

3. **Stallings, W.** (2018). *Operating Systems: Internals and Design Principles* (9th ed.). Pearson.
   - Capítulo 7: Memory Management - Dynamic Partitioning

4. **Wilson, P. R., Johnstone, M. S., Neely, M., & Boles, D.** (1995). *Dynamic Storage Allocation: A Survey and Critical Review*. International Workshop on Memory Management.
   - Análisis comparativo de algoritmos de asignación de memoria

5. **Documentación Web**:
   - MDN Web Docs - JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript
   - W3Schools - CSS Animations: https://www.w3schools.com/css/css3_animations.asp

6. **Recursos académicos**:
   - GeeksforGeeks - Memory Management in Operating System: https://www.geeksforgeeks.org/memory-management-in-operating-system/
   - TutorialsPoint - Operating System Memory Management: https://www.tutorialspoint.com/operating_system/os_memory_management.htm

---

### Información del Proyecto

- **Estudiante**: Enrique Zavala
- **Matrícula**: SW2509057
- **Materia**: Sistemas Operativos
- **Profesor**: Jorge Javier Pedroza Romero
- **Institución**: Tecnológico de Software
- **Fecha de Entrega**: 13/02/2026


