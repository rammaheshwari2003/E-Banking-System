const UpdatePass=()=>{
    const handleInput=()=>{
        
    }
    const handleSubmit=()=>{

    }
    return(
        <>
         <div id="forpass">
            <h1>Change Password</h1>

            Enter new Password:<input type="password" name="Newpassword" onChange={handleInput} /><br/>
            Enter Re-Password:<input type="password" name="Repassword" onChange={handleInput} /><br/>
           
            <button onClick={handleSubmit} >Submit</button><br />


        </div>
        
        </>
    )
}
export default UpdatePass;