// Adicione o nome das suas imagens aqui
const images = [
  "./Imagens/Imagem1.jpg",
  "./Imagens/Imagem2.jpg",
  "./Imagens/Imagem3.jpg",
  "./Imagens/Imagem4.jpg",
  "./Imagens/Imagem5.jpg",
  "./Imagens/Imagem6.jpg",
  "./Imagens/Imagem7.jpg"
];

let current = 0;
const slide = document.getElementById("slide");

function nextImage() {
  current = (current + 1) % images.length;
  slide.style.transform = "translateX(100%)";
  setTimeout(() => {
    slide.src = images[current];
    slide.style.transform = "translateX(0)";
  }, 300);
}
