import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Rightcont = (params) => {
    const arrare = params.dt;
    return <>
        <div style={{ fontSize: "1.1em", textAlign: "center",marginTop:"0.4em" }}><strong>Repositories ({params.data.public_repos})</strong> </div>
        <div style={{display:"flex",flexDirection:"column",border:"0px solid red",height:"85vh",overflow:"scroll"}}>
            {
                arrare.map((ele) => {
                    return <>
                        <a className="btn btn-primary" style={{margin:"1rem"}} href={`https://github.com/${params.data.login}/${ele.name}`} target="_blank">
                        {ele.name}
                        </a>

                    </>
                })
            }
        </div>


    </>
}

export default Rightcont;