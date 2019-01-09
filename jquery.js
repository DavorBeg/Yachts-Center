	$(document).ready(function(){
		let page = [3];
		page[0] = $("#HomePage");
		page[1] = $("#CatalogPage");
		page[2] = $("#GalleryPage");
		page[3] = $("#ContactUsPage");
		$("#HomeButton").click(function(){
			if(!page[0].is(':visible'))
			{				
				page[0].show(1000);
				for (i = 0; i <= 3; i++)
				{
					if(i != 0) { page[i].hide(1000); $("#StartPage").hide(1000); }
				}
			}
		});
		$("#CatalogButton").click(function(){
			if(!page[1].is(':visible'))
			{
				
				page[1].show(1000);	
				for (i = 0; i <= 3; i++)
				{
					if(i != 1) { page[i].hide(1000); $("#StartPage").hide(1000); }
				}
			}
		});
		$("#GalleryButton").click(function(){
			if(!page[2].is(':visible'))
			{
				
				page[2].show(1000);	
				for (i = 0; i <= 3; i++)
				{
					if(i != 2) { page[i].hide(1000); $("#StartPage").hide(1000); }
				}
			}
		});
		$("#ContactUsButton").click(function(){
			if(!page[3].is(':visible'))
			{
				
				page[3].show(1000);	
				for (i = 0; i <= 3; i++)
				{
					if(i != 3) { page[i].hide(1000); $("#StartPage").hide(1000); }
				}
			}			
		});
		$("#StartButton").click(function(){
			if(!$("#StartPage").is(':visible'))
			{
				for (i = 0; i <= 3; i++) { page[i].hide(1000); }
				$("#StartPage").show(1000);
				return;
			}
			else{
				$("#StartPage").hide(1000);
				page[0].show(1000);
			}
		});
	}); 
