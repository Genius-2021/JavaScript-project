document.addEventListener("DOMContentLoaded", function () {
    const draggableDiv = document.getElementById("draggableDiv");

    let offsetX, offsetY, isDragging = false;

    draggableDiv.addEventListener("mousedown", function (e) {
        isDragging = true;

        // Get the initial mouse position relative to the draggable div
        offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
        offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;

        // Set cursor to grabbing during drag
        draggableDiv.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            // Calculate the new position of the draggable div
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            // Apply the new position
            draggableDiv.style.left = newX + "px";
            draggableDiv.style.top = newY + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;

        // Set cursor back to grab when not dragging
        draggableDiv.style.cursor = "grab";
    });
});
