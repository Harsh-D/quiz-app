import { HeaderProps } from "./HeaderProps.types";

export function Header({ username, score }: HeaderProps) {
  return (
    <>
      <div className="nav-main nav-primary">
        <h1>
          💠 Log<sub>N</sub>Quiz
        </h1>
        <ul className="list nav--list">
          <li className="nav-item">
            {/* <NavLink
              end
              to="/products"
              className="NavElement"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              PRODUCTS
            </NavLink> */}
            Quiz 1
          </li>
          <li className="nav-item">
            Quiz 2
          </li>
        </ul>
      </div>

      <div>
        <div> Welcome, {username}! </div>
        <div> Score: {score} </div>
      </div>
    </>
  );
}
