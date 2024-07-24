import { Header, Footer, Sidebar, Disclosure } from "../components";

export default function Page() {
  return (
    <>
      <Header />
      <Sidebar />
      <Disclosure title="Basics of Java" description="This module teaches the basics of Java and begins by exploring some of the different data types such as integers, floating-point numbers, and strings. Continue with the module and learn how to use expressions in mathematical operations, store values in variables, and the many different ways to manipulate strings."
        videoCount="6" readingCount="1"/>
      <Footer />
      <Footer />
    </>
  );
}