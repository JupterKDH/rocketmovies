import { Container, Profile } from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";


export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile to="/profile">
        <div>
          <strong>Konrad Hayashi</strong>
          <Link to="/">sair</Link>
        </div>
        <img 
          src="https://github.com/JupterKDH.png" 
          alt="Foto do usuário" 
        />
      </Profile>
    </Container>
  )
}