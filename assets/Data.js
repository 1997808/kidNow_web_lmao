import Attendance from '../model/attendance';
import Diary from '../model/diary'
import Lunch from '../model/lunch'
import Health from '../model/health'
import imgVideo from '../model/imgVideo';

const ATTENDANCE = [
  new Attendance(
    'p1',
    'Đã đến trường điểm danh',
    '7h49 pm',
    'Vũ Minh Hải'
  ),
]
export default ATTENDANCE;


const DIARY = [
  new Diary(
    'p1',
    'Đức',
    'Chào mừng bạn đến với ứng dụng',
    '13h30 pm',
    'Vũ Minh Hải'
  ),
]
export default DIARY;


const LUNCH = [
  new Lunch(
    'p1',
    'Bánh mỳ, Sữa, Hoa quả',
    '13h30 pm',
    'Vũ Minh Hải'
  ),
]
export default LUNCH;


const HEALTH = [
  new Health(
    'p1',
    1,
    'Đức đã gặp sự cố lmao',
    '13h30 pm',
    'Vũ Minh Hải'
  ),

  new Health(
    'p1',
    0,
    'Đức has been slained',
    '13h33 pm',
    'Vũ Minh Hải'
  ),
]
export default HEALTH;


const IMGVIDEO = [
  new imgVideo(
    'p1',
    'Đức hiện lên trong bức ảnh',
    '13h33 pm',
    'Vũ Minh Hải',
    'https://aboutreact.com/wp-content/uploads/2018/07/react_native_imageview.png'
  )
]
export default IMGVIDEO
