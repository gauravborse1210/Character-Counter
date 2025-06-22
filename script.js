const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input", () => {
    charCount.textContent = textArea.value.length;
});
