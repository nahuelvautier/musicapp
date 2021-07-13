import { Title } from "./Title.js";
import { MobilePanel } from "./Mobile_Panel.js";
import { Hamburger } from "./Hamburger.js";

export function Header () {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Title());
  $header.appendChild(MobilePanel());
  $header.appendChild(Hamburger());
  return $header;
}