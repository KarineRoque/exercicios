

function escreve_mensagem(nome, email, sexo, data_nasc){
    if(($nome=="")||($email=="")||($sexo=="")||($data_nasc=="") ){
        if($nome= ""){
            msg = "Preencha o campo'"+nome+"'";
        }
        msg = "Preencha o campo'"+nome+"'";
        alert(msg);
    }else{
        mensagem = "nome:'"+nome+"', e-mail:'"+email+"', sexo:'"+sexo+"' data de nasc.:'"+data_nasc+"'  ";
        alert(mensagem);;
    }
}