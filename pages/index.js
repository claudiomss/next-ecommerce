import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  if (!session) return
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Ola, <b> {session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt="foto google"
            className="w-8 h-8 "
          />
          <span className="py-1 px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  )
}
