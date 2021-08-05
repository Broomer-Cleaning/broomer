import React from 'react'
import { Fragment } from 'react';

import Profile1 from '../profile/Profile';
import Profile2 from '../profile/createdprofile/CreatedProfile'

const CombinedProfile = () => {
  return (
    <Fragment>
      
    <Profile1/>
   <Profile2/>
  </Fragment>
  )
}

export default CombinedProfile
