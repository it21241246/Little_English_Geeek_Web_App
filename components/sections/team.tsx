import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const guiders = [
  {
    id: "person-1",
    name: "Wishalya Tissera",
    role: "Supervisor",
    avatar: "/images/members/wishalya-tissera.jpeg",
  },
  {
    id: "person-2",
    name: "Hasini De Silva",
    role: "Co-Supervisor",
    avatar: "/images/members/hasini-de-silva.jpg",
  },
];

const members = [
  {
    id: "person-5",
    name: "Nipun Palliuaguru",
    role: "Leader",
    avatar: "/images/members/nipun-palliuaguru.png",
  },
  {
    id: "person-6",
    name: "Diwan Sachidu",
    role: "Member",
    avatar: "/images/members/diwan-sachidu.jpg",
  },
  {
    id: "person-7",
    name: "Nipuna Nadeeshan",
    role: "Member",
    avatar: "/images/members/nipuna-nadeeshan.jpg",
  },
  {
    id: "person-8",
    name: "Kusal Doranegoda ",
    role: "Member",
    avatar: "/images/members/kusal-doranegoda.png",
  },
];

const Team = () => {
  return (
    <section className="my-12" id="about">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-gray-700 font-semibold uppercase tracking-wide text-2xl">
          Meet our team
        </h2>
        <p className="mb-8 max-w-5xl text-muted-foreground text-center text-slate-500 dark:text-slate-300">
          Here you can get to know the dedicated and talented members of our
          research team. We are a group of passionate individuals who share a
          common goal of advancing knowledge and making a positive impact
          through our research projects.
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 grid-cols-2 lg:flex lg:gap-56 items-center justify-center">
        {guiders.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} className="object-cover" />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
          </div>
        ))}
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 grid-cols-2 lg:grid-cols-4">
        {members.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} className="object-cover" />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
