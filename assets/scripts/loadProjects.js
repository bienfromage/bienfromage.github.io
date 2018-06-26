//this file uses jQuery 3.3.1
//generate page data from project .json file

"use strict";

function setup(year){
  if(year){
    year=year[1];
    $.getJSON("project-data.json",(jsonString)=>{
      try{
        $('.project-list').append("<h1>"+year+"</h1>");
        for(let i=0; i<jsonString[year].length;i++){
          let project = jsonString[year][i];
          
            $('.project-list').append("<a href='"+project.link+"'><div class='project'><div class='project-info'><h2>"+project.title+"</h2><p>"+project.description+"</p></div></div></a>");
        }
      }catch(e){
        console.error("Problem parsing JSON: "+e);
        setup(null);
      }
    });
  }else{
    $.getJSON("http://cheesetech.fun/project-data.json",(jsonString)=>{
      try{
        let errorMessage="<h1 style='text-align:center'>I'm afraid I can't do that dave</h1><div style='text-align:center;color:black;'><img src='assets/images/32px-HAL9000_Better_Reflection.png' alt='HAL 9000'/><p>We couldn't find any projects of that description. Try using one of the links below to navigate through projects by year.</p>";
        for(let key in jsonString){
          errorMessage+="<a href='https://bienfromage.github.io/projects?year="+key+"' class='error-link'>"+key+"</a>";
        }
        
        $('.project-list').html(errorMessage);
      }catch(e){
        console.error("Error getting JSON: "+e);
        $('.project-list').html("<h1>I'm afraid I can't do that dave</h1><div style='text-align:center;color:black;'><img src='assets/images/32px-HAL9000_Better_Reflection.png' alt='HAL 9000'/><p>We couldn't find any projects of that description.");
      }
    });
  }
}

//get year from querystring and display projects
setup((new RegExp( '[?&]year=([^&#]*)', 'i' )).exec(window.location.href));