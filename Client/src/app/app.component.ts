import { Component } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewChecked{
  title = '';

  ngAfterViewChecked() {
    let self=this;
    $("#bowler-name").selectpicker();
    window.onload = function() { 
    	var jcarousel = $('.jcarousel');
		$('.jcarousel').on('jcarousel:createend', function() {				
				$(this).jcarousel('scroll', 0, false);
			}).jcarousel();
        
            jcarousel.on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this);
                  carousel.jcarousel('items').css('width', '60px');
            }).jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 5,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    }    
   }

   Innings1Handler(){
        console.log("Innings1Handler.....");
        $(".inning1-tab").addClass("tab-active");
        $(".inning2-tab").removeClass("tab-active");
   }
   Innings2Handler(){
        console.log("Innings2Handler.....");
        $(".inning2-tab").addClass("tab-active");
        $(".inning1-tab").removeClass("tab-active");        
   }
   startMatch(){
       console.log("start-match");
       $(".bowling-team-container").addClass("hidden");
       $(".feature-seperator").addClass("hidden");

       $(".inning1-tab").addClass("tab-active");
       $(".innings-master-container").removeClass("not-editable")
   }
   selectBowlingTeam(event){
      console.log("selectBowlingTeam");      
      var target = event.target;
      if (target.checked) {
          console.log("checked");
          var match = $(".startMatch")
          match.removeAttr("disabled");
          match.removeClass("disabled")
      }
   }

}

