$(document).ready(function(){
	$(".nav_myTao").hover(function(){
		$(this).css({
			"background-color":"#fff"
		}).find(".nav-myTao-nav").show();
	},function(){
		$(this).css({
			"background-color":"#f5f5f5"
		}).find(".nav-myTao-nav").hide();
	});
	$('.nav_collection').hover(function() {
		$(this).css({
			'background-color':"#fff"
		}).find('.nav-myTao-nav').show();
	}, function() {
		$(this).css({
			'background-color':'#f5f5f5'
		}).find('.nav-myTao-nav').hide();
	});
	$('.nav_sellCenter').hover(function() {
		$(this).css({
			'background-color':'#fff'
		}).find('.nav-myTao-nav').show();
	}, function() {
		$(this).css({
			'background-color':'#f5f5f5'
		}).find('.nav-myTao-nav').hide();
	});
	$('.nav_contact').hover(function() {
		$(this).css({
			'background-color':'#fff'
		}).find('.nav-myTao-nav').show();
	}, function() {
		$(this).css({
			'background-color':'#f5f5f5'
		}).find('.nav-myTao-nav').hide();
	});

	//搜索框下拉列表
});