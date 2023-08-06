import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResponsibilitiesList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`;

const Responsibility = styled.li`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.4;
  position: relative;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 0.5s, transform 0.5s;
  color: #edf5e1;
`;

const BulletPoint = styled.span`
  position: absolute;
  left: -20px;
  top: 5px;
  font-size: 18px;
`;

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const JobTitle = styled.h3`
  margin-right: auto;
  color: #8ee4af;
`;

const Company = styled.p`
  color: #8ee4af;
  font-size: 20px;
`;

const Hr = styled.hr`
  width: 70%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

const AnimatedBio = ({ jobData }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      {jobData.map((job, index) => (
        <JobContainer key={index}>
          <JobTitle>{job.title}</JobTitle>
          <Company>{job.company} <br /> {job.location}</Company>
          <Hr />
          <ResponsibilitiesList>
            {job.responsibilities.map((responsibility, index) => (
              <Responsibility
                key={index}
                style={{
                  opacity: scrollY >= 300 ? 1 : 0,
                  transform: scrollY >= 300 ? "translateX(0)" : "translateX(100%)",
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <BulletPoint>{scrollY >= 100 ? "•" : ""}</BulletPoint>
                {responsibility}
              </Responsibility>
            ))}
          </ResponsibilitiesList>
        </JobContainer>
      ))}
    </Container>
  );
};

export default AnimatedBio;

