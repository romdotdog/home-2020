import * as React from 'react';
import ReactPlaceholder from 'react-placeholder/lib';
import styled from 'styled-components';
import { DiscordContext } from '../Context';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    div {
        width: 100%;
    }
`;

const Header = styled.span`
    font-size: 1.4rem;
`;

const Username = styled(Header)`
    color: #e8e6e3;
    font-weight: 700;
`;

const Discriminator = styled(Header)`
    color: #b1aba1;
    font-weight: 500;
`;

const ID = styled.span`
    color: #b1aba1;
    font-size: 12px;
    font-weight: 800;
`;

const Info = () => {
    const info = React.useContext(DiscordContext);

    return (
        <ReactPlaceholder type="text" rows={4} ready={info !== null} color="#333333" showLoadingAnimation={true}>
            {
                info !== null && // stupid typescript >:(
                (
                    <Container>
                        <div>
                            <Username>rom</Username><Discriminator>#{info.discriminator}</Discriminator>
                        </div>
                        <div>
                            <ID>ID: {info.id}</ID>
                        </div>
                    </Container>
                )
            }
        </ReactPlaceholder>
    );
}

export default Info;