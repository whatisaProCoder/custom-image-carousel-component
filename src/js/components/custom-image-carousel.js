import "../../css/component.css";

export class CustomImageCarousel {
  constructor({ containerID, imageItemArray }) {
    this.containerID = containerID;
    this.imageItemArray = imageItemArray;
  }
  initialise() {
    this.containerElement = document.querySelector(`#${this.containerID}`);
    this.containerElement.innerHTML = /* html */ `
            <div class="mcic-container">
                <div class="mcic-image-group">
                </div>
            </div>
        `;

    this.#populateImageGroup();
    this.#preventUserScrolling();

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
  scrollToItem(index) {
    setTimeout(() => {
      const items = this.containerElement.querySelectorAll(
        ".mcic-image-container",
      );
      console.log(items);

      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth", inline: "center", block: "center"
        });
      }
    }, 1000);
  }
}

export class ImageItem {
  constructor({ src, scale }) {
    this.src = src;
    this.scale = scale;
  }
}
