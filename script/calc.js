// 다이어트 체중계 만들기 


console.log("--------------------------변수 시작---------------------------------------")

let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let goals = document.querySelector("#goals")
console.log(height,weight,goals) // 확인
const result = document.querySelector("#result")
console.log(result) // 확인 

console.log("--------------------------함수 시작.------------------------------------")
result.addEventListener("click", function(){
    console.log("클릭성공:D") // 확인 
    console.log(typeof(height.value,weight.value,goals.value)) // string 확인
    let goals_result = Number((height.value-100)* 0.9); // 변수 생성 적정체중  string - > number 변환.
    goals.value = goals_result // 최종 목표에 적정체중 보이게.

    // window.alert(`${(goals_result)-(weight)} 감량해야합니다.`)
})
