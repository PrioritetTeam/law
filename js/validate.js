$('#consultat_two form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 11
        }
    },
    messages: {
        name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Веедите {0} символа!") 
        },
        phone: {
            required: "Пожалуйста, введите свое номер телефона",
            minlength: jQuery.validator.format("Веедите {0} символов!") 
        } 
    }
}); 
    
