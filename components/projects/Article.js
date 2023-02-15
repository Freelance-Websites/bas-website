const Article = ({ firstColumn, secondColumn, associates, collaborators }) => {
  return (
    <article className="container mx-auto px-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 md:gap-8 lg:gap-12 pt-4 md:pt-8 lg:pt-12 pb-4 md:pb-8 lg:pb-12 xl:pb-24">
        <li className="lg:col-span-5">
          {firstColumn.map((paragraph, index) =>
            <div
              className={`text-gray-900 text-md leading-relaxed text-justify ${firstColumn.length -1 === index ? '' : 'mb-4'}`}
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          )}
        </li>
        <li className="lg:col-start-7 lg:col-span-5">
          {secondColumn.map((paragraph, index) =>
            <div
              className="text-gray-900 text-md leading-relaxed text-justify mb-4"
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          )}
          {associates ?
            <p
              className="text-gray-900 text-md leading-relaxed text-justify mb-4"
            >
              Asociados:
              <br />
              {associates}
            </p>
            : ''
          }
          {collaborators ?
            <p
              className="text-gray-900 text-md leading-relaxed text-justify"
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