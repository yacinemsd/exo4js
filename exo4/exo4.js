/*function saisie() {

  var name = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;

alert ( "Nom : "+name+"\n"+"Prénom : "+firstName+"\n"+"Ville : "+city);
}*/

submit.addEventListener("click", function(){
   if (lastname.value !=="" && firstname.value !=="" && city.value !=="")

   {
  if (/^[a-zA-Z]+$/.test(lastname.value + firstname.value + city.value)){ 
  alert("Nom : " + lastname.value + "\nPrénom : " + firstname.value + "\nVille : " + city.value)
   }

  else { alert("erreur de saisie !")
       }
      }

       else { alert("Un des champs est vide")
     }
   }
 )
