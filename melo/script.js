document.addEventListener("DOMContentLoaded", () => {

  const card = document.getElementById("card");
  const pic = document.getElementById("lovePic");

  if (!card) {
    console.error("Card not found");
    return;
  }

  card.addEventListener("click", () => {

    // flip the card
    card.classList.toggle("flipped");

    // show picture AFTER flip
    if (pic) {
      setTimeout(() => {
        pic.classList.add("show");
      }, 600); // waits for flip animation
    }

  });

});
