document.addEventListener("DOMContentLoaded", () => {
    const specialtyForm = document.querySelector(".specialty-form");
    const appointmentForm = document.querySelector(".appointment-form");
    const specialtySelect = document.querySelector("#specialty");
    const doctorSelect = document.querySelector("#doctor");
  
    // Mapping specialties to doctors
    const doctorsBySpecialty = {
      Child: ["Dr. Saad Alghamdi", "Dr. Ghadeer Alnuwaysir"],
      couple: ["Dr. Noura Alaqeel", "Dr. Lamya Alnahdi"],
      Psychiatry: ["Dr. Abdullah Alhammad", "Dr. Rana Albridi"],
    };
  
    // Hide the second form initially
    appointmentForm.style.display = "none";
  
    // Handle first form submission
    specialtyForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      const selectedSpecialty = specialtySelect.value;
  
      if (selectedSpecialty) {
        // Show the appointment form
        appointmentForm.style.display = "block";
  
        // Populate doctors based on the selected specialty
        doctorSelect.innerHTML = `<option value="" disabled selected>Select a doctor</option>`;
        doctorsBySpecialty[selectedSpecialty].forEach((doctor) => {
          const option = document.createElement("option");
          option.value = doctor;
          option.textContent = doctor;
          doctorSelect.appendChild(option);
        });
      }
    });
  
    // Handle second form submission
    appointmentForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Redirect to homepage or display a success message
      alert("Appointment booked successfully!");
      window.location.href = "Patient.html"; 
    });
  });
  