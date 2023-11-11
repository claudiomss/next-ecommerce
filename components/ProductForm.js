import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ProductForm({
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || '')
  const [description, setDescription] = useState(existingDescription || '')
  const [price, setPrice] = useState(existingPrice || '')
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
    <form onSubmit={createProduct}>
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
  )
}
