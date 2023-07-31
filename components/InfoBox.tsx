const InfoBox = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-slate-400 font-medium text-sm">{text}</span>
      <span className="font-bold text-neutral-600 font-comfort text-sm tracking-wide">
        {value}
      </span>
    </div>
  );
};

export default InfoBox;
