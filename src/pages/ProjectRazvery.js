import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectRazvery = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* 뒤로가기 버튼 */}
      <motion.button
        className="mb-8 px-4 py-2 border border-white rounded-lg"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
      >
        ← Back
      </motion.button>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-yellow-300">
            Razvery{" "}
            <motion.a
              href="https://razvery.link"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 ml-20 inline-block px-2 border border-gray-500 rounded-lg text-gray-500 hover:text-red-200 hover:border-white"
              whileHover={{ scale: 1.05 }}
            >
              https://razvery.link
            </motion.a>
          </h1>
          <p className="text-xl text-gray-400">
            2024.8-9 | 프론트엔드 개발자2명 + 기획 2명으로 팀 프로젝트 |
            최우수상 수상
          </p>
        </motion.div>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>실시간 아이디어 공유 서비스 '라즈베리'</li>
            <li>
              제한 시간 채팅과 보드 형태의 인터페이스로 사람들 간 긍정적 연결을
              지원
            </li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {" "}
          <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>채팅기능</li>
            <li>칸반보드기능</li>
            <li>관리자보드 - 월별 가입자 통계, 유저관리</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">사용 기술</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>React, TypeScript</li>
            <li>TailwindCSS</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};
export default ProjectRazvery;
