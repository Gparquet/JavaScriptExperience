var objectTypeWithNewKeyWord = document.getElementById('objectTypeWithNewKeyWord');
var literalObject = document.getElementById('literalObject');
var dynamicsPrimitive = document.getElementById('dynamicsPrimitive');
var typedPrimitive = document.getElementById('typedPrimitive');


function setInnerHtmlToElement(element, obj) {
    element.innerHTML = 'Name : ' + obj.firstName + ' LastName : ' + obj.lastName + ' age : ' + obj.age;
};

function handleDynamicsPrimitive(setInnerHtml) {
    return function (elementDynamicsPrimitive) {
        var firstName = "Phil";
        var lastName = "Jean";
        var age = 69;
        var obj = new Object();
        obj.age = age;
        obj.lastName = lastName;
        obj.firstName = firstName;
        setInnerHtml(elementDynamicsPrimitive, obj);
    };
};

function handleObjectPrimitive(setInnerHtml) {
    return function (elementObjectType) {
        var firstName = new String("Phil");
        var lastName = new String("Jean");
        var age = new Number(69);
        var obj = new Object();
        obj.age = age;
        obj.lastName = lastName;
        obj.firstName = firstName;
        setInnerHtml(elementObjectType, obj);
    }
};

function handleObjectTypeWithNewKeyWord(setInnerHtml) {
    return function (elementObjectType) {
        var obj = new Object();
        obj.firstName = 'Phil';
        obj.lastName = 'Jean';
        obj.age = '69';
        setInnerHtml(elementObjectType, obj);
    };
};

function handleLiteralObject(setInnerHtml) {
    return function (elementObjectType) {
        var literalObject = { firstName: 'Phil', lastName: 'Jean', age: '69' };
        setInnerHtml(elementObjectType, literalObject);
    };
};


handleObjectTypeWithNewKeyWord(setInnerHtmlToElement)(objectTypeWithNewKeyWord);
handleLiteralObject(setInnerHtmlToElement)(literalObject);
handleDynamicsPrimitive(setInnerHtmlToElement)(dynamicsPrimitive);
handleObjectPrimitive(setInnerHtmlToElement)(typedPrimitive);