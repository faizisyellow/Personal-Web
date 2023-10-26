const Cards = {
  porfolioCards: {
    card1: ` <div class="portfolio__img">
      <img src="assets/img/boty-demo.jpg" alt="" />
    
      <div class="portfolio__link">
        <a href="https://faizisyellow.github.io/boyoftheyear/" class="portfolio__link-name" target="_blank">Visit Website<i class="bx bx-chevron-right"></i></a>
      </div>
    </div>`,
  },
};


///PORFOLIO CARDS
const cardContainerPortfolio = document.querySelector(".portfolio__container");
const loadMoreButton = document.getElementById("loadMore");

function createCard(cardContainer, cardTemplate, scrollElement) {
  const cardHTML = cardTemplate;
  cardContainer.insertAdjacentHTML("beforeend", cardHTML);
//   src.reveal(".portfolio__img", { interval: 200 });
}

loadMoreButton.addEventListener("click", () => {
  // ADD CARD MAX  3
  createCard(cardContainerPortfolio, Cards.porfolioCards.card1);
  loadMoreButton.style.display = "none";
});
