import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function TableList() {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get('/pedidos')
        setPedidos(response.data)
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    }
    fetchOrders()
  }, [])
  return (
    <Table>
      <TableCaption>
        Para ver os detalhes, basta clicar em cima do pedido
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Cliente</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={'text-sm font-medium text-zinc-900'}>
        {pedidos.map(pedido => {
          return (
            <TableRow key={pedido.id} id={pedido.id}>
              <TableCell className="w-[100px]">{pedido.nome_cliente}</TableCell>
              <TableCell
                className={`text-center uppercase ${pedido.situacao_pagamento === 'pago' ? 'text-green-500' : 'text-red-500'}`}
              >
                {pedido.situacao_pagamento}
              </TableCell>
              <TableCell className="text-right">R$ {pedido.valor},00</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
