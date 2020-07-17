import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  searchContainer: {
    width: '100%',
    marginLeft: 50,
    marginRight: 20,
    display: 'flex',
    alignItems: 'center'
  },
  lookingGlass: {
    fontSize: '1.5rem',
    marginRight: 15
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
