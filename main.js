// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const heart = getDocumentById("heart");

  // eventlistener for clicking heart icon
  heart.addEventListener("click", function () {
    if (heart.classList.contains("empty-heart")) {
      mimicServerCall()
        .then(() => {
          // if successful, change heart to full then display activated style
          heart.classList.remove("empty-heart");
          heart.classList.add("full-heart", "activated-heart");
        })
        .catch(() => {
          // display error modal with message incase of an error
          const modalMessage = getDocumentById("modal-message");
          modalMessage.textContent = "Server Error!"; //sets error message
          const errorModal = getDocumentById("error-modal");
          errorModal.classList.remove("hidden"); //shoe error modal
          // hide error modal after three seconds
          setTimeout(()=>{
            errorModal.classList.add('hidden');
          },3000);
        });
          }else if(heart.classList.contains('full-heart')){
            // If heart is full, change it back to empty and remove activated style
            heart.classList.remove('full-heart', 'activated-heart');
            heart.classList.add('empty-heart');    
    }
  });
});
