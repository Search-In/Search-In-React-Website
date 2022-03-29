import React from 'react';
import "./Responsive.css";
import "./darkmode1.css"

const Darkmode = () => {
  return <div className='container'>
      <form>
	<input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" value="on"/>
	<label for="dark-mode" class="sr">Dark Mode</label>
	<div class="curtain"></div>
</form>
  </div>;
};

export default Darkmode;
