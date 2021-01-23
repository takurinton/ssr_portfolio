import * as React from 'react';
import { Gopher } from '../../utils/Character/Gopher';
import { Welcome } from './Welcome';

export const Main = () => {
    return (
        <div>
          <Gopher />
          <Welcome />
        </div>
    )
}
