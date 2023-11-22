 function firstLetterOfName(name) {
const firstLetterOfName = name[0];
alert("The name " +name+ " starts with the letter " +firstLetterOfName);
 }


 firstLetterOfName("Jeremy");

function divisibleByTwo(n) {
    if (n==0)
        return true;
    if (n==1)
        return false;
    else if (n < 0)
        return divisibleByTwo(-n);
    else
        return divisibleByTwo(n % 2);
}

divisibleByTwo("2");

function largestNum() {
    largest = 9;

for (let i = 1; i < largestNum.length; i++) {
    if (largestNum[i] < largest) {
        largest = largestNum[i];
    }
}
 return largest;
}
largestNum([1, 3, 8, 9])