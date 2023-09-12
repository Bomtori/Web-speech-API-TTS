//음성 합성 객체 생성
const synth = window.speechSynthesis;

const textInputField = document.querySelector("#text-input"); //#text-input ID를 가진 요소 선택 할당
const form = document.querySelector("#form");
const pitchInput = document.querySelector("#pitch-input"); // 피치 입력 필드 선택
const pitchOutput = document.querySelector("#pitch-output"); // 피치 출력 필드 선택
const speedInput = document.querySelector("#speed-input"); // 말속도 입력 필드 선택
const speedOutput = document.querySelector("#speed-output"); // 말속도 출력 필드 선택
const utterThis = new SpeechSynthesisUtterance(); //피치 속성 설정x 기본값 1
let ourText = "";

//Web Speech API를 가져오는지 확인
const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(");
};

checkBrowserCompatibility();

form.onsubmit = (event) => {
  event.preventDefault(); //기본 제출 동작 방지
  ourText = textInputField.value;
  utterThis.text = ourText;
  utterThis.pitch = parseFloat(pitchInput.value);
  utterThis.rate = parseInt(speedInput.value);
  synth.speak(utterThis); //텍스트를 음성 합성하여 출력
  textInputField.value = ""; //텍스트 입력 필드 비우기
};

pitchInput.addEventListener("input", (e) => {
  // 피치 입력 필드의 값을 실시간으로 출력 필드에 표시
  pitchOutput.innerHTML = e.target.value;
});

speedInput.addEventListener("input", (e) => {
  // 말속도 입력 필드의 값을 실시간으로 출력 필드에 표시
  speedOutput.innerHTML = e.target.value;
});
