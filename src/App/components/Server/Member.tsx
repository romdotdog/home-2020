import * as React from 'react';
import styled from 'styled-components';

import { DiscordMember } from './interfaces';
import { Info } from './Info';

const Content = styled.div`
    @keyframes animateIn {
          0% {
              opacity: 0;
              transform: translateX(-20%)
          }

          to {
              opacity: 1
          }
    }
    
    display: flex;
    position: absolute;
    height: 2.7rem;
    animation: animateIn 350ms ease-out;
`;

const Icon = styled.img`
    height: 100%;
    margin-right: .7rem;
    border-radius: 50%;
`;

const Subtext = styled.span`
    width: 100%;
    font-size: 12px;
    color: #9e9e9e;
`;

const Margin = styled.div`
    @keyframes sizeIn {
          0% {
              height: 0
          }
    }

    height: 3.5rem;
    animation: sizeIn 150ms ease;
`;

const Member: React.FC<DiscordMember> = ({ id, username, avatar_url, game }) => (
    <li key={id}>
        <Content>
            <Icon src={avatar_url} />
            <Info>
                {username}
                {game && 
                    (
                        <Subtext>
                            Playing <strong>{game.name}</strong>
                        </Subtext>
                    )
                }
            </Info>
        </Content>
        <Margin />
    </li>
);

export default Member;