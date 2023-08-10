import landing from '../images/e721f0c38c536761f4ac958122251944.png'
import './landing.css'

function Landing() {
    return (
        <div className='landing'>
            <div className='landing-img'><img src={landing} /></div>
            <div className='text-center landing-text'>
                <h2>افضل التخفيضات 2023</h2>
                <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
                <button>اكتشف المزيد</button>
            </div>
            {/* <div className='overlay'>
                <h1>افضل التخفيضات 2023</h1>
                <h1> To Masr Market App</h1>
            </div> */}


        </div>
    )
}

export default Landing;