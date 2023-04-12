import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
// import FeatureSection from "./FeatureSection";
// import PricingSection from "./PricingSection";

function Contact(props) {
  const { selectContact } = props;
  useEffect(() => {
    selectContact();
  }, [selectContact]);
  return (
    <Fragment>
      <HeadSection />
      {/* <FeatureSection />
      <PricingSection /> */}
    </Fragment>
  );
}

Contact.propTypes = {
  selectContact: PropTypes.func.isRequired,
};

export default Contact;
