import './App.css'

const menuSections = [
  {
    icon: 'biryani',
    title: 'Biryani',
    items: ['Chicken Biryani', 'Mutton Biryani', 'Veg Biryani'],
  },
  {
    icon: 'plate',
    title: 'Daily Meals',
    items: ['Rice + Curry Meals', 'Chapati Meals', 'Dal Rice', 'Sambar Rice', 'Curd Rice'],
  },
  {
    icon: 'snacks',
    title: 'Snacks & Sides',
    items: ['French Fries', 'Chicken Wings', 'Veg Nuggets', 'Onion Rings', 'Garlic Bread', 'Sandwiches', 'Cheese Balls', 'Spring Rolls'],
  },
  {
    icon: 'protein',
    title: 'Protein Meals',
    items: ['Grilled Chicken Bowl', 'Tandoori Chicken Meal', 'Paneer Protein Bowl', 'Egg White Scramble', 'Boiled Egg Meal', 'Quinoa Bowl', 'High Protein Salad', 'Oats & Chicken Bowl'],
  },
  {
    icon: 'drink',
    title: 'Drinks',
    items: ['Mojito Mint', 'Blue Mojito', 'Watermelon Mojito', 'Lemon Mojito', 'Fresh Lime Soda', 'Iced Tea', 'Milkshakes', 'Fresh Juices'],
  },
]

const featureCards = [
  ['cloche', 'Cooking on order', 'Freshly prepared just for you.'],
  ['scooter', 'Home delivery & takeaway', 'Delivered hot and fresh to your doorstep.'],
  ['phone', 'Accepted order methods', 'WhatsApp and call orders welcome.'],
  ['leaf', 'Home-cooked, no preservatives', 'Healthy food made with pure ingredients.'],
  ['stamp', 'FSSAI registered', 'Licensed, safe, and easy to trust.'],
]

const serviceNotes = [
  ['calendar', 'Weekly / monthly meal plans', 'Healthy, balanced, affordable custom plans available.'],
  ['tiffin', 'Tiffins / lunch & dinner', 'Hygienic, nutritious, homemade meals for office, college, and home.'],
  ['family', 'For family & bachelors', 'Meals for every need, made with love.'],
]

function PixelFoodIcon({ type }) {
  return <span className={`food-icon ${type}`} aria-hidden="true"></span>
}

function PixelBadge({ type }) {
  return <span className={`pixel-badge ${type}`} aria-hidden="true"></span>
}

function App() {
  return (
    <main className="page-shell">
      <section className="poster">
        <div className="corner corner-top-left" aria-hidden="true"></div>
        <div className="corner corner-top-right" aria-hidden="true"></div>

        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Homemade</p>
            <h1>
              Cooked
              <span>Food</span>
            </h1>
            <div className="ribbon">Made with love & fresh ingredients</div>
          </div>

          <div className="chef-scene" aria-label="Home cook preparing a fresh meal">
            <div className="shelf">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="chef">
              <div className="hair"></div>
              <div className="face"></div>
              <div className="apron"></div>
              <div className="arm arm-left"></div>
              <div className="arm arm-right"></div>
            </div>
            <div className="pot">
              <span className="steam steam-one"></span>
              <span className="steam steam-two"></span>
              <span className="heart"></span>
            </div>
            <div className="counter-line"></div>
          </div>
        </header>

        <section className="menu-grid" aria-label="Menu categories">
          {menuSections.map((section) => (
            <article className="menu-card" key={section.title}>
              <PixelFoodIcon type={section.icon} />
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="feature-strip" aria-label="Ordering details">
          {featureCards.map(([icon, title, text]) => (
            <article className="feature-card" key={title}>
              <PixelBadge type={icon} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="service-grid" aria-label="Meal services">
          {serviceNotes.map(([icon, title, text]) => (
            <article className="service-note" key={title}>
              <PixelBadge type={icon} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="footer-ribbon">
          <span>Good food</span>
          <span>Good mood</span>
          <span>Made at home</span>
        </footer>
      </section>
    </main>
  )
}

export default App
