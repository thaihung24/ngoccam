import TypingEffect from './component/TypingEffect'
import reactLogo from './assets/whale-removebg-preview.png'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

function App() {
  const [pageIndex, setPageIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const text1 =
    'Chhào  em nheee! ^_^\nGặp được em là một sự may mắn, được ở bên em nữa thì ông trời đã quá ưu ái anh rồi...\nNhưng thật lòng mà nói..\nChưa bao giờ anh nghĩ anh đủ tốt với em, nhiều lúc anh nghĩ mình còn không xứng với em nữa.\nBởi anh biết ở cái độ tuổi lưng chừng này anh chưa đủ chính chắn và trưởng thành để quan tâm em một cách trọn vẹn nhất!\nHmmm Nhưng mà dù ngoài kia có làm em mệt nhọc thì mong em cứ kể với anh nhé, anh không chắc sẽ giải quyết được, nhưng ít nhất anh sẽ ngồi lắng nghe và bên cạnh em...\nCòn nếu anh có làm gì em buồn thì cứ nói hoặc chửi anh cũng được chứ đừng yên lặng mà bỏ anh nhaaaa -_-\nAaaahh còn về phần lá thư anh không viết gì trong đó cả "một phần là anh lười, hai là anh nghĩ... ước muốn của em thì phải chính tay em ghi vào thì mới được nên anh chừa cho em mớ khoản trống để tha hồ ghi cái mình muốn vô ă :v"\nCái nào liên quan thì anh hi vọng mình có thể cùng em thực hiện, còn không thì anh đứng xem em cũng được\nAnh không biết tụi mình có thể đi với nhau bao lâu nên là trong quá trình đó mình cùng nhau cố gắng em nheee nên là em đừng nghi ngờ tình cảm anh dành cho em nhé... vì đó là thứ mà anh chắc chắn nhất...\nCảm ơn em đã đến..\nCho phép anh yêu em nheeeeeeeee\nKý tên...\nNgười sẽ làm em buồn vui trong tương lai...' // Chuỗi có ký tự xuống dòng

  const text2 = `Hii em^_^\n
Lại gặp em nữa roàii!
Đến lúc này anh mới hiểu, yêu một người thôi chưa bao giờ là đủ nếu không biết trân trọng người đó đúng cách. Anh đã từng lầm tưởng rằng, vài cuộc trò chuyện vụn vặt chẳng thể làm tổn thương ai. Nhưng hoá ra điều đau nhất không phải là những gì anh đã làm, mà là cách anh khiến em phải hoài nghi về lòng tin của chính mình.\nAnh biết cuộc sống có thể sẽ còn nhiều thử thách, sẽ có lúc chúng ta mệt mỏi hay bất đồng. Nhưng anh tin, chỉ cần kiên trì thêm xí :)), thì mọi khó khăn sẽ qua hoy.\nAnh không hứa sẽ làm em luôn cười, nhưng anh sẽ cố gắng để ở mãi chiều chuộng và che chở cho emm, Chúc hai đứa mình sẽ thấu hiểu và cảm thông cho nhau nhìu hơn.\n Ký tên...\n Người sẽ làm em buồn vui trong tương lai...`
const text3 = `Chhào em^_^\n
Nhân ngày 19/10 cuối tuần, anh muốn dành cho mình một ngày thật đặc biệt. Không phải chỉ để kỷ niệm, mà để anh có cơ hội được ở bên, chăm sóc và làm em vui.!\n
Anh mời em một buổi tối ấm áp,đi xem phim, đi dạo cùng nhau, ăn một bữa ngon, và chia sẻ những câu chuyện chỉ riêng hai đứa biết. Anh muốn nghe em kể những niềm vui, những lo toan nhỏ, để mình hiểu nhau hơn và yêu thương nhau nhiều hơn..\nKý tên...\nNgười sẽ làm em buồn vui trong tương lai...`

  const pages = [
    { text: text1, bg: 'bg-pink-100' },
    { text: text2, bg: 'bg-yellow-100' },
    { text: text3, bg: 'bg-amber-50' }
  ]

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (pageIndex < pages.length - 1) {
        setIsFlipping(true)
        setTimeout(() => {
          setPageIndex(pageIndex + 1)
          setIsFlipping(false)
        }, 600) // thời gian trùng với CSS duration
      }
    },
    onSwipedRight: () => {
      if (pageIndex > 0) {
        setIsFlipping(true)
        setTimeout(() => {
          setPageIndex(pageIndex - 1)
          setIsFlipping(false)
        }, 600)
      }
    },
    trackMouse: true
  })

  return (
    <div {...swipeHandlers} className='w-screen h-screen bg-gray-100  items-center justify-center overflow-hidden'>
      <div className='flex justify-start'>
        <img src={reactLogo} className='w-[30%]' alt='React logo' />
      </div>
      <div className='perspective-1000 w-full h-full flex items-center justify-center'>
        <div
          className={`relative w-[90%] h-[90%] transition-transform duration-700 transform-style-preserve-3d ${
            isFlipping ? 'animate-flip' : ''
          }`}
        >
          {/* Front */}
          <div
            className={`absolute w-full h-full rounded-xl shadow-lg p-6 overflow-y-auto text-gray-800 backface-hidden ${
              pages[pageIndex].bg
            }`}
          >
            <TypingEffect key={pageIndex} text={pages[pageIndex].text} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
