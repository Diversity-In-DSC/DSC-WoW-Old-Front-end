import React from "react";
import { Row, Col, ResponsiveEmbed } from "react-bootstrap";
import { ReactComponent as TickLogo } from "../assets/Group 2.svg";
import { ReactComponent as CrossLogo } from "../assets/Group 3.svg";
import { ReactComponent as UserLogo } from "../assets/user.svg";
import { ReactComponent as BookLogo } from "../assets/regulation.svg";
import { ReactComponent as BuildingLogo } from "../assets/building.svg";
import { ReactComponent as ChooseLogo } from "../assets/choose.svg";
import StarIcon from "@material-ui/icons/Star";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
//import { ReactComponent as RulesLogo } from "..assets/regulation.svg";

const Data = {
  Eligibility: {
    name: "Eligibility",

    rules: [
      "All the students are welcome to participate irrespective of their university college, branch or any other criteria.",
    ],
    listStyleType: "none",
  },
  RulesForHackathon: {
    name: "Rules For Hackathon",
    rules: [
      {
        rule: "Max 3 & Min 2 Participant.",
        type: 1,
      },
      {
        rule: "Github repository must be created during the hackathon only.",
        type: 1,
      },
      {
        rule:
          "Video Will be compulsory -Maximum 3 mins demo video of the project else it will get disqualified.",
        type: 1,
      },
      {
        rule: "No Pre-Built Projects shall be entertained in the hackathon.",
        type: 0,
      },
    ],
    listStyleType: "none",
  },
  WinnersOfHackathon: {
    name: "Winner of Hackathon",
    rules: [
      "Overall 3 Winners",
      "Track wise Winners - May be top 3 for each track",
    ],
    listStyleType: "none",
  },
};

const titles = [
  {
    title: "AI-ML",
    imageSrc: require("../assets/AI-ML.png"),
    color: "#4285F4",
  },
  {
    title: "Blockchain",
    imageSrc: require("../assets/blockchain.png"),
    color: "#DB4437",
  },
  {
    title: "AR-VR",
    imageSrc: require("../assets/AR-VR.png"),
    color: "#F4B400",
  },
  {
    title: "Open Innovation",
    imageSrc: require("../assets/Open-innovation.png"),
    color: "#0F9D58",
  },
];

const HackathonHeader = () => {
  return (
    <>
      <Row>
        <Col className="mt-3">
          <div className="ml-3">
            <Row>
              <Col sm={1.5} className="p-0 m-0 mb-1">
                <h1>{Data.Eligibility.name}</h1>
              </Col>
              <Col sm={8} className="p-0 m-0">
                <UserLogo
                  style={{ height: "45px", width: "45px" }}
                  className="p-0 m-0 ml-3"
                />
              </Col>
            </Row>
            <div className="ml-2">
              {Data.Eligibility.rules.map((rule) => (
                <Row className="p-0 m-0">
                  <Col sm={1} className="p-0 m-0">
                    <StarIcon style={{ color: "#F4B400" }} />
                  </Col>
                  <Col className="ml-n3" sm={11}>
                    <h5>{rule}</h5>
                  </Col>
                </Row>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Row className="ml-0">
              <Col sm={1.5} className="p-0 m-0 mb-1">
                <h1>{Data.RulesForHackathon.name}</h1>
              </Col>
              <Col sm={2} className="p-0 m-0">
                <BookLogo
                  style={{ height: "45px", width: "45px" }}
                  className="p-0 m-0 ml-3"
                />
              </Col>
            </Row>
            <div className="ml-4">
              {Data.RulesForHackathon.rules.map((rule) => (
                <Row className="p-0 m-0">
                  {rule.type === 1 ? (
                    <Col sm={1} className="p-0 m-0">
                      <TickLogo
                        style={{ height: "20px", width: "20px" }}
                        className="p-0 m-0"
                      />
                    </Col>
                  ) : (
                    <Col sm={1} className="p-0 m-0">
                      <CrossLogo
                        style={{ height: "20px", width: "20px" }}
                        className="p-0 m-0"
                      />
                    </Col>
                  )}
                  <Col sm={11} className="p-0 m-0">
                    <h5>{rule.rule}</h5>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </Col>
        <Col className="mt-4">
          <BuildingLogo />
        </Col>
      </Row>

      <div>
        <Row className="ml-0 mb-4">
          <Col sm={1.5} className="p-0 m-0">
            <h1>Our Tracks</h1>
          </Col>
          <Col sm={2} className="p-0 m-0">
            <ChooseLogo
              style={{ height: "45px", width: "45px" }}
              className="p-0 m-0 ml-3"
            />
          </Col>
        </Row>
        <Row className="mb-5 mt-4">
          {titles.map((title) => (
            <Col>
              <Card
                style={{
                  boxShadow: `-10px -10px ${title.color}`,
                  borderRadius: 10,
                  border: `2px solid ${title.color}`,
                }}
                className=""
              >
                <CardActionArea>
                  <ResponsiveEmbed aspectRatio="16by9">
                    <CardMedia
                      image={title.imageSrc}
                      component="img"
                      title={title.title}
                    />
                  </ResponsiveEmbed>
                  <CardContent>
                    <h6 className="p-0 m-0">{title.title}</h6>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HackathonHeader;
