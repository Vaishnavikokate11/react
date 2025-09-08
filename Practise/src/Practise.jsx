export const Practise = () => {

    const students = [3,6];
    return (
        <div>
            {/*<p>{students.length && "No students found"}</p>*/}

            {/** 1st sol */}
            {/*<p>{students.length === 0 && "No students found"}</p>

            {/**2nd */}
            <p>{!students.length && "No students found"}</p>

            <p>Number of students : {students.length}</p>
        </div>

    )
}