import { Button, Paper, TextField } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const PostImage = () => {

  const handleSubmit = () => {

  }

  return (
    <Paper elevation={6} sx={{ m: 10, p: 10 }}>
      <form onSubmit={handleSubmit}>
        <TextField
                  margin="normal"
                  required
                  fullWidth                
                  label="Title"
                  name="title"                
                />
        <TextField
                  margin="normal"
                  required
                  fullWidth                
                  label="Description"
                  name="description"                
                />
        <Button variant="contained" component="label" startIcon={<AddPhotoAlternateIcon />}>Upload File
          <input
            type="file"
            hidden
          />
        </Button>
        <Button type='submit' variant='contained' color='secondary' fullWidth sx={{ m: 2 }}>Submit Post</Button>
      </form>
    </Paper>
  )
}

export default PostImage