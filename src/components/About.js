import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-center">
        Welcome to About Us Page.
      </h1>
      <UserClass name={"Abhishek Mohata"} city={"Surat"} />
    </div>
  );
};

export default About;
