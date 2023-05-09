
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import moment from 'moment-timezone';

import { Container } from "./styles";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Button } from"../../components/Button"
import { Input } from "../../components/Input";
import { Note } from"../../components/Note"
import { Tag } from "../../components/Tag";



export function Details(){
  const [data, setData] = useState({});

  const params = useParams();

  const {user} = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const formattedDate = moment.utc(data.updated_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?");

    if(confirm) {
      await api.delete(`/movies${params.id}`);
      navigate(-1);
    }
  }


  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, [])
 
  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
        />
      </Header>

      {
        data &&
        <main>
          <header>
            <ButtonText onClick={handleBack}>
              <FiArrowLeft/>
              Voltar
            </ButtonText>

            <div>
              <h1>{data.title}</h1>
              <Note grade={data.note} isBigSize />
            </div>

            <div className='movie-info'>
              <p>
                <img 
                  src={avatarURL}
                  alt={user.name}
                />
                Por {user.name}
              </p>

              <div>
                <FiClock/>

                <p>{formattedDate}</p>

              </div>
            </div>

          </header>

          {
            data.tags &&
            <section>
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </section>
          }

          <p>{data.description}</p>

          <div>
            <Button
              title="Excluir filme"
              onClick={handleRemove}
            />
          </div>

        </main>  
      }  
    </Container>
  );  
}