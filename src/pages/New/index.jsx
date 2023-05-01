import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section"
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";


import { Container, Form } from "./styles";


export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title= "Voltar" to="/"/>
            <h1>Novo filme</h1>
          </header>

          <div className="Inputs">
            <Input placeholder="Título"/>

            <Input placeholder="Sua nota (de 0 a 5)"/>  
          </div>
          
          <Textarea placeholder="Observações"/>

          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="react"/>
            <NoteItem isNew placeholder="Novo marcador"/>

            </div>
          </Section>

          <div className="Buttons">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>

        </Form>
      </main>
    </Container>
  )
}