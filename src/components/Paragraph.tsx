import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;  
};

function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-gray-700 leading-7 text-white/50 mb-10">
      {children}
    </p>
  );
}

export default Paragraph;
