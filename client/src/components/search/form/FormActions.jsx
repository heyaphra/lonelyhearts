import React from 'react';
import { FilterBtn } from './FilterBtn';
import { ResetBtn } from './ResetBtn';
export const FormActions = props => {
    const { isPhone } = props;
    return (
        <div 
        style={
            {
            marginTop: isPhone ? '50%' : 0,
            }
        }
        >
            <FilterBtn isPhone={isPhone} disabled={props.disabled} handleSubmit={props.handleSubmit} />
            <ResetBtn disabled={props.disabled} handleReset={props.handleReset} />
        </div>
    );

} 