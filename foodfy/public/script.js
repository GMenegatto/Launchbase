const receitas = document.querySelectorAll(".mais-acessadas__card");


for(let receita of receitas){
  receita.addEventListener("click", function(){
    const id = receita.getAttribute('id');
    window.location.href = `/receitas/${id}`
  });
}

