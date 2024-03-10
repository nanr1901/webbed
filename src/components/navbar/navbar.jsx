const Navbar = () =>{
    return (
        <div className="flex flex-row justify-between items-center p-4 h-[10%]">
            <div >
                <p className="text-lg">Zootopia</p>
            </div>
            <div className="flex flex-row justify-center items-center ">
                <p>Home</p>
                <p>Tickets</p>
                <p>What we offer</p>
                <p>Book Now</p>
            </div>
        </div>
    )
}

export default Navbar;