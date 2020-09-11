import React, { useRef, useState } from 'react';

interface Person {
    firstName: string,
    lastName: string
}


interface Props {
    text: string,
    ok?: boolean,
    integer?: number,
    fn?: (bob: string) => string,
    obj?: {
        f1: string
    }
    person: Person,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string
}

const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<number | null>(5);
    const [phrase, setPhrase] = useState<TextNode>({ text: 'hello' })
    const inputRef = useRef<HTMLInputElement>(null);


    setPhrase({ text: 'bye' });

    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}
export default TextField;