import { House } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useForm, Controller } from 'react-hook-form' // Adicione Controller aqui

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { api } from '@/services/api'

export function CreateNewOrder() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  function handleNavigateToHome() {
    navigate('/')
  }

  async function onSubmit(data) {
    try {
      await api.post('/pedido', data)

      console.log(data)
    } catch {
      console.error('Error submitting the order')
    }
  }

  return (
    <>
      <div
        className="flex items-center text-xl p-1 gap-x-1 font-light"
        onClick={handleNavigateToHome}
      >
        <House />
        <p>Início</p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Criar um novo pedido</CardTitle>
            <CardDescription>
              Digite e salve o pedido com poucos cliques.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome do cliente</Label>
                  <Input
                    placeholder="Escreva o nome do cliente"
                    {...register('nomeCliente')}
                  />
                  <Label htmlFor="valor">Valor</Label>
                  <Input
                    placeholder="Escreva o valor do pedido"
                    {...register('valor', { valueAsNumber: true })}
                  />
                  <Textarea
                    placeholder="Escreva a descrição do pedido"
                    className="h-44"
                    {...register('descricaoPedido')}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Situação do pedido</Label>
                  <Controller
                    name="situacaoPagamento"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="pago">Pago</SelectItem>
                          <SelectItem value="aberto">Em aberto</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <CardFooter className="flex justify-between px-0 mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleNavigateToHome}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
