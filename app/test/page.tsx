"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
    {
        id: 1,
        question: "파티에서 당신은...",
        answers: [
            { text: "많은 사람들과 대화하며 에너지를 얻는다", type: "E" },
            { text: "가까운 몇 명과 깊은 대화를 나눈다", type: "I" },
        ],
    },
    {
        id: 2,
        question: "새로운 정보를 받아들일 때...",
        answers: [
            { text: "구체적인 사실과 세부사항에 집중한다", type: "S" },
            { text: "전체적인 패턴과 가능성을 본다", type: "N" },
        ],
    },
    {
        id: 3,
        question: "결정을 내릴 때...",
        answers: [
            { text: "논리적 분석을 통해 판단한다", type: "T" },
            { text: "사람들의 감정과 가치를 고려한다", type: "F" },
        ],
    },
    {
        id: 4,
        question: "일상생활에서...",
        answers: [
            { text: "계획을 세우고 체계적으로 진행한다", type: "J" },
            { text: "상황에 맞춰 유연하게 대응한다", type: "P" },
        ],
    },
    {
        id: 5,
        question: "새로운 사람을 만날 때...",
        answers: [
            { text: "먼저 다가가서 대화를 시작한다", type: "E" },
            { text: "상대방이 먼저 다가오기를 기다린다", type: "I" },
        ],
    },
    {
        id: 6,
        question: "문제를 해결할 때...",
        answers: [
            { text: "경험과 실제 사례를 바탕으로 접근한다", type: "S" },
            { text: "새로운 아이디어와 창의적 방법을 시도한다", type: "N" },
        ],
    },
    {
        id: 7,
        question: "갈등 상황에서...",
        answers: [
            { text: "객관적 사실을 바탕으로 해결책을 찾는다", type: "T" },
            { text: "모든 사람의 입장을 이해하려 노력한다", type: "F" },
        ],
    },
    {
        id: 8,
        question: "여행 계획을 세울 때...",
        answers: [
            { text: "일정을 미리 짜고 예약을 완료한다", type: "J" },
            { text: "큰 틀만 정하고 현지에서 즉흥적으로 결정한다", type: "P" },
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

        return (counts.E >= counts.I ? "E" : "I") + (counts.S >= counts.N ? "S" : "N") + (counts.T >= counts.F ? "T" : "F") + (counts.J >= counts.P ? "J" : "P");
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
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span>돌아가기</span>
                    </Link>
                    <div className="text-sm text-gray-600">
                        {currentQuestion + 1} / {questions.length}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                    <div className="bg-purple-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>

                {/* Question */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">{questions[currentQuestion].question}</h2>

                        <div className="space-y-4">
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(answer.type)}
                                    className="w-full p-6 text-left bg-gray-50 hover:bg-purple-50 rounded-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg text-gray-800">{answer.text}</span>
                                        <ArrowRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                </button>
                            ))}
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
                            <p className="text-sm text-gray-500">솔직하게 답변해주세요!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
