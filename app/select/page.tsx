"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mbtiTypes = [
    {
        type: "INTJ",
        name: "전략가 다람쥐",
        desc: "도토리 저장 계획을 완벽하게 세우는 독창적인 다람쥐",
    },
    {
        type: "INTP",
        name: "논리학자 다람쥐",
        desc: "도토리의 과학적 원리를 탐구하는 혁신적인 다람쥐",
    },
    {
        type: "ENTJ",
        name: "통솔자 다람쥐",
        desc: "숲 전체를 이끄는 대담하고 강력한 리더 다람쥐",
    },
    {
        type: "ENTP",
        name: "변론가 다람쥐",
        desc: "새로운 도토리 아이디어로 토론하는 똑똑한 다람쥐",
    },

    {
        type: "INFJ",
        name: "옹호자 다람쥐",
        desc: "숲의 평화를 지키는 신비롭고 영감을 주는 다람쥐",
    },
    {
        type: "INFP",
        name: "중재자 다람쥐",
        desc: "도토리 나눔으로 선을 실천하는 시인 다람쥐",
    },
    {
        type: "ENFJ",
        name: "선도자 다람쥐",
        desc: "다른 다람쥐들을 이끄는 카리스마 넘치는 다람쥐",
    },
    {
        type: "ENFP",
        name: "활동가 다람쥐",
        desc: "열정적으로 숲을 누비는 창의적이고 자유로운 다람쥐",
    },

    {
        type: "ISTJ",
        name: "물류담당자 다람쥐",
        desc: "도토리를 체계적으로 관리하는 실용적이고 신뢰할 수 있는 다람쥐",
    },
    {
        type: "ISFJ",
        name: "수호자 다람쥐",
        desc: "다른 다람쥐를 따뜻하게 돌보는 헌신적인 다람쥐",
    },
    {
        type: "ESTJ",
        name: "경영자 다람쥐",
        desc: "숲의 질서를 지키는 뛰어난 관리자 다람쥐",
    },
    {
        type: "ESFJ",
        name: "집정관 다람쥐",
        desc: "모든 다람쥐와 친하게 지내는 배려심 많은 다람쥐",
    },

    {
        type: "ISTP",
        name: "만능재주꾼 다람쥐",
        desc: "나뭇가지 공작으로 뭐든 만드는 대담한 실험가 다람쥐",
    },
    {
        type: "ISFP",
        name: "모험가 다람쥐",
        desc: "숲의 아름다움을 감상하는 유연하고 매력적인 예술가 다람쥐",
    },
    {
        type: "ESTP",
        name: "사업가 다람쥐",
        desc: "도토리 거래의 달인인 영리하고 에너지 넘치는 다람쥐",
    },
    {
        type: "ESFP",
        name: "연예인 다람쥐",
        desc: "숲의 스타! 자발적이고 열정적인 인기쟁이 다람쥐",
    },
];

export default function SelectPage() {
    const [selectedMBTI, setSelectedMBTI] = useState<string>("");
    const router = useRouter();

    const handleSelect = (mbtiType: string) => {
        setSelectedMBTI(mbtiType);
        // Store in localStorage for use in contact form
        localStorage.setItem("selectedMBTI", mbtiType);
        // Navigate to contact page
        router.push("/contact");
    };

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
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        어떤 다람쥐인지 선택해주세요 🐿️
                    </h1>
                    <p className="text-gray-600 text-lg">
                        당신의 다람쥐 유형을 도토리로 찾아보세요! 🌰
                    </p>
                </div>

                {/* MBTI Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {mbtiTypes.map((mbti) => (
                            <button
                                key={mbti.type}
                                onClick={() => handleSelect(mbti.type)}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 text-left"
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">
                                        {mbti.type}
                                    </h3>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        {mbti.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {mbti.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto">
                        <p className="text-gray-500 text-sm">
                            🌰 정확한 다람쥐 친구 매칭을 위해 신중하게
                            선택해주세요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
