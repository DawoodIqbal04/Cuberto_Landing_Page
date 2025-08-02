import React from "react";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Roboto = ({ text }: { text: string }) => {
  const tilt = text.split("");
  return (
    <div className={`${roboto.className} lg:font-extralight font-light flex gap-1 `}>
      {tilt.map((t, i) => (
        <p key={i} className="italic scale-x-[115%]">
          {t}
        </p>
      ))}
    </div>
  );
};

export default Roboto;