Template.app_sidebar.events({
  'click .f-app-sidebar-farms':function(event) {
    let item = event.target;
    //console.log(item);
    let parent = $(item).closest("li");
    //console.log(parent);
    if (parent.hasClass("open")){
      parent.removeClass("open");
      parent.find("ul").removeClass("in");
    }else{
      parent.addClass("open");
      $(".active").removeClass("active");
      parent.addClass("active");
      parent.find("a").attr("aria-expanded","true");
      parent.find("ul").attr("aria-expanded","true");
      parent.find("ul").addClass("in");
    }














    // $(event.target).closest("li")
    // $(this).addClass("open");
    // $(this).attr("aria-expanded","true");
    //
    // $('.f-app-sidebar-farms-items').attr("aria-expanded","true"); .toggleClass( "bounce" )
  }
});