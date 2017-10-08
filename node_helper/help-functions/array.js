function gl_dynamicSortMultiple() {
    var props=[];
    /*Let's separate property name from ascendant or descendant keyword*/
    for(var i=0; i < arguments.length; i++){
        var splittedArg=arguments[i].split(/ +/);
        props[props.length]=[splittedArg[0], (splittedArg[1] ? splittedArg[1].toUpperCase() : "ASC")];
    }
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length ;
        /*Cycle on values until find a difference!*/
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i][0], props[i][1])(obj1, obj2);
            i++;
        }
        return result;
    }
}

/*Base function returning -1,1,0 for custom sorting*/
function dynamicSort(property, isAscDesc) { 
    return function (obj1,obj2) {
        if(isAscDesc==="DESC"){
            return ((obj1[property] > obj2[property]) ? (-1) : ((obj1[property] < obj2[property]) ? (1) : (0)));
        }
        /*else, if isAscDesc==="ASC"*/
        return ((obj1[property] > obj2[property]) ? (1) : ((obj1[property] < obj2[property]) ? (-1) : (0)));
    }
}

global.gl_dynamicSortMultiple = gl_dynamicSortMultiple;

process.stdout.write('КОНТЕНТ ИЗ help-functions/array |');