// Bibliotecas
import { AgGridReact } from 'ag-grid-react'
import {
  AllCommunityModule,
  colorSchemeDarkBlue,
  ModuleRegistry,
} from 'ag-grid-community'
import { themeQuartz } from 'ag-grid-community'

// Estados
import { useState } from 'react'

// Tipagem
import type { ColDef } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

export function Tabela() {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ])

  const colDefs: ColDef[] = [
    { field: 'cliente', headerName: 'Cliente' },
    { field: 'valor', headerName: 'Valor' },
    { field: 'situcao', headerName: 'Situação' },
    { field: 'id', headerName: 'Ver Detalhes' },
  ]

  const meuTemaPersonalizado = themeQuartz
    .withParams({
      headerTextColor: 'white',
      headerBackgroundColor: '#BE3144',
      headerColumnResizeHandleWidth: 0,
    })
    .withPart(colorSchemeDarkBlue)

  return (
    <div className="h-80 w-[95%] md:w-[800px]">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        theme={meuTemaPersonalizado}
      />
    </div>
  )
}
