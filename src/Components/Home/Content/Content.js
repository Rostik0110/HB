import React from "react";
import "./Content.css";
import IMG_1 from "./IMG_1.jpeg";
import IMG_2 from "./IMG_2.jpg";
const Content = () =>{
    return(

        <div className="ContentConteiner">
            <img className="Photo" src={IMG_1}/>
            <div className="CongratulationsText">
                <p>
                    Я хочу тебе привітати з твоїм днем народження! Насамперед хочу тобі побажати, щоб ти завжди був таким життєрадісним як на цих фото.
                    Нехай завжди поруч будуть ті, хто робить тебе щасливим, а бажання і мрії завжди потрапляють точно в ціль!
                </p>
            </div>
            <img className="Photo" src={IMG_2}/>
        </div>
    )
}

export default Content;