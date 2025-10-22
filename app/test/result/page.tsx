"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const mbtiDescriptions: Record<string, { name: string; desc: string; traits: string[] }> = {
    INTJ: {
        name: "전략가",
        desc: "독창적이고 결단력 있는 완벽주의자",
        traits: ["체계적인 사고", "독립적", "혁신적", "목표 지향적"],
    },
    INTP: {
        name: "논리학자",
        desc: "혁신적인 발명가와 지적 탐구자",
        traits: ["논리적 분석", "창의적", "유연한 사고", "독립적"],
    },
    ENTJ: {
        name: "통솔자",
        desc: "대담하고 상상력이 풍부한 강력한 의지",
        traits: ["리더십", "결단력", "효율성", "미래 지향적"],
    },
    ENTP: {
        name: "변론가",
        desc: "똑똑하고 호기심 많은 사색가",
        traits: ["창의적", "열정적", "적응력", "혁신적"],
    },
    INFJ: {
        name: "옹호자",
        desc: "신비로우면서도 영감을 주는 이상주의자",
        traits: ["통찰력", "이상주의", "헌신적", "창의적"],
    },
    INFP: {
        name: "중재자",
        desc: "항상 선을 행할 준비가 되어 있는 시인",
        traits: ["가치 중심", "창의적", "유연성", "이상주의"],
    },
    ENFJ: {
        name: "선도자",
        desc: "카리스마 있고 영감을 주는 지도자",
        traits: ["카리스마", "협력적", "이타적", "영감을 주는"],
    },
    ENFP: {
        name: "활동가",
        desc: "열정적이고 창의적인 자유로운 영혼",
        traits: ["열정적", "창의적", "사교적", "유연한"],
    },
    ISTJ: {
        name: "물류담당자",
        desc: "실용적이고 사실에 기반한 신뢰할 수 있는",
        traits: ["체계적", "신뢰할 수 있는", "실용적", "책임감"],
    },
    ISFJ: {
        name: "수호자",
        desc: "매우 헌신적이고 따뜻한 수호자",
        traits: ["배려심", "신뢰할 수 있는", "헌신적", "실용적"],
    },
    ESTJ: {
        name: "경영자",
        desc: "뛰어난 관리자, 전통과 질서를 중시",
        traits: ["조직력", "효율성", "리더십", "실용적"],
    },
    ESFJ: {
        name: "집정관",
        desc: "매우 배려심 많고 사교적인 사람들",
        traits: ["배려심", "사교적", "협력적", "조화로운"],
    },
    ISTP: {
        name: "만능재주꾼",
        desc: "대담하고 실용적인 실험자",
        traits: ["실용적", "적응력", "독립적", "논리적"],
    },
    ISFP: {
        name: "모험가",
        desc: "유연하고 매력적인 예술가",
        traits: ["예술적", "유연한", "친근한", "개방적"],
    },
    ESTP: {
        name: "사업가",
        desc: "영리하고 에너지 넘치는 인식자",
        traits: ["활동적", "실용적", "사교적", "적응력"],
    },
    ESFP: {
        name: "연예인",
        desc: "자발적이고 열정적인 연예인",
        traits: ["열정적", "사교적", "유연한", "낙천적"],
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

                        <h1 className="text-2xl font-bold text-gray-800 mb-4">테스트 완료!</h1>

                        <div className="mb-8">
                            <div className="text-5xl font-bold text-purple-600 mb-4">{mbti}</div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{result.name}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">{result.desc}</p>
                        </div>

                        {/* Traits */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">주요 특성</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {result.traits.map((trait, index) => (
                                    <div key={index} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-sm font-medium">
                                        {trait}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors flex items-center gap-2 mx-auto">
                                매칭 신청하기
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            💡 이제 연락처 정보를 입력하시면
                            <br />
                            당신의 MBTI에 맞는 맞춤 매칭 서비스를 제공해드릴게요!
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
