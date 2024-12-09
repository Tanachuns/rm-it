// Remove selected element
document.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedElement = event.target;

  // Confirm removal
  if (confirm("Do you want to remove this element?")) {
    selectedElement.remove();
    console.log("Element removed:", selectedElement);
  }
});
