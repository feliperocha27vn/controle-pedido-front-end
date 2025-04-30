import { useNavigate } from 'react-router'
import { TableList } from './components/TableList'
import { Button } from './components/ui/button'

export function App() {
  const navigate = useNavigate()

  function handleNavigateCreateNewOrder() {
    navigate('/criar-novo-pedido')
  }

  return (
    <>
      <h1 className="text-3xl text-center pt-3 font-light">Pedidos</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <div className="w-11/12 border border-zinc-700 rounded-2xl p-2 mt-5">
          <TableList />
        </div>
        <Button
          variant="outline"
          className="border-black mt-5"
          onClick={handleNavigateCreateNewOrder}
        >
          Adicionar novo pedido
        </Button>
      </div>
    </>
  )
}
