function previewImage(event, id) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById(id);
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
