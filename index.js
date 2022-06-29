function myFunction(){
    let textarea = document.getElementById('text').value;
    let empty_field =document.getElementsByClassName('empty_field')[0];
    empty_field.innerHTML=textarea
}

const pattern =/hello/
const text1 ='hello, you'
pattern.test(text1) // Returns true

console.log(pattern.test(text1));
function parseMarkdown(markdownText) {
	const htmlText = markdownText 
    // do something to this markdown text

	return htmlText
}
text = 'hello world and hello everyone'
function parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')

	return htmlText.trim()
}
const text = `
# Hello World
**This is a bold text**
`

console.log(parseMarkdown(text))