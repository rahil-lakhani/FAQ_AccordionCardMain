
var question = document.querySelectorAll(".question-box");

for (var i=0; i<question.length; i++) {								
                        
	question[i].addEventListener("click", function () {							
		
		//* Questions Behavior
		this.classList.toggle("active-question");
		this.lastElementChild.classList.toggle("rotate");

		//* Answers Visibility
		var answer = this.nextElementSibling;
		answer.classList.toggle("invisible");
						
		});						
    
}								



