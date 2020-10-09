import React from 'react';

function NinthComponent() { 
    return [
        <>
   <script>
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
   </script>
   </>
    ];

}

export default NinthComponent;