import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">MBTI 매칭</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        MBTI 기반 맞춤 매칭 서비스로
                        <br />
                        당신과 딱 맞는 모임을 찾아드릴게요
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Option 1: Know MBTI */}
                        <Link href="/select">
                            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                                        <span className="text-3xl">🧠</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">내 MBTI를 알아요</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        이미 MBTI 유형을 알고 계신다면
                                        <br />
                                        바로 선택해주세요
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Option 2: Take Test */}
                        <Link href="/test">
                            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-pink-200">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
                                        <span className="text-3xl">❓</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">잘 모르겠어요, 간단 테스트 할래요</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        빠른 테스트로
                                        <br />
                                        당신의 MBTI를 알아보세요
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center mt-16">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                💡 MBTI 기반 맞춤 매칭 서비스로
                                <br />
                                당신에게 딱 맞는 연결고리를 찾아드릴게요
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
