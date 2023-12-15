function updateFileName(input) {
    const fileName = input.files[0].name;
    const label = input.parentElement;
    label.textContent = `Selected File: ${fileName}`;
  }
  
  function showLoading() {
    const submitButton = document.getElementById("submitButton");
    const loadingDiv = document.getElementById("loading");
  
    submitButton.textContent = "Uploading...";
    submitButton.disabled = true;
  
    // Simulate loading by displaying a loading animation (you can replace this with your actual loading logic)
    loadingDiv.innerHTML = '<div class="spinner"></div>';
  }
  