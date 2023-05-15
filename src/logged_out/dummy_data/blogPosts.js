import React, { Fragment } from "react";
import { Typography } from "@mui/material";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
    Link to Articles
    </Typography>
    <Typography paragraph>
    College Data Analytics Team    Unbiased Factual Guarantee. “The COMPSCI Major at Lehman College.” College Factual,  https://www.collegefactual.com/colleges/cuny-lehman-college/academic-life/academic-majors/computer-information-sciences/computer-science/.

    </Typography>
    <Typography paragraph>
    
    </Typography>
    <Typography paragraph>
     
    </Typography>
    <Typography paragraph>
    Cuny--Lehman College - profile, rankings and Data | US News Best Colleges. https://www.usnews.com/best-colleges/lehman-college-7022.
    </Typography>
    <Typography variant="h6" paragraph>
    “Data Scientists : Occupational Outlook Handbook.” U.S. Bureau of Labor Statistics,https://www.bls.gov/ooh/math/data-scientists.htm
    </Typography>
    <Typography paragraph>
    “The Global Cloud Computing Market Size Is Expected to Grow from USD 445.3 Billion in 2021 to USD 947.3 Billion by 2026, at a Compound Annual Growth Rate (CAGR) of 16.3%.” Yahoo! Finance.  https://finance.yahoo.com/news/global-cloud-computing-market-size-081600295.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAJbK3csN4DRqJl_G9-528eLeUNNvl80D3gW1X70bINrSIayH2r2M6jUbSehVJ6WBN0wEdK_5Oo106REltOaPjnxlU7-zQ9Z70ZLxDQf2x4O3ZsgUNrfH9ZG8dx2PiZgkX-eD98I9IgrNimSaCEk04EH5E3vT13nmHXPGPhEQUvqY.
    </Typography>
    <Typography paragraph>
    “Lehman College.” Department of Computer Science - Lehman College. https://www.lehman.edu/computer-science/index.php 
    </Typography>
  </Fragment>
);

const posts = [
  {
    title: "CollegeFactual",
    id: 1,
    date: 1576281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet:
      "Computer Science is one of the majors in the computer & information sciences program at Lehman College.",
    content: content,
  },
  {
    title: "U.S.News",
    id: 2,
    date: 1576391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost2.jpg`,
    snippet:
      "CUNY—Lehman College is a public institution that was founded in 1968. It has a total undergraduate enrollment of 12,375 (fall 2021), its setting is urban, and the campus size is 37 acres. It utilizes a semester-based academic calendar. CUNY—Lehman College's ranking in the 2022-2023 edition of Best Colleges is Regional Universities North, #81.",
    content: content,
  },
  {
    title: "U.S. BUREAU OF LABOR STATISTICS",
    id: 3,
    date: 1577391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
    snippet:
      "Data scientists typically need at least a bachelor’s degree in mathematics, statistics, computer science, or a related field to enter the occupation. Some employers require or prefer that applicants have a master’s or doctoral degree.",
    content: content,
  },
  {
    title: "Yahoo!Finace",
    id: 4,
    date: 1572281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
    snippet:
      "The global cloud computing market size is expected to grow from USD 445.3 billion in 2021 to USD 947.3 billion by 2026, at a Compound Annual Growth Rate (CAGR) of 16.3%",
    content: content,
  },
  {
    title: "Lehman College",
    id: 5,
    date: 1573281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost5.jpg`,
    snippet:
      "The Department of Computer Science at Lehman College offers undergraduate majors in Computer Science and Computer Information Systems and a graduate program in Computer Science. Minors in Computer Science and Computer Applications are offered as well. Advisers are available to help students select the program most appropriate for them.",
    content: content,
  },

];

export default posts;