import React,{useState} from 'react'
import { Typography, Grid, Paper} from '@material-ui/core';
import './css/style.css';

export default function UploadSlip() {
    const paperStyle = { padding: '0 80px 40px 80px', width: 250, height: 270 }
    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
       });
       const handleInputChange = (event) => {
        setuserInfo({
          ...userInfo,
          file:event.target.files[0],
          filepreview:URL.createObjectURL(event.target.files[0]),
        });
    
      }

    
      const [isSucces, setSuccess] = useState(null);

      const submit = async () =>{
        const formdata = new FormData() 
        formdata.append('avatar', userInfo.file);
        

    }
    return (
        
           <Grid>
               
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography style={{blockSize:'10px'}} variant='caption'>Upload slip</Typography>
                
                    <div className="container mr-60">
      <div className="formdesign">
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-row">
         
          <input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
        </div>

        <div className="form-row">
          <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Save </button>
          
        </div>
      </div>
      
      {userInfo.filepreview !== null ? 
        <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
      : null}

    </div>
                    
               </Grid>
            </Paper>
        </Grid>
        
    )
}
