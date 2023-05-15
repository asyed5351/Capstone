import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWidth from "../../../shared/functions/useWidth";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function PricingSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Some of the Required Courses at Lehman College
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Programming Methods I/II"
              pricing={
                <span>
                  CMP 167/168
                  <Typography display="inline"></Typography>
                </span>
              }
              features={["This is a structured computer programming course that covers a modern high-level programming language, including console I/O, data types, variables, control structures such as iteration, arrays, function definitions and calls, parameter passing, functional decomposition, and an introduction to objects. It also covers debugging techniques. The course is intended for students who plan to major in Computer Science, Mathematics, Computer Graphics and Imaging, or the sciences, with some previous computer programming experience recommended. The course is not intended for students in Accounting or Computer Information Systems. The course further explores advanced topics such as recursive calls, sorting and searching algorithms, GUI programming, threads, exceptions, and exception handling, and object-oriented programming techniques."]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="Data Structures and Algorithms I"
              pricing={
                <span>
                  CMP 338
                  <Typography display="inline"> </Typography>
                </span>
              }
              features={["This course focuses on the study of abstract characterizations of data structures such as arrays, stacks, queues, trees, and graphs, along with algorithms that utilize these structures. Topics covered include sorting algorithms, searching algorithms, and memory management. The implementation issues of these structures and algorithms will be considered, and students will be required to write programs that incorporate these structures and algorithms. The course emphasizes the practical application of data structures and algorithms, as well as their theoretical foundations."]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUpMd ? "400" : "0"}
          >
            <PriceCard
              title="Introduction to Networks"
              pricing={
                <span>
                CMP 405
                  <Typography display="inline"> </Typography>
                </span>
              }
              features={["This course is an introduction to network protocols and algorithms, covering the most important protocols at each layer of the network architecture. The course examines the strengths and weaknesses of each protocol, and covers basic algorithms for identifying primary servers, constructing forwarding and broadcasting trees, and determining routing tables. Students will also learn to write a simple networking service at the I.P. layer or higher. The course includes lab exercises where students build and test small networks, providing hands-on experience with networking technologies. By the end of the course, students will have a fundamental understanding of network protocols and algorithms, and be able to design and implement basic networking services."]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUpMd ? "600" : "200"}
          >
            <PriceCard
              title="Database Systems"
              pricing={
                <span>
                  CMP 420
                  <Typography display="inline"> </Typography>
                </span>
              }
              features={["This course is an introduction to the theory of database systems and database management. It covers the theory of relational, hierarchical, and network database organization, with an emphasis on the relational model. The course explores the views of data, including data organization, data dependency and redundancy, and normal forms. It also covers query language and its implementation. Topics covered in the course include the theoretical underpinnings of database management, the concepts and principles of database design, and the use of data models to organize and manage data. Students will gain an understanding of the principles of database systems and the ability to design and implement basic database management systems. By the end of the course, students will be able to apply database management theory to real-world scenarios and develop practical solutions to data management problems."]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
