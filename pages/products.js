import Layout from '@/components/Layout'
import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data)
    })
  }, [])
  return (
    <Layout>
      <Link
        className="bg-blue-900 text-white rounded-md py-1 px-2"
        href={'/products/new'}
      >
        Adicione novo produto
      </Link>
      <table className="basic mt-2">
        <thread>
          <tr>
            <td>Nome Produto</td>
            <td></td>
          </tr>
        </thread>
        <tbody>
          {products.map((e) => (
            <tr>
              <td> {e.title}</td>
              <td>teste</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
