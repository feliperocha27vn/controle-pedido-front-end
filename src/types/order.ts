export interface Order {
    id: string,
    data_criacao: Date,
    descricao_pedido: string,
    nome_cliente: string,
    situacao_pagamento: string,
    valor: number
}

