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
  name: 'NotesPage',
  data() {
    return {
      newNoteText: '', // Texto de la nueva nota
      notes: [], // Lista de notas
      currentUser: null, // Usuario actual
      animationIndex: null, // Para controlar la animación
    };
  },
  computed: {
    pendingTasksCount() {
      return this.notes.filter(note => !note.completed).length;
    },
    totalTasksCount() {
      return this.notes.length;
    },
    sortedNotes() {
      return [...this.notes].sort((a, b) => {
        const priorityOrder = { High: 3, Normal: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    },
  },
  created() {
    try {
      const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      this.notes = savedNotes;
    } catch (error) {
      console.error('Error al cargar las notas desde LocalStorage:', error);
      this.notes = [];
    }
  },
  methods: {
    addNote() {
      if (this.newNoteText.trim() === '') return;

      const newNote = {
        id: Date.now(),
        text: this.newNoteText,
        priority: 'Normal',
        completed: false,
        createdAt: new Date().toLocaleString(),
      };

      this.notes.push(newNote);
      this.saveNotes();
      this.newNoteText = '';
      this.animationIndex = this.notes.length - 1;
    },
    changePriority(note, priority) {
      note.priority = priority;
      this.saveNotes();
    },
    toggleStatus(note) {
      note.completed = !note.completed;
      this.saveNotes();
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
      this.saveNotes();
    },
    clearCompleted() {
      this.notes = this.notes.filter(note => !note.completed);
      this.saveNotes();
    },
    saveNotes() {
      try {
        localStorage.setItem('notes', JSON.stringify(this.notes));
      } catch (error) {
        console.error('Error al guardar las notas en LocalStorage:', error);
      }
    },
    removeAnimation(index) {
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
