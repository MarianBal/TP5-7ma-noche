import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  searchContainer: {
    width: '85%',
    marginLeft: 50,
    display: 'flex',
    alignItems: 'center'
  },
  lookingGlass: {
    fontSize: '1.5rem',
    marginRight: '5px'
  },
  input: {
    width: '800px',
    height: '24px',
    border: 'none',
    fontSize: '16px'
  },
  bars: {
    marginLeft: 'auto',
    marginRight: 0,
    visibility: 'hidden'
  }
});
