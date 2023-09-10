import './BgRemove.css';
import close from '../assets/close.png'

function BgRemove() {
  return (
    <div className='bg_div_cont'>
      <div className='bg_header'>
        <img src={close} className='close_img'/>
        <div className='bg_div_header_title'>העלאת תמונה כדי להסיר את הרקע</div>
        <button className='bg_div_header_button'>העלאת תמונה</button>
        <div className='bg_div_header_subtext'>פורמטים נתמכים: png, jpeg</div>
      </div>
    </div>
  );
}

export default BgRemove;