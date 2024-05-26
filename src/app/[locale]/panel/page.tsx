import { ButtonPrimary } from "@/style/Button";
import { H1 } from "@/style/Typography";
import Image from "next/image";
import Link from "next/link";

const mocData = [
  {
    id: 1,
    img: "/image/1.jpg",
    title: "Secret santa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni, fugit, tenetur assumenda esse numquam necessitatibus sequi aspernatur rem fugiat reiciendis delectus ipsa perspiciatis obcaecati blanditiis et odio velit! Beatae. ",
  },
  {
    id: 2,
    img: "/image/1.jpg",
    title: "Secret santa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni, fugit, tenetur assumenda esse numquam necessitatibus sequi aspernatur rem fugiat reiciendis delectus ipsa perspiciatis obcaecati blanditiis et odio velit! Beatae. ",
  },
  {
    id: 3,
    img: "/image/1.jpg",
    title: "Secret santa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni, fugit, tenetur assumenda esse numquam necessitatibus sequi aspernatur rem fugiat reiciendis delectus ipsa perspiciatis obcaecati blanditiis et odio velit! Beatae. ",
  },
];

const Page: React.FC = () => {
  return (
    <main className="px-9 flex flex-col gap-6 grow ">
      <div className="flex items-center">
        <h1 className={H1.className}>Мероприятия</h1>
        <div className="ms-auto">
          <button className={ButtonPrimary.className}>
            Создать мероприятие
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {mocData.map((item) => {
          return (
            <article key={item.id}>
              <Image src={item.img} alt="Картинка" width={320} height={320} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <Link href={`panel/${String(item.id)}`}>View Details</Link>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
