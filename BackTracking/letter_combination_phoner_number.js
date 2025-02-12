const mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5:"jkl",
    6: "mno",
    7:"pqrs",
    8:"tuv",
    9:"wxyz"
}

const digit = "23"
// expected Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const ans = []


function solve(i,temp, digit){
    // base condition
    if(i === digit.length){
        ans.push([...temp.join('')])
        return
    }

    const strs = mapping[digit[i]]
    console.log("str-->>",strs);

    for(const str of strs){
        temp.push(str)
        solve(i+1,temp,digit)
        temp.pop()
    }
}

const temp = []

solve(0,temp,digit )

console.log("ans-->>",ans);


