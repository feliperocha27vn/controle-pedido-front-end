import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { useFetch } from '@/hooks/useFetch'

export function TableComponent() {

  const orders = useFetch('/pedidos')

  function handleClick() {
    console.log(id)
  }

  return (
    <div className="flex justify-center w-11/12 border border-neutral-600 rounded-2xl p-2 max-w-[425px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Cliente</TableHead>
            <TableHead className="text-center">Situação</TableHead>
            <TableHead className="text-right">Detalhes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(order => {
            return (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.nome_cliente}</TableCell>
                <TableCell>
                  <div className={`
                    ${order.situacao_pagamento === 'pago' ? 'pago' : 'aberto'}
                  `}>
                    {order.situacao_pagamento}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <button type="button" onClick={handleClick}>Ver Detalhes</button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
