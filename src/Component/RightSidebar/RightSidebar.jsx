import React from 'react';
import Location from './Icon/Location';
import EditIcon from './Icon/EditIcon';
import "./RightSidebar.css";
const RightSidebar = () => {
    return (
        <>
        <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex align-items-center gap-2">
                <Location></Location>
                <h4 className='fs-6 mb-0'>Noida, India</h4>
            </div>
            <div>
                <EditIcon></EditIcon>
            </div>
        </div>
        <p className="text-xs text-black my-3"><img src="assets/warning.png" className="me-2" alt="" /> Your location will help us serve better and extend a personalised experience.</p>
        <h3 className="my-3">Recommended Groups</h3>
        <div className="follow-people-list d-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                <img src="assets/Joseph.png" alt="" />
                <h3 className="text-black text-sm mb-0">Leisure</h3>
                </div>
<button className="follow-btn">Follow</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                <img src="assets/kamal.png" alt="" />
                <h3 className="text-black text-sm mb-0">Activism</h3>
                </div>
<button className="follow-btn">Follow</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                <img src="assets/hasan.png" alt="" />
                <h3 className="text-black text-sm mb-0">MBA</h3>
                </div>
<button className="follow-btn">Follow</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                <img src="assets/sarthak.png" alt="" />
                <h3 className="text-black text-sm mb-0">Philosophy</h3>
                </div>
<button className="follow-btn">Follow</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                <img src="assets/Joseph.png" alt="" />
                <h3 className="text-black text-sm mb-0">Sarthak Kamra</h3>
                </div>
<button className="follow-btn">Follow</button>
            </div>
        </div>
        </>
    );
};

export default RightSidebar;