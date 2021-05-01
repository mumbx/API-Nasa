$('#data').on('change', ()=> {

    $.ajax({

        'url': `https://api.nasa.gov/planetary/apod?api_key=D2b9tWqaWfN8p7LgYERyVuW42UXUQRrU3VzdRhct&date=${$('#data').val()}`,

        'success': function(result){

                $('#titulo').text(`${result.title}`)

                $('#info').html(`${result.explanation}`);   
                
                $('#foto').attr("src", `${result.url}`)
               
        }
    })
});
