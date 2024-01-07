// import './nav-bar-styles.css'

const navigation = [
    { name: "Inicio", href: "#", current: true },
    { name: "Tienda", href: "#", current: false },
    { name: "Conozcanos", href: "#", current: false },
    { name: "Contactenos", href: "#", current: false },
];

export const ButtonsNav = () => {
    return (
        <>
        {navigation.map((item) => (
            <li className=" ">
            <a
            className="p-6 text-font-nav"
            key={item.name}
                href={item.href}
            
            aria-current={item.current ? "page" : undefined}
            
            style={{fontFamily: 'Open Sans, sans-serif', fontSize:'17px',fontStyle:'italic',fontWeight:'bolder'}}
            >
            {item.name}
            </a>
            </li>
        ))}
        </>
        
        
    );
};
