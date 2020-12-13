import * as React from 'react';
import ReactPlaceholder from 'react-placeholder/lib';
import { RoundShape } from 'react-placeholder/lib/placeholders';
import styled from 'styled-components';
import { DiscordContext } from '../Context';

const Image = styled.img`
    border-radius: 50%;
    border: #ffffff14 solid 1px;
    margin-right: 2rem;
`;

const Avatar = () => {
    const info = React.useContext(DiscordContext);

    return (
        <ReactPlaceholder ready={info !== null} showLoadingAnimation={true} customPlaceholder={(
            <RoundShape color="#333333" style={{width: 200, height: 200, borderRadius: "50%", marginRight: "2rem"}} />
        )}>
            <Image width="200" height="200" alt="rom's profile picture" src={info ? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.webp?size=256` : undefined} />
        </ReactPlaceholder>
    );
}

export default Avatar;