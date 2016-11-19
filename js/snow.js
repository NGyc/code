


function Snow(){
	this.ele=document.createElement("img")
	this.ele.src="images/snow.gif"
	this.ele.style.position="absolute"
	this.ele.style.height=20+"px"
	this.ele.style.width=20+"px"
	this.ele.style.top=0;
	var x=parseInt(Math.random()*document.documentElement.clientWidth);
	this.ele.style.left=x+"px"
	document.body.appendChild(this.ele);	
}
Snow.prototype.down=function(){
	var self=this;
	var MaxHeight=parseInt(document.documentElement.clientHeight)
	var timer=setInterval(function(){
		self.ele.style.top=self.ele.offsetTop+1+"px"
		//console.log(11)
		if(self.ele.offsetTop==MaxHeight){
			document.body.removeChild(self.ele)
			clearInterval(timer)
		    	
		}
	},10)
}
