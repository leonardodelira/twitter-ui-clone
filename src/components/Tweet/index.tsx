import React from 'react';

import {
  Container,
  Retweeted,
  RockeseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockeseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rockeseat</strong>
            <strong>@rockeseat</strong>
            <Dot />
            <time>08 de ago</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              14
            </Status>
            <Status>
              <RetweetIcon />
              55
            </Status>
            <Status>
              <LikeIcon />
              98
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
