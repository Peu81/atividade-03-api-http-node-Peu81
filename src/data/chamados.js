export const array_infos = [{id_chamado: 1, nome_solicitante: "Joana Fragoso", 
    descricao: "Reinicializações Inesperadas", 
    prioridade: "alta"}]; //responsavel por armazenar chamados.

let novoID = 2;

export const salvarChamado = (novoChamado) => {
    const chamadoId = {id: novoID++, ...novoChamado};
    array_infos.push(chamadoId)
    return chamadoId;
};