type Props = {
  title: string;
  date: string;
};

function Title({ title, date }: Props) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 w-full mb-4">
      <h1 className="text-2xl font-bold text-white">
        {title}
      </h1>

      <span className="text-sm text-gray-500 whitespace-nowrap">
        ~ {date}
      </span>
    </div>
  );
}

export default Title;
