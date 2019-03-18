const song = {
 name: 'Dying to live',
 artist: 'Tupac',
 featuring: 'Biggie Smalls'
};

let outputDiv = document.getElementById('output');
outputDiv.innerHTML = `<div class="song">
   <p>
     ${song.name}
     (Featuring ${song.featuring})
   </p>
 </div>`
