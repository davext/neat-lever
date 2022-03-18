import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Lever(props) {


    const [teamPostings, setTeamPostings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        return axios.get(`https://api.lever.co/v0/postings/${props.username}?group=team&mode=json`)
            .then((response) => {
                setLoading(false)
                setTeamPostings(response.data)
                console.log(response.data)
            })

    }, [props.username])





    return (
        !loading && <div>

            {teamPostings.map((team, teamIndex) => {

                return team.postings.map((posting, postingIndex) => {

                    return (<div key={postingIndex} style=
                        {{
                            backgroundColor: "#000", borderRadius: "4rem",
                            padding: "1rem 3rem 1rem 3rem",
                            margin: "1rem 0 1rem 0"
                        }}>
                        <h2 style={{ fontSize: "3rem", color: "#fff", marginBottom: "1rem" }}>
                            {posting.text}</h2>
                        <div style={{ display: "flex", gap: "2rem", flexWrap:"wrap" }}>

                            {Object.values(posting.categories).map((categoryValue, categoryIndex) => {
                                return (<div key={categoryIndex} style={{
                                    backgroundColor: "#fff", color: "hotpink", padding: ".5rem 2rem .5rem 2rem", borderRadius: "1rem", fontWeight: "bold",
                                    textTransform: "uppercase"
                                }}>{categoryValue}</div>)

                            })}
                        </div>
                        <div

                            style={{
                                width: "100%",
                                padding: "2rem 0 2rem 0"
                              
                              
                            }}>
                            <p style={{
                                overflow:"hidden",
                                display: "-webkit-box",
                                "-webkit-line-clamp": "7",
                                "-webkit-box-orient": "vertical",
                                textOverflow : "ellipsis",
                                color: "white"}}>
                                {posting.descriptionPlain} 
                            </p>
                        </div>


                        <a href={posting.hostedUrl + `?utm_source=${window.location}`} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer"><div style={{
                            backgroundColor: "#fff", color: "hotpink", padding: ".5rem 2rem .5rem 2rem", borderRadius: "1rem", fontWeight: "bold", marginBottom: "2rem",
                            textTransform: "uppercase", textAlign: "center",
                        }}>Learn More</div></a>


                    </div>)


                })

            })}


        </div>
    )
}
