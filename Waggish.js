function page_turner(page_id,hinter_id){
    current_page = document.getElementById(page_id)
}

contract = function(element, property, starts, ends, duration) {
	  console.log('contract called')
	  colorHasNotChanged = false
      var interval = 10;
      var steps = duration/interval;
      var step_u = 1.0/steps;
      var u = 0.0;

	  var colorsOnly = starts.substring(starts.indexOf('(') + 1, starts.indexOf(')')).split(/,\s*/),
	  start = {};
	  start.r = colorsOnly[0];
	  start.g = colorsOnly[1];
	  start.b = colorsOnly[2];
      colorsOnly = ends.substring(ends.indexOf('(') + 1, ends.lastIndexOf(')')).split(/,\s*/),
	  end = {};
	  end.r = colorsOnly[0];
	  end.g = colorsOnly[1];
	  end.b = colorsOnly[2];

      var theInterval = setInterval(function(){
        if (u >= 1.0){
	        clearInterval(theInterval)
	        element = null
	        document.getElementById('page').style.backgroundColor = ends
	        console.log(ends)
	        console.log(document.getElementById('page').style.backgroundColor)
			console.log("it's ended!")
        }
        var r = parseInt(lerp(start.r, end.r, u));
        var g = parseInt(lerp(start.g, end.g, u));
        var b = parseInt(lerp(start.b, end.b, u));
        var colorname = 'rgb('+r+','+g+','+b+')';
        element.style.setProperty(property, colorname);
        u += step_u;
      }, interval);

          };
async function page_popper(){
    //Populates the page with divs by popping them into existence
    divs = document.getElementsByClassName("briefcase")
    for(i=0;i<divs.length;i++){
        if(divs[i].id == "title"){
            divs[i].style.display = "flex"
        }
        else{
            divs[i].style.display = "block"
        }
        await sleep(2000)
    }
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}