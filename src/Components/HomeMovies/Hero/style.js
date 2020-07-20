import { makeStyles } from '@material-ui/styles';

import { colors } from '../../../constants/style';
import batman from '../../../img/batman.jpg';

export default makeStyles({
  hero: {
    width: '100%',
    height: '384px',
    backgroundImage: `url(${batman})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: 0,
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: colors.primary,
      opacity: '0.7',
      display: 'block'
    }
  },
  heroText: {
    width: '100%',
    height: '384px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    fontWeight: 500,
    margin: 0,
    textTransform: 'uppercase',
    color: colors.dark_color
  }
});
