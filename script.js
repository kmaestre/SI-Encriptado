function genkey(){
      var clave = document.getElementById('pclave').value;
      console.log(clave);
      var abc = "abcdefghijklmnñopqrstuvwxyz"
      var i = 0, j = 0;
      var cont = 1;
      while (i < abc.length){
        while (clave.includes(abc.charAt(i))){
          clave = clave.replace(abc.charAt(i), cont);
          cont = cont + 1;
        }
        i++;
      }
      document.getElementById('cgen').value = clave;
    };
    function encrypt(){
      var abc = "abcdefghijklmnñopqrstuvwxyz"
      var cgen = document.getElementById('cgen').value;
      var mensaje = document.getElementById('mensaje').value.toLowerCase();
      mensaje = mensaje.toString().replace(/,/g, "");
      mensaje = mensaje.toString().replace(/\./g, "");encriptado
      var desp = document.getElementById('desp').value;
      var encriptado = [];
      var i = 0, j = 0, k = 0;
      var posabc = 0;
      var char = '';
      while(i < mensaje.length){
        if(j == cgen.length){
          j = 0;
        }
        if(mensaje.charAt(i) == ' '){
          i++;
          encriptado.push(' ');
        }
        char = mensaje.charAt(i);
        posabc = abc.indexOf(char);
        n = cgen.charAt(j);
        if(desp.charAt(k) == 'd'){
          posabc = Number(posabc) + Number(n);
        }else{
          if (desp.charAt(k) == 'i'){
            posabc = Number(posabc) - Number(n);
          }
        }
        if(posabc < 0){
          posabc = posabc + 27;
        }
        if(posabc > 27){
          posabc = posabc - 27;
        }
        console.log(char, posabc, abc.charAt(posabc));
        encriptado.push(abc.charAt(posabc));
        j++;
        k++;
        if (k == desp.length){
          k = 0;
        }
        i++;
      }
      encriptado = encriptado.toString().replace(/,/g, "");
      document.getElementById('mensaje').value = encriptado;
      
    };
    function decrypt(){
      var abc = "abcdefghijklmnñopqrstuvwxyz"
      var cgen = document.getElementById('cgen').value;
      var mensaje = document.getElementById('mensaje').value;
      var desp = document.getElementById('desp').value;
      var desencriptado = [];
      var i = 0, j = 0, k = 0;
      var posabc = 0;
      var char = '';
      while(i < mensaje.length){
        if(j == cgen.length){
          j = 0;
        }
        if(mensaje.charAt(i) == ' '){
          i++;
          desencriptado.push(' ');
        }
        char = mensaje.charAt(i);
        posabc = abc.indexOf(char);
        n = cgen.charAt(j);
        if(desp.charAt(k) == 'd'){
          posabc = Number(posabc) - Number(n);
        }else{
          if (desp.charAt(k) == 'i'){
            posabc = Number(posabc) + Number(n);
          }
        }
        if(posabc < 0){
          posabc = posabc + 27;
        }
        if(posabc > 26){
          posabc = posabc - 27;
        }
        console.log(char, posabc, abc.charAt(posabc));
        desencriptado.push(abc.charAt(posabc));
        j++;
        k++;
        if (k == desp.length){
          k = 0;
        }
        i++;
      }
      desencriptado = desencriptado.toString().replace(/,/g, "");
      document.getElementById('mensaje').value = desencriptado;
      
    };