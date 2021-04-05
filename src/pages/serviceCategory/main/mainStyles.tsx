import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    root: {
      height: '100%',
    },
    backToTop: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),

    },
    categoryBody: {
      [`@media (min-width: 600px)`]: {
        minHeight: '80px'
      },
      background: 'transparent', 
      boxShadow: 'none'
    },
    topBar:{
      background: `transparent linear-gradient(
        180deg
        , #0D004C 0%, #24AE90 100%) 0% 0% no-repeat padding-box`,
    }

  })
)
)
export default useStyles