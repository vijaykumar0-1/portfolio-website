import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const social = [
    {
        icon:<FaGithub/>, path:"https://github.com/vijaykumar0-1"
    },
    {
        icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/vijaydas2210"
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
          <Link target="_blank" href={item.path} key={index} className={iconStyle}>
            {item.icon}
          </Link>
        ))}
      </div>
    );
  };

export default Social