;(function($){  // ; to avoid crashes with other plugins


	var defaults = {
			question: "Which if your favorite js library",
			url: "",
			buttonText: "Answer!",
			categories: ["jQuery", "YUI", "Dojo", "ExtJS", "Zeptop"],
			containerClass: "nupoll",
			formClass: "nupoll-form",
			buttonClass: "nupoll-submit"
	};

	function Nupoll(element, options){
		
		this.config = $.extend({}, defaults, options); //override defaults with options
		this.element = element;
		this.init(); 
	}
	
	Nupoll.prototype.init = function(){

		this.element.addClass(this.config.containerClass);

		$("<h1>", {
			text: this.config.question

		}).appendTo(this.element);	
		var form = $("<form></form>").addClass(this.config.formClass).appendTo(this.element); 

		var x, y, categories = this.config.categories;

		for (x=0, y = this.config.categories.length; x < y; x++){

			$("<input/>", {
				type: "radio",
				name: this.config.question, 
				id: this.config.categories[x],
				value: this.config.categories[x]
			}).appendTo(form); 

			$("<label/>", {
				text: categories[x],
				"for": categories[x]
			}).appendTo(form); 
		}

		$("<br><br/>").appendTo(form); 

		$("<button/>", {
			text: this.config.buttonText,
			"class": this.config.buttonClass
		}).appendTo(form); 

		return this.element; 
	}

	$.fn.nupoll = function(options){
		new Nupoll(this.first(), options);
		return this.first(); 

	};

})(jQuery);  //autonomous function invoked without calling it