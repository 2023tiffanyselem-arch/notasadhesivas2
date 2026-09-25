// Función para calcular la conversión de moneda
function convertCurrency() {
  const amountInput = parseFloat(document.getElementById('amount').value) || 0;
  const rateInput = parseFloat(document.getElementById('exchange-rate').value) || 1;
  const resultDisplay = document.getElementById('converted-result');

  if (rateInput <= 0) {
    resultDisplay.textContent = 'Cotización inválida';
    return;
  }

  const converted = (amountInput / rateInput).toFixed(2);
  resultDisplay.textContent = `${converted} U$S`;
}

// Función para crear una nueva notita basada en el formulario
function createNote() {
  const titleInput = document.getElementById('note-title').value.trim();
  const amountInput = parseFloat(document.getElementById('note-amount').value) || 0;
  const rateInput = parseFloat(document.getElementById('exchange-rate').value) || 1;
  const styleSelect = document.getElementById('note-style').value;
  const container = document.getElementById('notes-container');

  if (!titleInput) {
    alert('Por favor, ingresa un título para la nota.');
    return;
  }

  // Calcular equivalencia en dólares
  const usdValue = (amountInput / rateInput).toFixed(2);

  // Crear elemento div de la nota
  const noteDiv = document.createElement('div');
  noteDiv.className = `note-card note-${styleSelect}`;

  // Formatear pesos con separadores de miles
  const formattedARS = new Intl.NumberFormat('es-AR').format(amountInput);

  noteDiv.innerHTML = `
    <button class="btn-delete" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h3 class="note-card-title">${titleInput}</h3>
    <p class="note-card-ars">$${formattedARS}</p>
    <p class="note-card-usd">${usdValue} U$S</p>
  `;

  // Agregar al contenedor
  container.appendChild(noteDiv);

  // Limpiar campos del formulario
  document.getElementById('note-title').value = '';
  document.getElementById('note-amount').value = '';
}

// Inicializar conversión al cargar la página
window.onload = function() {
  convertCurrency();
};