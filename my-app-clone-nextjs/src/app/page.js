import Footer from "./components/Footer";
import Header from "./components/Header";

export default async function Home() {

  const res = await fetch('http://localhost:3001/header')
  const resFooter = await fetch('http://localhost:3001/footer')
  
  const header = await res.json()
  const footer = await resFooter.json()

  const items = header.items;
  const languages = header.languages;


  const paragraph =  footer.paragraph;
  const telegram = footer.telegram;
  const itemsFooter = footer.items
  
  
  console.log('Fetched items:', header);
  return (
    <div>
      <Header items={items} languages={languages} />
      <Footer paragraph={paragraph} telegram={telegram} items={itemsFooter} />
    </div>
  );
}