import { data } from "../../data"
import Card from "./Card";
import "./Main.css"


const Main = () => {
    return (
        <main className="card-container">
            {
                data.map((item) => {
                    return <Card key={item.id} {...item}  />
                })
            }
        </main>
    )   
}

export default Main;

//props