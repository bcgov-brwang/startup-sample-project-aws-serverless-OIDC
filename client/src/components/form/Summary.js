import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Summary = () => {
  return (
    <Fragment>
      <Typography variant="h2" color="primary" id="pageHeader" gutterBottom>
        Simple Demo App
      </Typography>
      <Typography variant="body1" paragraph>
        This content is located in client/src/components/form/Summary.js
        In order to get you started in your journey, we've provided you a small demonstration app.
        It consists of a database and a form.  In the form below, pick your favorite greeting and see
        it reflected here.
      </Typography>
    </Fragment>
  );
};

export { Summary };
