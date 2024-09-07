function Word({word}) {
    return(
        <div className="Word">
            <h1>
                {word.title}
            </h1>
            <h3>
                {word.definition}
            </h3>
            {word.example.map((example, i) => (
                <i><p key={i}>{example}</p></i>
            ))}
            viết bởi {word.author} <b>{word.date}</b>

        </div>
    )
}

export default Word;
