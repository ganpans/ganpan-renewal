import { BodyLargeEn } from './Typography';
const Toggle = () => {
  return (
    <div className="relative">
      <div className="w-[120px] h-[43px] flex justify-between items-center px-[12px] border-[1px] rounded-[40px] border-white bg-black text-white">
        <BodyLargeEn className="">KR</BodyLargeEn>
        <BodyLargeEn className="">EN</BodyLargeEn>
      </div>

      <div className="absolute top-0 left-0 w-[63px] h-[43px] flex justify-center items-center text-center border-[1px] rounded-[40px] border-black bg-white text-black">
        <BodyLargeEn className="">KR</BodyLargeEn>
      </div>
    </div>
  );
};

export default Toggle;
