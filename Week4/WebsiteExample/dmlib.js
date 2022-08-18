function _Abs(num){
	if(num < 0){
		return -num;
	}
	return num;
}

//Return strings length.
function _Len(src){
	return src.length;
}

//Return part of a string.
function _Mid(src, start, end){
	return src.substr(start,end);
}

//Return a random number baseed of current time and a random number
function _NewId(){
	var dt = new Date();
	var id = new String(dt.getTime());
	return id + _Random(0,256);
}

//Return current system time.
function _Now(){
	var dt = new Date();
	return dt;
}

//Return left side of string. depending on size
function _Left(src, Length){
	return _Mid(src,0,Length);	
}

//Return right side of string.
function _Right(src,Length){
	return _Mid(src,_Len(src)-Length,Length);
}

//Convert to uppercase
function _UCase(src){
	return src.toUpperCase();
}

//Convert to lowercase
function _LCase(src){
	return src.toLowerCase();
}

//Return char of value
function _Chr(src){
	return String.fromCharCode(src);
}

//Count the number of delim in a string.
function _CountDelims(src, delim){
	var i = 0;
	var cnt = 0;
	
	while(i < _Len(src)){
		//Test for delim
		if(src[i] == delim){
			//INC delim counter
			cnt++;
		}
		//INC counter
		i++;
	}
	//Return number of delims found.
	return cnt;
}

//Convert chat to value.
function _Asc(src){
	return src.charCodeAt(0);
}

//Check if an id is found.
function _idExists(id){
	var o = document.getElementById(id);
	if(o != null){
		return true;
	}
	return false;
}

//Find position of substring in src
function _Instr(src,spart, start){
	return src.indexOf(spart,start);
}

//Return a length of chars by a given number.
function _StringOfChar(ch,num){
	var s0 = "";
	var i = 0;
	
	while(i < num){
		s0 = s0 + ch;
		i++;
	}
	return s0;
}

//Return space 
function _Space(num){
	return _StringOfChar(' ',num);
}

//Split a string into an array.
function _Split(src,seperator){
	return src.split(seperator);
}

function _SumOf(src){
	var i = 0;
	var x = 0;
	while(i < _Len(src)){
		//Check for number
		if(!_IsNumber(src[i])){
			return 0;
		}
		//Add of the numbers.
		x+=src[i];
		i++;
	}
	return x;
}

function _Join(src, seperator){
	var i = 0;
	var ilen = _Len(src);
	var s0 = '';
	
	while(i < ilen){
		if(i < ilen-1){
			s0 = s0 + src[i] + seperator;
		}else{
			s0 = s0 + src[i];
		}
		i++;
	}
	
	return s0;
}

//Pads the left side of a string.
function _PadLeft(src,size,ch){
	var iLen = size - _Len(src);
	return _StringOfChar(ch,iLen) + src;
}

//Pads the right side of a string.
function _PadRight(src,size,ch){
	var iLen = size - _Len(src);
	return src + _StringOfChar(ch,iLen);
}

//Convert string to int
function _StrInt(src){
	return parseInt(src);
}

function _SetElementValue(id, value){
	if(_idExists(id)){
		document.getElementById(id).innerHTML = value;
		return true;
	}
	return false;
}

function _SetElementAttr(id, data){
	if(_idExists(id)){
		var obj = document.getElementById(id);
		obj.setAttribute('style',data);
	}
}

function _GetElementValue(id){
	if(_idExists(id)){
		return document.getElementById(id).innerHTML;
	}
	return '';
}

function _AppendStyle(id, sStyle){
	var obj = document.getElementById(id);
	if(obj != null){
		obj.style.cssText += sStyle;
		return true;
	}
	return false;
}

function _SetStyle(id, sStyle){
	var obj = document.getElementById(id);
	if(obj != null){
		obj.style.cssText = sStyle;
		return true;
	}
	return false;
}

//Int to Bin
function _Int2Bin(num){
	return num.toString(2);
}

//Convert number to hexidecimal
function _IntToHex(num){
	return num.toString(16);
}

//Convert int to obc
function _IntToOct(num){
	return num.toString(8);
}

//Converts a string to a number
function _IntToStr(num){
	return num.toString();
}

//Returns an object as a string.
function CStr(obj){
	return obj.toString();
}

//Check if string is number.
function _IsNumber(src){
	var i = 0;
	if(_Len(src) == 0) {return false;}
	return !isNaN(src);	
}

function _Random(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

function _RndPws(size, alpha, digits){
	var mask_digits = '0123456789';
	var mask_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
	var mask = "";
	var i = 0;
	var StrPws = "";
	var rnd = 0;
	
	if(alpha){mask = mask + mask_alpha;}
	if(digits){mask = mask + mask_digits;}
			
	while(i < size){
		rnd = Math.floor(Math.random() * _Len(mask));
		StrPws = StrPws + mask[rnd];
		i++;
	}
	return StrPws;
}

function isWhite(ch){
	if(ch == ' '){return true;}
	if(ch == '\t'){return true;}
}

function _LTrim(src){
	var i = 0;
	var ilen = _Len(src);
	var idx = 0;

	while(i < ilen){
		var ch = src[i];
		//Check for white space
		if(!isWhite(ch)){
			idx = i;
			break;
		}
		i++;
	}
	
	if(idx == 0){return src;}
	//Return new string
	return _Mid(src,idx,ilen);
}

function _RTrim(src){
	var i = _Len(src) - 1;
	
	while(i >= 0){
		//Check for white space
		if(!isWhite(src[i])){
			break;
		}
		i--;
	}
	//Return new string.
	return _Mid(src,0,i+1);
}
//Reverse a string
function _RevStr(src){
	var s0 = "";
	for(var i = _Len(src) - 1; i >= 0;i--){
		s0 = s0 + src[i];
	}
	return s0;
}

//Replace a string within a String
function _Replace(src, iFind, iReplace){
	return src.replace(iFind,iReplace);
}

//Replace all substrings within a string.
function _ReplaceAll(src, iFind, iReplace){
	return src.split(iFind).join(iReplace);
}

//Trim spaces of each end of a string.
function _Trim(src){
	return _LTrim(_RTrim(src));
}

function _ToggleVisiable(id){
	if(!_idExists(id)){
		return false;
	}
	
	var obj = document.getElementById(id);
	
	if(obj.style.visibility == 'visible'){
		obj.style.visibility = 'hidden';	
	}
	else{
		obj.style.visibility = 'visible';
	}

}

//Return a value in a comma seperated line.
function _GetCsvLineValue(src, sep, Index){
	var elms = _Split(src,sep);
	return elms[Index]	
}

//Return the number of bits in a number
function _BitCount(num){
	return (num * 8);
}

function _BSort(nums, size){
	var i = 0;
	var j = 0;
	while(i < size){
		
		for(j=i+1;j<size;j++){
			if(nums[i] > nums[j]){
				var t = nums[j];
				nums[j] = nums[i];
				nums[i] = t;
			}
		}
		i++;
	}
}

//Check if string is lowercase
function _isLower(src){
	if(src == _LCase(src)){
		return true;
	}
	return false;
}

//Check if string is uppercase
function _isUpper(src){
	if(src == _UCase(src)){
		return true;
	}
	return false;
}

//Add a class to an object
function addClass(id, clsname){
	var obj = document.getElementById(id);
	if(obj != null){
		obj.className = clsname;
		return true;
	}
	return false;
}
//Check if an object has a classname.
function hasClass(id){
	var obj = document.getElementById(id);
	if(obj == null){return false;}

	if(_Trim(obj.className) != ''){
		return true;
	}
	return false;
}
//Remove a class from an object.
function removeClass(id){
	var obj = document.getElementById(id);
	if(obj != null){
		obj.className = '';
		return true;
	}
	return false;
}

//Returns true if firefox is detected.
function _IsFireFox(){
	if(navigator.userAgent.indexOf('Firefox') != -1){
		return true;
	}
	return false;
}

//Returns true if ch is alpha
function _isAlpha(ch){
	var c = _UCase(ch);
	if((c >='A') && (c <='Z')){
		return true;
	}
	return false;
}

//Returns true if ch is a digit
function _isDigit(ch){
	if((ch >= '0') && (ch <='9')){
		return true;
	}
	return false;
}

//Test for hexidecimal
function _IsHex(src){
	var mask = "ABCDEFabcdef0123456789";
	var vaild = true;
	var ch = '';
	for(var i = 0;i<_Len(src);i++){
		ch = src[i];
		//Check that we got vaild hex chars
		if(mask.indexOf(ch) < 0){
			//Break we have an invaild char
			vaild = false;
			break;
		}
	}
	return vaild;
}

function _IsAlphaNum(ch){
	return !(/\W/.test(ch));
}

function _IsIE(){
	if(navigator.userAgent.indexOf('Gecko') != -1){
		return true;
	}
	return false;
}

//Check if a string ends with check
function _EndsWith(src, check){
	return _Right(src,_Len(check)) == check;
}
	
//Check if a string begins with check.
function _StartsWith(src, check){
	return _Left(src,_Len(check)) == check;
}
	
//addClass('but','my-btn');

//Returns true if a vaild email address is found.	
function _IsEmail(eAddress){
	return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eAddress));
}

//Returns a single quote "
function _Quote(){
	return _Chr(34);
}

//Adds quotes to start and end of string "example"
function _QuoteStr(src){
	return _Quote() + src + _Quote();
}
	
//Get key value from storage.
function GetSettings(key){
	if(_Trim(key)== 0){return '';}
	return localStorage.getItem(key);
}

//Save key and value to local storage.
function SetSettings(key, value){
	if(_Trim(key)== 0){return false;}
	localStorage.setItem(key,value);
}

//Swap two variables.
function _swap(a, b) {
	var t = b;
	b=a;
	a=t;
	return [a,b];
}

function _AddListItem(lstID,item){
	if(_idExists(lstID)){
		//Get list object
		var lo = document.getElementById(lstID);
		//Create list element
		var li = document.createElement('li');
		//Create text for the list element
		li.appendChild(document.createTextNode(item));
		//Append list element to the list object.
		lo.appendChild(li);
		return true;
	}
	return false;
}

function _ClearList(LstID){
	if(_idExists(LstID)){
		//Get list object
		var obj = document.getElementById(LstID);
		//Get the list items.
		var elms = obj.getElementsByTagName('li');
		//Fetch the number of items in elems
		var i = _Len(elms) - 1;
		
		while(i >= 0){
			//Remove the item from the list
			obj.removeChild(elms[i]);
			//DEC counter
			i--;
		}
	}
}

//Return current year
function _Year(){
	var dt = new Date();
	return dt.getFullYear();
}

function _Month(){
	var dt = new Date();
	return dt.getMonth();
}

function _Day(){
	var dt = new Date();
	return dt.getDay();
}

//Return long or short month name
function _MonthName(month,short){
	var months = ["January","February","March","April",
	"May","June","July","August","September","October",
	"November","December"];
	
	if(short) {
		return _Left(months[month],3);
	}
	return months[month];
}

//Return long or short day name.
function _DayName(day,short){
	var days = ["Sunday","Monday","Tuesday","Wednesday",
	"Thursday","Friday","Saturday"];
	
	if(short) {
		return _Left(days[day],3);
	}
	return days[day];
}

function _px2em(base, size){
	return size / base;
}

function _em2px(base, size){
	return size * base;
}