document.addEventListener("DOMContentLoaded", function() {
    // Get the welcome message paragraph
    const welcomeMessage = document.querySelector("p");

    // Add a click event listener to the welcome message paragraph
    welcomeMessage.addEventListener("click", function() {
        // Toggle a class to change the font color on click
        this.classList.toggle("clicked");
    });

    // Add a hover effect to the h1 element
    const h1 = document.querySelector("h1");
    h1.addEventListener("mouseenter", function() {
        // Change the font color on hover
        this.style.color = "blue";
    });
    h1.addEventListener("mouseleave", function() {
        // Restore the font color when mouse leaves
        this.style.color = "black";
    });
});

const fileInput = document.getElementById('imageUploadButton');
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  // Handle the selected file here
});

document.addEventListener("DOMContentLoaded", function() {
    const imageUploadButton = document.getElementById('imageUploadButton');
    const doneButton = document.getElementById('doneButton');

    // Add event listener to the "Done" button
    doneButton.addEventListener('click', function() {
        // Check if a file is selected
        if (imageUploadButton.files.length > 0) {
            // Perform your desired action here, such as uploading the image
            alert("Image uploaded successfully!");
        } else {
            alert("Please select an image first.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById('uploadForm');
    const imageFileInput = document.getElementById('imageFile');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('imageFile', imageFileInput.files[0]);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Image uploaded successfully:', data);
        })
        .catch(error => {
            console.error('Error uploading image:', error);
        });
    });
});