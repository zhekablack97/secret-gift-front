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
    <>
      <div className="flex items-center">
        <h1>Мероприятия</h1>
        <div className="ms-auto">
          <button>Создать мероприятие</button>
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
    </>
  );
};

export default Page;
