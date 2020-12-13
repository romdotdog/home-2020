import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    font-size: 12px;
    margin-bottom: 16px;
    color: #ccc;
`;

const Octicon = styled.svg`
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 6px;
    fill: currentColor;

    path {
        shape-rendering: geometricPrecision;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: #c6c6c6;

    :hover {
        color: #4f8cc9;
    }
`;

const Light = styled.span`
    color: #9b9b9b;
`;

const Slash = styled(Light)`
    padding: 0px 2px;
    display: inline-block;
    color: #9b9b9b;
`;

const Header = () => (
    <Container>
        <Octicon className="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.326 1.973a1.2 1.2 0 011.49-.832c.387.112.977.307 1.575.602.586.291 1.243.71 1.7 1.296.022.027.042.056.061.084A13.22 13.22 0 018 3c.67 0 1.289.037 1.861.108l.051-.07c.457-.586 1.114-1.004 1.7-1.295a9.654 9.654 0 011.576-.602 1.2 1.2 0 011.49.832c.14.493.356 1.347.479 2.29.079.604.123 1.28.07 1.936.541.977.773 2.11.773 3.301C16 13 14.5 15 8 15s-8-2-8-5.5c0-1.034.238-2.128.795-3.117-.08-.712-.034-1.46.052-2.12.122-.943.34-1.797.479-2.29zM8 13.065c6 0 6.5-2 6-4.27C13.363 5.905 11.25 5 8 5s-5.363.904-6 3.796c-.5 2.27 0 4.27 6 4.27z"></path><path d="M4 8a1 1 0 012 0v1a1 1 0 01-2 0V8zm2.078 2.492c-.083-.264.146-.492.422-.492h3c.276 0 .505.228.422.492C9.67 11.304 8.834 12 8 12c-.834 0-1.669-.696-1.922-1.508zM10 8a1 1 0 112 0v1a1 1 0 11-2 0V8z"></path></Octicon>
        <Link href="https://github.com/romdotdog/romdotdog">romdotdog</Link>
        <Slash>/</Slash>
        README
        <Light>.md</Light>
    </Container>
);

export default Header;