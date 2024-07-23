import React from 'react';
import BtnUi from './btnUi';


export default function cardPortafolio() {
  return (
    <div className='flex gap-5'>
        {/* Img */}
      <div>Profile</div>

      {/* Description */}
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur expedita nisi doloremque inventore quam ipsa,
            mollitia natus officia consectetur, praesentium sequi blanditiis
            labore minima quisquam voluptatem tenetur nostrum. Quibusdam, id.
        </p>

        <BtnUi/>
      </div>

    </div>
  )
}
