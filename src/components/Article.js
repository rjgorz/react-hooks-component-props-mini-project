const Article = ({ title, date = 'January 1, 1970', preview, minutes }) => {
    let emojis = '';
    if(minutes < 30) {
        const emoji = '☕️';
        for(let i = 1; i <= Math.ceil(minutes/5); i++)
            emojis += emoji;
    } else if(minutes >= 30) {
        const emoji = '🍱';
        for(let i = 1; i <= Math.ceil(minutes/10); i++)
            emojis += emoji;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date + ' • ' + emojis + ' ' + minutes + ' min read'}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;