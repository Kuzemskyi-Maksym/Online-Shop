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
var screenResolutionItems = document.querySelectorAll(
  ".screen-resolution-item"
);
var viewMoreButtonScreenResolution = document.getElementById(
  "viewMoreScreenResolution"
);
var viewLessButtonScreenResolution = document.getElementById(
  "viewLessScreenResolution"
);

// Get all RAM items and the view more/less buttons
var ramItems = document.querySelectorAll(".ram-item");
var viewMoreButtonRam = document.getElementById("viewMoreRam");
var viewLessButtonRam = document.getElementById("viewLessRam");

// Get all SSD scope items and the view more/less buttons
var ssdScopeItems = document.querySelectorAll(".ssd-scope-item");
var viewMoreButtonSsdScope = document.getElementById("viewMoreSsdScope");
var viewLessButtonSsdScope = document.getElementById("viewLessSsdScope");

// Get all OS items and the view more/less buttons
var osItems = document.querySelectorAll(".os-item");
var viewMoreButtonOs = document.getElementById("viewMoreOs");
var viewLessButtonOs = document.getElementById("viewLessOs");

// Get all Additionally items and the view more/less buttons
var additionallyItems = document.querySelectorAll(".additionally-item");
var viewMoreButtonAdditionally = document.getElementById(
  "viewMoreAdditionally"
);
var viewLessButtonAdditionally = document.getElementById(
  "viewLessAdditionally"
);

// Get all Color items and the view more/less buttons
var colorItems = document.querySelectorAll(".color-item");
var viewMoreButtonColor = document.getElementById("viewMoreColor");
var viewLessButtonColor = document.getElementById("viewLessColor");

// Function to handle view more/less
function handleViewMoreLess(items, viewMoreButton, viewLessButton) {
  // Initially hide all items after the first 5
  for (var i = 5; i < items.length; i++) {
    items[i].style.display = "none";
  }

  // Add click event to view more button
  viewMoreButton.addEventListener("click", function (event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Show all items when view more is clicked
    for (var i = 5; i < items.length; i++) {
      items[i].style.display = "block";
    }

    // Hide the view more button and show the view less button
    viewMoreButton.style.display = "none";
    viewLessButton.style.display = "block";
  });

  // Add click event to view less button
  viewLessButton.addEventListener("click", function (event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Hide all items after the first 5 when view less is clicked
    for (var i = 5; i < items.length; i++) {
      items[i].style.display = "none";
    }

    // Hide the view less button and show the view more button
    viewLessButton.style.display = "none";
    viewMoreButton.style.display = "block";
  });
}

// Call the function for producer, processor, processor cores, screen diagonal, screen resolution, RAM, OS, Additionally, and Color
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
handleViewMoreLess(
  screenResolutionItems,
  viewMoreButtonScreenResolution,
  viewLessButtonScreenResolution
);
handleViewMoreLess(ramItems, viewMoreButtonRam, viewLessButtonRam);
handleViewMoreLess(
  ssdScopeItems,
  viewMoreButtonSsdScope,
  viewLessButtonSsdScope
);
handleViewMoreLess(osItems, viewMoreButtonOs, viewLessButtonOs);
handleViewMoreLess(
  additionallyItems,
  viewMoreButtonAdditionally,
  viewLessButtonAdditionally
);
handleViewMoreLess(colorItems, viewMoreButtonColor, viewLessButtonColor);

// Get the clear all button
var clearAllButton = document.getElementById("clearAll");

// Add click event to clear all button
clearAllButton.addEventListener("click", function (event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Clear all checkboxes
  var checkboxes = document.querySelectorAll(".form-check-input");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
});
