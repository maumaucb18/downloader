const proc = document.getElementById("proc");

const btn = document.getElementById("send");

btn.addEventListener("click", async () => {
//e.preventDefault();
//const value = proc.value;
//console.log(value)
try{
  const response = await fetch(proc.value);
  const file = await response.blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = new Date().getTime();
  link.click();
}catch(error){
  alert("Erro ao baixar o arquivo")
}


});

function limpar() {
 const limpa = document.getElementById("limpa");
 limpa.value='';

};



const url = "https://github.com/maumaucb18";
const butn = document.querySelector("#batBtn");

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
butn.addEventListener('click', function() {
    
  
});