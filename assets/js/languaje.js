'use strict'

// language.js
const languages = {
    en: {
        title: "Shopping List",
        itemTypePlaceholder: "Product Type",
        itemNamePlaceholder: "Product Name",
        itemQtyPlaceholder: "Quantity",
        addButton: "Add Product",
        exportButton: "Export to JSON",
        importButton: "Import JSON",
        clearButton: "Clear Table",
        deleteButton: "Delete"
    },
    es: {
        title: "Lista de Compras",
        itemTypePlaceholder: "Tipo del Producto",
        itemNamePlaceholder: "Nombre del Producto",
        itemQtyPlaceholder: "Cantidad",
        addButton: "Añadir Producto",
        exportButton: "Exportar a JSON",
        importButton: "Importar JSON",
        clearButton: "Limpiar Tabla",
        deleteButton: "Eliminar"
    },
    pt: {
        title: "Lista de Compras",
        itemTypePlaceholder: "Tipo de Produto",
        itemNamePlaceholder: "Nome do Produto",
        itemQtyPlaceholder: "Quantidade",
        addButton: "Adicionar Produto",
        exportButton: "Exportar para JSON",
        importButton: "Importar JSON",
        clearButton: "Limpar Tabela",
        deleteButton: "Eliminar"
    }
};

let currentLanguage = 'es'; // Set default language

function updateLanguage(language) {
    currentLanguage = language;
    document.querySelector("h2").textContent = languages[language].title;
    document.getElementById("itemType").placeholder = languages[language].itemTypePlaceholder;
    document.getElementById("itemName").placeholder = languages[language].itemNamePlaceholder;
    document.getElementById("itemQty").placeholder = languages[language].itemQtyPlaceholder;
    document.getElementById("addButton").textContent = languages[language].addButton;
    document.getElementById("exportButton").textContent = languages[language].exportButton;
    document.getElementById("importButton").textContent = languages[language].importButton;
    document.getElementById("clearButton").textContent = languages[language].clearButton;

    updateTable(); // Refresh table to update the delete button text
}
