document.addEventListener("DOMContentLoaded", function () {
    const firstSection = document.querySelector(".container");
    const thankYouSection = document.getElementById("thankYouSection");
    const overlay = document.querySelector(".overlay");

    
    function showThankYouSection() {
        firstSection.style.display = "none";
        thankYouSection.style.display = "block";
        overlay.style.display = "block";
    }

    
    const submitButton = document.querySelector("button");
    submitButton.addEventListener("click", showThankYouSection);
});
document.addEventListener("DOMContentLoaded", function () {
    const firstSection = document.querySelector(".container");
    const thankYouSection = document.getElementById("thankYouSection");

        function showPrevious() {
        thankYouSection.style.display = "none";
        previousSection.style.display = "block"; 
    }

    overlay.addEventListener('click', function() {
        thankYouSection.id.add('hidden');
        overlay.classList.add('hidden');
    }
)})

