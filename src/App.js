//   const projects = [
//     {
//       date: "2024.08 - 09",
//       title: "Razvery - 팀프로젝트 기획2명 개발2명/ 최우수상",
//       description:
//         "열린 아이디어를 실시간 공유하는 서비스입니다. 이 서비스의 핵심기능은 제한 시간이 있는 채팅과 보드 형태입니다. 사람과 사람 사이의 의미 있는 연결로 긍정적인 사회 변화를 가져오고자 고민하는데서 착안되었습니다.",
//       repo: "https://github.com/obokproject",
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
//   ];

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio.js";
import Presentation from "./pages/Presentation.js";
import ProjectRazvery from "./pages/ProjectRazvery.js";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/internship-project" element={<Presentation />} />
          <Route path="/razvery-project" element={<ProjectRazvery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
