import Ganpan from '../../../public/ganpan.svg';
import Progress from '../ui/Progress';
import Toggle from '../ui/Toggle';
const Header = ({ step }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-8">
        <Ganpan width={225} height={62} />
        <Toggle />
      </div>
      <Progress step={Number(step)} />
    </div>
  );
};

export default Header;
