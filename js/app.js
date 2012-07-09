var App = Em.Application.create();



/********
 Model
********/
App.Pin = Em.Object.extend({
    title: null,
    desc: null,
    link: null,
    date: null
});


/********
 Views
********/
App.Pinterest = Em.View.extend({

  
});

App.PinterestSearch = Em.TextField.extend({
    
});


/********
 Controller
********/

App.PinterestSearchController = Em.ArrayController.create({
    content: [],
    user: '',
    search: function() {
        var user = this.get("user"); 
        var self = this;
        if ( user ) {
            var url = 'feed.php?u=' + user
           
			$.ajax({
			url: url,
			type: 'GET',
			dataType: 'JSON',
			success: function(res) {
				self.set('content', []);
			    $(res.channel.item).each(function(index,value){
			        var t = App.Pin.create({
			           title: value.title,
			           desc: value.description,
			           link: value.link,
			           date: value.pubDate
			        });
			        self.pushObject(t);
			    })
				
			}
			});
		
			          
			
        }
    }
});
