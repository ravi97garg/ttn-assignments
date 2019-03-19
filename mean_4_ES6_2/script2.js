// Find the possible combinations of a string and store them in a MAP? 

let combinations = function (string)
{
    let result = new Map();
    let count = 0;
    let loop = function (start,depth,prefix)
    {
        for(let i=start; i<string.length; i++)
        {
            let next = prefix+string[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.set(count++, next)
        }
    }

    for(let i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
}

console.log(combinations("ravi"))