import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

import { useFetch } from '@/hooks/useFetch'
import { useNavigate, useParams } from 'react-router'

import { House } from '@phosphor-icons/react'

export function OrderDetail() {
  const { id } = useParams()

  const navigate = useNavigate()

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const order: any = useFetch(`/pedido/${id}`)

  function handleGoHome() {
    navigate('/')
  }

  function handleDeleteOrder() {
    useFetch(`/pedido/${id}`)
  }

  return (
    <>
      <div className="bg-neutral-950 w-full p-3 flex items-center gap-x-1">
        <House color="white" size={24} />
        <p className="text-white text-2xl" onClick={handleGoHome}>
          Início
        </p>
      </div>
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
        <div className="w-full p-4">
          <Button variant="destructive" onClick={handleDeleteOrder}>
            Deletar
          </Button>
        </div>
      </div>
    </>
  )
}
