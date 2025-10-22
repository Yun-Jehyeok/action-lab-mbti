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

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">신청이 완료되었습니다!</h1>

                        <div className="mb-8">
                            <p className="text-xl text-gray-600 leading-relaxed mb-4">곧 연락드릴게요 :)</p>
                            <p className="text-gray-500 leading-relaxed">
                                MBTI 기반 맞춤 매칭 서비스를 통해
                                <br />
                                당신에게 딱 맞는 연결고리를 찾아드릴게요
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                            <h3 className="font-semibold text-gray-800 mb-4">다음 단계</h3>
                            <div className="space-y-3 text-left">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">신청서 검토 (1-2일)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                    <span className="text-sm text-gray-600">맞춤 매칭 분석</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <span className="text-sm text-gray-600">연락 및 서비스 안내</span>
                                </div>
                            </div>
                        </div>

                        {/* Home Button */}
                        <Link href="/">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-colors flex items-center gap-2 mx-auto">
                                <Home className="w-5 h-5" />
                                홈으로 돌아가기
                            </button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            📧 문의사항이 있으시면 언제든지 연락해주세요
                            <br />더 나은 서비스로 보답하겠습니다
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
