import React from "react";
import { Pagination } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Paginator(pages,page ,keyword='',isAdmin=false){
    
    return(pages>1 &&(
        <Pagination>
            
        </Pagination>
    )
        
    )
}

export default Paginate