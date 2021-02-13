import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 350,
    },
    deleteIcon: {
      position: 'absolute',
      top: 10,
      cursor: 'pointer',
    },
    container: {
      marginTop: 30,
    },
  })
);
