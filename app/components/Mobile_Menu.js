export function MobileMenu () {
  const $mobileMenu = document.createElement("nav"),
    $homeMobile = document.createElement("a"),
    $artistMobile = document.createElement("a"),
    $albumsMobile = document.createElement("a"),
    $mvMobile = document.createElement("a");

    $homeMobile.href = "#/home";
    $homeMobile.textContent = "Home";

    $artistMobile.href = "#/search.php?s=";
    $artistMobile.textContent = "Artistas";

    $albumsMobile.href = "#/discography.php?s=";
    $albumsMobile.textContent = "Discografía";

    $mvMobile.href = "#/mvid.php?i=";
    $mvMobile.textContent = "Music videos";
    $mvMobile.classList.add("mobile-vids-anchor");

    $mobileMenu.classList.add("nav-container");

    $mobileMenu.appendChild($homeMobile);
    $mobileMenu.appendChild($artistMobile);
    $mobileMenu.appendChild($albumsMobile);
    $mobileMenu.appendChild($mvMobile);
    
  return $mobileMenu;
}