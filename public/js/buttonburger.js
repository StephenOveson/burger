$('.devour-btn').on('click', function() {
    $.ajax('/api/' + $(this).data('id'), {
        type: 'PUT',
    }).then(function(){
        location.reload();
    })
});

$('.delete-btn').on('click', function() {
    $.ajax('/api/' + $(this).data('id'), {
        type: 'DELETE',
    }).then(function(){
        location.reload();
    })
});