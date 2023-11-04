const displayNumber = document.getElementById('number');

var counter = 0;

function increment() {

	displayNumber.innerHTML = counter+1;

	counter++;

}

function decriment() {

	if (counter>0) {

		displayNumber.innerHTML = counter-1;

		counter--;

	}

}



function show(){
  
  document.querySelector('.menu').style.right = "0";
}

function d(){
  document.querySelector('.menu').style.right= "-100%";
  document.querySelector('#show').style.display = "block";
}





  // An array of random verses 

    var verse = [
      "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
          "وَكَانَ فَضْلُ اللَّهِ عَلَيْكَ عَظِيمًا",

          "وَلَا تَكُونُوا كَالَّتِي نَقَضَتْ غَزْلَهَا مِنْ بَعْدِ قُوَّةٍ أَنْكَاثًا", 

          "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ",

          "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ"
          ]; 



        // Generate a random index 

        var randomIndex = Math.floor(Math.random() * verse.length);



        // Get the random verse 

        

        var verse = verse[randomIndex];



        // Display the random verse 

        

        document.getElementById("ayah").innerHTML = verse; 



    //set colors

    

    function setColor(color){

      document.querySelectorAll('span').forEach(span => {

        span.style.color = color;

      });

      

      document.querySelectorAll('div').forEach(div => {

        div.style.borderColor = color;

      });

      document.querySelectorAll('svg').forEach(svg => {

        svg.style.fill = color;

      });

      document.querySelector('div').style.borderColor = color;

      

document.querySelector('.surah-list-item').addEventListener('mouseover', function() {

  this.style.background = color;

});



      document.querySelectorAll('h3').forEach(h3 => {



      h3.style.color = color;



    });

    }

    let span = document.querySelectorAll('span');

    

    //Colors Menu

    

    

    function openn(){

      document.querySelector('.cont2').style.right = "-300%";

      document.querySelector('.settings').style.right = "-300%";

      document.querySelector('.settings-box').style.right = "0px";

    }

    function remove(){

      document.querySelector('.settings').style.right = "15px";

      document.querySelector('.cont').style.right = "0";

      document.querySelector('.settings-box').style.right = "-200%";

      document.querySelector('.cont2').style.right = "0";

      

    }

    // Dark Mode

    

    function toggle() {
      var element = document.body;

      element.classList.toggle("dark");
    }

    

  var svgs = document.querySelectorAll('#image');

  

  svgs.forEach(function(svg) {

    svg.addEventListener('click', function() {

      if (svg.getAttribute('src').includes('sun.svg')) {

        svg.setAttribute('src', 'dark.svg');

      } else {

        svg.setAttribute('src', 'sun.svg');

      }

    });

  });

document.querySelector('button').addEventListener('onmouseover', function() {

  this.style.background = color;

  this.style.color = 'white';

});
