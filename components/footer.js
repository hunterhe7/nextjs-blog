export default function Footer() {
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
          <a href="https://movie.douban.com/people/147232795/">Douban</a>
        </li>
        <li className="border-b">
          <a href="/rss.xml">RSS</a>
        </li>
      </ul>
    </>
  );
}
