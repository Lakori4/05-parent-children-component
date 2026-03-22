import ContainerBackHome from "@/app/components/ContainerBackHome"

const Home = () => {
  return (
    <div>
      <h1>Our little page</h1>
      <ContainerBackHome>
        <h1>This is a Title inside the container</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur est ducimus dolorem aut, quaerat numquam reprehenderit cumque accusamus, provident et voluptatem itaque accusantium? Consectetur laborum saepe dicta eum maxime!</p>
      </ContainerBackHome>
    </div>
  )
}

export default Home