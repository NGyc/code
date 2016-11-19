function Animal() {
                
					this.ele = document.createElement("div")
					this.ele.style.position = "absolute"
					var x=Math.random()*window.innerHeight
					var y=Math.random()*window.innerWidth
					this.ele.style.left=x+"px"
					this.ele.style.top=y+"px"
					this.ele1 = document.createElement("img")
					this.ele1.src = "images/1.jpg"
					this.ele1.style.display = "block"
					this.ele1.style.height = 20 + "px"
					this.ele1.style.width = 20 + "px"
					this.ele.appendChild(this.ele1)
					var bodyNode = document.getElementsByTagName("body")[0]
						//console.log(window.innerWidth)
				   
				   
					document.body.appendChild(this.ele)
                   
					
				}
				Animal.prototype.move = function(){
					   var self=this.ele
						 var fly=this
                     //console.log(11)
                     var x1=parseInt(Math.random()*window.innerHeight)
					 var y1=parseInt(Math.random()*window.innerWidth)
					 
                      startMove(self, {"top": x1,"left": y1},function(){
                      	      fly.move()
                      });	
					}