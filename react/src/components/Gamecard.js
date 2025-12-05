export default function Gamecard ({link,tit, gene}) {
    return(
        <>
        <article>
            < img src={link}/>
            <h1>{tit}</h1>
            <p>{gene}</p>
        </article>


        </>


    );
}