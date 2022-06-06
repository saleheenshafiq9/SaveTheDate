import React from 'react'

function Map() {
    const place="Dhanmondi"
  return (
    <div class="mapouter">
        <div class="gmap_canvas">
            <iframe width="690" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${place},%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
  )
}

export default Map