import Layout from '@/components/Layout'
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function NewProduct() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [goToProducts, setGoToProducts] = useState(false)
  const router = useRouter()

  async function createProduct(e) {
    e.preventDefault()
    const data = { title, description, price }
    await axios.post('/api/products', data)
    setGoToProducts(true)
  }
  if (goToProducts) {
    router.push('/products')
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>Novo Produto</h1>
        <label> Nome do produto</label>
        <input
          type="text"
          placeholder="nome do produto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Descrição</label>
        <textarea
          placeholder="descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label> Preço</label>
        <input
          type="number"
          placeholder="preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="btn-primary">
          Salvar
        </button>
      </form>
    </Layout>
  )
}
