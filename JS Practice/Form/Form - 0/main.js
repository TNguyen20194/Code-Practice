const form = document.querySelector("form");

console.log(form.elements);

for(const element of form.elements) {
    console.log(element)
};

// TEST 1
const testTextInput = form.elements.text;

testTextInput.addEventListener('input', ev => {
  console.log(ev.target.value)
});

testTextInput.addEventListener('focus', ev => {
  console.log("Focus on. Value is: ", ev.target.value)
})

testTextInput.addEventListener('blur', ev => {
  console.log("Focus off. Value is: ", ev.target.value)
})

// TEST 2
const checkboxes = [...document.querySelectorAll("input[type='checkbox']")];
const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked);

console.log(checkedCheckboxes);

form.addEventListener("change", e => {
    if(e.target.matches("input[type='checkbox']")) {
        console.log(e.target.value)
    }
});

// TEST 3
const radios = [...document.querySelectorAll("input[type='radio']")];
const selectedRadios = radios.filter(radio => radio.checked);

console.log(selectedRadios);

form.addEventListener("change", e => {
    if(e.target.matches("input[type='radio']")) {
        console.log(e.target.value)
    }
})

// TEST 4
const textArea = form.elements["long-text"];

textArea.addEventListener("input", e => {
    console.log(e.target.value)
});

textArea.addEventListener("focus", e => {
    console.log("Focus on. Value is: ", e.target.value)
});

textArea.addEventListener("blur", e => {
    console.log("Focus off. Value is: ", e.target.value)
});

// SANITIZZE

const sanitized = DOMPurify.sanitize("<img src=x onerror=alert(1)>");
const sanitizedSVG = DOMPurify.sanitize("<svg><g/onload=alert(2)></svg>");
const sanitizedIframe = DOMPurify.sanitize("<iframe src=jAva&Tab;script:alert(3)><iframe>");

console.log(sanitized, sanitizedSVG, sanitizedIframe)