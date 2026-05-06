import Link from "next/link";
import { FaGithub, FaYoutube, FaTwitter ,FaLinkedinIn, FaWhatsapp, FaMailBulk, FaMagnet} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaMessage />, path: "" },
  { icon: <FaTwitter />, path: "" },
  
 
  
];

const Socials = ({containerStyle,iconStyles}) => {
  return <div className={containerStyle}>
    {socials.map((items,index)=>{
        return (
            <Link key={index} href={items.path} className={iconStyles}>{items.icon}</Link>
        )
    })}
  </div>;
};

export default Socials;
