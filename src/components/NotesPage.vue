<template>
  <div class="notes-page">
    <!-- Formulario para agregar una nueva nota -->
    <div class="new-note">
      <input
        type="text"
        v-model="newNoteText"
        @keydown.enter="addNote"
        placeholder="Escribe una nueva nota"
      />
    </div>

    <!-- Mostrar mensaje con el número de tareas pendientes y el total -->
    <div class="task-stats">
      <p>{{ pendingTasksCount }} tareas pendientes de {{ totalTasksCount }} tareas</p>
    </div>

    <!-- Lista de notas -->
    <div class="notes-list">
      <div
        v-for="(note, index) in sortedNotes"
        :key="note.id"
        class="note"
        :class="{ completed: note.completed }"
        @animationend="removeAnimation(index)"
      >
        <div class="note-content">
          <div
            class="status-circle"
            :class="{ completed: note.completed }"
            @click="toggleStatus(note)"
          ></div>

          <div class="note-text">
            <p>{{ note.text }}</p>
            <span class="created-at">{{ note.createdAt }}</span>
          </div>

          <div class="priority-buttons">
            <button @click="changePriority(note, 'Low')" :class="{ active: note.priority === 'Low' }">Low</button>
            <button @click="changePriority(note, 'Normal')" :class="{ active: note.priority === 'Normal' }">Normal</button>
            <button @click="changePriority(note, 'High')" :class="{ active: note.priority === 'High' }">High</button>
          </div>

          <!-- Botón de eliminar a la derecha -->
          <button class="delete-button" @click="deleteNote(note.id)">Eliminar</button>
        </div>
      </div>
    </div>

    <!-- Enlace para borrar las tareas completadas -->
    <div class="clear-completed">
      <a href="#" @click.prevent="clearCompleted">Borrar tareas completadas</a>
    </div>
  </div>
</template>

<script>
export default {
  // Define el nombre del componente
  name: 'NotesPage',

  // Define el estado inicial del componente
  data() {
    return {
      newNoteText: '', // Texto de la nueva nota que el usuario quiere agregar
      notes: [], // Lista de todas las notas
      currentUser: null, // Información sobre el usuario actual (aún no se usa)
      animationIndex: null, // Para controlar el índice de la nota que tiene animación
    };
  },

  // Propiedades computadas que se actualizan automáticamente cuando cambian los datos
  computed: {
    // Cuenta las notas que no están completadas
    pendingTasksCount() {
      return this.notes.filter(note => !note.completed).length;
    },
    // Cuenta el total de notas
    totalTasksCount() {
      return this.notes.length;
    },
    // Ordena las notas según la prioridad (de mayor a menor)
    sortedNotes() {
      return [...this.notes].sort((a, b) => {
        // Define un objeto que asigna un valor numérico a cada prioridad
        const priorityOrder = { High: 3, Normal: 2, Low: 1 };
        // Ordena las notas según la prioridad, de más alta a más baja
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    },
  },

  // Hook que se ejecuta cuando el componente es creado
  created() {
    try {
      // Intenta cargar las notas desde el almacenamiento local (LocalStorage)
      const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      this.notes = savedNotes; // Asigna las notas cargadas al estado del componente
    } catch (error) {
      // Si hay un error al cargar las notas, muestra un mensaje en la consola
      console.error('Error al cargar las notas desde LocalStorage:', error);
      this.notes = []; // Si ocurre un error, inicializa las notas como un array vacío
    }
  },

  // Métodos que gestionan las interacciones con las notas
  methods: {
    // Método para agregar una nueva nota
    addNote() {
      // Si el texto de la nueva nota está vacío, no se hace nada
      if (this.newNoteText.trim() === '') return;

      // Crea una nueva nota con un ID único basado en la hora actual
      const newNote = {
        id: Date.now(),
        text: this.newNoteText,
        priority: 'Normal', // Establece la prioridad predeterminada en "Normal"
        completed: false, // Establece que la nota no está completada
        createdAt: new Date().toLocaleString(), // La fecha y hora de creación de la nota
      };

      // Agrega la nueva nota a la lista de notas
      this.notes.push(newNote);
      // Guarda las notas en el almacenamiento local
      this.saveNotes();
      // Limpia el campo de texto de la nueva nota
      this.newNoteText = '';
      // Establece el índice de la nota para aplicar animaciones
      this.animationIndex = this.notes.length - 1;
    },

    // Método para cambiar la prioridad de una nota
    changePriority(note, priority) {
      // Actualiza la prioridad de la nota
      note.priority = priority;
      // Guarda las notas actualizadas en el almacenamiento local
      this.saveNotes();
    },

    // Método para cambiar el estado de completado de una nota (marcar como completada o no)
    toggleStatus(note) {
      // Invierte el estado de completado
      note.completed = !note.completed;
      // Guarda las notas actualizadas en el almacenamiento local
      this.saveNotes();
    },

    // Método para eliminar una nota por su ID
    deleteNote(id) {
      // Filtra las notas para eliminar la que tiene el ID proporcionado
      this.notes = this.notes.filter(note => note.id !== id);
      // Guarda las notas actualizadas en el almacenamiento local
      this.saveNotes();
    },

    // Método para limpiar todas las notas completadas
    clearCompleted() {
      // Filtra las notas para eliminar las que están marcadas como completadas
      this.notes = this.notes.filter(note => !note.completed);
      // Guarda las notas actualizadas en el almacenamiento local
      this.saveNotes();
    },

    // Método para guardar las notas en el almacenamiento local
    saveNotes() {
      try {
        // Convierte las notas en una cadena JSON y las guarda en LocalStorage
        localStorage.setItem('notes', JSON.stringify(this.notes));
      } catch (error) {
        // Si ocurre un error al guardar, muestra un mensaje en la consola
        console.error('Error al guardar las notas en LocalStorage:', error);
      }
    },

    // Método para remover la animación de una nota cuando ya no es necesario
    removeAnimation(index) {
      // Si el índice de la animación coincide con el índice proporcionado, lo elimina
      if (index === this.animationIndex) {
        this.animationIndex = null;
      }
    },
  },
};
</script>


<style scoped>
.notes-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #e0e0e0;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.new-note {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.new-note input {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #e0e0e0;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, background-color 0.3s;
}

.new-note input:focus {
  border-color: #00bcd4;
  background-color: #333;
}

.task-stats {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #bdbdbd;
  text-align: center;
}

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow-y: auto;
}

.note {
  background-color: #2e2e2e;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: fadeIn 0.5s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

.note.completed {
  background-color: #1b5e20;
  text-decoration: line-through;
  color: #a5d6a7;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.status-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #777;
  cursor: pointer;
  transition: background-color 0.3s;
}

.status-circle.completed {
  background-color: #00c853;
}

.note-text {
  flex: 1;
  margin-left: 15px;
}

.note-text p {
  margin: 0;
  font-size: 16px;
}

.note-text .created-at {
  font-size: 12px;
  color: #aaa;
}

.priority-buttons {
  display: flex;
  gap: 5px;
  margin-right: auto;
}

.priority-buttons button {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  background-color: #444;
  color: #e0e0e0;
}

.priority-buttons button.active {
  background-color: #00bcd4;
  color: #fff;
}

.priority-buttons button:hover {
  background-color: #0288d1;
  transform: scale(1.05);
}

.delete-button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
  align-self: flex-end;
  margin-left: 15px;
}

.delete-button:hover {
  background-color: #b71c1c;
  transform: scale(1.05);
}

.clear-completed a {
  color: #00bcd4;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: block;
  margin-top: 20px;
}

.clear-completed a:hover {
  text-decoration: underline;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .notes-page {
    padding: 15px;
  }

  .new-note input {
    max-width: 100%;
  }

  .notes-list {
    gap: 10px;
  }

  .note {
    flex-direction: column;
    align-items: flex-start;
  }

  .note-text {
    margin-left: 0;
  }

  .priority-buttons {
    width: 100%;
    justify-content: space-between;
  }

  .priority-buttons button {
    flex: 1;
  }
}
</style>
