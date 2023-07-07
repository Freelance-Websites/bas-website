const Article = ({ firstColumn, secondColumn, associates, collaborators, photos }) => {
  return (
    <article className="container mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-12 pt-4 md:pt-8 lg:pt-12 pb-4 md:pb-8 lg:pb-12 xl:pb-24">
        <li>
          {firstColumn.map((paragraph, index) =>
            <div
              className={`text-gray-900 text-md leading-relaxed text-justify ${firstColumn.length -1 === index ? '' : 'mb-4'}`}
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          )}
        </li>
        <li>
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
          {photos ?
            <p
              className="text-gray-900 text-md leading-relaxed text-justify mt-4"
            >
              Fotos:
              <br />
              {photos}
            </p>
            : ''
          }
        </li>
      </ul>
    </article>
  );
};

export default Article;