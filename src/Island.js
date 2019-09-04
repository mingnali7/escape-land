import React from 'react'

function Island() {
  // state = {
  //   escape: false
  // }

  return (
    <div>
      <p>Where do you want to escape?</p>
      <form>
        <input type="text" name="location" placeholder="meowland" />
        <input type="submit" value="escape" />
      </form>
    </div>
  )
}

export default Island