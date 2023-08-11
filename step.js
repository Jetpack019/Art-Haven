let currentStep = 1;
let formData = {};

const form = document.getElementById('form');
const steps = document.querySelectorAll('.step');
const formSections = document.querySelectorAll('.form-container > form > div');
const successMessage = document.getElementById('success-message');

function showStep(step) {
  formSections.forEach(section => {
    section.style.display = 'none';
  });
  formSections[step - 1].style.display = 'block';
}

function nextStep(step) {
  if (validateForm()) {
    saveFormData();
    currentStep = step + 1;
    showStep(currentStep);
    updateStepIndicator();
  }
}

function prevStep(step) {
  currentStep = step - 1;
  showStep(currentStep);
  updateStepIndicator();
  restoreFormData();
}

function updateStepIndicator() {
  steps.forEach((step, index) => {
    if (index + 1 === currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function saveFormData() {
  const inputs = formSections[currentStep - 1].querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    formData[input.id] = input.value;
  });
}

function restoreFormData() {
  const inputs = formSections[currentStep - 1].querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.value = formData[input.id] || '';
  });
}

function validateForm() {
  const inputs = formSections[currentStep - 1].querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  });
  return isValid;
}

function submitForm() {
    if (validateForm()) {
      // Perform form submission or validation here
  
      // Hide the form and display success message
      form.style.display = 'none';
      successMessage.style.display = 'block';
      return false; // Add this line to prevent form submission
    }
  }
updateStepIndicator();
showStep(currentStep);


function displayImagePreview(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
  
    const imagePreview = document.getElementById('image-preview');
    imagePreview.innerHTML = '';
  
    const img = document.createElement('img');
    img.classList.add('preview-image');
    img.style.height = '100px'; // Set desired height
    img.style.width = '100px'; // Set desired width
  
    const reader = new FileReader();
    reader.onload = function(event) {
      img.src = event.target.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
      imagePreview.appendChild(img);
    }
  }