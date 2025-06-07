import { BodyLarge } from './Typography';

interface ProgressProps {
  step: number;
}

const Progress = ({ step }: ProgressProps) => {
  return (
    <div className="flex gap-6 h-[43px]">
      <div className={`flex gap-2 `}>
        <BodyLarge
          className={`w-[41px] flex items-center justify-center ${step === 1 ? 'bg-[rgb(255,0,250)]' : 'bg-white'} text-black`}
        >
          1
        </BodyLarge>
        <BodyLarge
          className={`${step === 1 ? 'text-[rgb(255,0,250)]' : 'text-white'}`}
        >
          문구 입력
        </BodyLarge>
      </div>
      <div className="flex gap-2">
        <BodyLarge
          className={`w-[41px] flex items-center justify-center ${step === 2 ? 'bg-[rgb(255,0,250)]' : 'bg-white'} text-black`}
        >
          2
        </BodyLarge>
        <BodyLarge
          className={`${step === 2 ? 'text-[rgb(255,0,250)]' : 'text-white'}`}
        >
          이미지 생성
        </BodyLarge>
      </div>
      <div className="flex gap-2">
        <BodyLarge
          className={`w-[41px] flex items-center justify-center ${step === 3 ? 'bg-[rgb(255,0,250)]' : 'bg-white'} text-black`}
        >
          3
        </BodyLarge>
        <BodyLarge
          className={`${step === 3 ? 'text-[rgb(255,0,250)]' : 'text-white'}`}
        >
          출처 확인
        </BodyLarge>
      </div>
      <div className="flex gap-2">
        <BodyLarge
          className={`w-[41px] flex items-center justify-center ${step === 4 ? 'bg-[rgb(255,0,250)]' : 'bg-white'} text-black`}
        >
          4
        </BodyLarge>
        <BodyLarge
          className={`${step === 4 ? 'text-[rgb(255,0,250)]' : 'text-white'}`}
        >
          저장
        </BodyLarge>
      </div>
    </div>
  );
};

export default Progress;
