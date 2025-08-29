import TypingEffect from './component/TypingEffect'
import reactLogo from './assets/whale-removebg-preview.png'

function App() {
  const text1  =
  'Chhào  em nheee! ^_^\nGặp được em là một sự may mắn, được ở bên em nữa thì ông trời đã quá ưu ái anh rồi...\n Nhưng thật lòng mà nói..\n Chưa bao giờ anh nghĩ anh đủ tốt với em, nhiều lúc anh nghĩ mình còn không xứng với em nữa.\n Bởi anh biết ở cái độ tuổi lưng chừng này anh chưa đủ chính chắn và trưởng thành để quan tâm em một cách trọn vẹn nhất!\nHmmm Nhưng mà dù ngoài kia có làm em mệt nhọc thì mong em cứ kể với anh nhé, anh không chắc sẽ giải quyết được, nhưng ít nhất anh sẽ ngồi lắng nghe và bên cạnh em...\n Còn nếu anh có làm gì em buồn thì cứ nói hoặc chửi anh cũng được chứ đừng yên lặng mà bỏ anh nhaaaa -_-\n Aaaahh còn về phần lá thư anh không viết gì trong đó cả "một phần là anh lười, hai là anh nghĩ... ước muốn của em thì phải chính tay em ghi vào thì mới được nên anh chừa cho em mớ khoản trống để tha hồ ghi cái mình muốn vô ă :v"\n Cái nào liên quan thì anh hi vọng mình có thể cùng em thực hiện, còn không thì anh đứng xem em cũng được\n Anh không biết tụi mình có thể đi với nhau bao lâu nên là trong quá trình đó mình cùng nhau cố gắng em nheee nên là em đừng nghi ngờ tình cảm anh dành cho em nhé... vì đó là thứ mà anh chắc chắn nhất...\n Cảm ơn em đã đến..\nCho phép anh yêu em nheeeeeeeee\n Ký tên...\n Người sẽ làm em buồn vui trong tương lai...' // Chuỗi có ký tự xuống dòng

  const text2 = `Hii em^_^\n
Lại gặp em nữa roàii!
Đến lúc này anh mới hiểu, yêu một người thôi chưa bao giờ là đủ nếu không biết trân trọng người đó đúng cách. Anh đã từng lầm tưởng rằng, vài cuộc trò chuyện vụn vặt chẳng thể làm tổn thương ai. Nhưng hoá ra điều đau nhất không phải là những gì anh đã làm, mà là cách anh khiến em phải hoài nghi về lòng tin của chính mình.\nAnh biết cuộc sống có thể sẽ còn nhiều thử thách, sẽ có lúc chúng ta mệt mỏi hay bất đồng. Nhưng anh tin, chỉ cần kiên trì thêm xí :)), thì mọi khó khăn sẽ qua hoy.\nAnh không hứa sẽ làm em luôn cười, nhưng anh sẽ cố gắng để ở mãi chiều chuộng và che chở cho emm, Chúc hai đứa mình sẽ thấu hiểu và cảm thông cho nhau nhìu hơn.\n Ký tên...\n Người sẽ làm em buồn vui trong tương lai...`

  return (
    <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth">
      <div className="w-screen h-full flex-shrink-0 snap-start p-6 bg-white text-gray-800">
      <div>
        <a href='https://vite.dev' target='_blank'></a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='w-[30%] logo react' alt='React logo' />
        </a>
      </div>
        <div className="bg-pink-100 shadow-lg rounded-xl p-6 h-full overflow-y-auto">
          <TypingEffect text={text1} />
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-screen h-full flex-shrink-0 snap-start p-6 bg-white text-gray-800">
      <div>
        <a href='https://vite.dev' target='_blank'></a>
        <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='w-[30%] logo react' alt='React logo' />
        </a>
      </div>
        <div className="bg-yellow-100 shadow-lg rounded-xl p-6 h-full overflow-y-auto">
          <TypingEffect text={text2} />
        </div>
      </div>
    </div>
  )
}

export default App
