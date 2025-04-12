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
import { api } from './services/api'

export function App() {
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
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-3xl">Pedidos</h1>
      <div className="w-11/12 border border-zinc-800 rounded-2xl p-2 mt-5">
        <Table>
          <TableCaption>
            Para ver os detalhes do pedido, basta clicar em cima do mesmo.
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
                  <TableCell className="w-[100px]">
                    {pedido.nome_cliente}
                  </TableCell>
                  <TableCell
                    className={`text-center uppercase ${pedido.situacao_pagamento === 'pago' ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {pedido.situacao_pagamento}
                  </TableCell>
                  <TableCell className="text-right">
                    R$ {pedido.valor},00
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
