import React, { useState, useEffect } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // 로컬 스토리지에서 방문자 수 가져오기
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount) : 0;

    // 방문자 수 증가
    const newCount = currentCount + 1;
    setVisitorCount(newCount);

    // 새로운 방문자 수 저장
    localStorage.setItem("visitorCount", newCount.toString());
  }, []);
  return (
    <motion.div
      className="flex items-center rounded-full px-3 py-1 text-gray-300 text-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsPersonHeart className="text-yellow-300 mx-1" />
      <span className="font-semibold">{visitorCount}</span>
    </motion.div>
  );
};
const NavBar = ({ activeSection }) => {
  const sections = [
    "About",
    "Education",
    "Project",
    "Certificate",
    "Stacks",
    "Contact",
  ];

  return (
    <nav className="sticky top-1 bg-gray-800 shadow-md py-4 z-10 transition-colors duration-300 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <ul className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
            {sections.map((section) => (
              <motion.li
                key={section}
                className="w-[calc(50%-0.5rem)] md:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${section.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md ${
                    activeSection === section.toLowerCase()
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  } transition-colors duration-300`}
                >
                  {section}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }

      // 스크롤 위치에 따라 버튼 가시성 설정
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollToTopButton = ({ isVisible }) => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    );
  };

  const Section = ({ title, id, children }) => (
    <section id={id} className="py-8 scroll-mt-16">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">{title}</h2>
      {children}
      <div className="border-b border-gray-700 mt-8"></div>
    </section>
  );

  const ProjectItem = ({ date, title, description, repo }) => (
    <li className="mb-6">
      <div className="font-semibold text-gray-100 pt-4">
        {date} | {title}
      </div>
      <p className="mt-2 text-gray-300">{description}</p>
      {repo && (
        <div className="mt-2 flex flex-col">
          {typeof repo === "string" ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Repo: {repo}
            </a>
          ) : (
            Object.entries(repo).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 mr-4"
              >
                {key}: {value}
              </a>
            ))
          )}
        </div>
      )}
    </li>
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

  const projects = [
    {
      date: "2024.08 - 진행중",
      title: "Razvery - 팀프로젝트 기획2명 개발2명",
      description:
        "열린 아이디어를 실시간 공유하는 서비스입니다. 이 서비스의 핵심기능은 제한 시간이 있는 채팅과 보드 형태입니다. 사람과 사람 사이의 의미 있는 연결로 긍정적인 사회 변화를 가져오고자 고민하는데서 착안되었습니다.",
      repo: "https://github.com/obokproject",
    },
    {
      date: "2024.07",
      title: "BookClub - 개인 미니 프로젝트",
      description:
        "독서 커뮤니티 플랫폼으로 가입한 사용자들이 책을 중심으로 리뷰로 소통하고 댓글과 토론커뮤니티를 통해 생각을 공유할 수 있는 환경을 제공합니다.",
      repo: "https://github.com/helloghostt/Front_MiniPj_Library",
    },
    {
      date: "2024.04",
      title: "테니스 클럽 예약 시스템 - 개인 미니 프로젝트",
      description:
        "테니스 클럽의 코트별 레슨 예약과 회원 일정을 관리하기 위해 만든 예약 시스템입니다.",
      repo: {
        BE: "https://github.com/helloghostt/be-booking_system",
        FE: "https://github.com/helloghostt/fe-booking_system",
      },
    },
  ];

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

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <div className="w-full">
        <div className="container mx-auto px-4 pt-4 max-w-4xl text-gray-100">
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-10 m-4 bg-gray-800 rounded-lg shadow-lg relative"
          >
            <div className="flex flex-row items-center mb-4">
              <img
                src="/profile.jpg"
                alt="Park ChoRong"
                className="w-24 h-24 rounded-3xl object-cover shadow-lg md:w-32 md:h-32"
              />

              <h1 className="text-4xl font-bold ml-4 leading-[50px] text-gray-100">
                Park ChoRong <br />
                박초롱
              </h1>
            </div>
            <div className="absolute bottom-4 right-4">
              <VisitorCounter />
            </div>
          </motion.header>

          <div className="sticky top-0 z-10 py-4">
            <NavBar activeSection={activeSection} />
          </div>

          <div className="mt-4 pl-4">
            <Section title=" 👋 About Me" id="about">
              <p className="m-2 leading-relaxed text-gray-300">
                안녕하세요! 웹서비스 개발자 박초롱입니다.
                <br />
                수학교육밖에 모르던 제가 유튜브 코딩을 보고 따라하다가
                <br />
                개발의 즐거움을 알게 되어 푹 빠져있습니다.
                <br />
                '어떻게 하면 모두가 조금이라도 편리하게 살수 있을까?''
                <br />
                이러한 간단한 질문이 세상을 바꿀 수 있다고 믿습니다.
                <br />
                저는 사람을 이해하는 기술로 사용자 중심의 웹서비스를 만들고자
                합니다.
                <br />
              </p>
            </Section>

            <Section title="👀 Education" id="education">
              <List
                items={[
                  "Web Development | 웹 개발",
                  "Artificial Intelligence | AI인공지능",
                  "Mathematics Education | 수학교육",
                ]}
              />
            </Section>

            <Section title="💞️ Project" id="project">
              <ul className="list-none pl-0">
                {projects.map((project, index) => (
                  <ProjectItem key={index} {...project} />
                ))}
              </ul>
            </Section>

            <Section title="🔭 Certificate" id="certificate">
              <List
                items={[
                  "Secondary school Teacher in Mathematics (Master´s degree) | 수학교육석사학위",
                  "Teacher Certificate | 중등교원자격증(수학)",
                  "Artificial Intelligence Engineering (Bachelor's Degree) | 인공지능 공학학사학위",
                  "Computerized Accounting (KcLep system) | 전산회계KcLep 자격증",
                ]}
              />
            </Section>

            <Section title="⚡ STACKS" id="stacks">
              <div className="space-y-6">
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

            <Section title="📫 How to reach me" id="contact">
              <div className="flex flex-col space-y-4 pb-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/mathdev-park/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors duration-300"
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
                  className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <FaGithub className="text-gray-400" size={24} />
                  <span>github.com/helloghostt</span>
                </motion.a>
              </div>
              <div className="flex justify-end mt-8">
                <ScrollToTopButton isVisible={isVisible} />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
