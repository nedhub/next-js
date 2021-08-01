import React from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";


function Header() {
    return (
        // <div className="flex item-center">

            <div className="">


            



            <h1>Hello</h1>


            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="hidden md:inline-flex h-20 w-20 border-0"
            >


                <Icon name="menu" size="3xl"/>




            </Button>



            
        </div>
    )
}

export default Header
