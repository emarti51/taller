document.addEventListener("DOMContentLoaded", () => {
    const materiaForm = document.getElementById("materia-form");
    const materiasList = document.getElementById("materias-list");

    // Manejar la presentación de materias al enviar el formulario
    materiaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const materiaInput = document.getElementById("materia");
        const notaInput = document.getElementById("nota");
        const aprobadoInput = document.getElementById("aprobado");

        const materia = materiaInput.value;
        const nota = parseFloat(notaInput.value);
        const aprobado = aprobadoInput.checked;

        if (materia && !isNaN(nota)) {
            const materiaItem = document.createElement("li");
            materiaItem.innerHTML = `
                ${materia} - Nota: ${nota} - ${aprobado ? "Aprobado" : "No Aprobado"}
                <span class="delete">Eliminar</span>
            `;

            // Manejar la eliminación de una materia
            materiaItem.querySelector(".delete").addEventListener("click", () => {
                materiasList.removeChild(materiaItem);
            });

            materiasList.appendChild(materiaItem);

            // Limpiar el formulario
            materiaInput.value = "";
            notaInput.value = "";
            aprobadoInput.checked = false;
        }
    });
});