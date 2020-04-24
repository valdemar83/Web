function keyvar(word, key)
{
    if (word == undefined || key==undefined){
        return console.log([])
    }


    let array =[word, key];
    return console.log(array);
}

let word="shrimp"
keyvar(word, 12)