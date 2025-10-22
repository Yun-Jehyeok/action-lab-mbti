"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mbtiTypes = [
    { type: "INTJ", name: "전략가", desc: "독창적이고 결단력 있는 완벽주의자" },
    { type: "INTP", name: "논리학자", desc: "혁신적인 발명가와 지적 탐구자" },
    { type: "ENTJ", name: "통솔자", desc: "대담하고 상상력이 풍부한 강력한 의지" },
    { type: "ENTP", name: "변론가", desc: "똑똑하고 호기심 많은 사색가" },

    { type: "INFJ", name: "옹호자", desc: "신비로우면서도 영감을 주는 이상주의자" },
    { type: "INFP", name: "중재자", desc: "항상 선을 행할 준비가 되어 있는 시인" },
    { type: "ENFJ", name: "선도자", desc: "카리스마 있고 영감을 주는 지도자" },
    { type: "ENFP", name: "활동가", desc: "열정적이고 창의적인 자유로운 영혼" },

    { type: "ISTJ", name: "물류담당자", desc: "실용적이고 사실에 기반한 신뢰할 수 있는" },
    { type: "ISFJ", name: "수호자", desc: "매우 헌신적이고 따뜻한 수호자" },
    { type: "ESTJ", name: "경영자", desc: "뛰어난 관리자, 전통과 질서를 중시" },
    { type: "ESFJ", name: "집정관", desc: "매우 배려심 많고 사교적인 사람들" },

    { type: "ISTP", name: "만능재주꾼", desc: "대담하고 실용적인 실험자" },
    { type: "ISFP", name: "모험가", desc: "유연하고 매력적인 예술가" },
    { type: "ESTP", name: "사업가", desc: "영리하고 에너지 넘치는 인식자" },
    { type: "ESFP", name: "연예인", desc: "자발적이고 열정적인 연예인" },
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
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span>돌아가기</span>
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">MBTI 유형을 선택해주세요</h1>
                    <p className="text-gray-600 text-lg">당신의 MBTI 유형을 클릭해주세요</p>
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
                                    <h3 className="text-2xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">{mbti.type}</h3>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{mbti.name}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{mbti.desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto">
                        <p className="text-gray-500 text-sm">💡 정확한 매칭을 위해 신중하게 선택해주세요</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
