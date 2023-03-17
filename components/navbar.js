// export default function Footer() {
//   return (
//     <>
//       <ul className="flex justify-end space-x-6 text-gray-500 mt-5 mb-5 ">
//         <li>
//           <a href="/">Thoughts</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//       </ul>
//     </>
//   );
// }

import link from "./mylink";

const Item = ({ name, path, active }) => {
  if (!active) {
    return (
      // <link.a href={path} prefetch>
      <a href={path}>{name}</a>
    );
  }
  return <span>{name}</span>;
};

export default function Navbar({ url }) {
  return (
    <div className="flex justify-end space-x-6 text-gray-500 mt-5 mb-5">
      <Item name="Thoughts" path="/" active={url === "/"} />
      <Item name="About" path="/about" active={url === "/about"} />
    </div>
  );
}
