// import { useRouter } from 'next/router'

export default function PersonalProduct({ params }: any) {
  // const { query } = useRouter()

  return (
    <div>
        <h1>Personal Products: {params.product}</h1>
        {/* <h1>Past form:  {JSON.stringify(query)}</h1> */}
    </div>
  )
}
  