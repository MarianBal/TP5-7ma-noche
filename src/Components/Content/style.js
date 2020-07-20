import { makeStyles } from '@material-ui/styles';

import { colors } from './../../constants/style';

export default makeStyles({
  verticalContainer: {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: colors.container,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
