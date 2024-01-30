import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

export default function layout({ children }) {
  return (
    <>
      <Header/>
      <main className="mt-32">{children}</main>
      <Footer/>
    </>
  )
}
