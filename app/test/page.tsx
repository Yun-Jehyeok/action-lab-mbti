"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
    {
        id: 1,
        question: "파티에서 너란 다람쥐는?",
        answers: [
            {
                text: "도토리 바구니 들고 숲속 파티를 누비며 모든 다람쥐와 수다 삼매경",
                type: "E",
            },
            {
                text: "조용한 나뭇가지에 앉아 단짝 다람쥐와 도토리 철학 토론중",
                type: "I",
            },
        ],
    },
    {
        id: 2,
        question: "도토리를 쟁여둘 때",
        answers: [
            {
                text: "도토리 껍질 두께, 무게,저장 위치까지 꼼꼼히 분석하는 디테일형 다람쥐",
                type: "S",
            },
            {
                text: "숲 전체를 둘러보며 도토리 나무의 성장 패턴과 가능성을 예측하는 통찰형 다람쥐",
                type: "N",
            },
        ],
    },
    {
        id: 3,
        question: "겨울을 준비할 때",
        answers: [
            {
                text: "도토리 수급 상황, 저장 효율, 숲 규칙까지 따져보는 계산형 다람쥐",
                type: "T",
            },
            {
                text: "친구 다람쥐의 기분과 토토리에 담긴 추억까지 고려하는 공감형 다람쥐",
                type: "F",
            },
        ],
    },
    {
        id: 4,
        question: "하루를 보낼 때",
        answers: [
            {
                text: "아침부터 도토리 루틴 체크! 오늘 저장할 도토리 수, 이동 경로까지 완벽하게 짜놓는 계획형 다람쥐",
                type: "J",
            },
            {
                text: "날씨가 흐리면 나뭇잎 우산, 갑자기 도토리 떨어지면 즉석 저장! 상황 따라 움직이는 유연형 다람쥐",
                type: "P",
            },
        ],
    },
    {
        id: 5,
        question: "새로운 다람쥐를 만날 때",
        answers: [
            {
                text: "'안녕! 너도 도토리 좋아해?' 먼저 다가가 인사하는 친화력 만렙 다람쥐",
                type: "E",
            },
            {
                text: "나뭇잎 뒤 살짝 숨어 있다가 상대 다람쥐가 먼저 말 걸어주길 바라는 관찰형 다람쥐",
                type: "I",
            },
        ],
    },
    {
        id: 6,
        question: "문제 직면했을 때",
        answers: [
            {
                text: "지난번 도토리 분실 사건을 떠올리며 경험 기반으로 침착하게 접근하는 현실형 다람쥐",
                type: "S",
            },
            {
                text: "'혹시 도토리를 공중에 띄워서 저장하면 어떨까?' 창의력 폭발 실험형 다람쥐",
                type: "N",
            },
        ],
    },
    {
        id: 7,
        question: "갈등 상황에서",
        answers: [
            {
                text: "도토리 분배 기준, 저장 규칙을 바탕으로 공정하게 해결책을 찾는 냉철한 다람쥐",
                type: "T",
            },
            {
                text: "'그 다람쥐도 사정이 있었겠지…' 모두의 입장을 이해하려는 따뜻한 다람쥐",
                type: "F",
            },
        ],
    },
    {
        id: 8,
        question: "여행에 앞서",
        answers: [
            {
                text: "도토리 지도 펼쳐놓고 숙소, 이동 경로, 도토리 포인트까지 미리 계산하는 철저한 다람쥐",
                type: "J",
            },
            {
                text: "'일단 떠나보자!' 도토리 떨어지는 대로 즉흥 여행을 즐기는 자유로운 다람쥐",
                type: "P",
            },
        ],
    },
];

export default function TestPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const router = useRouter();

    const handleAnswer = (answerType: string) => {
        const newAnswers = [...answers, answerType];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Calculate MBTI result
            const result = calculateMBTI(newAnswers);
            localStorage.setItem("selectedMBTI", result);
            router.push(`/test/result?mbti=${result}`);
        }
    };

    const calculateMBTI = (answers: string[]) => {
        const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

        answers.forEach((answer) => {
            counts[answer as keyof typeof counts]++;
        });

        return (
            (counts.E >= counts.I ? "E" : "I") +
            (counts.S >= counts.N ? "S" : "N") +
            (counts.T >= counts.F ? "T" : "F") +
            (counts.J >= counts.P ? "J" : "P")
        );
    };

    const goBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setAnswers(answers.slice(0, -1));
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>돌아가기</span>
                    </Link>
                    <div className="text-sm text-gray-600">
                        {currentQuestion + 1} / {questions.length}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                    <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Question */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                            {questions[currentQuestion].question}
                        </h2>

                        <div className="space-y-4">
                            {questions[currentQuestion].answers.map(
                                (answer, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            handleAnswer(answer.type)
                                        }
                                        className="w-full p-6 text-left bg-gray-50 hover:bg-purple-50 rounded-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg text-gray-800">
                                                {answer.text}
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                        <button
                            onClick={goBack}
                            disabled={currentQuestion === 0}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            이전 질문
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                솔직하게 답변해주세요!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
