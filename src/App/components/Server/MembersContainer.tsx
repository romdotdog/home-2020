import * as React from 'react';
import styled from "styled-components";
import { DiscordMember } from './interfaces';
import Member from './Member';

// Purpose of this component is to stagger adding the members

const Main = styled.ul`
    list-style-type: none;
`;

interface Props {
    members: Array<DiscordMember>;
}

const MembersContainer: React.FC<Props> = ({ members }) => {
    const [numberToRender, setNumberToRender] = React.useState(0); // Number of members to render
    React.useEffect(() => {
        for (let i = 0; i < members.length; i++) {
            setTimeout(() => {
                setNumberToRender(i);
            }, i * 100);
        }
    }, [members])

    return (
        <Main>
            {
                members.slice(0, numberToRender + 1).map(m => (
                    <Member {...m} />
                ))
            }
        </Main>
    );
}

export default MembersContainer;

