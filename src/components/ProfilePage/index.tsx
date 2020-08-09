import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Followage,
  EditButton,
  LocationIcon,
  CakeIcon,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Leonardo Lira</h1>
        <h2>@delira</h2>

        <p>
          Developer at <a href="">@FR</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Piracicaba, São Paulo
          </li>
          <li>
            <CakeIcon />
            Nascido em 13 de Maio de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>18</strong>
          </span>
          <span>
            <strong>177</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
