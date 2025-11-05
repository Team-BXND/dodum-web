import AddPost from "../../../components/AddPost/AddPost";

const handleSubmit = (titleRef:React.RefObject<HTMLInputElement | null>, subTitleRef:React.RefObject<HTMLInputElement | null>, categoryRef:React.RefObject<HTMLSelectElement | null>, value:string) => {
    console.log(titleRef.current!.value);
    console.log(subTitleRef.current!.value);
    console.log(categoryRef.current!.value)
    console.log(value);
}

function AddArchive() {
    return (
        <AddPost handleSubmit={handleSubmit}/>
    )
}


export default AddArchive;