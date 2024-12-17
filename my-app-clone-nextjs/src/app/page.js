
export default async function Home() {

  const res = await fetch('http://localhost:3004/header')
  const header = await res.json()

  const items = header.items;
  
  console.log('Fetched items:', header);
  return (
    <div>
      {
        items.map((item) => (
          <li>{item.title}</li>
        ))
      }
    </div>
  );
}