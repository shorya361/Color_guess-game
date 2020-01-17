
var h1=document.querySelector("h1");
var no_=6;
var colors=generateRandomColors(no_);
var button=document.querySelector("#reset");
var squares=document.querySelectorAll(".square");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var pickedColor=pickColor();
var message=document.querySelector("#message");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function generateRandomColors(num)
{
	var arr=[]
	for(var i=0;i<num;i++)
	{
		arr[i]=randomColor();
	}
	return arr;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g +", " +b +")";
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}



reset.addEventListener("click",function(){
	colors=generateRandomColors(no_);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	reset.textContent="NEW COLORS";

})


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedColor=this.style.backgroundColor;
		if(clickedColor==pickedColor)
		{
			changeColor(clickedColor);
			message.textContent="correct";
			h1.style.backgroundColor=clickedColor;
			reset.textContent="play again?";
		}
		else
		{
			message.textContent="try again";
			this.style.backgroundColor="#232323";
		}
	})
	}





easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	no_=3;
	h1.style.backgroundColor="steelblue"
	colors=generateRandomColors(no_);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{	if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	no_=6;
	easy.classList.remove("selected");
	colors=generateRandomColors(no_);
	pickedColor=pickColor();
	h1.style.backgroundColor="steelblue"
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})