
type Props = {
  src: string;
  alt: string;
};

type CaptionProps = Props & {
  caption: string;
};

type CardProps = Props & {
  title: string;
  description: string;
};

// 1. Normal image
function Imagie({ src, alt }: Props) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
      <img src={src} alt={alt} className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105" />
    </div>
  );
}

// 2. Centered image
function ImagieCenter({ src, alt }: Props) {
  return (
    <div className="my-6 flex w-full justify-center">
      <img
        src={src}
        alt={alt}
        className="h-auto max-h-[500px] w-auto max-w-full rounded-2xl object-contain shadow-md"
      />
    </div>
  );
}

// 3. Full-width banner
function ImagieBanner({ src, alt }: Props) {
  return (
    <div className="my-6 w-full overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        className="aspect-[16/9] w-full object-cover"
      />
    </div>
  );
}

// 4. Image with caption
function ImagieCaption({ src, alt, caption }: CaptionProps) {
  return (
    <figure className="my-6 flex flex-col items-center gap-2">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full max-w-2xl rounded-2xl object-cover"
      />
      <figcaption className="text-center text-sm text-gray-500">
        {caption}
      </figcaption>
    </figure>
  );
}

// 5. Image card
function ImagieCard({ src, alt, title, description }: CardProps) {
  return (
    <div className="my-4 max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <img
        src={src}
        alt={alt}
        className="aspect-video w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

// 6. Small thumbnail
function CardSizeImage({ src, alt }: Props) {
  return (
    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}

export {
  Imagie,
  ImagieCenter,
  ImagieBanner,
  ImagieCaption,
  ImagieCard,
  CardSizeImage
};
