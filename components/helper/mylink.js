import Link from "next/link";

export default function MyLink({ children, href, prefetch, ...props }) {
  let external = false;

  if (href && (/^(https?:\/\/|\/\/)/.test(href) || /^(mailto:)/.test(href))) {
    external = true;
  }

  if (external) {
    return <Link href={href} target="_blank" {...props}></Link>;
  } else {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
}
