import { NavLink } from "react-router-dom";
import StyledHome from '../components/styles/Home.styled'

export default function Home() {
  return (
    <StyledHome>
      <section className="hero">
        <div className="hero-header">
          <p>NEW ARRIVALS - 50% OFF RIGHT NOW - ENDS SOON</p>
        </div>
        <NavLink to="shop">
        <div className="info-bar">
          <h2>
            Shop Now
          </h2>
        </div>
        </NavLink>
      </section>
    </StyledHome>
  )
}
