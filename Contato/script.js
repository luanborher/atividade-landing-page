const verification = () => {
    const valores = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        empresa: document.getElementById("empresa").value,
        telefone: document.getElementById("telefone").value,
    }

    console.log(valores)

    const obj = Object.values(valores)
    const validation = obj.find(index => index == "")

    if (validation == "") {
        alert("Preencha todos os campos")
    }
    else {
        alert("Dados enviados com sucesso")
        document.getElementById("nome").value("")
        document.getElementById("telefone").value("")
        document.getElementById("email").value("")
        document.getElementById("empresa").value("")
        document.getElementById("mensagem").value("")
    }
}