$(document).ready(function(){
    $('#carrossel-images').slick({
        autoplay: true,
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
})

$('#telefone').mask('(00)00000-0000');

$('form').validate({
    rules:{
        nome:{
            required:true
        },
        email:{
            required:true,
            email:true
        },
        telefone:{
            required:true
        }
    },
    mensagem:{
        required:true,
    },
    veiculoInteresse:{
        required:false
    },
    messages:{
        nome:'por favor, insira o seu nome'
    }, 
    submitHandler:function (form) {
        console.log(form)
      },
      invalidHandler:function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos){
            alert(`existem ${camposIncorretos}campos incorretos`)
        }
        
        }
})

$('.lista-veiculos button').click(function(){
    const destion = $('#contato');
  const nomeVeiculo=$(this).parent().find('h3').text();
  $('#veiculo-interesse').val(nomeVeiculo);

   $('html').animate({
    scrollTop:destion.offset().top
},1000)
})
