import React from "react";
import { GoLocation } from "react-icons/go";

const LeftComp = (params) => {
    return <>
        <div style={{borderRight: "1px solid white" ,width: "30%", height: "100%", border: "0px solid red", display: "flex", flexDirection: "column", alignItems: "center", padding: "1em" }}>
            <img src={params.data.avatar_url} alt="" style={{ border: "2px solid white", width: "20em", borderRadius: "50%", marginBottom: "1.5em", cursor: "pointer" }} />
            <div className="about">
                <div><span className="name">{params.data.name}</span> , <span className="name">{params.data.login}</span></div>
                <div className="loca"><GoLocation /> {params.data.location}</div>
                <div className="bio">Followers : {params.data.followers}  ||  Following : {params.data.following}</div>
                <div className="bio">{params.data.bio}</div>
            </div>
        </div>
    </>
}
export default LeftComp;