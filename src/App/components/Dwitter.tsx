import * as React from 'react';
import styled from 'styled-components';

// Having some fun.
// Check out dwitter.net, it's awesome!

const Frame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
`;

function htmlDecode(input: string) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

const Dwitter = () => {
    const [code, setCode] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetch("https://proxy.rom.dog/hot_dweet").then(r => r.json()).then(r => {
          setCode(htmlDecode(r.code));
        });
    }, []);

    return code ?
            (<Frame title="https://dwitter.net/" src={"https://canvas.rom.dog/?code=" + encodeURIComponent(code)} />)
            : (<></>);
}

export default Dwitter;