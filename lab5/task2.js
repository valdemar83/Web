function woven_string(thisword)
 {
	    alt255 = ' ';
	    array=[]
	    array_str=thisword
	    array[0]=thisword
	    for(let i=0;i<thisword.length;i++) {
	        array_str=alt255+array_str;
	        array[i+1]=array_str;
	    }
	    for(let j=0;j<thisword.length;j++){
	        let array_push=array[(array.length-1)-j].slice(j);
	        array.push(array_push);

	    }
	    array.push(thisword)
	    array.forEach(element => {console.log(element)});
}

	woven_string('hello');