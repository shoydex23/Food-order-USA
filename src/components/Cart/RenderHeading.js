import React from 'react';

const RenderHeading = (props) =>
    {
        if(props.dishSelected.length>0)
        {
            return(
                <div>
                <h3>Order Summary</h3>
                </div>
            )
        }
        else
        {
            return null;
        }
    }

export default RenderHeading;