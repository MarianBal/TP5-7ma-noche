import { makeStyles } from '@material-ui/styles';

import { colors } from './../../constants/style';

export default makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    position: 'sticky',
    top: '75px'
  },
  categories: {
    width: '95px',
    height: '95px',
    backgroundColor: colors.primary,
    fontSize: '9px',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottom: `1px solid ${colors.container}`,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  svg: {
    width: '20px',
    height: '20px',
    color: colors.primary,
    marginBottom: '5px',
    transition: 'transform 1s ease-out',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'transform 1s ease-out'
    }
  }
});
