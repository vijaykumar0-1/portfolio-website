import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const social = [
    {
        icon:<FaGithub/>, path:""
    },
    {
        icon:<FaLinkedin/>, path:""
    }
]
interface SocialProps {
    containerStyle?: string;
    iconStyle?: string;
  }

const Social: React.FC<SocialProps> = ({ containerStyle, iconStyle }) => {
    return (
      <div className={containerStyle}>
        {social.map((item, index) => (
          <Link href={item.path} key={index} className={iconStyle}>
            {item.icon}
          </Link>
        ))}
      </div>
    );
  };

export default Social