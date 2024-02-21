window.onload = function() { 
    document.getElementById("button-access-panel").addEventListener("click", function() {
        var inpLock = document.getElementById("input-padlock");
        inpLock.curso
        inpLock.checked = !inpLock.checked;
        // Emite el evento change después de cambiar el estado del checkbox
        inpLock.dispatchEvent(new Event("change"));
    });
}