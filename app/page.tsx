import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="text-4xl">🐿️</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            다람쥐 도토리 매칭
                        </h1>
                        <span className="text-4xl">🌰</span>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        당신은 어떤 다람쥐인가요?
                        <br />
                        똑똑한 도토리 분석으로 딱 맞는 다람쥐 친구를
                        찾아드릴게요! 🌳
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
                                        <span className="text-3xl">🐿️</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        나는 이미 현명한 다람쥐!
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        내 다람쥐 유형을 이미 알고 있다면
                                        <br />
                                        바로 도토리 바구니로 직행하세요! 🌰
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Option 2: Take Test */}
                        <Link href="/test">
                            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-pink-200">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
                                        <span className="text-3xl">🌿</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        궁금해요, 나는 어떤 다람쥐?
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        나뭇잎 사이로 숨어있는
                                        <br />
                                        나만의 다람쥐 정체성을 찾아보세요! 🍃
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center mt-16">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                🌰 도토리 성격 분석을 통해
                                <br />
                                당신에게 딱 맞는 다람쥐 친구를 소개해드려요!
                                <br />
                                숲속에서 가장 행복한 매칭을 경험해보세요 🌲✨
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
