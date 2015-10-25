var converter = {
	originText: "",
	textArray:[],
}

converter.getText = function() {
	this.originText = document.getElementById("text").value
	this.makeArray()
	var content=document.createElement('div')
	for(var i=0;i<this.textArray.length;i++){
		this.textArray[i]=this.format(this.textArray[i])
		if(this.textArray[i].nodeType===1){
			content.appendChild(this.textArray[i])
		}
		console.log(this.textArray[i])
	}
	console.log(content)
}

converter.makeArray = function() {
	this.textArray = this.originText.split("\n")
}

converter.format =function(text){
	var html
	var identifier=text.split(' ',1)[0]
	var inhtml=text.replace(identifier+' ','')
	switch (identifier) {
		case "#":
			html=document.createElement("h2")
			html.innerHTML=inhtml
			break
		case "*":
			var code=document.createElement("code")
			html=document.createElement("pre")
			code.innerHTML='&lt;'+inhtml+"&lt;"
			html.appendChild(code)
			break
		case "":
			return ''
		default :
			html=document.createElement("p")
			html.innerHTML=text
			break
	}
	return html
}