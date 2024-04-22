import { data } from "../../data"


const Main = () => {
    return (
        <main>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>Sehir Bilgisi:</p>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })
            }
        </main>
    )

   
}

export default Main;