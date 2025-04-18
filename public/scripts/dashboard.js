// Asegurarse de que el DOM esté completamente cargado antes de ejecutar cualquier código
document.addEventListener("DOMContentLoaded", () => {
  // Al cargar la página, verificamos si hay contenido guardado en LocalStorage y lo mostramos en el editor
  const savedContent = localStorage.getItem("content");
  const editor = document.getElementById("editor");
  if (savedContent && editor) {
    editor.innerHTML = savedContent;
  }

  // Al hacer clic en "Guardar Cambios", guardamos el contenido en LocalStorage
  const saveButton = document.getElementById("saveButton");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      const content = editor ? editor.innerHTML : "";
      localStorage.setItem("content", content); // Guardamos el contenido en LocalStorage
      alert("¡Contenido guardado!");
    });
  }

  // Mostrar el contenido en otra área si es necesario (en una página de visualización)
  /*const contentArea = document.getElementById("contentArea");
  if (contentArea) {
    if (savedContent) {
      contentArea.innerHTML = savedContent;
    } else {
      contentArea.innerHTML = "<p>No hay contenido disponible</p>";
    }
  }*/
});

document.addEventListener("DOMContentLoaded", () => {
  // Recuperamos el contenido guardado desde LocalStorage
  const savedContent = localStorage.getItem("content");

  // Si hay contenido guardado, lo mostramos en el header
  const contentArea = document.getElementById("contentArea");
  if (savedContent && contentArea) {
    contentArea.innerHTML = savedContent;
  }
});
