// src/pages/Presentation.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

const Presentation = () => {
  const navigate = useNavigate();
  const [showReadme, setShowReadme] = useState(false);

  const readme = `
  ## 폴더구조
  frontend/
  ├── public/             # 정적 파일들
  └── src/
  ├── components/      # 컴포넌트 (textarea, layout, loading, banner, button, modal 등)
  ├── pages/           # 페이지 (메인, 체험, 공유, 챗봇, 에러페이지)
  ├── types/           # 인터페이스
  ├── api/             # chatbot, gallery, main, result, select, profanity
  ├── util/            # logger, scrolltotop, getbylength, checkos등
  └── const/           # 상수 선언
    
  ## 기술스택(Freontend)
  Frontend
  - 기본: React 18, TypeScript 5, Vite 4
  - 스타일링: TailwindCSS 3
  - 상태관리: React Query, React Hooks(useState)
  - HTTP 통신: Axios
  - 코드 포맷팅: Prettier
  AI/ML
  - 이미지 생성: Stable Diffusion 3
  - 프롬프트 최적화: Custom Prompt Engineering
  
  ## 트러블슈팅
  inko
    - 문제: vite와의 충돌로 추측.
    - 해결: hangul.js로 대신함
  채팅 히스토리 관리 문제
    - 문제: React의 상태 업데이트 비동기 특성으로 인한 채팅 히스토리 누락
    - 해결:
        상태 의존성 제거 및 파라미터 기반 데이터 전달 방식 도입
        useCallback 의존성 배열 최적화
        컴포넌트 생명주기 고려한 상태 관리 로직 재설계
  AI 이미지 생성 최적화
    - 문제: 불안정한 이미지 생성 품질과 긴 생성 시간
    - 해결:
        프롬프트 엔지니어링 최적화
        네거티브 프롬프트 조정
        토큰 제한 및 할루시네이션 감소를 위한 프롬프트 구조화`;

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
          <h1 className="text-4xl font-bold mb-4">생성형 AI 체험 프로젝트</h1>
          <p className="text-xl text-gray-400">
            2024.10 - 11 | 프론트엔드 개발자 인턴십 | 렛츠립업(TMD교육그룹)
          </p>
        </motion.div>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            강남구 50주년을 맞아 준비한 AI 체험형 서비스입니다. <br />
            시민들이 AI를 직접 경험하며 강남구의 역사와 미래의 모습을 그려볼 수
            있도록 구현했습니다.
          </p>
        </motion.section>

        <div className="flex gap-8">
          <div className="flex-1">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>AI 챗봇 기반 대화형 인터페이스</li>
                <li>이미지 생성 및 웹툰 생성 체험</li>
                <li>시나리오 편집 및 공유 기능</li>
                <li>반응형 웹 디자인 구현</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">담당 업무</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>프로그램 기획 및 구현 가능성 검토</li>
                <li>프론트엔드 구현</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">사용 기술</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>TypeScript + React(Vite)</li>
                <li>TailwindCSS</li>
                <li>React Query</li>
              </ul>
            </motion.section>
          </div>

          <div className="w-64 space-y-4">
            <motion.div
              className="p-4 border border-gray-800 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-bold mb-5">팀원 소개</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/visvaden7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>장영권 GitHub</span>
                </motion.a>
                <motion.a
                  href="https://github.com/helloghostt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>박초롱 GitHub</span>
                </motion.a>
                <motion.button
                  // href="https://github.com/Letsleapup/gn50/tree/main/frontend"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowReadme(true)}
                >
                  README
                </motion.button>
              </div>
            </motion.div>

            <motion.a
              href="https://gn50.aixstudio.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 text-center border border-gray-500 rounded-lg text-gray-500 hover:text-white hover:border-white"
              whileHover={{ scale: 1.05 }}
            >
              프로젝트 바로가기
            </motion.a>
          </div>
        </div>
      </div>
      {/* README Modal */}
      <Modal isOpen={showReadme} onClose={() => setShowReadme(false)}>
        <div className="prose prose-invert">
          <pre className="whitespace-pre-wrap text-gray-300">{readme}</pre>
        </div>
      </Modal>
    </div>
  );
};
export default Presentation;
