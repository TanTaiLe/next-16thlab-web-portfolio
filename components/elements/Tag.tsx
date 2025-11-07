"use client";

type Props = {
  data: string[];
};

export const Tag = ({ data }: Props) => {
  return <div className="flex flex-wrap gap-4">
    {data.map((item) => (
      <TagItem key={item} label={item} />
    ))}
  </div>;
};

const TagItem = ({ label }: { label: string }) => {
  return <div className="rounded-full py-2 px-4 border border-[#1F252C] text-xl font-light">{label}</div>;
};
