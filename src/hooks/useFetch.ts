import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import type { Order } from '../types/order'

export function useFetch(url: string) {
    const [orders, setOrdes] = useState<Order[]>([])

    useEffect(() => {
        api.get(url).then(response => {
            setOrdes(response.data)
        })
    }, [])

    return orders
}