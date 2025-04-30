export const Header = ({user}) => {
  return(
    <>
 {user ==="Radovan Holátko" ? (
<header>
<div className="topbar container">
        <div className="topbar__brand">
          <div className="logo"></div>
          <div className="company">Mejlík.cz</div>
        </div>

        <div className="user">
          <div className="user__name">Radovan Holátko</div>
          <div className="user__icon"></div>
        </div>
      </div>
      </header>
      ) : (
    <header>
      <div className="topbar container">
        <div className="topbar__brand">
          <div className="logo"></div>
          <div className="company">Mejlík.cz</div>
        </div>

        <div className="login">Přihlásit se</div>
      </div>
      </header>
    )
}
</>
)
}
