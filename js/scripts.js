const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");
const downloadBtn = document.querySelector("#download-btn");
function generateQRCode() {
  let qrCodeInputValue = qrCodeInput.value;
  //se não tiver valor, não faz nada.
  if (!qrCodeInputValue) return;
  //se tiver valor, altera o texto do botão e exibe a imagem do código QR.
  qrCodeBtn.innerHTML = "Gerando código QR...";
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
  //ao carregar a imagem, altera o texto do botão e exibe a imagem do código QR.
  qrCodeImg.addEventListener("load", () => {
    qrCodeImg.style.opacity = 1; // Certifique-se de que a opacidade da imagem seja 1 para torná-la visível
    container.classList.add("active");
    qrCodeBtn.innerText = "Código gerado!";
  });
}
// quando o usuário clicar no botão, chama a função generateQRCode()
qrCodeBtn.addEventListener("click", () => {
  generateQRCode();
});
// quando o usuário pressionar a tecla Enter, chama a função generateQRCode()
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQRCode();
  }
});

qrCodeInput.addEventListener("keyup", (e) => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar código QRCode";
  }
});

function downloadQR() {
  //URL da imagem gerada
  let imgUrl = qrCodeImg.src;
  //Criar elemento <a> para download
  let link = document.createElement("a");
  link.href = imgUrl;
  //Definir nome do arquivo
  link.download = "qrcode.png";
  //Simular click para iniciar download
  link.click();
}

downloadBtn.addEventListener("click", () => {
  downloadQR();
});

// downloadBtn.addEventListener("click", () => {
//   downloadQR();
// });
