export default function MapContainer() {
  return (
    <div className="w-full h-full bg-green-100 flex items-center justify-center pt-16 lg:pt-0 relative">
      {/* 데스크톱용 상단 헤더 */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h1 className="text-lg font-semibold text-gray-900">AI Navigator</h1>
          </div>
          <div className="text-sm text-gray-600">
            스마트 길찾기 서비스
          </div>
        </div>
      </div>

      <div className="text-center pt-16 lg:pt-20">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">
          🗺️ Google Maps 영역
        </h2>
        <p className="text-green-600">여기에 Google Maps가 들어갈 예정</p>
        <div className="mt-4 text-xs text-green-500">
          <p>• 실시간 교통 정보</p>
          <p>• 장소 검색 및 마커</p>
          <p>• 경로 표시</p>
        </div>
      </div>
    </div>
  );
} 