
import './App.css'
import Slider, {Settings} from "react-slick";

function App() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const typeMap: Record<number, string> = {
    1: "遊戲",
    2: "系統",
    3: "活動",
  }
  const news = [
    {date: '2024-01-03', title: "測試的標題測試的標題測試的標題", type: 1},
    {date: '2024-01-02', title: "測試的標題測試的標題測試的標題", type: 2},
    {date: '2024-01-02', title: "測試的標題測試的標題測試的標題", type: 2},
    {date: '2024-01-01', title: "測試的標題測試的標題測試的標題", type: 3},
    {date: '2024-01-01', title: "測試的標題測試的標題測試的標題", type: 3},
  ]
  return (
    <div className="max-w-full overflow-hidden bg-[url('/img/bg.png')] bg-fixed bg-top bg-no-repeat">
      <div className="fixed top-0 lef-0 z-30 w-full bg-gradient-to-b from-black to-transparent h-48">
        <img src="/img/logo.png" className='h-full m-4' alt="" />
      </div>

      <div className="pt-20">
        <div className="mx-auto">
          <Slider {...settings} className=''>
            {[...Array(5)].map(((_,i)=> <div key={i}>
              <img src="/img/banner.png" alt="" className='max-w-full object-cover object-center' />
            </div>))}
          </Slider>
        </div>

        <div className="container rounded-xl mx-auto relative h-[580px] mt-48">
          <img src="/img/girl01.png" className="absolute h-[700px] right-0 bottom-0 -mr-48 z-10" alt="" />
          <img src="/img/girl02.png" className="absolute  h-[700px] left-0 bottom-0 z-10 -ml-32" alt="" />
          <div className="w-[800px] mx-auto py-6 px-12 bg-gradient-to-b from-black/50 to-transparent rounded-xl text-lg min-h-[600px]">
            {news.map((t, i)=> (<div key={i} className='flex border-b last-of-type:border-none border-b-slate-500 py-2'>
              <div className="w-40">【{typeMap[t.type]}】</div>
              <div className="truncate flex-1">{t.title}</div>
              <div className="w-48">{t.date}</div>

            </div>))}
          </div>
        </div>

        <div className="bg-slate-800 mt-48 py-4">
          <div className="w-max mx-auto flex items-center gap-x-6">
            <div className="">
              <img src="/img/cr_grading.png" className='h-max' alt="" />
            </div>
            <div className="text-slate-400 text-sm">
            ※ 遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。請注意遊戲時間，避免沉迷。<br/>
            ※ 本遊戲提供之機會中獎商品，消費者購買或參加活動不代表即可獲得特定商品。<br/>
            ※ 本遊戲情節涉及棋牌益智及娛樂，非現金交易賭博，使用者請勿進行非法遊戲幣交易。
            </div>
          </div>
        </div>
      </div>






    </div>
  );
}

export default App
