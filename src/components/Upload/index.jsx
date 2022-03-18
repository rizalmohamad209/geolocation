import React from 'react'

const Upload = () => {
//       state = {

//     selectedFile: null
//   };

const [selectedFile, setSelectedFile] = React.useState(null)

 const onFileChange = event => {

  
    // setState({ selectedFile: event.target.files[0] });
    setSelectedFile(event.target.files[0]);

  };


  const fileData =()=>{
        if(selectedFile != null ) {

     return  (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>


          <p>File Type: {selectedFile.type}</p>


          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      )
       }else{ 
     return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      )
      }
  
}
  


  
  return (

    <div className='text-center '>
   
       
          <div>
            <input type="file" onChange={onFileChange} />
            <button >
              Upload!
            </button>
          </div>
      {fileData()}
        
    </div>
  )
}

export default Upload;