document.getElementById('gender').addEventListener('click', toggleGenderModal);



function toggleGenderModal() {
  const genderModal = document.getElementById('gender-modal');

  if(genderModal.classList.contains('hidden')) {
    genderModal.style.display = "flex";
    genderModal.classList.remove('hidden');
  } else {
    genderModal.style.display = "none";
    genderModal.classList.add('hidden');
  }
}
