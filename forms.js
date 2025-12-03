(function(){
const form = document.getElementById("contactForm");
const messages = document.getElementById("formMessages");


if(!form) return;


form.addEventListener("submit", function(e){
e.preventDefault(); // evita envio imediato


messages.className = "";
messages.textContent = "";


// Verifica se campos HTML5 estão válidos
if(!form.checkValidity()){
messages.classList.add("error");
messages.textContent = "Por favor, verifique os campos destacados.";
form.reportValidity();
return;
}


// Verificação adicional de tamanho de arquivo
const fileInput = document.getElementById("anexo");
if(fileInput && fileInput.files.length > 0){
const file = fileInput.files[0];
const maxSize = 5 * 1024 * 1024; // 5 MB
if(file.size > maxSize){
messages.classList.add("error");
messages.textContent = "O arquivo ultrapassa o limite de 5 MB.";
return;
}
}


// Simulação de envio
messages.classList.add("success");
messages.textContent = "Enviando...";


// Simula requisição assíncrona
setTimeout(() => {
messages.textContent = "Formulário enviado com sucesso!";
form.reset();
}, 900);
});
})();