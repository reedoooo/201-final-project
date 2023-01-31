'use strict';


const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('file-preview');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    filePreview.name = event.target.name;
    filePreview.src = event.target.result;
    filePreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
});
