// src/pages/Portfolio.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Components
const Section = ({ title, id, children }) => (
  <section id={id} className="py-8 scroll-mt-16">
    <h2 className="text-2xl font-bold mb-4 text-gray-100">{title}</h2>
    {children}
    <div className="border-b border-gray-700 mt-8" />
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc pl-5 text-gray-300">
    {items.map((item, index) => (
      <li key={index} className="mb-2">
        {item}
      </li>
    ))}
  </ul>
);

const StackSection = ({ category, badges }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-3 text-lg text-gray-100">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {badges.map((badge, index) => (
        <img
          key={index}
          src={badge}
          alt={`${category} badge ${index + 1}`}
          className="h-8"
        />
      ))}
    </div>
  </div>
);

const ProjectCard = ({ number, title, description, date, onClick }) => (
  <motion.div
    className="group cursor-pointer"
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
  >
    <div className="flex items-start gap-8">
      <span className="text-2xl font-light opacity-50">{number}</span>
      <div className="flex-1">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-2">{description}</p>
        <span className="text-sm text-gray-500">{date}</span>
        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-white to-gray-400 transition-all duration-300" />
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <div className="min-h-[300vh] bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2 className="text-6xl font-bold mb-32 leading-[80px]">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            💞️Frontend
            <br />
            Developer
          </motion.div>
        </motion.h2>

        {/* Profile and Name */}

        <motion.div
          className="flex flex-row items-center cursor-pointer mt-16"
          onClick={toggleAboutMe}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4E35AQE0KozTt4xDkw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1731838603702?e=1733166000&v=beta&t=3Ae5ixXPGUfvyhJkQgi-hlThgszublN6YOIlpKu9Sio"
            alt="profile"
            className="w-24 h-24 rounded-3xl object-cover shadow-lg md:w-32 md:h-32"
          />
          <h1 className="text-4xl font-bold ml-10 leading-[50px] text-gray-100 font-mono">
            Park ChoRong <br />
            박초롱
          </h1>
        </motion.div>
      </motion.section>
      {showAboutMe && (
        <motion.section
          className="px-20 py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Section title="👋 About Me" id="자기소개">
            <p className="m-2 leading-relaxed text-gray-300">
              안녕하세요! 웹서비스 개발자 박초롱입니다.
              <br />
              수학교육밖에 모르던 제가 유튜브 코딩을 보고 따라하다가
              <br />
              개발의 즐거움을 알게 되어 푹 빠져있습니다.
              <br />
              '어떻게 하면 모두가 조금이라도 편리하게 살수 있을까?'
              <br />
              이러한 간단한 질문이 세상을 바꿀 수 있다고 믿습니다.
              <br />
              저는 사람을 이해하는 기술로 사용자 중심의 웹서비스를 만들고자
              합니다.
            </p>
          </Section>

          {/* Education Section */}
          <Section title="👀 Education" id="교육">
            <List
              items={[
                "Web Development | 웹 개발 | Django 백엔드 과정 2024 | https://www.orm.im/camp",
                "Web Development | 웹 개발 | 강남구 혁신인재 아카데미 프론트엔드 과정 2024 | https://blog.naver.com/gn_ictacademy",
                "Artificial Intelligence | AI인공지능",
                "Mathematics Education | 수학교육",
              ]}
            />
          </Section>

          {/* Certificate Section */}
          <Section title="🔭 Certificate" id="자격증">
            <List
              items={[
                "Secondary school Teacher in Mathematics (Master´s degree) | 수학교육석사학위",
                "Teacher Certificate | 중등교원자격증(수학)",
                "Artificial Intelligence Engineering (Bachelor's Degree) | 인공지능 공학학사학위",
                "Computerized Accounting (KcLep system) | 전산회계KcLep 자격증",
              ]}
            />
          </Section>

          {/* Stack Section */}
          <Section title="⚡ STACKS" id="기술스택">
            <div className="space-y-6">
              {/* Frontend Stack */}
              <StackSection
                category="Frontend"
                badges={[
                  "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
                  "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
                  "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
                  "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
                  "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
                ]}
              />
              <StackSection
                category="Backend"
                badges={[
                  "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
                  "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
                  "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
                  "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
                ]}
              />
              <StackSection
                category="Database"
                badges={[
                  "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
                  "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
                ]}
              />
              <StackSection
                category="Deployment & Version Control"
                badges={[
                  "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
                  "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
                  "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
                  "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
                ]}
              />
              <StackSection
                category="Collaboration Tools"
                badges={[
                  "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
                  "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
                  "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
                ]}
              />
            </div>
          </Section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="min-h-screen px-20 py-12 "
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollY > 600 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8">How to reach me</h2>
            <p className="text-gray-300 mb-8">
              Thank you for your LinkedIn connection request and for reaching
              out to me!
            </p>
            <div className="flex flex-col space-y-4 max-w-xl">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/mathdev-park/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-900 rounded-lg hover:from-blue-800 transition-colors"
              >
                <FaLinkedin className="text-blue-400" size={24} />
                <span>linkedin.com/in/methdev-park</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/helloghostt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 rounded-lg hover:from-gray-700 transition-colors"
              >
                <FaGithub className="text-gray-400" size={24} />
                <span>github.com/helloghostt</span>
              </motion.a>
            </div>
            <div className="mt-12">
              <img
                src="https://github-readme-stats.vercel.app/api?username=helloghostt&show_icons=true&theme=tokyonight"
                className="max-w-xl"
                alt="GitHub Stats"
              />
            </div>
          </motion.section>
        </motion.section>
      )}
      <motion.section
        className="min-h-screen px-20 pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 400 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-20">
          <h2 className="text-8xl font-bold mb-8">MY WEBSITE</h2>
          <div className="w-50 h-1 bg-gradient-to-r from-blue-400 to-green-400" />
        </div>

        <motion.div
          className="space-y-32"
          initial={{ y: 100 }}
          animate={{ y: scrollY > 350 ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard
            number="01"
            title="AI Experience Service"
            description={`강남구 2040 플랜을 위한 AI 체험형 서비스.TypeScript와 React로 사용자 친화적인 인터페이스 구현.`}
            date="2024.10 - 11"
            onClick={() => navigate("/internship-project")}
          />
          <ProjectCard
            number="02"
            title="Razvery"
            description={`실시간 아이디어 공유 서비스. 제한 시간 채팅과 보드형 인터페이스 구현.`}
            date="2024.08 - 09"
            onClick={() => navigate("/razvery-project")}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};
// {/*         const projects = [ */}
// {/* {  */}
// {/* date: "2024.08 - 09",
// title: "Razvery - 팀프로젝트 기획2명 개발2명/ 최우수상",
// description:
//   "열린 아이디어를 실시간 공유하는 서비스입니다. 이 서비스의 핵심기능은 제한 시간이 있는 채팅과 보드 형태입니다. 사람과 사람 사이의 의미 있는 연결로 긍정적인 사회 변화를 가져오고자 고민하는데서 착안되었습니다.",
// repo: "https://github.com/obokproject",
//     },
//     {
//       date: "2024.07",
//       title: "BookClub - 개인 미니 프로젝트",
//       description:
//         "독서 커뮤니티 플랫폼으로 가입한 사용자들이 책을 중심으로 리뷰로 소통하고 댓글과 토론커뮤니티를 통해 생각을 공유할 수 있는 환경을 제공합니다.",
//       repo: "https://github.com/helloghostt/Front_MiniPj_Library",
//     },
//     {
//       date: "2024.04",
//       title: "테니스 클럽 예약 시스템 - 개인 미니 프로젝트",
//       description:
//         "테니스 클럽의 코트별 레슨 예약과 회원 일정을 관리하기 위해 만든 예약 시스템입니다.",
//       repo: {
//         BE: "https://github.com/helloghostt/be-booking_system",
//         FE: "https://github.com/helloghostt/fe-booking_system",
//       },
//     },
//   ];*/}

export default Portfolio;
