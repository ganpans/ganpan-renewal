import Header from '../../../components/layout/Header';
const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-black w-screen h-screen px-[30px] py-[40px]">
      <Header step={params.id} />
    </div>
  );
};

export default Page;
