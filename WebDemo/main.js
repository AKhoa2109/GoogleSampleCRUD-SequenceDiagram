function previewImage(event, imageId) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const output = document.getElementById(imageId);
    output.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
