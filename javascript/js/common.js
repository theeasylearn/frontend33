//create user defined function using 2nd technique
let $ = function(tagId){
    return document.getElementById(tagId);
}
let val = function(tagId,content=null)
{
    if(content === null)
        return $(tagId).value;
    else 
        $(tagId).value = content;
}
let html = (tagId,content) => $(tagId).innerHTML = content;
let int = (tagId) => parseInt(val(tagId));