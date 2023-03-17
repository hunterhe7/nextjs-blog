import Date from "../components/date";

export default function ArticleList({ allPostsData }) {
  return (
    <>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <a
              href={`/posts/${id}`}
              className="flex justify-between mt-2 hover:text-gray-400"
            >
              <span className="font-mono">{title}</span>
              <div className="opacity-50">
                <Date dateString={date} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
