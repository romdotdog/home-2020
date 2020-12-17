import * as React from 'react';
import marked from 'marked';
import ReactPlaceholder from 'react-placeholder/lib';
import styled from 'styled-components';

import './darkdown.css';
import Header from './Header';

const Padding = styled.div`
    padding: 24px;
    max-width: 1012px;
    margin-left: auto;
    margin-right: auto;
`

const Markdown = () => {
    const [markdown, setMarkdown] = React.useState("");

    React.useEffect(() => {
        fetch("https://edge.rom.dog/gh/README/romdotdog")
            .then(r => r.text())
            .then(r => {
                setMarkdown(r);
            })
    }, [])

    return (
        <Padding>
            <ReactPlaceholder type='text' rows={16} color="#333333" showLoadingAnimation={true} ready={markdown !== ""}>
                <Header />
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
            </ReactPlaceholder>
        </Padding>
    );
};

export default Markdown;