import Image from "next/image";
import Link from "next/link";

const mocData = {
  id: 1,
  img: "/image/1.jpg",
  title: "Secret santa",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni, fugit, tenetur assumenda esse numquam necessitatibus sequi aspernatur rem fugiat reiciendis delectus ipsa perspiciatis obcaecati blanditiis et odio velit! Beatae. ",
};

const Page: React.FC = () => {
  return (
    <main className="px-9 flex flex-col gap-6 grow">
      <div>
        <h1>{mocData.title}</h1>
      </div>
      <div className="flex">участники</div>
    </main>
  );
};

export default Page;
