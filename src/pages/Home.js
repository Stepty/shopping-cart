import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to Home</h2>
        <NavLink to="shop">Shop Now</NavLink>
      </section>
    </div>
  )
}
