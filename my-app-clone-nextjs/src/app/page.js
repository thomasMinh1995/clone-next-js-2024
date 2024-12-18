import Footer from "./components/Footer";
import Header from "./components/Header";
import ProxyP2P from "./components/ProxyP2P";

export default async function Home() {

  const res = await fetch('http://localhost:3001/header')
  const resFooter = await fetch('http://localhost:3001/footer')
  const rerP2pContainer = await fetch('http://localhost:3001/p2p')

  
  const header = await res.json()
  const footer = await resFooter.json()
  const p2pContainer = await rerP2pContainer.json()

  const items = header.items;
  const languages = header.languages;


  const paragraph =  footer.paragraph;
  const telegram = footer.telegram;
  const itemsFooter = footer.items

  const title = p2pContainer.title
  const subTitle = p2pContainer.subTitle
  const firstButton = p2pContainer.firstButton
  const secondButton = p2pContainer.secondButton
  const proxyItems = p2pContainer.proxyItems

  // console.log('proxyItems', proxyItems)

  return (
    <div>
      <Header items={items} languages={languages} />
      <ProxyP2P title={title} subTitle={subTitle} firstButton={firstButton} secondButton={secondButton} proxyItems={proxyItems} />
      <Footer paragraph={paragraph} telegram={telegram} items={itemsFooter} />
    </div>
  );
}