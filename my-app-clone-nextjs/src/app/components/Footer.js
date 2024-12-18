const Footer = ({paragraph, telegram, items}) => {
return (
    <footer className="bg-gray-100 p-6 border-t"> <p className="mb-4"> {paragraph.content} </p> <div className="mb-4"> <h3 className="font-semibold">{telegram.title}</h3> <p>{telegram.content}</p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {items.map((item, index) => ( <div key={index}> <h4 className="font-semibold mb-2">{item.title}</h4> <ul> {item.subTitle.map((subItem, subIndex) => ( <li key={subIndex} className="mb-1"> {subItem} </li> ))} </ul> </div> ))} </div> </footer>
)
}

export default Footer;