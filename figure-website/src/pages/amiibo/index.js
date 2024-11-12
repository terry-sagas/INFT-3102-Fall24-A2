import { fetchAmiiboList } from "../../strapi.js";

export async function getStaticProps() {
    const amiiboList = await fetchAmiiboList();
    return {
        props: { amiiboList }
    };
}

export default function Amiibos({ amiiboList }) {
    console.dir(amiiboList);
    return (
        <>
            <style jsx>{`
                body {
                    background-color: #121212;
                    color: #e0e0e0;
                }

                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    padding: 20px;
                }

                .card {
                    background-color: #1e1e1e;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    padding: 15px;
                    text-align: center;
                    transition: transform 0.3s, border 0.3s;
                    border: 2px cyan solid;
                }

                .card:hover {
                    transform: translateY(-10px);
                    border: 2px cyan solid;
                }

                .card-image {
                    max-width: 100px;
                    height: auto;
                    margin-bottom: 10px;
                }

                .card h2 {
                    font-size: 1.2em;
                    margin: 10px 0;
                    color: #ffffff;
                }

                .card p {
                    font-size: 0.9em;
                    color: #b0b0b0;
                }
            `}</style>
            <div>
                <h1 style={{ textAlign: 'center', color: '#e0e0e0' }}>Amiibo List</h1>
                <div className="grid-container">
                    {amiiboList.data.map((amiibo, index) => (
                        <div key={index} className="card">
                            {amiibo.figure_image ? (
                                <img
                                    src={"http://localhost:1337" + amiibo.figure_image[0]?.formats?.thumbnail.url}
                                    alt={amiibo.name}
                                    className="card-image"
                                />
                            ) : null}
                            <h2>{amiibo.name}</h2>
                            <p>{amiibo.Game}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
