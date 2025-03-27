import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import type { OrderData } from '../components/Table/table-interface'

export function useFetch(url: string) {
    const [orders, setOrdes] = useState<OrderData[]>([])

    useEffect(() => {
        api.get(url).then(response => {
            setOrdes(response.data)
        })
    }, [])

    return orders
}