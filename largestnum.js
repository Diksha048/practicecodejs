const num = [ 45, 87, 2, 267, 34, 56]

let largest = num[0];

for(let i = 1; i<num.length ; i++)
{
    if(largest < num[i])
        {
            largest = num[i];
        }
}
console.log(largest)