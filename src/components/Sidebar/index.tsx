import React from 'react';

import List from '../List';
import FollowSugesttions from '../FollowSugesttions';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talve você curta"
          elements={[
            <FollowSugesttions name="Lucas Lira" nickname="@deliralucas" />,
            <FollowSugesttions name="Almir Souza" nickname="@almiS" />,
            <FollowSugesttions name="Larissa T." nickname="@lari" />,
          ]}
        />

        <List
          title="O que está acontecendo"
          elements={[<News />, <News />, <News />]}
        />
      </Body>
    </Container>
  );
};

export default Sidebar;
