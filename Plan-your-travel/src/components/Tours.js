import Card from "./Card";

// <Tours tours={tours} removeTour={removeTour}></Tours> 
function Tours({tours,removeTour}){

    return(
        <div className="container">

            <div>
                <h2 className="title"> Plan your Travel </h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour) => {  //for the value of each tour im returning a card
                        return(
                            <Card {...tour } removeTour={removeTour}></Card> // so, for 7 values there will be 7 cards
                            //{...tour } is used here to clone the data 
                        )
                    })
                }
            </div>

            

             

        </div>

        

    )

}

export default Tours;