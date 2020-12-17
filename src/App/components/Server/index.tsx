import * as React from 'react';
import styled from 'styled-components';
import CompactOnline from './CompactOnline';
import { DiscordWidget, DiscordWidgetWithAccess } from './interfaces';
import { Info } from './Info';
import Member from './Member';

interface ServerProps {
    id: string;
    icon: string;
    name: string;
    compact?: boolean;
}

const Main = styled.div`
    display: flex;
    margin-left: 1rem;
    height: 50px;
`;

const Icon = styled.img`
    margin-right: .7rem;
`;

const Join = styled.button`
    color: #fff;
    background-color: #208637;
    -webkit-appearance: button;
    align-self: center;
    margin-left: auto;
    margin-right: 1rem;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, 
                background-color .15s ease-in-out, 
                border-color .15s ease-in-out, 
                box-shadow .15s ease-in-out, 
                opacity .15s ease-in-out;
    cursor: pointer;
    width: 5rem;

    :hover {
        color: #fff;
        background-color: #1a6d2d;
        border-color: #28a845;
        text-decoration: none
    }

    :focus {
        box-shadow: rgba(32,134,55,.5) 0 0 0 .2rem;
        outline: 0
    }

    :not(.visible) {
        opacity: 0;
        cursor: unset
    }
`;

const MembersContainer = styled.ul`
    list-style-type: none;
`;

function openInvite(invite: string, name: string) : void {
    window.open(
        invite,
        `Invite to ${name}`,
        "menubar=no,width=524,height=777,location=no,resizable=no,scrollbars=yes,status=no"
    )
}

const Server: React.FC<ServerProps> = ({ id, name, icon, compact }) => {
    const [widget, setWidget] = React.useState<DiscordWidget | null>(null);

    React.useEffect(() => {
        (async () => {
            let newWidget : DiscordWidget;
            const now = new Date().getTime();

            const storage = localStorage.getItem(id);
            const cache = (storage && JSON.parse(storage)) as DiscordWidgetWithAccess | null;

            if (cache && cache.access > now - (7200 * 1000)) { // 7200 is 2 hours, so cache is only effective for two hours.
                newWidget = cache;
            } else {
                newWidget = await (await fetch(`https://edge.rom.dog/discord/${id}`)).json()
                localStorage.setItem(id, 
                    JSON.stringify({
                        access: now,
                        ...newWidget
                    } as DiscordWidgetWithAccess)    
                )
            }

            setWidget(newWidget);
        })();
    }, [id])

    return (
        <>
            <Main>
                <Icon width="50" height="50" alt={`${name} icon`} src={icon} />
                <Info>{name}</Info>
                <Join className={widget !== null ? "visible" : ""} onClick={widget !== null ? (() => openInvite(widget.instant_invite, name)) : undefined}>Join</Join>
            </Main>
            {widget !== null && 
                (
                    compact ? 
                    (
                        <CompactOnline count={widget.members.length} />
                    ) : (
                        <MembersContainer >
                            {
                                widget.members.map((m, i) => 
                                    ( 
                                        <Member key={m.id} member={m} index={i} /> 
                                    )
                                )
                            }
                        </MembersContainer>
                    )
                )
            }
        </>
    );
}

export default Server;