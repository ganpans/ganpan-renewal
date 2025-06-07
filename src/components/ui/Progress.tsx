import { BodyLarge } from './Typography';
const Progress = ({ step }) => {
  console.log(step);

  return (
    <div className="flex gap-6 h-[43px]">
      <div className="flex gap-2">
        <BodyLarge className="w-[41px] flex items-center justify-center bg-white text-black">
          1
        </BodyLarge>
        <BodyLarge className="text-white">문구 입력</BodyLarge>
      </div>
      <div className="flex gap-2">
        <BodyLarge className="w-[41px] flex items-center justify-center bg-white text-black">
          2
        </BodyLarge>
        <BodyLarge className="text-white">이미지 생성</BodyLarge>
      </div>
      <div className="flex gap-2">
        <BodyLarge className="w-[41px] flex items-center justify-center bg-white text-black">
          3
        </BodyLarge>
        <BodyLarge className="text-white">출처 확인</BodyLarge>
      </div>
      <div className="flex gap-2">
        <BodyLarge className="w-[41px] flex items-center justify-center bg-white text-black">
          4
        </BodyLarge>
        <BodyLarge className="text-white">저장</BodyLarge>
      </div>
    </div>
  );
};

export default Progress;
