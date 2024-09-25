import User from "./user";

function app(){
    const userdata = {
        name: "rajasekaran",
        age:29,
        phone:"8056668173",
        email:"rajasekaranuiux@gmail.com"
    }
    return(
        <div>
            <User
            name={userdata.name}
            age={userdata.age}
            phone={userdata.phone}
            email={userdata.email}
            />
        </div>
    );
}


export default app;