import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Box from "common/components/Box";
import Image from "common/components/Image";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import Container from "common/components/UI/Container";
import { JOBS_ITEMS } from "common/data/Crypto";
import { ScalableWrapper, FeatureSection } from "./scalable.style";
import JobsImage from "common/assets/image/crypto/WorkXP_Jobs.png";

const JobsSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <ScalableWrapper id="jobs">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <FeatureSection>
              {JOBS_ITEMS.map((item, index) => (
                <div
                  key={`feature-${index}`}
                  className="featureWrapper"
                  style={{ width: "100%" }}
                >
                  <Fade up>
                    <Image src={item.image?.src} alt={item.title} />
                    <Box className="contextPortion">
                      <Heading
                        as="h3"
                        content={item.title}
                        {...featureTitleStyle}
                      />

                      <Text content={item.des} {...featureDescriptionStyle} />
                    </Box>
                  </Fade>
                </div>
              ))}
            </FeatureSection>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Image
              src={JobsImage?.src}
              className="ScalableImage"
              alt="Scalable Section Image"
            />
          </Box>
        </Box>
      </Container>
    </ScalableWrapper>
  );
};

// Transactions style props
JobsSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Scalable default style
JobsSection.defaultProps = {
  // Scalable section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Scalable section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },

  // Scalable section title default style
  title: {
    content: "Help you move to web3 full time",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"],
  },
  // Scalable section description default style
  description: {
    content:
      "Easily apply for jobs on lots of metaverses on one platform. Equip yourself with essential skills, and ace the interviews!",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"],
  },
  sectionSubTitle: {
    content: "Play, Learn, and Earn",
    as: "span",
    textAlign: "left",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f",
    textAlign: ["left", "left"],
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["1", "1", "1", "1", "1"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"],
  },
  // Scalable section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"],
  },
};

export default JobsSection;
