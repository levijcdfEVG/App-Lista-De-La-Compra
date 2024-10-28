'use strict';

let groceryList = [];

function addItem() {
    const itemType = document.getElementById("itemType").value;
    const itemName = document.getElementById("itemName").value;
    const itemQty = document.getElementById("itemQty").value;

    if (itemName && itemQty) {
        const item = { type: itemType, name: itemName, quantity: parseInt(itemQty) };
        groceryList.push(item);
        updateTable();
        document.getElementById("itemName").value = '';
        document.getElementById("itemQty").value = '';
    } else {
        alert("Por favor ingrese el nombre del producto y la cantidad.");
    }
}

function updateTable() {
    const table = document.getElementById("groceryTable");
    table.innerHTML = ""; // Clear the table before adding rows

    groceryList.forEach((item) => {
        const row = `<tr>
            <td>${item.type}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

function exportToJson() {
    const dataStr = JSON.stringify(groceryList);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "lista_de_compras.json";
    a.click();
}

function importFromJson() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();

    fileInput.onchange = () => {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            groceryList = JSON.parse(reader.result);
            updateTable();
        };
        reader.readAsText(file);
    };
}

function clearTable() {
    groceryList = []; // Clear the list
    document.getElementById("groceryTable").innerHTML = ""; // Clear the HTML table
}
