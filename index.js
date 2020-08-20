$(document).ready(function()
    {
        $('.mySubmitBtn').on('click', function()
        {
            var selected = $('#mySelect').val(),
                userId   = $('#mySelect').data('user');

            $.ajax({
                data:    {value: selected, user: userId},
                url:     'myScript.php',
                type:    'post',
                success: function(res) {console.log(res)},
                error:   function(res) {console.log(res)}
            })
        })
    });
