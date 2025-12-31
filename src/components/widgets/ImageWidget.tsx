import Image from "next/image";
import type { ImageWidgetProps } from "./utils/widget";

const ImageWidget = ({
  src,
  alt,
  sizes,
  ...props
}: ImageWidgetProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      {...props}
    />
  );
};

export default ImageWidget;
