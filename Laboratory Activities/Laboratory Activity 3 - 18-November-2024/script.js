
const textInput = document.getElementById('textInput')
const wordCountHolder = document.getElementById('wordCount')
const sentenceCountHolder = document.getElementById('sentenceCount')

textInput.addEventListener('keydown', () => {
    let currentInput = textInput.value;
    
    let wordCount = currentInput.split(/\s+/).filter(word => word.length > 0).length;
    let sentenceCount = currentInput.split(/\./).filter(word => word.length > 0).length;

    wordCountHolder.textContent = `Words: ${wordCount}`
    sentenceCountHolder.textContent = `Sentences: ${sentenceCount}`
})