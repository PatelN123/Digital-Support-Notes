import React from 'react'

import HomeNewsBanner from './homeNewsBanner'

function HomeHero() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
        {/* Hero content */}
        <div className='relative pt-24 pb-10 md:pt-32 md:pb-16'>
          {/* Section header */}
          <HomeNewsBanner
            className='max-w-3xl mx-auto text-center pb-8 md:pb-12'
            link='/blog/2021/03/10/introducing-botonic-office-hours/'
          >
            Computer Science Category
          </HomeNewsBanner>
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <div className='max-w-3xl mx-auto'>
              <div
                className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
                data-aos='zoom-y-out'
                data-aos-delay='300'
              >
                {/*<div>
                  <a
                    className='btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4'
                    href='#0'
                  >
                    Learn more
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero