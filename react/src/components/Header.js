export default function Header({tit,page1,page2}) {
  return (
    <>
     <header>
            <h1>{tit}</h1>
    </header>
    <nav>
        <a>{page1}</a>
        <a>{page2}</a>
    </nav>
    </>
   
  );
}