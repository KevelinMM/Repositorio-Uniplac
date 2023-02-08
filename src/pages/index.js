import Back from "../components/Back";
import Tags from "../components/Tags";
import Publi from "../components/Publi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Home() {
  return (
    <section className="bg-gray-100 tracking-normal">
      <Header />
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 lg:min-h-screen">
        <Tags />

        <div className="text-lg w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-300 border-rounded">
          <h2 className="page-title">Últimas Publicações</h2>
          <Publi />
  
          <Form />
        </div>

        <Back />
      </div>
      <Footer />
    </section>
  );
}
