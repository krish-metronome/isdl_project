import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  roundedContainer: {
    backgroundColor: 'rgba(153, 0, 0, 0.4)', // Semi-transparent white
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    
  },

  text: {
    color: 'rgba(255, 255, 255, 0.8)', // Adjust text color
    textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle text shadow
  },
}));

const Welcome = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <div>
          <Typography variant="h3" className={classes.text}>LNMIIT Faculty and Staff Recruitment Portal</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
