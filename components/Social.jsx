import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mohaideen-arsath-m-688392238" },
  { icon: <FaGithub />, path: "https://github.com/Mohaideen-Arsath" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/arsath._.07/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
