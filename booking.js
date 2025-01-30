document.addEventListener("DOMContentLoaded", () => {
    const specialtyForm = document.querySelector(".specialty-form");
    const appointmentForm = document.querySelector(".appointment-form");
    const specialtySelect = document.querySelector("#specialty");
    const doctorSelect = document.querySelector("#doctor");
  
    const doctorsBySpecialty = {
      Child: ["Dr. Saad Alghamdi", "Dr. Ghadeer Alnuwaysir"],
      couple: ["Dr. Noura Alaqeel", "Dr. Lamya Alnahdi"],
      Psychiatry: ["Dr. Abdullah Alhammad", "Dr. Rana Albridi"],
    };
  
    appointmentForm.style.display = "none";
  
    specialtyForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const selectedSpecialty = specialtySelect.value;
  
      if (selectedSpecialty) {
        appointmentForm.style.display = "block";
  
        doctorSelect.innerHTML = `<option value="" disabled selected>Select a doctor</option>`;
        doctorsBySpecialty[selectedSpecialty].forEach((doctor) => {
          const option = document.createElement("option");
          option.value = doctor;
          option.textContent = doctor;
          doctorSelect.appendChild(option);
        });
      }
    });
  
    appointmentForm.addEventListener("submit", (event) => {
      event.preventDefault(); 

      alert("Appointment booked successfully!");
      window.location.href = "Patient.html"; 
    });
  });
  