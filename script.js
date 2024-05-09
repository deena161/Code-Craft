// (async ({chrome, netscape}) => {

//     if (!chrome && !netscape)
//     await import('https://unpkg.com/@ungap/custom-elements');
//     const {default: HighlightedCode} = await import('https://unpkg.com/highlighted-code');
//     HighlightedCode.useTheme('github-dark');
//     })(self);
//         (async ({chrome, netscape}) =>{
//         if (!chrome && !netscape)
//         await import('https://unpkg.com/@ungap/custom-elements');
//         const {default: HighlightedCode} =
//         await import('https://unpkg.com/highlighted-code');
//         HighlightedCode.useTheme('github-dark');
//         })(self);



        function change(){
            var selectElement = document.getElementById("theme");
            var selectedValue = selectElement.value;

            (async ({chrome, netscape}) => {

                if (!chrome && !netscape)
                await import('https://unpkg.com/@ungap/custom-elements');
                const {default: HighlightedCode} = await import('https://unpkg.com/highlighted-code');
                HighlightedCode.useTheme(selectedValue);
                })(self);
                    (async ({chrome, netscape}) =>{
                    if (!chrome && !netscape)
                    await import('https://unpkg.com/@ungap/custom-elements');
                    const {default: HighlightedCode} =
                    await import('https://unpkg.com/highlighted-code');
                    HighlightedCode.useTheme(selectedValue);
                    })(self);
        }

const htmlCode = document.getElementById('htmlCode'); 
const cssCode = document.getElementById('cssCode'); 
const jsCode = document.getElementById('jsCode');
const output = document.getElementById('output');
const runButton = document.getElementById('runButton');

const outputFrame = document.getElementById('output');
const outputDocument = outputFrame.contentDocument;



const textInput = document.getElementById('htmlCode');
textInput.addEventListener('input', function(event) {

    const currentValue = textInput.value;
    const cursorPosition = textInput.selectionStart;

    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '<') {
        const updatedValue = currentValue.slice(0, cursorPosition) + '>' + currentValue.slice(cursorPosition);
        textInput.value = updatedValue;
        textInput.setSelectionRange(cursorPosition, cursorPosition);
    }
});

const textInput2 = document.getElementById('jsCode');
textInput2.addEventListener('input', function(event) {

    const currentValue = textInput2.value;
    const cursorPosition = textInput2.selectionStart;

    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '{') {
        const updatedValue = currentValue.slice(0, cursorPosition) + '}' + currentValue.slice(cursorPosition);
        textInput2.value = updatedValue;
        textInput2.setSelectionRange(cursorPosition, cursorPosition);
    }
    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '(') {
        const updatedValue = currentValue.slice(0, cursorPosition) + ')' + currentValue.slice(cursorPosition);
        textInput2.value = updatedValue;
        textInput2.setSelectionRange(cursorPosition, cursorPosition);
    }
    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '[') {
        const updatedValue = currentValue.slice(0, cursorPosition) + ']' + currentValue.slice(cursorPosition);
        textInput2.value = updatedValue;
        textInput2.setSelectionRange(cursorPosition, cursorPosition);
    }
    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '"') {
        const updatedValue = currentValue.slice(0, cursorPosition) + '"' + currentValue.slice(cursorPosition);
        textInput2.value = updatedValue;
        textInput2.setSelectionRange(cursorPosition, cursorPosition);
    }
    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '`') {
        const updatedValue = currentValue.slice(0, cursorPosition) + '`' + currentValue.slice(cursorPosition);
        textInput2.value = updatedValue;
        textInput2.setSelectionRange(cursorPosition, cursorPosition);
    }
    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '<') {
        const updatedValue = currentValue.slice(0, cursorPosition) + '>' + currentValue.slice(cursorPosition);
        textInput2.value = updatedValue;
        textInput2.setSelectionRange(cursorPosition, cursorPosition);
    }
});

const textInput3 = document.getElementById('cssCode');
textInput3.addEventListener('input', function(event) {

    const currentValue = textInput3.value;
    const cursorPosition = textInput3.selectionStart;

    if (currentValue.slice(cursorPosition - 1, cursorPosition) === '{') {
        const updatedValue = currentValue.slice(0, cursorPosition) + '}' + currentValue.slice(cursorPosition);
        textInput3.value = updatedValue;
        textInput3.setSelectionRange(cursorPosition, cursorPosition);
    }
});





const updatePreview = () => { 
    const html = htmlCode.value; 
    const css = `<style>${cssCode.value}</style>`; 
    const js = `<script>${jsCode.value}</script>`; 

    const code = `${html}\n${css}\n${js}`; 
    outputDocument.open();
    outputDocument.write(code);
    outputDocument.close();
}
updatePreview();
runButton.addEventListener('click', updatePreview);

function reset(){
    htmlCode.value = ''; 
	cssCode.value = ''; 
	jsCode.value = ''; 
	updatePreview()
}




function changeCode(language) {
    var textAreas = document.querySelectorAll('.code-editor textarea');
    var buttons = document.querySelectorAll('#head button');

    textAreas.forEach(function (textArea) {
        textArea.classList.remove('show');
    });

    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    var selectedTextArea = document.getElementById(language + 'Code');
    var selectedButton = document.getElementById(language + 'Button');

    selectedTextArea.classList.add('show');
    selectedButton.classList.add('active');
}
