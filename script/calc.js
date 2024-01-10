// 다이어트 체중계 만들기 
// 24/01/10 ~24/01/10
// “적정체중 = (본인신장-100)*0.9” 
// 버튼 클릭 시 입력 한 키에 (본인신장-100)*0.9” 적정 체중을 구할 수 있게.

/* 4) 버튼 클릭 시 팝업창으로 아래와 같은 결과가 출력될 수 있도록 자바스크립트를 구현하세요.
실행 결과 예시) 적정 체중은 kg 이며 kg 초과되셨습니다.  */
console.log("--------------------------------------변수 시작---------------------------------------")

let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let goals = document.querySelector("#goals")
console.log(height,weight,goals) // 확인
const result_btn = document.querySelector("#result")
console.log(result_btn) // 확인 

console.log("----------------------------꾸미기-----------------------------------------------------")
const scale = document.querySelector(".scale") // 배경색을 위한 변수생성.
scale.style.background = "darkgreen"
/* scale.style.background = "brown" */
scale.style.color = "white"
result_btn.style.color = "black"
result_btn.style.background = "white"

console.log("--------------------------result_btn 함수 시작.------------------------------------------")

result_btn.addEventListener("click", function(){
    console.log("클릭성공:D") // 확인 
    console.log(typeof(height.value,weight.value,goals.value)) // string 확인
    let goals_result = Number((height.value-100)* 0.9); // 변수 생성 적정체중  string - > number 변환.
    goals.value = goals_result // 최종 목표에 적정체중 보이게.
    console.log(typeof(goals_result))// number 확인  
    window.alert(`적정 체중은 ${goals_result}kg 이며 ${(goals_result)-(weight.value)}kg 감량해야합니다.`)
})
console.log("--------------------------result_btn 함수 끝.---------------------------------------------")
console.log("--------------------------result_btn 마우스 시작.------------------------------------------")

result_btn.addEventListener("mouseover", function(){
    result_btn.style.background = "black"
    result_btn.style.color = "white"
})
result_btn.addEventListener("mouseout", function(){
    result_btn.style.background = "none"
    result_btn.style.color = "black"
})
console.log("--------------------------result_btn 마우스 끝.-------------------------------------------")

// 아쉬운 점 마진이나 패팅을 주면 좋겠는데 값 주는 방법을 잊어버림.