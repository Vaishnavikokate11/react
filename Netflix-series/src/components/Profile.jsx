function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice , have a wonderful day!</strong>
                    </div>
                }
                >
                    <p>Hobbies: Gaming, Cooking</p>
                    <button>Contact</button>
                </ProfileCard>

                <ProfileCard
                    name="Raj"
                    age={28}
                    greeting={
                        <div>
                            <strong>Hello Raj , keep up the great work</strong>
                        </div>
                    }
                    >

                    <p>Hobbies: Gaming, Cooking</p>
                    <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;

function ProfileCard({name, age, greeting, children}){
    return(
        <>
        <h2>Name: {name}</h2> {/**use dirctly like profilecard{name, age, greeting, children instat of .name and all} */}
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}