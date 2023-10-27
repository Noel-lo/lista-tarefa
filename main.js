$(document).ready(function() {
    $('#formulario-tarefa').submit(function(event) {
        event.preventDefault();

        var textoTarefa = $('#entrada-tarefa').val().trim();

        if (textoTarefa !== '') {
            $('#lista-tarefas').append('<li>' + textoTarefa + '</li>');
            $('#entrada-tarefa').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});
