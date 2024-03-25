// Для фільтру по ціні
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// Get all producer items and the view more/less buttons
var producerItems = document.querySelectorAll(".producer-item");
var viewMoreButtonProducer = document.getElementById("viewMoreProducer");
var viewLessButtonProducer = document.getElementById("viewLessProducer");

// Get all processor items and the view more/less buttons
var processorItems = document.querySelectorAll(".processor-item");
var viewMoreButtonProcessor = document.getElementById("viewMoreProcessor");
var viewLessButtonProcessor = document.getElementById("viewLessProcessor");

// Get all processor core items and the view more/less buttons
var processorCoreItems = document.querySelectorAll(".processor-core-item");
var viewMoreButtonProcessorCores = document.getElementById(
  "viewMoreProcessorCores"
);
var viewLessButtonProcessorCores = document.getElementById(
  "viewLessProcessorCores"
);

// Get all screen diagonal items and the view more/less buttons
var screenDiagonalItems = document.querySelectorAll(".screen-diagonal-item");
var viewMoreButtonScreenDiagonal = document.getElementById(
  "viewMoreScreenDiagonal"
);
var viewLessButtonScreenDiagonal = document.getElementById(
  "viewLessScreenDiagonal"
);

// Get all screen resolution items and the view more/less buttons
var processorItems = document.querySelectorAll(".screen-resolution-items");
var viewMoreButtonProcessor = document.getElementById("viewMoreProcessor");
var viewLessButtonProcessor = document.getElementById("viewLessProcessor");

// Function to handle view more/less
function handleViewMoreLess(items, viewMoreButton, viewLessButton) {
  for (var i = 5; i < items.length; i++) {
    items[i].style.display = "none";
  }

  viewMoreButton.addEventListener("click", function (event) {
    event.preventDefault();

    for (var i = 5; i < items.length; i++) {
      items[i].style.display = "block";
    }

    viewMoreButton.style.display = "none";
    viewLessButton.style.display = "block";
  });

  viewLessButton.addEventListener("click", function (event) {
    event.preventDefault();

    for (var i = 5; i < items.length; i++) {
      items[i].style.display = "none";
    }

    viewLessButton.style.display = "none";
    viewMoreButton.style.display = "block";
  });
}

// Call the function for producer, processor, processor cores and screen diagonal
handleViewMoreLess(
  producerItems,
  viewMoreButtonProducer,
  viewLessButtonProducer
);
handleViewMoreLess(
  processorItems,
  viewMoreButtonProcessor,
  viewLessButtonProcessor
);
handleViewMoreLess(
  processorCoreItems,
  viewMoreButtonProcessorCores,
  viewLessButtonProcessorCores
);
handleViewMoreLess(
  screenDiagonalItems,
  viewMoreButtonScreenDiagonal,
  viewLessButtonScreenDiagonal
);
