import "../../css/component.css";
import leftArrowIcon from "../../icons/left_arrow_icon.svg";
import rightArrowIcon from "../../icons/right_arrow_icon.svg";

export class CustomImageCarousel {
  constructor({ containerID, imageItemArray }) {
    this.containerID = containerID;
    this.imageItemArray = imageItemArray;
    this.currentIndex = 0;
    this.arrayLength = imageItemArray.length;
  }
  initialise() {
    this.containerElement = document.querySelector(`#${this.containerID}`);
    this.containerElement.innerHTML = /* html */ `
            <div class="mcic-container">
                <div class="mcic-image-group">
                </div>
                <div class="mcic-navigation-dots-container">
                </div>
                <div class="mcic-left-arrow-button">
                  <img src="${leftArrowIcon}">
                </div>
                <div class="mcic-right-arrow-button">
                  <img src="${rightArrowIcon}">
                </div>
            </div>
        `;

    this.navigationDotsContainer = this.containerElement.querySelector(
      ".mcic-navigation-dots-container",
    );
    for (let i = 0; i < this.arrayLength; i++) {
      const navigationDot = document.createElement("div");
      navigationDot.classList.add("mcic-navigation-dot");
      this.navigationDotsContainer.appendChild(navigationDot);
    }

    this.navigationDots = this.containerElement.querySelectorAll(
      ".mcic-navigation-dot",
    );
    this.#handleNavigationState(this.currentIndex);

    this.#populateImageGroup();
    this.#preventUserScrolling();
    this.#handleUserActions();

    return this;
  }
  #preventUserScrolling() {
    this.imageGroupElement.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
      },
      { passive: false },
    );
  }
  #populateImageGroup() {
    this.imageGroupElement =
      this.containerElement.querySelector(".mcic-image-group");

    this.imageItemArray.forEach((imageItem) => {
      const imageElement = document.createElement("div");
      imageElement.classList.add("mcic-image-container");

      const image = document.createElement("img");
      image.src = imageItem.src;
      image.style.scale = imageItem.scale;

      imageElement.appendChild(image);
      this.imageGroupElement.appendChild(imageElement);
    });
  }
  #scrollToItem(index) {
    setTimeout(() => {
      const items = this.containerElement.querySelectorAll(
        ".mcic-image-container",
      );

      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }, 100);
  }
  #handleUserActions() {
    const leftButton = this.containerElement.querySelector(
      ".mcic-left-arrow-button",
    );
    const rightButton = this.containerElement.querySelector(
      ".mcic-right-arrow-button",
    );

    leftButton.addEventListener("click", (event) => {
      if (this.currentIndex > 0) {
        this.#scrollToItem(--this.currentIndex);
        this.#handleNavigationState(this.currentIndex);
      }
      console.log(event.target, this.currentIndex);
    });

    rightButton.addEventListener("click", (event) => {
      if (this.currentIndex < this.arrayLength - 1) {
        this.#scrollToItem(++this.currentIndex);
        this.#handleNavigationState(this.currentIndex);
      }
      console.log(event.target, this.currentIndex);
    });

    this.navigationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.currentIndex = index;
        this.#scrollToItem(this.currentIndex);
        this.#handleNavigationState(this.currentIndex);
      });
    });
  }
  #removeSelectedClassInNavigationDots() {
    this.navigationDots.forEach((dot) => {
      dot.classList.remove("mcic-navigation-dot-selected");
    });
  }
  #handleNavigationState(index) {
    const leftButton = this.containerElement.querySelector(
      ".mcic-left-arrow-button",
    );
    const rightButton = this.containerElement.querySelector(
      ".mcic-right-arrow-button",
    );
    this.#removeSelectedClassInNavigationDots();
    this.navigationDots[index].classList.add("mcic-navigation-dot-selected");
    if (index == 0) {
      leftButton.classList.add("mcic-arrow-button-hide");
    } else if (index == this.arrayLength - 1) {
      rightButton.classList.add("mcic-arrow-button-hide");
    } else {
      leftButton.classList.remove("mcic-arrow-button-hide");
      rightButton.classList.remove("mcic-arrow-button-hide");
    }
  }
  displayItemNumber(itemNumber) {
    if (itemNumber >= 1 && itemNumber < this.arrayLength) {
      this.currentIndex = itemNumber;
      this.#handleNavigationState(this.currentIndex);
      this.#scrollToItem(this.currentIndex);
    }
  }
}

export class ImageItem {
  constructor({ src, scale }) {
    this.src = src;
    this.scale = scale;
  }
}
