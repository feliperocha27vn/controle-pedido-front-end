import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useFetch } from '@/hooks/useFetch'
import { useParams } from 'react-router'

export function OrderDetail() {
  const { id } = useParams()

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const order: any = useFetch(`/pedido/${id}`)

  return (
    <>
      <div className="flex flex-1 flex-col bg-neutral-950 h-screen items-center justify-center text-white">
        <Card className="w-11/12 max-w-[390px] h-3/12">
          <CardHeader>
            <CardTitle>{order.nome_cliente}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{order.descricao_pedido}</p>
          </CardContent>
          <CardFooter>
            <p>R$ {order.valor},00</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
