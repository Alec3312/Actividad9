new Vue({
    el: '#app', // Elemento en el DOM donde se montará la instancia de Vue
    data: {
      nuevaTarea: '', // Variable que almacena el texto de la nueva tarea a agregar
      tareas: [] // Array que contiene todas las tareas, cada una con su estado de completada o no
    },
    methods: {
      // Método para agregar una nueva tarea a la lista
      agregarTarea() {
        if (this.nuevaTarea) { // Verifica si el campo de nueva tarea no está vacío
          // Agrega la nueva tarea con el texto ingresado y el estado de completada en falso
          this.tareas.push({ texto: this.nuevaTarea, completada: false });
          this.nuevaTarea = ''; // Limpia el campo de texto después de agregar la tarea
        }
      },
      // Método para cambiar el estado de completada de una tarea
      completarTarea(index) {
        // Cambia el estado de completada a su opuesto (true/false) al hacer clic
        this.tareas[index].completada = !this.tareas[index].completada;
      },
      // Método para eliminar una tarea de la lista
      eliminarTarea(index) {
        // Elimina la tarea en el índice especificado del array
        this.tareas.splice(index, 1);
      }
    },
    computed: {
      // Computed property para contar el número de tareas completadas
      tareasCompletas() {
        // Filtra las tareas completadas y devuelve su cantidad
        return this.tareas.filter(t => t.completada).length;
      },
      // Computed property para calcular el porcentaje de tareas completadas
      porcentajeCompletado() {
        // Calcula el porcentaje de tareas completadas
        return this.tareas.length ? Math.round((this.tareasCompletas / this.tareas.length) * 100) : 0;
      }
    }
  });  