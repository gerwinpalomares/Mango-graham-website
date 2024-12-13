 // Store the username from the landing page
 const username = localStorage.getItem("username") || "Guest";

 // Update username display in the modal
 document.getElementById("usernameDisplay").textContent = username;

 // Feedback modal controls
 const feedbackButton = document.getElementById("feedbackButton");
 const feedbackModal = document.getElementById("feedbackModal");
 const closeModal = document.getElementById("closeModal");
 const submitFeedback = document.getElementById("submitFeedback");
 const feedbackInput = document.getElementById("feedbackInput");
 const feedbackCards = document.getElementById("feedbackCards");

 // Show modal
 feedbackButton.addEventListener("click", () => {
   feedbackModal.classList.remove("hidden");
 });

 // Close modal
 closeModal.addEventListener("click", () => {
   feedbackModal.classList.add("hidden");
 });

 // Submit feedback
 submitFeedback.addEventListener("click", () => {
   const feedbackText = feedbackInput.value;
   if (feedbackText.trim() === "") {
     alert("Please write feedback before submitting.");
     return;
   }

   // Create feedback card
   const feedbackCard = document.createElement("div");
   feedbackCard.className = "bg-yellow-100 shadow-md rounded-lg p-4 flex items-start space-x-4";
   feedbackCard.innerHTML = `
     <div class="bg-yellow-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
       U
     </div>
     <div>
       <h4 class="text-brown-700 font-bold">${username}</h4>
       <p class="text-brown-600 mt-2">${feedbackText}</p>
     </div>
   `;

   // Append the feedback card to the feedback section
   feedbackCards.appendChild(feedbackCard);

   // Clear input and hide modal
   feedbackInput.value = "";
   feedbackModal.classList.add("hidden");
 });