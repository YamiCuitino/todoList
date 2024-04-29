let tareas = [
  { nombre: 'Completar informe de ventas', estado: 'incompleto', activo: true },
  { nombre: 'Realizar investigación de mercado', estado: 'completo', activo: true },
  { nombre: 'Enviar propuesta de proyecto', estado: 'incompleto', activo: true },
  { nombre: 'Organizar reunión con equipo de desarrollo', estado: 'completo', activo: true },
  { nombre: 'Revisar contrato con proveedor', estado: 'incompleto', activo: true },
  { nombre: 'Actualizar base de datos de clientes', estado: 'completo', activo: true },
  { nombre: 'Capacitar a nuevos empleados', estado: 'incompleto', activo: true },
  { nombre: 'Resolver problemas de servicio al cliente', estado: 'completo', activo: true },
  { nombre: 'Crear campaña publicitaria', estado: 'incompleto', activo: true },
  { nombre: 'Preparar informe financiero trimestral', estado: 'completo', activo: true },
  { nombre: 'Implementar mejoras en el sistema de producción', estado: 'incompleto', activo: true },
  { nombre: 'Diseñar nueva línea de productos', estado: 'completo', activo: true },
  { nombre: 'Coordinar envío de mercancía', estado: 'incompleto', activo: true },
  { nombre: 'Evaluar desempeño de empleados', estado: 'completo', activo: true },
  { nombre: 'Planificar estrategias de marketing', estado: 'incompleto', activo: true },
  { nombre: 'Realizar mantenimiento de equipos', estado: 'completo', activo: true },
  { nombre: 'Analizar tendencias de mercado', estado: 'incompleto', activo: true },
  { nombre: 'Revisar políticas de seguridad', estado: 'completo', activo: true },
  { nombre: 'Solicitar cotizaciones a proveedores', estado: 'incompleto', activo: true },
  { nombre: 'Crear contenido para redes sociales', estado: 'completo', activo: true }
];

function cargarTareasDesdeLocalStorage() {
  const tareasGuardadas = localStorage.getItem('tareas');
  if (tareasGuardadas) {
      tareas = JSON.parse(tareasGuardadas);
  }
}

function guardarTareasEnLocalStorage() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}
function mostrarTareas() {
  let listaTareasCompletas = document.getElementById('lista_tareas_completas');
  let listaTareasIncompletas = document.getElementById('lista_tareas_incompletas');
  
  listaTareasCompletas.innerHTML = '';
  listaTareasIncompletas.innerHTML = '';

  tareas.forEach(tarea => {
    let listItem = document.createElement('li');
    listItem.className = 'task-item';

    let nombreTarea = document.createElement('span');
    nombreTarea.textContent = tarea.nombre;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = tarea.estado === 'completo';
    checkbox.addEventListener('change', function() {
        tarea.estado = checkbox.checked ? 'completo' : 'incompleto';
        mostrarTareas(); // Mostrar las tareas nuevamente después de actualizar el estado
    });

    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar Tarea';
    botonEliminar.className = 'botonEliminar btn btn-sm';
    botonEliminar.addEventListener('click', function() {
        eliminarTarea(tarea.nombre);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(nombreTarea);
    listItem.appendChild(document.createElement('br')); // Agregamos un salto de línea
    listItem.appendChild(botonEliminar);

    if (tarea.estado === 'completo') {
        listaTareasCompletas.appendChild(listItem);
    } else {
        listaTareasIncompletas.appendChild(listItem);
    }
});
}


document.addEventListener('DOMContentLoaded', function() {
  cargarTareasDesdeLocalStorage();
  mostrarTareas();
});

// Función para agregar una nueva tarea a la lista
function agregarTarea(nombreTarea) {
  let nuevaTarea = {
      nombre: nombreTarea,
      estado: "incompleto", 
      activo: true 
  };
  tareas.push(nuevaTarea);
  guardarTareasEnLocalStorage()
  mostrarTareas();
}

function ObtenerTarea() {
  let tarea = document.getElementById("tarea").value;
  agregarTarea(tarea);
  document.getElementById("tarea").value = "";
}

function eliminarTarea(nombreTarea) {
  tareas = tareas.filter(tarea => tarea.nombre !== nombreTarea);

  guardarTareasEnLocalStorage(),
  mostrarTareas(); 
}





