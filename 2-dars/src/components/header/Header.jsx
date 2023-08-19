

import "./Header.css"



function Header(){
    return (
        <header>
            <div className="header_block">
                 <div className="header_user">
                     <div className="userHead">
                        <i class="fa-solid fa-users"></i>
                        <div className="text_user">
                         <p>Guruhilar soni</p>
                         <p className="numberUser">10 ta</p>
                        </div>
                     </div>
                     <div className="notpay">
                     <i class="fa-regular fa-credit-card"></i>
                      <div className="notPayTetx">
                         <p className="notP">To’lov qilmaganlar soni</p>
                         <p className="notP2">16ta</p>
                      </div>
                     </div>
                     <div className="search">
                     <i class="fa-solid fa-magnifying-glass"></i>
                     </div>
                 </div>
            </div>
        </header>
    )
}

export default Header;