function buscaRapida(e,f) {
    var busca = $(e).val().toLowerCase();
    var corpo = '#'+$(e).attr('data-corpo');
    if ($(corpo).html().trim().length != 0){
        $(corpo+" "+f).each(function(){
            var text = $(this).text().toLowerCase().trim();
            (text.indexOf(busca) >= 0) ? $(this).show() : $(this).hide();
        }); 
    }
}