import React from 'react';

interface TitleWidgetProps {
  title?: string;
  subTitle?: string;
}

const TitleWidget: React.FC<TitleWidgetProps> = ({ title, subTitle }) => {
  return (
    <div className="flex justify-center"> <div className="text-center mb-5"> <span className="relative inline-block text-[12px] font-semibold uppercase tracking-[2px] text-[#67d34f] before:content-[''] before:absolute before:top-1/2 before:-left-[60px] before:w-[50px] before:h-px before:bg-[#67d34f] before:-translate-y-1/2 after:content-[''] after:absolute after:top-1/2 after:-right-[60px] after:w-[50px] after:h-px after:bg-[#67d34f] after:-translate-y-1/2" > {subTitle} </span> <h2 className="mt-2 text-4xl font-bold"> {title} </h2> </div> </div>
  );
};

export default TitleWidget;
