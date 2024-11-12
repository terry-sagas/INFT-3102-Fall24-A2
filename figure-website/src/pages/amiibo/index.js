import { fetchAmiiboList } from "../../strapi.js";

export async function getStaticProps(){
    const amiiboList = await fetchAmiiboList();
    return {
        props: {amiiboList}
    };
}

export default function experences({ amiiboList }) {


    console.dir(amiiboList)
    return (
        <>
            <div>
                <h1>test</h1>
                <ul>
                    {amiiboList.data.map((exp, index) => (
                        <li key={index}>
                            <h1>{exp.name}</h1>
                            <h3>{exp.game}</h3>
                            {exp.figure_image ? (
                                <img src={"http://localhost:1337" + exp.figure_image[0]?.formats?.thumbnail.url } />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
