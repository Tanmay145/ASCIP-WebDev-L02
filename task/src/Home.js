
import React, { useState } from "react";
const Home = () => {
    const [fetched, setfetched] = useState(false);
    const [clicked, setclicked] = useState(false);
    const [users, setUser] = useState([]);
    const onclick = async () => {
         setclicked(true);
        const res = await fetch("https://reqres.in/api/users?page=1");
        const jsonres = await res.json();
        setUser(jsonres.data);

        setInterval(() => {
            setfetched(true);
          }, 3000);
    };
    return (
        <div className="Home">
            <div className="nav">
                <nav>
                    <div>
                        <h2>JB Tours & Travels</h2>
                    </div>
                    <div>
                        <button onClick={onclick}>Get Users</button>
                    </div>
                </nav>
            </div>
            {clicked ?(
            fetched ? (
            <div className="usrcard">
                {users.map(({ id, first_name, last_name, avatar, email }) => {
                    return (
                        <div className="card">
                            <div className="pic">
                                <img src={avatar}></img>
                            </div>

                            <div className="details">
                                <h3>
                                    {first_name} {last_name}
                                </h3>
                                <p>{email}</p>
                            </div>
                            <div className="social">
                                <h3>follow me on</h3>
                                <a href="#" class="instagram"><img src="data:image/png;base64,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"></img></a>
                                <a href="#" class="facebook"><img src="data:image/png;base64,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"></img></a>
                                <a href="#" class="twitter"><img src="data:image/png;base64,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"></img></a>
                            </div>
                        </div>
                    );
                })}

            </div>
            ) : (
                <div className="loader"></div>
            )
            ) : (
                <> </>
            )}
        </div>
    );



};

export default Home;