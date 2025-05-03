import { useNavigate } from 'react-router'
import { TableList } from './components/TableList'
import { Button } from './components/ui/button'

import logoNei from './assets/logo-nei.png'

export function App() {
  const navigate = useNavigate()

  function handleNavigateCreateNewOrder() {
    navigate('/criar-novo-pedido')
  }

  return (
    <div className="space-y-10">
      <div className="w-full flex justify-center mt-10">
        <img src={logoNei} alt="Logo do Nei" className="h-24" />
      </div>
      <div className="flex flex-col items-center justify-center">
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
    </div>
  )
}
