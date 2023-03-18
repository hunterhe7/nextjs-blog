import Image from "next/image";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} width="1920" height="1200" {...props} />
);

export default {
  img: ResponsiveImage,
};
