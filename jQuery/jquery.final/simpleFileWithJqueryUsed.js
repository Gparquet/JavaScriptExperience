var paragraphs = [
    {
        id: '1',
        content: 'Hello'
    },
    {
        id: '2',
        content: 'How'
    },
    {
        id: '3',
        content: 'are you ?'
    },
];

function addParagraph(where)
{
    var selector = $(where);
    return function addParagraph(id, content){
        selector.append(`<p id=p${id}>${content}<\p>`); 
        selector.append('<br />');   
    };
};

function addRedStyle(){
    $('p').css('background-color', 'red');
};

function addRedStyleOnlyFirstChildren(){
    $('#container p').first().css('background-color', 'red');
}

function addBleuStyleOnAttribute(){
    $("[data-exemple*='test']").css('background-color', 'red');
}

function loadAddParagraphs()
{
    $(document).ready(function(){
        for(var i =0; i< paragraphs.length; i++)
        {
            addParagraph('#container')(paragraphs[i].id,paragraphs[i].content);
        }
    });
};
