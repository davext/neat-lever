import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Lever(props) {


    const [teamPostings, setTeamPostings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userName, setUsername] = useState("");
    const [error, setError] = useState(false);

    // const [settings, setSettings] = useState({})

    const urlParams = window.location.search;

    useEffect(() => {
        const usr = new URLSearchParams(urlParams).get("username")
        if (usr)
            return setUsername(usr)
        else
            return setUsername("btc")

    }, [urlParams])


    useEffect(() => {
        if (userName)
            return axios.get(`https://api.lever.co/v0/postings/${userName}?group=team&mode=json`)
                .then((response) => {
                    setLoading(false)
                    setTeamPostings(response.data)
                    console.log(response.data)
                }).catch(() => {
                    setLoading(false)
                    setError(true)
                })

    }, [userName])





    return (
        !loading && <div>

            {teamPostings.map((team, teamIndex) => {

                return team.postings.map((posting, postingIndex) => {

                    return (<div key={postingIndex} style={{
                        backgroundColor: "#000", borderRadius: "4rem",
                        padding: "1rem 3rem 1rem 3rem",
                        margin: "1rem 0 1rem 0"
                    }}>
                        <h2 style={{ fontSize: "3rem", color: "#fff", marginBottom: "1rem" }}>
                            {posting.text}</h2>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>

                            {Object.values(posting.categories).map((categoryValue, categoryIndex) => {
                                return (<div key={categoryIndex} style={{



                                    backgroundColor: "#fff", padding: ".5rem 2rem .5rem 2rem", borderRadius: "1rem", fontWeight: "bold",
                                    textTransform: "uppercase"
                                }}><div

                                    style={{
                                        // background: "linear-gradient(to right, #30CFD0, #c43ad6)",
                                        background: "linear-gradient(90deg, hsla(35, 100%, 50%, 1) 0%, hsla(17, 60%, 56%, 1) 67%, hsla(286, 44%, 49%, 1) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >{categoryValue}</div></div>)

                            })}
                        </div>
                        <div

                            style={{
                                width: "100%",
                                padding: "2rem 0 2rem 0",
                                color:"white"


                            }}>
                            <div
                                dangerouslySetInnerHTML={{ "__html": posting.description }}
                                style={{
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp : "4",
                                    WebkitBoxOrient : "vertical",
                                    textOverflow: "ellipsis",
                                }}>
                                {/* {posting.descriptionPlain} */}
                            </div>
                            <h2>{posting?.lists[0]?.text}</h2>
                            <div 
                            dangerouslySetInnerHTML={{"__html" : posting?.lists[0]?.content}}>
                            </div>
                        </div>

                        <a href={posting.hostedUrl + `?utm_source=${window.location}`} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer"><div style={{
                            backgroundColor: "#fff", color: "#333", padding: ".5rem 2rem .5rem 2rem", borderRadius: "1rem", fontWeight: "bold", marginBottom: "2rem",
                            textTransform: "uppercase", textAlign: "center",
                        }}>Learn More</div></a>


                    </div>)


                })

            })}

            {error && <h2>Error loading {userName} try a different <a href="/?username=leverdemo">username</a></h2>}


        </div>
    )
}
