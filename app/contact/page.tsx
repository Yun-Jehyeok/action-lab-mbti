"use client";

import {
    ArrowLeft,
    Calendar,
    MapPin,
    Phone,
    Send,
    User,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [mbti, setMBTI] = useState<string>("");
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        location: "",
        gender: "",
        age: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const savedMBTI = localStorage.getItem("selectedMBTI");
        if (savedMBTI) {
            setMBTI(savedMBTI);
        }
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.contact ||
            !formData.location ||
            !formData.gender ||
            !formData.age ||
            !mbti
        ) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    mbti_type: mbti,
                }),
            });

            if (response.ok) {
                // Clear localStorage
                localStorage.removeItem("selectedMBTI");
                router.push("/success");
            } else {
                alert("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("Submit error:", error);
            alert("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
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
                    {mbti && (
                        <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-semibold">
                            {mbti}
                        </div>
                    )}
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            다람쥐 친구 정보를 알려주세요! 🐿️
                        </h1>
                        <p className="text-gray-600 text-lg">
                            딱 맞는 다람쥐 친구 매칭을 위해 필요한 정보예요 🌰
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="flex items-center gap-2 text-gray-700 font-semibold mb-3"
                                >
                                    <User className="w-5 h-5" />
                                    다람쥐 이름 (닉네임)
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="숲에서 불릴 이름이나 닉네임을 입력해주세요"
                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                                    required
                                />
                            </div>

                            {/* Contact Field */}
                            <div>
                                <label
                                    htmlFor="contact"
                                    className="flex items-center gap-2 text-gray-700 font-semibold mb-3"
                                >
                                    <Phone className="w-5 h-5" />
                                    나뭇잎 우편함 (연락처)
                                </label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    placeholder="도토리 소식을 받을 전화번호나 이메일을 입력해주세요"
                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                                    required
                                />
                            </div>

                            {/* Location Field */}
                            <div>
                                <label
                                    htmlFor="location"
                                    className="flex items-center gap-2 text-gray-700 font-semibold mb-3"
                                >
                                    <MapPin className="w-5 h-5" />
                                    서식지 (지역)
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="어느 숲에 살고 계신가요? (예: 서울숲 강남구역)"
                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                                    required
                                />
                            </div>

                            {/* Gender Field */}
                            <div>
                                <label
                                    htmlFor="gender"
                                    className="flex items-center gap-2 text-gray-700 font-semibold mb-3"
                                >
                                    <Users className="w-5 h-5" />
                                    다람쥐 종류
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                                    required
                                >
                                    <option value="">
                                        다람쥐 종류를 선택해주세요
                                    </option>
                                    <option value="남성">수컷 다람쥐</option>
                                    <option value="여성">암컷 다람쥐</option>
                                    <option value="기타">
                                        자유로운 다람쥐
                                    </option>
                                </select>
                            </div>

                            {/* Age Field */}
                            <div>
                                <label
                                    htmlFor="age"
                                    className="flex items-center gap-2 text-gray-700 font-semibold mb-3"
                                >
                                    <Calendar className="w-5 h-5" />
                                    나이테 (나이)
                                </label>
                                <select
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                                    required
                                >
                                    <option value="">
                                        나이테를 선택해주세요
                                    </option>
                                    <option value="20대 초반">
                                        새싹 다람쥐 (20-23세)
                                    </option>
                                    <option value="20대 중반">
                                        어린 다람쥐 (24-26세)
                                    </option>
                                    <option value="20대 후반">
                                        청년 다람쥐 (27-29세)
                                    </option>
                                    <option value="30대 초반">
                                        성숙한 다람쥐 (30-33세)
                                    </option>
                                    <option value="30대 중반">
                                        경험 많은 다람쥐 (34-36세)
                                    </option>
                                    <option value="30대 후반">
                                        현명한 다람쥐 (37-39세)
                                    </option>
                                    <option value="40대 이상">
                                        숲의 어른 다람쥐
                                    </option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        도토리 배송 중...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        다람쥐 친구 찾기 시작! 🌰
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6 text-center">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            🌰 입력하신 다람쥐 정보는 친구 매칭 목적으로만
                            사용되며
                            <br />
                            숲의 비밀처럼 안전하게 보호됩니다 🌳
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
