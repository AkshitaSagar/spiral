var n = prompt('enter value');

function printSpiral(n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
             
            let x;
 
           
            x = Math.min(Math.min(i, j),
                Math.min(n - 1 - i, n - 1 - j));
 
            
            if (i <= j)
                document.write(`${(n - 2 * x) *
                                  (n - 2 * x) -
                                  (i - x) - (j - x)} `);
 
           
            else
            document.write(`${(n - 2 * x - 2) *
                              (n - 2 * x - 2) +
                              (i - x) + (j - x)} `);
    }
    document.write("<br>");
}
}

 
// Print a n x n spiral matrix in O(1) space
printSpiral(n);
 