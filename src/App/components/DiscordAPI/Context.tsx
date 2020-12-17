import * as React from 'react';
import { DiscordInfo } from './interfaces';

export const DiscordContext = React.createContext<DiscordInfo | null>(null)
const Context: React.FC = ({ children }) => {
    const [ info, setInfo ] = React.useState<DiscordInfo | null>(null);

    React.useEffect(() => {
        fetch("https://edge.rom.dog/dsc.bio/rom")
            .then(r => r.json())
            .then(r => {
                setInfo(r?.payload?.discord)
            })
    }, [])

    return (
        <DiscordContext.Provider value={info}>
            {children}
        </DiscordContext.Provider>
    );
}

export default Context;