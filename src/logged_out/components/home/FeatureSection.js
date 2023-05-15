import React from "react";
import { Grid, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SchoolIcon from '@mui/icons-material/School';
import MeassageIcon from "@mui/icons-material/Message";
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Team Collaboration",
    text: "lthough we had many coding assignments, only a handful of them required team collaboration. When I started my internship, transitioning to team-based projects was extremely hard. We always learned in college that our work must be our own, which made reaching out to team members challenging even when I needed help. I slowly started getting accustomed to the fact that the team was there to bounce ideas off, that everything was fair game in the industry, and that the work was done much faster and with better quality than it would've been done individually.",
    icon: <GroupsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Networking",
    text: "Networking was a huge struggle for me, which I came to learn would be a significant part of the tech field. The referral process opened a whole new world for me. The fact that someone who's inside a company can increase your chances of getting an interview blew my mind. Many of my classes have been online since I joined in covid, and as we moved in person, I didn't meet many people and didn't have the chance to network. The college should add more programs associated with get-togethers for alums to network with current students.",
    icon: <GroupAddIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Resume Workshops",
    text: " It took me a while to learn the term ATS and how it would affect how the job industry looks at me as a candidate. I started off with a flashy resume with pictures and diagrams, only to learn down the line that it's best to keep my resume simple and straight to the point with numerical factors. ",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Hackathons",
    text: "Another addition that the college can look into is hosting its own hackathon. I haven't attended a hackathon in the past, but I've heard nothing but good things about them. Companies come to the college, and students work on real-world problems, get noticed by recruiters, and compete. This would not only help get awareness for the college but also expose students to real-world tech problems and networking.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "New Curriculam",
    text: "We've seen a massive trend in the field of people moving towards data science and cloud computing. These technologies are familiar but have substantial growth. Both of these topics were not covered during my time at Lehman college, but if we can focus on a curriculum that gives students a taste of these two areas in the tech world, it would be a significant leap forward.Many students who start looking for internships and job opportunities are introduced to the topic of leetcode. This website has hundreds of problems for people to problem solve and learn data structure and algorithm problems and show many different ways they can be solved. This has become the industry standard for interviewing and seeing if a candidate is worth hiring. A class towards junior and senior year should be dedicated to students to practice and learn these problems and really break them down to sense a pattern for when they are going through the interview process.",
    icon: <SchoolIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#0d0d0c",
    headline: "Monthly Feedback Meeting",
    text: "By creating this monthly meeting where students can anonymously give criticism and feedback in a suggestion box, the faculty can obtain necessary information and take steps to implement the recommended changes.By implementing this approach, we can significantly improve the overall performance of the computer science department and create a more inviting and friendly learning environment. This strategy will foster better student and faculty collaboration, leading to a more productive and rewarding educational experience for everyone involved. Ultimately, this will create a community within the department that is supportive, engaging, and inclusive.",
    icon: <GavelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },

 
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#ffd700" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
