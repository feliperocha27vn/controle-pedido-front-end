import { House } from 'lucide-react'
import { useNavigate } from 'react-router'

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

export function CreateNewOrder() {
  const navigate = useNavigate()

  function handleNavigateToHome() {
    navigate('/')
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
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome do cliente</Label>
                  <Input id="name" placeholder="Escreva o nome do cliente" />
                  <Textarea
                    placeholder="Escreva a descrição do pedido"
                    className="h-44"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Situação do pedido</Label>
                  <Select>
                    <SelectTrigger id="situacao-pedido">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Pago</SelectItem>
                      <SelectItem value="sveltekit">Em aberto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleNavigateToHome}>
              Cancelar
            </Button>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
