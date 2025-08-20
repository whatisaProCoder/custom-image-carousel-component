import npmLogo from "../../icons/npm_logo.svg";
import GitHubLogo from "../../icons/github_logo.svg";
import htmlImage from "../../images/html_image.webp";
import cssImage from "../../images/css_image.webp";
import javascriptImage from "../../images/javascript_image.png";
import nodejsImage from "../../images/nodejs_image.webp";
import npmImage from "../../images/npm_image.webp";
import webpackImage from "../../images/webpack_image.png";
import tailwindcssImage from "../../images/tailwindcss_image.webp";
import prettierImage from "../../images/prettier_image.webp";
import eslintImage from "../../images/eslint_image.png";
import {
  CustomImageCarousel,
  ImageItem,
} from "../components/custom-image-carousel";

export default function createDemoPage() {
  const content = document.querySelector(".content");

  console.log("Creating demo page...");
  const demoPage = document.createElement("div");
  demoPage.classList.add("demo-page");
  demoPage.classList.add(
    "flex",
    "flex-col",
    "gap-2",
    "items-center",
    "justify-center",
    "h-screen",
    "w-screen",
    "bg-[#E1E1E1]",
    "py-2.5",
    "px-8.75",
  );

  demoPage.innerHTML = /* html */ `
    <div class="flex flex-row gap-1.5 w-full">
      <div class="bg-[#F5F5F5] px-2.25 py-1.5 text-m font-bold rounded-md border-1 border-[#d7d7d7] border-l-7 border-l-[#AC1CFF] flex-1 shadow-[0px_4px_8px_rgba(0,0,0,15%)]">
        Image Carousel UI Component
      </div>
      <div class="flex flex-row gap-4 items-center bg-[#F5F5F5] rounded-md border-1 border-[#d7d7d7] px-3 shadow-[0px_4px_8px_rgba(0,0,0,15%)]">
        <img src="${npmLogo}" class="h-3.5 pt-0.5">
        <img src="${GitHubLogo}" class="h-3.5 pb-0.5">
      </div>
    </div>
    <div id="component-container" class="w-full h-[400px]"></div> 
    <div class="bg-[#F5F5F5] px-2.25 py-1.75 w-full text-center text-sm font-light rounded-md border-1 border-[#d7d7d7] shadow-[0px_4px_8px_rgba(0,0,0,15%)]">
        Made with <span class="font-medium text-[#FF9500]">VanillaJS</span>, by <span class="font-medium text-[#0432FF]">whatisaProCoder</span>
    </div>     
  `;

  content.appendChild(demoPage);

  new CustomImageCarousel({
    containerID: "component-container",
    imageItemArray: [
      new ImageItem({ src: htmlImage, scale: 1 }),
      new ImageItem({ src: cssImage, scale: 1 }),
      new ImageItem({ src: javascriptImage, scale: 1 }),
      new ImageItem({ src: nodejsImage, scale: 1 }),
      new ImageItem({ src: npmImage, scale: 1 }),
      new ImageItem({ src: webpackImage, scale: 1 }),
      new ImageItem({ src: tailwindcssImage, scale: 1 }),
      new ImageItem({ src: prettierImage, scale: 1 }),
      new ImageItem({ src: eslintImage, scale: 1 }),
    ],
  })
    .initialise()
    .scrollToItem(4);
}
