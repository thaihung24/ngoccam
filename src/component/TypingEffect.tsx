import { useState, useEffect } from 'react'

function TypingEffect() {
  const text =
    'Chhào  em nheee! ^_^\nGặp được em là một sự may mắn, được ở bên em nữa thì ông trời đã quá ưu ái anh rồi...\n Nhưng thật lòng mà nói..\n Chưa bao giờ anh nghĩ anh đủ tốt với em, nhiều lúc anh nghĩ mình còn không xứng với em nữa.\n Bởi anh biết ở cái độ tuổi lưng chừng này anh chưa đủ chính chắn và trưởng thành để quan tâm em một cách trọn vẹn nhất!\nHmmm Nhưng mà dù ngoài kia có làm em mệt nhọc thì mong em cứ kể với anh nhé, anh không chắc sẽ giải quyết được, nhưng ít nhất anh sẽ ngồi lắng nghe và bên cạnh em...\n Còn nếu anh có làm gì em buồn thì cứ nói hoặc chửi anh cũng được chứ đừng yên lặng mà bỏ anh nhaaaa -_-\n Aaaahh còn về phần lá thư anh không viết gì trong đó cả "một phần là anh lười, hai là anh nghĩ... ước muốn của em thì phải chính tay em ghi vào thì mới được nên anh chừa cho em mớ khoản trống để tha hồ ghi cái mình muốn vô ă :v"\n Cái nào liên quan thì anh hi vọng mình có thể cùng em thực hiện, còn không thì anh đứng xem em cũng được\n Anh không biết tụi mình có thể đi với nhau bao lâu nên là trong quá trình đó mình cùng nhau cố gắng em nheee nên là em đừng nghi ngờ tình cảm anh dành cho em nhé... vì đó là thứ mà anh chắc chắn nhất...\n Cảm ơn em đã đến..\nCho phép anh yêu em nheeeeeeeee\n Ký tên...\n Người sẽ làm em buồn vui trong tương lai...' // Chuỗi có ký tự xuống dòng
  const [displayedText, setDisplayedText] = useState('') // Lưu trữ văn bản hiển thị

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index])
        index++
      } else {
        clearInterval(intervalId)
      }
    }, 70) // Mỗi 1 giây hiển thị 1 ký tự

    return () => clearInterval(intervalId)
  }, [])

  // Chuyển ký tự \n thành <br /> trong khi hiển thị
  const renderedText = displayedText.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))

  return (
    <div className='card'>
      <span className='animate-typewriter'>{renderedText}</span>
    </div>
  )
}

export default TypingEffect
