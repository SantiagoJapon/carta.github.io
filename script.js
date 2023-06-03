function cambiamensaje(){
    document.getElementById("loading-message").innerText="Enviado <3 "
}
setTimeout(cambiamensaje,2300)

setTimeout(function() {
    var div = document.getElementById("message");
    div.style.display = "block";
  }, 3000); // 3000 representa 3 segundos, puedes ajustar el tiempo según tus necesidades