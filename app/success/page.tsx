import { CheckCircle, Home, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <CheckCircle className="w-20 h-20 text-green-500" />
                                <Sparkles className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            다람쥐 친구 신청 완료! 🐿️🌰
                        </h1>

                        <div className="mb-8">
                            <p className="text-xl text-gray-600 leading-relaxed mb-4">
                                곧 도토리 우편으로 연락드릴게요! 🌰✉️
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                다람쥐 성격 분석을 통해
                                <br />
                                당신에게 딱 맞는 숲 친구를 찾아드릴게요! 🌳
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                            <h3 className="font-semibold text-gray-800 mb-4">
                                🌲 다음 숲 여정
                            </h3>
                            <div className="space-y-3 text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">
                                        다람쥐 정보 확인 (1-2일) 🐿️
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                    <span className="text-sm text-gray-600">
                                        도토리 매칭 분석 🌰
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <span className="text-sm text-gray-600">
                                        나뭇잎 우편으로 친구 소개 📮
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Home Button */}
                        <Link href="/">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-colors flex items-center gap-2 mx-auto">
                                <Home className="w-5 h-5" />숲 입구로 돌아가기
                                🌳
                            </button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            🌰 궁금한 것이 있으시면 언제든지 도토리 우편을
                            보내주세요
                            <br />더 즐거운 숲 생활로 보답하겠습니다! ✨
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
