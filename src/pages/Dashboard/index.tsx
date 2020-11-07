import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboar: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore reposotórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="https://github.com/JoseVictorHendz">
        <img
          src="https://avatars3.githubusercontent.com/u/21372603?s=460&u=52d592a6747566a9db5b7ac21ab9931b5cd90687&v=4"
          alt="José Victor"
        />
        <div>
          <strong>José Victor Hendz Martins</strong>
          <p>Easy pease lemon squeeze</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="https://github.com/JoseVictorHendz">
        <img
          src="https://avatars3.githubusercontent.com/u/21372603?s=460&u=52d592a6747566a9db5b7ac21ab9931b5cd90687&v=4"
          alt="José Victor"
        />
        <div>
          <strong>José Victor Hendz Martins</strong>
          <p>Easy pease lemon squeeze</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="https://github.com/JoseVictorHendz">
        <img
          src="https://avatars3.githubusercontent.com/u/21372603?s=460&u=52d592a6747566a9db5b7ac21ab9931b5cd90687&v=4"
          alt="José Victor"
        />
        <div>
          <strong>José Victor Hendz Martins</strong>
          <p>Easy pease lemon squeeze</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboar;
