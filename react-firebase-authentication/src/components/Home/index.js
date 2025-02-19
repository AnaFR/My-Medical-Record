import React from "react";
import { compose } from "recompose";
import { withAuthorization, withEmailVerification } from "../Session";
import Record from "../MedicalRecord";

const HomePage = () => (
  <div>
    <Record />
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);






