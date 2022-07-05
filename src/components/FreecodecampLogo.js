import '../stylesheets/FreecodecampLogo.css';
import freeCodeCampLogo from '../images/freecodecamp-logo.png';

const FreecodecampLogo = () => {
  return (
    <div className='freecodecamp-logo-container'>
      <img 
        src={freeCodeCampLogo} 
        className='freecodecamp-logo' 
        alt='freeCodeCamp logo'
      />
    </div>
  );
};

export default FreecodecampLogo;