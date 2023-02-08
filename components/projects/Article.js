const Article = ({ firstColumn, secondColumn, associates, collaborators }) => {
  return (
    <article className="container mx-auto px-4">
      <ul className="grid grid-cols-1 md:grid-cols-12 md:gap-10 py-8 md:py-16 lg:py-32">
        <li className="md:col-span-5">
          {firstColumn.map((paragraph, index) =>
            <div
              className={`text-primary text-xl leading-relaxed text-justify ${firstColumn.length -1 === index ? '' : 'mb-4'}`}
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          )}
        </li>
        <li className="md:col-start-7 md:col-span-5">
          {secondColumn.map((paragraph, index) =>
            <div
              className="text-primary text-xl leading-relaxed text-justify mb-4"
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          )}
          {associates ?
            <p
              className="text-primary text-xl leading-relaxed text-justify mb-4"
            >
              Asociados:
              <br />
              {associates}
            </p>
            : ''
          }
          {collaborators ?
            <p
              className="text-primary text-xl leading-relaxed text-justify"
            >
              Colaboradores:
              <br />
              {collaborators}
            </p>
            : ''
          }
        </li>
      </ul>
    </article>
  );
};

export default Article;