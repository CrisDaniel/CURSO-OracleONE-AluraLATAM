import React from "react";
import {Box, Btn} from "../UI"
import {lista} from "../../info"
import Card from "../Card";

const List = () => {

    return <Box>
        {
            lista.cargos.map((cargo, index) => {
                return <Card key={index} cargo={cargo}></Card>
            })
        }
        <Btn>Ver mas</Btn>
    </Box>
};

export default List