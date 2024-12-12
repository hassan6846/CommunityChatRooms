import "./Header.css";

interface HeaderProps {
    title: string; 
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <p className="wishlist_page_head">{props.title}</p>
    );
};

export default Header;
