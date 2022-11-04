let fs = require('fs'); 
let input = fs.readFileSync('example.txt').toString().split('\n');
let num = parseInt(input[0]);

//중복 피하기 위해 Set 생성 및 입력값으로 초기화
const wordList = new Set();
for(let i=1;i<=num;i++){
    wordList.add(input[i])
}

//Set을 Array로 변경
let arr = [...wordList]

//Array를 element 길이 짧은 순으로 정렬
arr.sort((word1, word2)=>{
    return word1.length - word2.length||word1.localeCompare(word2); 
})

arr.forEach((word)=>{
    console.log(word)
})


