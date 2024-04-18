
import './App.css'
import ExploreSlide from './components/slider/ExploreSlide.jsx'
import SimpleSlider from './components/slider/SimpleSlider.jsx'


function App() {


  return (
    <>
      <header className=''>
        <div className='flex justify-between px-7 py-3 text-zinc-500'>
          <div className='flex gap-5 font-semibold '>
            <div>
              <img className='w-8 cursor-pointer' src='\images\xiaomi.jpg' />
            </div>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'>  Store</span>

            </div>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'>  Phone</span>

            </div>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'>  TV & Smart Home</span>

            </div>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'>    Tablet</span>

            </div>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'> LifeStyle</span>

            </div>
          </div>
          <div className='flex gap-5 font-semibold'>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'> Discover</span>

            </div>
            <div className=''>
              <span className='cursor-pointer hover:text-orange-500'> Support</span>
            </div>
            <div >
              <a href='#'><img className='cursor-pointer' src='/images/search.PNG'></img></a>

            </div>
            <div>
              <a href='#'>
                <img className='cursor-pointer' src='/images/cart.PNG'></img>

              </a>

            </div>
            <div>
              <a href='#'> <img className='cursor-pointer' src='/images/user.PNG'></img></a>

            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className='section-1'>
            <SimpleSlider />
          </div>
        </section>

        <section className='bg-gray-100 '>
          <div className='container'>
            <h1 className='text-center text-3xl font-semibold pt-20 pb-10 '>Featured Products</h1>
            <ul className='flex justify-center gap-10 text-lg text-slate-700'>
              <li><button className=''>Phones</button></li>
              <li><button>Smart TV</button></li>
              <li><button>Tablets</button></li>
              <li><button>Lifestyle</button></li>
            </ul>
            <div className='bg-gray-100 rounded  p-14 '>
              <div className='bg-white  p-6 rounded-lg'>
                <div className='overflow-hidden bg-gray-100 flex gap-20  rounded-lg'>
                  <img className="smart-watch-image rounded-tl-lg rounded-bl-lg transition-transform duration-500 hover:scale-105" src='https://i03.appmifile.com/455_operator_in/19/02/2024/ef0c5c12f34d29b2b9a779de159c8152.jpg?thumb=1&w=660&f=webp&q=85'></img>

                  <div className=' flex flex-col justify-center items-center  gap-4'>
                    <h2 className='text-3xl font-semibold text-slate-800'>Redmi Watch 3 Active</h2>
                    <span className='text-sm font-semibold text-slate-600'>5 ATM Waterproof</span>
                  </div>
                </div>

                <div className='grid  grid-cols-4 gap-6 mt-7  '>
                  <div className='bg-gray-100 rounded-lg flex flex-col justify-center items-center p-8'>
                    <img className='transition-transform duration-500 hover:scale-105' src='https://i03.appmifile.com/903_item_in/06/04/2024/c45b09ceb4186e9c35727c5c3643ae36.png?thumb=1&w=160&f=webp&q=85'></img>
                    <span className='font-semibold text-slate-800 mt-3'>Redmi Buds 5</span>
                    <div className='font-semibold text-slate-800'><span> ₹2999</span>
                      <span className='line-through ml-1 text-gray-300 '> ₹4999</span>
                    </div>

                  </div>
                  <div className='bg-gray-100 rounded-lg flex flex-col justify-center items-center p-8'>
                    <img className='transition-transform duration-500 hover:scale-105' src='https://i02.appmifile.com/251_operator_in/07/09/2022/d0fef80da497fd605b24996869d92616.jpg?thumb=1&w=160&f=webp&q=85'></img>
                    <span className='font-semibold text-slate-800 mt-3'>Xiaomi Grooming Kit Pro</span>
                    <div className='font-semibold text-slate-800'><span> ₹2499</span>
                      <span className='line-through ml-1 text-gray-300'> ₹4999</span>
                    </div>

                  </div>
                  <div className='bg-gray-100 rounded-lg flex flex-col justify-center items-center p-8'>
                    <img className='transition-transform duration-500 hover:scale-105' src='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600435565.39326952.jpg?thumb=1&w=160&f=webp&q=85'></img>
                    <span className='text-center  font-semibold text-slate-800 mt-3' >20000mAh Mi Power Bank 3i</span>
                    <div className='font-semibold text-slate-800'><span> ₹2149</span>
                      <span className='line-through ml-1 text-gray-300'> ₹3499</span>
                    </div>

                  </div>
                  <div className='bg-gray-100 rounded-lg flex flex-col justify-center items-center p-8'>
                    <img src='https://i02.appmifile.com/414_operator_in/26/08/2021/ab8d5c0a79f467c9c7fb66329f12c501.jpg?thumb=1&w=160&f=webp&q=85' className='transition-transform duration-500 hover:scale-105'></img>
                    <span className='text-center font-semibold text-slate-800 mt-3'>Mi 360 Home Security Camera 2k Pro</span>
                    <div className='font-semibold text-slate-800'><span> ₹4199</span>
                      <span className='line-through ml-1 text-gray-300'> ₹5999</span>
                    </div>

                  </div>

                </div>

              </div>

              <section>
                <h3 className='text-center pt-16 pb-8 text-4xl font-semibold'>Exclusive Offers</h3>

                <div className='  p-6 rounded-lg'>


                  <div className='grid  grid-cols-3 gap-6 mt-7  '>
                    <div className='overflow-hidden bg-white rounded-lg flex flex-col justify-center items-center p-5 gap-3 '>
                      <img className='transition-transform duration-500 hover:scale-105' src='https://i03.appmifile.com/36_operator_in/19/02/2024/a2db114bfb3eb919b734b44b80d2933a.jpg?thumb=1&w=420&f=webp&q=85'></img>
                      <span className='font-semibold text-slate-800 mt-3 text-lg'>Smart Bundles</span>
                      <span className='text-sm text-slate-500 font-semibold'>Unlock Unbeatable Deals</span>

                    </div>
                    <div className='overflow-hidden bg-white rounded-lg flex flex-col justify-center items-center p-5 gap-3'>
                      <img className='transition-transform duration-500 hover:scale-105' src='https://i03.appmifile.com/781_operator_in/19/02/2024/872bcb906dec5d442ca9a961a835a938.jpg?thumb=1&w=420&f=webp&q=85'></img>
                      <span className='font-semibold text-slate-800 mt-3 text-lg'>Bestselling Smartphones</span>
                      <span className='text-sm text-slate-500 font-semibold'>Elevate Your SmartPhone Experience</span>

                    </div>
                    <div className='overflow-hidden bg-white rounded-lg flex flex-col justify-center items-center p-5 gap-3'>
                      <img className='transition-transform duration-500 hover:scale-105' src='https://i03.appmifile.com/346_operator_in/19/02/2024/d4bb56bb3e434c120e028f282bbe4418.jpg?thumb=1&w=420&f=webp&q=85'></img>
                      <span className='text-center  font-semibold text-slate-800 mt-3 text-lg' >Xiaomi Smart Home Products</span>
                      <span className='text-sm text-slate-500 font-semibold'>Smarter Technology, Smarter Living</span>

                    </div>


                  </div>

                </div>
              </section>


            </div>


          </div>
        </section>

        <section className='bg-gray-100 '>
          <h3 className='text-center text-3xl font-semibold p-6 text-slate-900'>Explore Xiaomi</h3>
          <ExploreSlide />
        </section>
        <div className='bg-gray-100'>
        <section className='container p-16'>
          <h3 className='text-center font-semibold text-2xl p-5'>Xiaomi Support</h3>
          <ul className='flex gap-5'>
            <li>
              <a href='#'>
                <div className='p-5 gap-3 flex flex-col justify-center items-center'>
                  <img className=' hover:text-orange-600' src='/images/miexchange.PNG'></img>
                  <span className=' hover:text-orange-600 font-semibold mt-3 text-gray-800 text-xl'>Mi Exchange</span>
                  <span className=' hover:text-orange-600 text-center text-xs text-slate-600'>Save More & Go Green With Your Old Device</span>
                </div>
              </a>
            </li>
            <li>
              <a href='#'>
                <div className='p-5 flex flex-col gap-3 justify-center items-center'>
                  <img className=' hover:text-orange-600' src='/images/mi.PNG'></img>
                  <span className=' hover:text-orange-600 font-semibold mt-3 text-gray-800 text-xl'>Mi Complete Prot...</span>
                  <span className=' hover:text-orange-600 text-center text-xs text-slate-600'>Protect Your Device In Less Than ₹2/Day</span>
                </div>
              </a>
            </li>
            <li>
              <a href='#'>
                <div className='p-5 flex flex-col gap-3 justify-center items-center'>
                  <img className=' hover:text-orange-600' src='/images/support.PNG'></img>
                  <span className=' hover:text-orange-600 font-semibold mt-3 text-gray-800 text-xl'>Service Centers</span>
                  <span className=' hover:text-orange-600 text-center text-xs text-slate-600'>Right Where You Need Us</span>
                </div>
              </a>
            </li>
            <li className=''>
              <a className='' href='#'>
                <div className='p-5 flex flex-col gap-3 justify-center items-center'>
                  <img className=' hover:text-orange-600' src='/images/warrantl.PNG'></img>
                  <span className=' hover:text-orange-600 font-semibold mt-3 text-gray-800 text-xl'>Mi Extended Warr...</span>
                  <span className=' hover:text-orange-600 text-center text-xs text-slate-600'>Ensure Your Devices For An Extra Year At Nominal Cost</span>
                </div>
              </a>
            </li>
          </ul>
        </section>
        </div>
        </main>
        <footer className='bg-zinc-900'>
<div className='py-12'>
  <ul className='flex justify-evenly gap-4'>
<li className='text-white font-semibold'>
  Support
  <ul className='flex flex-col gap-3 text-sm mt-3 text-gray-400'>
    <li className='hover:underline hover:text-white'><a href='#'>Online Help</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Customer service</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Shipping FAQ</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Warranty</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Mi Exchange</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Bulk Orders</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>User Guide</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Laptop Drivers</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Mi Screen Protect</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Mi Extended Warranty</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Mi Complete Protect</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Certification</a></li>
    <li className='hover:underline hover:text-white'><a href='#'>Service centre</a></li>
    </ul>
</li>
<li className='text-white font-semibold'>
SHOP AND LEARN
<ul  className='flex flex-col gap-3 text-sm mt-3 text-gray-400'>
  <li className='hover:underline hover:text-white'><a href='#'>Xiaomi Phones</a></li>
  <li className='hover:underline hover:text-white'><a href='#'>Redmi Phones</a></li>
  <li className='hover:underline hover:text-white'><a href='#'>Tv's</a></li>
  <li className='hover:underline hover:text-white'><a href='#'>Laptops and Tablets</a></li>
  <li className='hover:underline hover:text-white'><a href='#'>Audio</a></li>
  <li className='hover:underline hover:text-white'><a href='#'>Lifestyle</a></li>
  <li className='hover:underline hover:text-white'><a href='#'>Smart Home</a></li>
</ul>
</li>
<li className='text-white font-semibold'>
 RETAIL STORE
 <ul  className='flex flex-col gap-3 text-sm mt-3 text-gray-400'>
 <li className='hover:underline hover:text-white'><a href='#'>Mi Home</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Mi Authorized Store</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Mi Store Franchise</a></li>
 </ul>
</li>
<li className='text-white font-semibold'>
  ABOUT US
  <ul  className='flex flex-col gap-3 text-sm mt-3 text-gray-400'>
  <li className='hover:underline hover:text-white'><a href='#'>Xiaomi</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Privacy Policy</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>User Agreement</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Integrity & Compliance</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>CSR and Disclosures</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>E-Waste Management</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>In The Press</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Trust Center</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Culture</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Smartphone Quality</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>TV Quality</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Service Quality</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Xiaomi HyperOS</a></li>
 <li className='hover:underline hover:text-white'><a href='#'>Join Our Team</a></li>
  </ul>
</li>
<li className='text-white'>
 Follow Mi
 <ul className='flex flex-col gap-5'>
  <div className='flex just gap-4 mt-3'>
  <a href='#'><img src='/images/facebook.PNG'></img></a>
  <a href='#'><img src='/images/exlogo.PNG'></img></a>
  <a href='#'><img src='/images/insta.PNG'></img></a>
  </div>
  <div className='flex flex-col'>
  <label for="email" className='font-bold'>Let's stay in touch</label>
    <input className='p-2 mt-3 rounded-lg bg-zinc-900 border ' type='email'  placeholder='Enter email address'></input>
  </div>
  <div className='border rounded-lg  py-3 px-6'>
    <div  className='flex justify-center items-center gap-2'>
    <a href='#'> <img src='/images/qrcode.PNG'></img></a>
   <div className='flex flex-col '>
    <span>Get mi store app</span>
    <span className='text-sm text-gray-400 max-w-40'>Scan for our up-to-date information for better shopping experience</span>
   </div>
    </div>
   
    <div className='mt-3 border'>
      <a href='#' className='flex gap-3 items-center '>
      <img className='w-7' src='/images/google.png'></img>
        <span className='text-sm font-semibold text-zinc-100'>Download on Google play</span>
      </a>
    </div>


  </div>

 </ul>
</li>
  </ul>
  
</div>
<div className='line'>

</div>
<div className='flex justify-between text-gray-200 px-5 py-10'>
  <div className='flex gap-6 text-sm font-bold'>
  <span>Copyright © 2010 - 2024 Xiaomi. All Rights Reserved</span>
  <a className='hover:underline' href='#'>Sitemap</a>
  </div>
  <div className='flex gap-2 text-sm font-bold'>
    <a href='#'><span className='hover:underline'>
India / India</span></a>
<a href='#'><img src='/images/globe.PNG'></img></a>
  </div>
</div>



        </footer>

    </>
  )
}

export default App
