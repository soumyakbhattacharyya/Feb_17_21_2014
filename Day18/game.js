window.MyGame = {};
MyGame.GameView = Backbone.View.extend({
				el : "#guesssection",
				events : {
					"click #guessbutton" : "guessButtonClicked"
				},
				guessButtonClicked : function(){
					this.model.play($("#guess").val());
					$("#message").text(this.model.get("message"));
					$("#attempts").text("Attempts: " + this.model.get("attempts"));
				}
});

MyGame.Game = Backbone.Model.extend({
				defaults : {
					target : Math.round(Math.random() * 100),
					attempts : 0,
					message : ""
				},
				play : function(guess){
					this.set("attempts",this.get("attempts")+1);
					if(guess > this.get("target"))
						this.set("message","Aim lower");
					else if(guess < this.get("target"))
						this.set("message","Aim higher");
					else
						this.set("message","You've got it!!!");
				}
});