import './HoverText.scss';

const HoverText = ({children})=>{
    const word = children;
    const arr =word.split('');
    console.log(arr);
    return (arr.map( (letter,index) =>{
            return(<span key={index} className="animate-letter">
                    {letter === ' ' ? '\u00A0' : letter}
                    </span>
        );
        })
    );
}

export default HoverText;
