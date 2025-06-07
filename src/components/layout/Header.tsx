import Progress from '../ui/Progress';
import Toggle from '../ui/Toggle';

const Header = ({ step }) => {
  return (
    <div className="flex justify-between">
      <Toggle />
      <Progress step={step} />
    </div>
  );
};

export default Header;
