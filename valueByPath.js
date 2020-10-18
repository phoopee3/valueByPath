/**
 * valueByPath Get the value from a json object by passing an array path
 * @param object jsonObject 
 * @param array path 
 */
var valueByPath = function ( jsonObject, path ) {
    if ( path.length ) {
        jsonObject = jsonObject[path.shift()];
        if ( path.length && typeof jsonObject === 'object' && jsonObject !== null ) {
            return valueByPath( jsonObject, path );
        } else {
            return jsonObject;
        }
    } else {
        return jsonObject;
    }
};

// example
var jsonObject = {
    foo : {
        bar : {
            baz : "hello",
            qux : "world"
        },
        qat : "lol",
    },
    zap : "yeah",
};

console.log( valueByPath( jsonObject, "zap".split('.') ) );
console.log( valueByPath( jsonObject, "foo.qat".split('.') ) );
console.log( valueByPath( jsonObject, "foo.bar".split('.') ) );
console.log( valueByPath( jsonObject, "foo.bar.qux".split('.') ) );
