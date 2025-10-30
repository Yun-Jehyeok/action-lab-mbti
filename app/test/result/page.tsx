"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const mbtiDescriptions: Record<
    string,
    { name: string; desc: string; traits: string[] }
> = {
    INTJ: {
        name: "전략가 다람쥐",
        desc: "도토리 저장 계획을 완벽하게 세우는 독창적인 다람쥐",
        traits: [
            "체계적인 도토리 분류",
            "독립적인 나무 생활",
            "혁신적인 저장법",
            "겨울 준비의 달인",
        ],
    },
    INTP: {
        name: "논리학자 다람쥐",
        desc: "도토리의 과학적 원리를 탐구하는 혁신적인 다람쥐",
        traits: [
            "논리적 도토리 분석",
            "창의적인 나무집",
            "유연한 숲 탐험",
            "독립적인 연구",
        ],
    },
    ENTJ: {
        name: "통솔자 다람쥐",
        desc: "숲 전체를 이끄는 대담하고 강력한 리더 다람쥐",
        traits: [
            "숲의 리더십",
            "결단력 있는 판단",
            "효율적인 도토리 관리",
            "미래 숲 계획",
        ],
    },
    ENTP: {
        name: "변론가 다람쥐",
        desc: "새로운 도토리 아이디어로 토론하는 똑똑한 다람쥐",
        traits: [
            "창의적인 도토리 활용",
            "열정적인 숲 토론",
            "뛰어난 적응력",
            "혁신적인 아이디어",
        ],
    },
    INFJ: {
        name: "옹호자 다람쥐",
        desc: "숲의 평화를 지키는 신비롭고 영감을 주는 다람쥐",
        traits: [
            "숲의 통찰력",
            "이상적인 도토리 나눔",
            "헌신적인 친구",
            "창의적인 나무집",
        ],
    },
    INFP: {
        name: "중재자 다람쥐",
        desc: "도토리 나눔으로 선을 실천하는 시인 다람쥐",
        traits: [
            "가치 중심의 나눔",
            "창의적인 놀이",
            "유연한 숲 생활",
            "이상적인 공동체",
        ],
    },
    ENFJ: {
        name: "선도자 다람쥐",
        desc: "다른 다람쥐들을 이끄는 카리스마 넘치는 다람쥐",
        traits: [
            "숲의 카리스마",
            "협력적인 도토리 수집",
            "이타적인 나눔",
            "영감을 주는 리더",
        ],
    },
    ENFP: {
        name: "활동가 다람쥐",
        desc: "열정적으로 숲을 누비는 창의적이고 자유로운 다람쥐",
        traits: [
            "열정적인 나무 타기",
            "창의적인 도토리 놀이",
            "사교적인 숲 파티",
            "유연한 모험",
        ],
    },
    ISTJ: {
        name: "물류담당자 다람쥐",
        desc: "도토리를 체계적으로 관리하는 실용적이고 신뢰할 수 있는 다람쥐",
        traits: [
            "체계적인 도토리 정리",
            "신뢰할 수 있는 약속",
            "실용적인 나무집",
            "책임감 있는 저장",
        ],
    },
    ISFJ: {
        name: "수호자 다람쥐",
        desc: "다른 다람쥐를 따뜻하게 돌보는 헌신적인 다람쥐",
        traits: [
            "배려심 많은 나눔",
            "신뢰할 수 있는 친구",
            "헌신적인 돌봄",
            "실용적인 도움",
        ],
    },
    ESTJ: {
        name: "경영자 다람쥐",
        desc: "숲의 질서를 지키는 뛰어난 관리자 다람쥐",
        traits: [
            "조직적인 숲 관리",
            "효율적인 도토리 분배",
            "리더십 있는 의사결정",
            "실용적인 규칙",
        ],
    },
    ESFJ: {
        name: "집정관 다람쥐",
        desc: "모든 다람쥐와 친하게 지내는 배려심 많은 다람쥐",
        traits: [
            "배려심 많은 교류",
            "사교적인 도토리 파티",
            "협력적인 나무집 짓기",
            "조화로운 숲 생활",
        ],
    },
    ISTP: {
        name: "만능재주꾼 다람쥐",
        desc: "나뭇가지 공작으로 뭐든 만드는 대담한 실험가 다람쥐",
        traits: [
            "실용적인 나무 공작",
            "뛰어난 적응력",
            "독립적인 탐험",
            "논리적인 문제 해결",
        ],
    },
    ISFP: {
        name: "모험가 다람쥐",
        desc: "숲의 아름다움을 감상하는 유연하고 매력적인 예술가 다람쥐",
        traits: [
            "예술적인 나무 장식",
            "유연한 숲 탐험",
            "친근한 교류",
            "개방적인 마음",
        ],
    },
    ESTP: {
        name: "사업가 다람쥐",
        desc: "도토리 거래의 달인인 영리하고 에너지 넘치는 다람쥐",
        traits: [
            "활동적인 나무 타기",
            "실용적인 도토리 거래",
            "사교적인 숲 네트워킹",
            "뛰어난 적응력",
        ],
    },
    ESFP: {
        name: "연예인 다람쥐",
        desc: "숲의 스타! 자발적이고 열정적인 인기쟁이 다람쥐",
        traits: [
            "열정적인 숲 공연",
            "사교적인 도토리 모임",
            "유연한 엔터테이너",
            "낙천적인 에너지",
        ],
    },
};

function TestResultContent() {
    const searchParams = useSearchParams();
    const [mbti, setMBTI] = useState<string>("");

    useEffect(() => {
        const mbtiParam = searchParams.get("mbti");
        if (mbtiParam) {
            setMBTI(mbtiParam);
        }
    }, [searchParams]);

    if (!mbti || !mbtiDescriptions[mbti]) {
        return (
            <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">결과를 불러오는 중...</p>
                </div>
            </div>
        );
    }

    const result = mbtiDescriptions[mbti];

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    {/* Result Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center mb-8">
                        <div className="flex justify-center mb-6">
                            <Sparkles className="w-12 h-12 text-yellow-500" />
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            다람쥐 분석 완료! 🐿️
                        </h1>

                        <div className="mb-8">
                            <div className="text-5xl font-bold text-purple-600 mb-4">
                                {mbti}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {result.name}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {result.desc}
                            </p>
                        </div>

                        {/* Traits */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                🌰 다람쥐 특성
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {result.traits.map((trait, index) => (
                                    <div
                                        key={index}
                                        className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-sm font-medium"
                                    >
                                        {trait}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors flex items-center gap-2 mx-auto">
                                다람쥐 친구 찾기 🌰
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            🌳 이제 연락처 정보를 입력하시면
                            <br />
                            당신과 딱 맞는 다람쥐 친구를 소개해드릴게요!
                            <br />
                            함께 도토리를 모으며 즐거운 숲 생활을 시작하세요 ✨
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TestResultPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-600">결과를 불러오는 중...</p>
                    </div>
                </div>
            }
        >
            <TestResultContent />
        </Suspense>
    );
}
