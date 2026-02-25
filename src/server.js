import http from 'http';
import { listaChamados } from './controllers/chamadosControllers.js';


const server = http.createServer((req, res) => { // Cria o servidor e define a função para cada requisição

  if (req.method === "GET" && req.url === "/health") { // Verifica rota GET /health
    res.writeHead(200, { "Content-Type": "application/json" }); // Define status 200 e tipo JSON
    res.end(JSON.stringify({ status: "ok" })); // Envia JSON e encerra
    return; // Interrompe execução
  }

  if (req.method === "GET" && req.url.startsWith("/chamados")) { // Verifica rota GET /chamados
    res.writeHead(200, { "Content-Type": "application/json" }); // Define status 200 e tipo JSON
    res.end(JSON.stringify({"Listagem de chamados" : listaChamados()})); // Retorna lista de chamados
    return; // Interrompe execução
  }


  res.end(); // Finaliza resposta
});

server.listen(3000, () => { // Inicia o servidor na porta 3000
  console.log("Servidor HTTP executando na porta 3000"); // Log informativo
});

