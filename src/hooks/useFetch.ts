import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import type { Order } from '../types/order'

export function useFetch(url: string, method: string) {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    api.get(url).then(response => {
      setOrders(response.data)
    })
  }, [url])

  return orders
  //TODO: Refactor this hook to use the method parameter to make it more generic and reusable for other requests (POST, PUT, DELETE, etc.).
}
