import { Grid } from '@mui/material'
import React from 'react'

const Availablemockup = () => {
  return (
    <>
        <Grid container bgcolor={'pink'} justifyContent={'center'}>
            <Grid item xl={9}>
                <div class="bg-primary d-flex flex-column justify-content-center">
                    <div class="col-xl-12 d-flex justify-content-center">
                        <span>HUNDREDS OF MOCKUPS AVAILABLE</span>
                    </div>
                    <div class="col-xl-12 d-flex justify-content-center">
                        <h1>Discover inspiration in our ever-growing website 
                        mockup library</h1>
                    </div>

                </div>
            </Grid>
            <Grid item  bgcolor={'orange'} xl={9}>
                <p>IMAGES</p>
            </Grid><Grid item  bgcolor={'yellow'} xl={9}>
                <p>BUTTON</p>
            </Grid>
        </Grid>
    </>
  )
}

export default Availablemockup