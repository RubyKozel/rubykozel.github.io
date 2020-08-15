import React from "react";
import "./App.css";
import { Avatar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "@material-ui/icons/Mail";
import GithubIcon from "@material-ui/icons/GitHub";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
// import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

const useStyles = makeStyles((theme) => ({
  large: {
    top: theme.spacing(4),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ "text-align": "start" }}>Hi! My name is Ruby Kozel</h1>
        <p id="header-description">
          I'm 26 years old and live in Israel.
          <br />I have a B.Sc at Software Engineering and am working as a
          Full-Stack Cloud Developer @ SAP Cloud Portal Team for the past 2
          years.
        </p>
        <div style={{ margin: "20px 10px 0 10px" }}>
          <IconButton href="https://github.com/RubyKozel">
            <GithubIcon style={{ fontSize: 50 }} />
          </IconButton>
        </div>
        <div
          onClick={() =>
            window.scrollTo({ top: 750, left: 0, behavior: "smooth" })
          }
        >
          <IconButton style={{ top: "20vh" }}>
            <ArrowDownwardRoundedIcon style={{ fontSize: 50 }} />
          </IconButton>
        </div>
      </header>
      <div className="content">
        <div id="my-description">
          <p>
            As a Full-Stack developer I have the opertunity to write secure
            cloud applications and programs that reaches thousands of people.
          </p>
          <div>
            <p>
              My expertise and favorite would be writing Node.js applications
              and microservices with various frameworks such as Express for
              JavaScript and NestJS for Typescript.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
                width="15%"
                height="15%"
                alt="nodejs-logo"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/1200px-TypeScript_Logo_%28Blue%29.svg.png"
                width="15%"
                height="15%"
                alt="ts-logo"
              />
              <img
                src="https://transang.me/content/images/2019/11/ExpressJS.png"
                width="15%"
                height="15%"
                alt="express-logo"
              />
            </div>
          </div>
          <p>
            In the front-end side I focuse on professioning React as my main JS
            framework, but I'm also learning other frameworks such as Svelt and
            Vue.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
              width="15%"
              height="15%"
              alt="nodejs-logo"
            />
            <img
              src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png"
              width="15%"
              height="15%"
              alt="ts-logo"
            />
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--ltuBUsdI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/rdlauer/articles/master/nativescript/svelte-intro/svelte-logo.png"
              width="15%"
              height="15%"
              alt="express-logo"
            />
          </div>
          <p>
            For databases I mainly use non-relational databases such as MongoDB
            or Firebase Firestore, but I'm also familiar with PostgreSQL and ORM
            in JS and TS.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://www.unitask-inc.com/wp-content/uploads/2018/02/MongoDB-Logo.png"
              width="15%"
              height="15%"
              alt="nodejs-logo"
            />
            <img
              src="https://miro.medium.com/max/2598/1*a2Da_CQHUsSKTCTRI2tYhQ.png"
              width="15%"
              height="15%"
              alt="ts-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
              width="15%"
              height="15%"
              alt="express-logo"
            />
          </div>
          <br />
          <p>
            I also have experience in using the object stores Node.js libraries
            of AWS (Amazon), GCP (Google), Azure (Microsoft) and OSS (Alibaba),
            and Redis database.
          </p>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png"
              width="15%"
              height="15%"
              alt="nodejs-logo"
            />
            <img
              src="https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png"
              width="15%"
              height="15%"
              alt="ts-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/500px-Microsoft_Azure_Logo.svg.png"
              width="15%"
              height="15%"
              alt="express-logo"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img
              src="https://d39kqat1wpn1o5.cloudfront.net/app/uploads/2019/04/alibaba-cloud-poweredby.png"
              width="15%"
              height="15%"
              alt="nodejs-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png"
              width="15%"
              height="15%"
              alt="ts-logo"
            />
          </div>
          <br />
          <p>I'm also familiar with:</p>
          <ul style={{ width: "70%", margin: "0 auto" }}>
            <li>
              writing native mobile applications using React Native and have
              developed a native application with is as my final project.
            </li>
            <li>
              Java development, including the Spring framework for REST APIs
            </li>
            <li>
              Python development, including knowledge in Flask, Connexion and
              PyTorch,
            </li>
          </ul>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--LS4X9NFz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
              width="15%"
              height="15%"
              alt="nodejs-logo"
            />
            <img
              src="https://bgasparotto.com/wp-content/uploads/2017/12/spring-logo.png"
              width="15%"
              height="15%"
              alt="ts-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
              width="15%"
              height="15%"
              alt="express-logo"
            />
          </div>
          <br />
          <p>
            Coding is a hobby for me and I enjoy building and creating new
            application and programs to pass the time and solve my own
            individual problems, and hopefully - others too.
          </p>
          <p>
            I always track the latest and greatest feature in cloud and web
            development and try to stay updated with all the hot topics. <span role="img" aria-label="emoji1">🔭</span>
          </p>
          <p>
            I'm doing my best to donate to the open-source community as much as
            I can and am looking to collaborate at some interesting full-stack
            applications <span role="img" aria-label="emoji2">👯</span>
          </p>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png"
              width="15%"
              height="15%"
              alt="nodejs-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Octicons-logo-github.svg/1200px-Octicons-logo-github.svg.png"
              width="15%"
              height="15%"
              alt="ts-logo"
            />
          </div>
          <div className="center">
            <p style={{ fontSize: 30 }}>And this is me:</p>
            <Avatar
              src="https://media-exp1.licdn.com/dms/image/C5603AQHTsCFFyQMcmA/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=bMe1gKdkdnCfic48PH9TJ2txUNCV53LKfdh_jWEMlcY"
              className={classes.large}
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Contact me at: </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ margin: "20px" }}>
            <IconButton href="https://www.facebook.com/ruby.kozel">
              <FacebookIcon style={{ fontSize: 45 }} />
            </IconButton>
          </div>
          <div style={{ margin: "20px" }}>
            <Avatar>
              <IconButton href="https://www.linkedin.com/in/rubykozel/">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Avatar>
          </div>
          <div style={{ margin: "20px" }}>
            <Avatar>
              <IconButton href="mailto:rubykozel@gmail.com">
                <GmailIcon />
              </IconButton>
            </Avatar>
          </div>
        </div>
      </footer>
    </div>
  );
};
