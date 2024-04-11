//create user defined function using 2nd technique
let $ = function(tagId){
    return document.getElementById(tagId);
}
let val = function(tagId)
{
    return $(tagId).value;
}