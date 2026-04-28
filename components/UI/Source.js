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
      -ms-12
      z-50
      bg-white
      opacity-90
      rounded
      flex
      items-start
      ${className ?? ''}
    `}>
      <Image
        src="/images/components/source.svg"
        width={25}
        height={25}
        alt="zdroj"
        onClick={expandSource}
      />
      {sourceExpanded && (
        <ol className="ms-6 text-xs ps-1 pt-1 pe-2 pb-2">
          {sources.map((item, index) => {
            return (
              <li className="list-decimal" key={index}>
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