function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const nascimento = document.getElementById('nascimento').value;
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('tel').value.trim();
    const sexo = document.querySelector('input[name="sex"]:checked');
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim().toUpperCase();
    const pais = document.getElementById('pais').value.trim();
    const rua = document.getElementById('rua').value.trim();

    // Validação de campos vazios
    if (!nome || !nascimento || !email || !telefone || !sexo || !cidade || !estado || !pais || !rua) {
        console.error("Erro: Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        console.error("Erro: Insira um e-mail válido.");
        return false;
    }

    // Validação de telefone
    const telefoneValido = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    if (!telefoneValido.test(telefone)) {
        console.error("Erro: Insira um telefone válido. Ex: (11) 91234-5678");
        return false;
    }

    // Validação de estado (UF brasileira)
    const ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
                 "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO",
                 "RR", "SC", "SP", "SE", "TO"];

    if (!ufs.includes(estado)) {
        console.error("Erro: Insira uma sigla de estado válida (ex: SP, RJ, MG).");
        return false;
    }

    // ✅ Se passou por tudo
    console.log("Formulário validado com sucesso!");
    console.log({
        nome,
        nascimento,
        email,
        telefone,
        sexo: sexo.value,
        cidade,
        estado,
        pais,
        rua
    });

    return true; // Permite o envio
}
