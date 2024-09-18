function Word({ word }) {
    return (
        <div className="word">
            <h1>
                {word.title}
            </h1>
            <h3>
                {word.definition}
            </h3>
            {word.example.map((example, i) => (
                <i key={i}><p>{example}</p></i>
            ))}
            <p className="credits">viết bởi {word.author} <b>{word.date}</b></p>
        </div>
    );
}

export default Word;