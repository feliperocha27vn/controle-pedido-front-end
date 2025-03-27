import { Tabela } from './components/Tabela'

export function App() {
  return (
    <div className="flex flex-1 flex-col bg-neutral-950 h-screen items-center justify-center text-white">
      <h1 className="text-5xl mb-5">Pedidos</h1>
      <Tabela />
    </div>
  )
}
