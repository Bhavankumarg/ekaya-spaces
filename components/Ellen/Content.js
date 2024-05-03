'use client'
import React, { useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Contact from '../../components/HomePage/Contact'

function Content() {
    const sliderRef = useRef(null);

  const NextArrow = ({onClick}) => (
    <div className="arrow next-arrow" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <g id="Group_49400" data-name="Group 49400" transform="translate(-1167 -1988)">
        <circle id="Ellipse_133" data-name="Ellipse 133" cx="24" cy="24" r="24" transform="translate(1167 1988)" fill="#1d1d1d"/>
        <g id="Group_13142" data-name="Group 13142" transform="translate(-69.769 -3315.449)">
          <g id="Group_158" data-name="Group 158" transform="translate(1248.88 5318.561)">
            <path id="Path_96" data-name="Path 96" d="M0,0H12.534V12.605" transform="translate(8.913 0) rotate(45)" fill="none" stroke="#fff" stroke-width="2"/>
          </g>
        </g>
      </g>
          </svg>
          </div>
      );
    
    
      const PrevArrow = ({onClick}) => (
        <div className="arrow prev-arrow" onClick={onClick}>
    <svg id="Group_49401" data-name="Group 49401" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <circle id="Ellipse_133" data-name="Ellipse 133" cx="24" cy="24" r="24" fill="#1d1d1d"/>
      <g id="Group_13142" data-name="Group 13142" transform="translate(18.112 15.112)">
        <g id="Group_158" data-name="Group 158" transform="translate(0)">
          <path id="Path_96" data-name="Path 96" d="M0,12.605H12.534V0" transform="translate(17.776 8.913) rotate(135)" fill="none" stroke="#fff" stroke-width="2"/>
        </g>
      </g>
    </svg>
    </div>
      );
    
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Pass onClick handler to prev arrow
        nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Pass onClick handler to next arrow
      };
    
    

  return (
    <div>
         <div className='mt-[100px] w-[80%] mx-auto' data-aos="fade-up">
         <h4 className='text-4xl text-black poppins-light pb-6'>Truly a home for your future!</h4>
          <p className='poppins-light text-[18px] text-start pb-5'>Ekaya brings you its prestigious project, ELLEN - a premium three-storey apartment block, with a total of 11 spacious modern homes, abound with new age luxuries.</p>
              <p className='poppins-light text-[18px] text-start pb-5'>Every floor houses just two, 2 bedroom and one, 3 bedroom home. Each unit has an open kitchen with a spacious utility area, an exclusive dining area, and a spacious balcony. All Vaastu-compliant homes are thoughtfully designed, keeping in mind the most primary need of the day - space and privacy. The residences are beautifully weaved into the very fiber of ELLEN’s design structure.</p>
              <p className='poppins-light  text-[18px] text-start'>At ELLEN compromise was never an option. Only the best of everything has been utilized, right from the building material, to its 24 hrs - power back up,the gym, to the maneuver-friendly stilt ( ground level ) and basement parking , to the finish with marble and wooden flooring.</p>
          </div>
          <div className='w-[80%] mx-auto pt-12'>
              <p className='bg-[#DFF3F4] p-4 poppins-light w-[337px] text-center'>Project Gallery</p>
              </div>
          <div className='w-[80%] mx-auto' data-aos="fade-up">
          <Slider ref={sliderRef} {...settings}>
                    <div>
                      <img src="ellen/slide.png" className='' />
                          </div>
                          <div>
                      <img src="ellen.png" className='' />
                          </div>  
              </Slider>
         
              <h6 className='poppins-light text-4xl text-start pb-5 pt-10'>LOCATION</h6>
              <p className='poppins-light text-[18px] text-start pb-5'>Within a few minutes drive of Bengaluru’s hottest landmark destinations – UB city, Bangalore club, Ritz Carlton hotel, JW Marriot, Lalbagh Botanical Gardens, Cubbon park and many more, Ekaya’s ELLEN is just off Langford Main Road, cocooned in the most sought after, premium residential neighbourhood of Richmond town in central bangalore.</p>
              <p className='poppins-light text-[18px] text-start pb-5'>It is strategically situated in the Central Business District (CBD) and just about 5 minutes from the upcoming metro station at Vellara junction.</p>
              
          </div>



          <div className='bg-[#D5F0F0] py-12' data-aos="fade-up">
              <div className='w-[80%] mx-auto'>
                  <h4 className='text-4xl text-black poppins-light pb-6'>Specifications</h4>  
                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                      
                      <div className='text-2xl poppins-light poppins-light'>Structure</div>
                      <div> <ul className='poppins-light  list-image-[url(/right-icon.svg)]'>
                          <li className='text-[18px]'>RCC framed structure.</li>
                          <li>Concrete block masonry, wire cut clay bricks.</li>
                      </ul></div>
                  </div>
                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>FLOORING</div>
                      <div>
                          <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)] pb-1">
                          <li>Lift lobbies and wall cladding<br/> - marble Living and dining<br/> - marble Bedrooms<br/> - wooden laminate Master bedroom<br/> -wooden laminate Kitchen<br/> - Porcelene tile Balcony<br/> - Antiskid vetrified tiles. Toilet – Anti skid tile</li>
                          
                          </ul>
                         </div>
                  </div>
                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>PAINTING</div>
                      <div> <ul className='poppins-light text-[18px] list-image-[url(/right-icon.svg)]'>
                          <li>Interiors - premium acrylic/plastic emulsion Exterior<br/> - Premium exterior emulsion</li>
                          
                      </ul></div>
                  </div>
                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>KITCHEN</div>
                      <div> <ul className='poppins-light text-[18px] list-image-[url(/right-icon.svg)]'>
                          <li>Provision for modular kitchen Provision for electric chimney, hob and water purifier Utility room with private drying area along with points for dishwasher and washing machine 3 bedroom apartments will have a separate staff room with a bathroom attached</li>
                          
                      </ul></div>
                  </div>
                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>DOORS</div>
                      <div> <ul className='poppins-light text-[18px] list-image-[url(/right-icon.svg)]'>
                          <li>All doors with veneer on both sides and teak wood framing. Hardware used will be Godrej or equivalent. UPVC/High density aluminum windows</li>
                          
                      </ul></div>
                  </div>

                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>ELECTRICAL</div>
                      <div> <ul className='poppins-light text-[18px] list-image-[url(/right-icon.svg)]'>
                          <li>- Biometric locks for all main doors<br/> - Yale or equivalent<br/> - CCTV surveillance in common areas<br/> - 24 Hour security</li>
                          
                      </ul></div>
                  </div>

                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>GYM</div>
                      <div>
                      <ul className='poppins-light list-image-[url(/right-icon.svg)]'>
                          <li className='text-[18px]'>- Air Conditioned Gym with essential equipments</li>
                          </ul>
                      </div>
                      
                  </div>
                  <hr className='h-px border-t border-gray-300 mx-auto ' />
                  <div className='grid grid-cols-2 py-4'>
                  <div className='text-2xl poppins-light'>MISCELLANEOUS</div>
                      <div>
                      <ul className='poppins-light list-image-[url(/right-icon.svg)]'>
                          <li className='text-[18px]'>- Rain water harvesting in multiple areas.<br/>- Borewells<br/> - Landscaped entrance area<br/> - Water softener<br/> - Effluent treatment plant<br/> - Multiple hose points in parking areas<br/> - Biometric locks for lobby doors</li>
                          </ul>
                      </div>
                      
                  </div>
          </div>
</div>
          <div className='grid grid-cols-2 w-[80%] mx-auto' data-aos="fade-right">
              <div className='items-center content-center p-6'>
                  <h5 className='poppins-light text-gray-900 text-6xl'>
              HOW TO<br/>GET THERE
              </h5>
              </div>
              <div><img src="/ellen-map.png"/></div>
</div>
<div className='w-[80%] mx-auto py-12' data-aos="fade-up">
<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-e-green hover:text-e-green dark:text-purple-500 dark:hover:text-purple-500 border-e-green dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg text-xl poppins-light" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Floor plan 1</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg text-xl poppins-light hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Floor Plan 2</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg text-xl poppins-light hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">3D Design 1</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg text-xl poppins-light hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">3D Design 2</button>
        </li>
    </ul>
</div>
<div id="default-styled-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div>
                          <img src="/ellen/floor-1.png"/>
                      </div>    
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
    <div>
                          <img src="/ellen/floor-2.png"/>
                      </div>   
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
    <div>
                          <img src="/ellen/floor-3.png"/>
                      </div>   
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
    <div>
                          <img src="/ellen/floor-4.png"/>
                      </div>   
    </div>
</div>
</div>
<Contact/>
<div className='overflow-hidden z-0'>
      <div class="vertical overflow-hidden"></div>
        <div class="vertical-1 overflow-hidden"></div>
        <div class="vertical-2 overflow-hidden"></div>
        <div class="vertical-3 overflow-hidden"></div>
        </div>
    </div>
  )
}

export default Content
