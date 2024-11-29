import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

import { toast } from "react-hot-toast"
import { BiUpload, BiLogOutCircle, } from "react-icons/bi"
import { BsBox2, BsFillCartFill } from "react-icons/bs"
import { BiSolidUser, BiSolidMessageSquareDetail } from "react-icons/bi"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
// css
import "./AdminSidebar.css"
import { ENDPOINT } from '../../api/Endpoint'



const Home = () => {

    const [toggled, setToggled] = useState(true)
    function SidebarTOGGLE() {
        setToggled(!toggled)
    }

    // classes
    const divClassName = toggled ? "user_profile_aside_toggle" : "user_profile_aside"
    const Asideheading = toggled ? "aside_heading_sidebar_toggled" : "aside_heading_sidebar"
    const Asidespan = toggled ? "icon_text_aside_toggled" : "icon_text_aside"
    const Aside_img = toggled ? "aside_user_profile_img_toggle" : "aside_user_profile_img"
    const aside_icon_state = toggled ? "aside_icon_state_toggled" : "aside_icon_state"
    const aside_link_flex = toggled ? "aside_link_flex_toggled" : "aside_link_flex"
    //LOGOUT
    const HandleLogout = async () => {
        try {
          toast.success("Logout Sucessfully")
        } catch (error: any) {
            console.log(error.message)
        }
    }
    return (
        <aside className={divClassName}>
            <div onClick={SidebarTOGGLE} className='aside_user_toggle'><MdOutlineKeyboardArrowLeft className='aside_icon_toggle' /></div>
            {/* user Profile IMAGE */}
            <div className='aside_profiel_image_cover'> <img className={Aside_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGLfMcRQLeG6HSAfx7kym7mqEfQMQAiykHg&s" alt="profile_img" /> <BiUpload className='upload_icon_aside' />   </div>
            {/* IMAGE DIV ENDS HERE */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Profile</p>
                <Link to="/home/me" className='aside_links'> <BsFillCartFill className={aside_icon_state} /> <span className={Asidespan}>Manage Profile</span> </Link>

            </div>
            {/* ORDER */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Chat</p>
                <Link to="/home/rooms" className='aside_links'> <BsBox2 className={aside_icon_state} /> <span className={Asidespan}>Rooms</span> </Link>
                <Link to="/home/create-new" className='aside_links'> <AiOutlineAppstoreAdd className={aside_icon_state} /> <span className={Asidespan}>Create Room</span> </Link>
            </div>
            {/* uSers */}

            <div className={aside_link_flex}>
                <p className={Asideheading}>Messages</p>
                <Link to="/home/inbox" className='aside_links'> <BiSolidMessageSquareDetail className={aside_icon_state} /> <span className={Asidespan}>Inbox/Outbox</span> </Link>
            </div>
            {/* WISHLISTS */}

            {/* vender OPTION REQUEST */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Browse People</p>
                <Link to="/home/search" className='aside_links'> <BiSolidUser className={aside_icon_state} /> <span className={Asidespan}>Browse People</span> </Link>
            </div>
            {/* ALL */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Actions</p>
                <p onClick={() => HandleLogout()} className='aside_links'> <BiLogOutCircle className={aside_icon_state} /> <span className={Asidespan}>Logout</span> </p>
            </div>


        </aside>
    )
}

export default Home