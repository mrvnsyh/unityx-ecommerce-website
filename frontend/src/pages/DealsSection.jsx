import React from 'react'
import dealsImg from "../assets/deals.png"

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals__content'>
            <h5>Get Up to 20% Discount</h5>
            <h4>Deals Of This Month</h4>
            <p style={{ textAlign: "justify", color: "var(--text-dark)" }}>Shop our Deals of the Month for exclusive discounts on men’s fashion! 
            Save big on stylish clothing, footwear, and accessories. Don’t miss these 
            limited-time offers—upgrade your wardrobe today!</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection
