import Header from "./components/Header";

export default async function Home() {

  const res = await fetch('http://localhost:3001/header')
  const header = await res.json()

  const items = header.items;
  const languages = header.languages;
  
  console.log('Fetched items:', header);
  return (
    <div>
      <Header items={items} languages={languages} />
    </div>
  );
}