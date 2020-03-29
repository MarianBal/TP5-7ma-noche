import { makeStyles } from '@material-ui/styles';

import { colors } from './../../../constants/style';

export default makeStyles({
  logoContainer: {
    width: '95px',
    height: '75px',
    backgroundColor: colors.logo,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 1s ease-out',
  },
  logo: {
    height: '40px',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
