import "./Nav.css"
import imgLogo from "../../assets/img/logo1.jpg"

function Nav(){
    return(
        <nav>
            <div className="nav_block">
                 <div className="img_block-nav">
                   <img src={imgLogo} alt="" />    
                 </div>
                 <div className="tex_user-data">
                     <div className="user"></div>
                      <p className="user_text">John Doe</p>
                 </div>
                 <div className="block_main">
                    <div className="blocks" id="block">
                    <i class="fa-solid fa-house"></i> 
                     <p className="block_p" id="blocks-p">Boshqaruv</p>
                    </div>
                    <div className="blocks">
                      <i class="fa-solid fa-coins"></i>
                      <p className="block_p">To’lov</p>
                        
                    </div>
                    <div className="blocks">
                    <i class="fa-solid fa-graduation-cap"></i>
                      <p className="block_p">O’qituvchilar</p>
                        
                    </div>
                    <div className="blocks">
                    <i class="fa-solid fa-table-cells"></i>
                      <p className="block_p">Dars jadvali</p>
                        
                    </div>
                    <div className="blocks">
                    <i class="fa-solid fa-table-list"></i>
                      <p className="block_p">Davomat</p>
                        
                    </div>
                    <div className="blocks">
                    <i class="fa-solid fa-gear"></i>
                      <p className="block_p">Sozlamalar</p>
                        
                    </div>
                 </div>
                  <div className="end_nav">
                  <p>© 2022 All rights reserved!</p>
                  <p>Made by Edify Team</p>
                  </div>
            </div>
        </nav>
    )
}


export default Nav;