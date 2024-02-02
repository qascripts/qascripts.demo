// JavaScript for Slider
const slider = document.getElementById("mySlider");
const selectedValue = document.getElementById("selectedValue");

slider.addEventListener("input", function() {
  selectedValue.textContent = slider.value;
});
