import TypingEffect from './component/TypingEffect'

function App() {
  const text1 = `🌸 Card 1
Chào em! Đây là card đầu tiên.
Nội dung sẽ hiện dần như đang gõ...
Yêu thương lắm!`

  const text2 = `🌻 Card 2
Đây là card thứ hai nè!
Mình có thể để nội dung khác ở đây.
Vuốt qua lại để xem các card nhé 💖`

  return (
    <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth">
      {/* Card 1 */}
      <div className="w-screen h-full flex-shrink-0 snap-start p-6 bg-white text-gray-800">
        <div className="bg-pink-100 shadow-lg rounded-xl p-6 h-full overflow-y-auto">
          <TypingEffect text={text1} />
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-screen h-full flex-shrink-0 snap-start p-6 bg-white text-gray-800">
        <div className="bg-yellow-100 shadow-lg rounded-xl p-6 h-full overflow-y-auto">
          <TypingEffect text={text2} />
        </div>
      </div>
    </div>
  )
}

export default App
