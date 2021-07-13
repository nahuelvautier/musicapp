export function Loader () {
  const $loader = document.createElement("img");
  $loader.classList.add(".loader");
  $loader.setAttribute("src", "./app/assets/audio.svg");
  $loader.setAttribute("alt", "Cargando...");
  return $loader;
}