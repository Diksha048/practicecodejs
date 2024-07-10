const num = [ 23, 56, 67, 78, 98, 89, 76,12, 34, 45];

let sum = 0;

for(let i = 0; i<num.length ; i++)
    {
        if(!(num[i] % 2 ) == 0)
            {
                sum += num[i];
            }
    }
console.log(`The sum of odd number is : ${sum}`);  
    