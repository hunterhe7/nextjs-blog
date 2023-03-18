import Image from "next/image";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} width="1000" height="500" {...props} />
);

export default {
  img: ResponsiveImage,
};
