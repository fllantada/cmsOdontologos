"use client"

import { UserContext, UserProfile } from '@auth0/nextjs-auth0/client';
import { UserProps } from '@auth0/nextjs-auth0/dist/client/with-page-auth-required';
import { ReactComponentElement } from 'react';
import getCitas from '../../service/getCitas'
import CardCita  from '../CardCita.screen/CardCita';
export const Citas :React.FC = () => {
  let citas = getCitas();
  return (

    citas.map((item) => {
      < CardCita c={item} />
    }
    )
  );
}





















    



