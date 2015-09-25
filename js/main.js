//cufon

$(function() {
	Cufon.replace('a, span').CSS.ready(function() {
	var $menu 		= $("#slidingMenu");
	
	/* the first item in the menu,  which is selected by default */
	var $selected	= $menu.find('li:first');
	
	/* this is the absolute element, that is going to move across the menu items it has the width of the selected item and the top is the distance from the item to the top */
	var $moving		= $('<li />',{
	className	: 'move',
	top			: $selected[0].offsetTop + 'px',
	width		: $selected[0].offsetWidth + 'px'
	});
	
	/* each sliding div (descriptions) will have the same top as the corresponding item in the menu */
	$('#slidingMenuDesc > div').each(function(i){
	var $this = $(this);
	$this.css('top',$menu.find('li:nth-child('+parseInt(i+2)+')')[0].offsetTop + 'px');
	});
	
	/* append the absolute div to the menu; when we mouse out from the menu the absolute div moves to the top (like initially); when hovering the items of the menu, we move it to its position */
	$menu.bind('mouseleave',function(){
	moveTo($selected,400);
	})
	.append($moving)
	.find('li')
	.not('.move')
	.bind('mouseenter',function(){
	var $this = $(this);
	var offsetLeft = $this.offset().left - 20;
	//slide in the description
	$('#slidingMenuDesc > div:nth-child('+ parseInt($this.index()) +')').stop(true).animate({'width':offsetLeft+'px'},400, 'easeOutExpo');
	//move the absolute div to this item
	moveTo($this,400);
	})
	.bind('mouseleave',function(){
	var $this = $(this);
	var offsetLeft = $this.offset().left - 20;
	//slide out the description
	$('#slidingMenuDesc > div:nth-child('+ parseInt($this.index()) +')').stop(true).animate({'width':'0px'},400, 'easeOutExpo');
	});;
	
	/* moves the absolute div, with a certain speed, to the position of $elem	*/
	function moveTo($elem,speed){
	$moving.stop(true).animate({
	top		: $elem[0].offsetTop + 'px',
	width	: $elem[0].offsetWidth + 'px'
	}, speed, 'easeOutExpo');
	}
	}) ;
	});



//superslides
	  $(function() {
      var $slides = $('#slides');

      Hammer($slides[0]).on("swipeleft", function(e) {
        $slides.data('superslides').animate('next');
      });

      Hammer($slides[0]).on("swiperight", function(e) {
        $slides.data('superslides').animate('prev');
      });
	  
	  });
      
    $(function() {
      $('#slides').superslides({
      	animation: 'fade',
        hashchange: true,
        play: 5000
      });

      $('#stop').on('click', function() {
        $('#slides').superslides('stop');
        $('#stop').hide();
        $('#start').show();
        console.log('Stopped')
      });
      
      $('#start').on('click', function() {
        $('#slides').superslides('start');
        $('#start').hide();
        $('#stop').show();
        console.log('Started')
      });
    });

