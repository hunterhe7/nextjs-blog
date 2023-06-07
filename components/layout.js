import Date from "./helper/date";
import MyLink from "./helper/mylink";

export function Main({ children }) {
  return (
    <div className="container mx-auto max-w-2xl py-20 px-5">{children}</div>
  );
}

export function Headline({ head }) {
  return <h2 className="font-mono text-2xl font-bold mb-2">{head}</h2>;
}

const Item = ({ name, path, active }) => {
  if (!active) {
    return <MyLink href={path}>{name}</MyLink>;
  }
  return <span>{name}</span>;
};

export function Navbar({ url }) {
  return (
    <div className="flex justify-end space-x-6 text-gray-500 mt-5 mb-5">
      <Item name="Thoughts" path="/" active={url === "/"} />
      <Item name="About" path="/about" active={url === "/about"} />
    </div>
  );
}

export function ArticleList({ allPostsData }) {
  return (
    <>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <MyLink
              href={`/posts/${id}`}
              className="flex justify-between mt-2 hover:text-gray-400"
            >
              <span className="font-mono">{title}</span>
              <div className="opacity-50">
                {/* <Date dateString={date} /> */}
              </div>
            </MyLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Footer() {
  return (
    <>
      <div className="w-full h-0.5 bg-gray-100 mt-10"></div>

      <ul className="flex flex-row space-x-6 text-gray-500 mt-5 mb-5 ">
        <li className="basis-20">
          <a href="https://twitter.com/huntermatrix_">Twitter</a>
        </li>
        <li className="basis-20">
          <a href="https://github.com/huntermatrix">Github</a>
        </li>
        <li className="basis-20">
          <a href="https://neodb.social/users/huntermatrix@mastodon.world/">
            NeoDB
          </a>
        </li>
        <li className="basis-20">
          <a href="/rss.xml">RSS</a>
        </li>
      </ul>
    </>
  );
}

export default { Main, Headline, Navbar, ArticleList, Footer, Date };
