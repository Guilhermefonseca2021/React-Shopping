import { styled } from "../styles"


const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 20,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: "bold",
  },

  '&:hover': {
    filter: 'brightness(0,8)'
  }
})

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      
      <Button> 
        <span>teste</span>
        Enviar 
      </Button>
    </div>
  )
}
