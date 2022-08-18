originalFont=null  // Global - place to save original
fontChanges = Array();

function setFont(whichFont){
    if (originalFont == null) {
        originalFont = document.body.style.fontFamily;
    }
    document.body.style.fontFamily = whichFont
    fontChanges.push(whichFont)
}

function showChanges(){
    if (fontChanges.length == 0) 
        alert("No changes")
    else {
        s = ''
        for (i=0; i<fontChanges.length; i++) {
            s = s + fontChanges[i] + '<br>'
            document.getElementById('changeList').innerHTML = s
        }
    }
}

function toggleVisible(id) {
        if (!_idExists(id)) {
            return false;
        }

        var obj = document.getElementById(id);

        if (obj.style.visibility == 'visible') {
            obj.style.visibility = 'hidden';
        }
        else {
            obj.style.visibility = 'visible';
        }

}
function elementsByTag(){
    let inputs = table.getElementsByTagName('input');
    let input = 0;
    for (input = 0; input < inputs.length;input++) {
        if (inputs[input].checked) /*+ ': ' + input.checked;*/
            document.getElementById("Selectedvalue").textContent = inputs[input].value;
    }
}

function result()
{
    let val1 = +document.getElementById('val1').value;
    let val2 = +document.getElementById('val2').value;
    let oper = document.getElementById('operation').value;
    if (oper == '+')
        document.getElementById('answer').textContent = "Answer is " + `${val1 + val2}`;
    else if (oper == 'random')
     document.getElementById('answer').innerHTML = "Random number generated is:  " + Math.floor((Math.random() * val2) + val1);
 
 
}
//Generate Passwords for users

function MakePassword() {
    //Make random password of string length 8
    var pws = _RndPws(10, true, true, true);
    //Add a new list item to the ol element.
    _AddListItem('demo', pws);
}
function _RndPws(size, alpha, digits, chars) {
    let mask_digits = '0123456789';
    let mask_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    let mask_chars = '!@#$%^&*';
    let mask = "";
    let i = 0;
    let StrPws = "";
    let rnd = 0;

    if (alpha) { mask = mask + mask_alpha; }
    if (digits) { mask = mask + mask_digits; }
    if (chars) { mask = mask + mask_chars; }

    while (i < size) {
        rnd = Math.floor(Math.random() * mask.length);
        StrPws = StrPws + mask[rnd];
        i++;
    }
    return StrPws;
}

function _ClearList(ElmLstID) {
    if (_idExists(ElmLstID)) {
        //Get list object
        let obj = document.getElementById(ElmLstID);
        //Get the list items.
        let elms = obj.getElementsByTagName('li');
        //Fetch the number of items in elems
        let i = elms.length - 1;

        while (i >= 0) {
            //Remove the item from the list
            obj.removeChild(elms[i]);
            //DEC counter
            i--;
        }
    }
}
function _idExists(Ckid) {
    let checkID = document.getElementById(Ckid);
    if (checkID != null) {
        return true;
    }
    return false;
}
function _AddListItem(lstIDtoAdd, itemToAdd) {
    if (_idExists(lstIDtoAdd)) {
        //Get list object
        let lo = document.getElementById(lstIDtoAdd);
        //Create list element
        let li = document.createElement('li');
        //Create text for the list element
        li.appendChild(document.createTextNode(itemToAdd));
        //Append list element to the list object.
        lo.appendChild(li);
        return true;
    }
    return false;
}
//-----------------------------Form------------------------------------//

function formValidation() {

    let uname = document.registration.username.value;
    let passid = document.registration.pwd.value;
    let ucountry = document.registration.country.value;
    let uemail = document.registration.emailadd.value;
  
    if(passid_validation(passid, 7, 12)) {
         if (allLetter(uname)) {
            if (countryselect(ucountry)) {
                if (ValidateEmail(uemail)) {

                }
            }
        }
    }
           
    
    return false;
}  

function passid_validation(passid, mx, my) {
    let passid_len = passid.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}  

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}  

function countryselect(ucountry) {
    if (ucountry == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
}  



function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//two forward slashes contains a regular expression. 
    if (uemail.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
} 