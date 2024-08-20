let usuarios = [];

function adicionarUsuario(nome, idade, email) {
    if (!nome, idade, email) {
        console.log("Por favor, preencha nome, idade e email.");
        return;
    }
    
    if (idade <= 0) {
        console.log("A idade precisa ser maior que 0.");
        return;
    }

    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    usuarios.push(usuario);
    console.log("Usuário adicionado: " + nome);
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    console.log("Lista de usuários:");
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];
        console.log((i + 1) + ". Nome: " + usuario.nome + ", Idade: " + usuario.idade + ", Email: " + usuario.email);
    }
}

adicionarUsuario("Thiago Américo", 25, "thiago.americo@estudante.com");
adicionarUsuario("Gustavo Ferrari", 30, "gustavo.ferrari@estudante.com");
adicionarUsuario("", 22, "incompleto@example.com");
adicionarUsuario("Kauan Alysson", -5, "kauan.alysson@estudante.com");

listarUsuarios();
