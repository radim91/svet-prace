import Image from "next/image";
import { useState } from "react";

const Source = ({ className, sources }) => {
  const [sourceExpanded, setSourceExpanded] = useState(false);
  
  const expandSource = () => {
    setSourceExpanded(!sourceExpanded);
  };
  
  return (
    <div className={`
      absolute
      left-0
      md:left-3/4
      md:p-[5px]
      z-50
      rounded
      flex
      bg-gray
      cursor-pointer
      items-start
      max-w-1/2
      ${className ?? ''}
      ${sourceExpanded ? 'border-2 border-blue-700 -mt-[2px]' : ''}
    `}>
      <Image
        src="/images/components/source.svg"
        width={18}
        height={18}
        alt="zdroj"
        onClick={expandSource}
      />
      {sourceExpanded && (
        <ol className="ms-6 text-xs ps-1 pt-1 pe-2 pb-2">
          {sources.map((item, index) => {
            return (
              <li className="list-decimal text-black" key={index}>
                {item}
              </li>
            );
          })}
          </ol>
      )}
    </div>
  );
};

export default Source;