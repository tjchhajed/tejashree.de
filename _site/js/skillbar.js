// jQuery for animation

// jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},1000);
// 	});
// });

// jQuery for non-animation

jQuery('.skillbar-bar').each(function(i, e){
	jQuery(e).width((jQuery(e).parent().attr('data-percent')));
});
