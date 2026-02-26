import * as chamadoService from '../services/chamadosServices.js';

export const listaChamados = () => {
    return chamadoService.buscaChamados();
}; // Função que entrega ao servidor a listagem de chamados registrados