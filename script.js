function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var txtano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if (txtano.value.length == 0 || txtano.value > ano) {
       res.innerHTML = 'Verifique a data digitada'
   }else{
       var radsex = document.getElementsByName('radsex')
       var idade = ano - txtano.value
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')     
       if (radsex[0].checked) {
           genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade <= 21){
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade <= 65){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
            }
       }else if(radsex[1].checked){
           genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade <= 21){
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade <= 65){
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                img.setAttribute('src','foto-idoso-f.png')
            }
       }
       res.style.textAlign = "center"
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
   }

}