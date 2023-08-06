import React from "react";
import styled from 'styled-components';
import AnimatedBio from "./AnimatedBio";
const BioSection = styled.div`
    background-color: #05386b;
    padding-left: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 800px;
    overflow: auto;
    color: #edf5e1;
`;
const Bio = () => {
    
    const jobData = [
        {
            title: "Marketing Technology and Operations Manager",
            company: "Snyk",
            location: "Remote, Ottawa",
            responsibilities: ["Managed MarTech tools: 6sense, Sendoso, ReachDesk, Hopin, Tag Manager, Madkudu, Memsource, LI Lead Gen, etc.", 
            "Built custom integrations between marketing tools, content syndication platforms, and other MAP instances to sync new leads, product usage data, and marketing engagement behaviors to Marketo and Salesforce",
            "Partnered with Procurement and Marketing in RFP/renewal processes for new tools and  vendors",
            "Created and delivered enablement plans, training sessions, and process documentation for any newly acquired tools",
            "Supported internal privacy compliance implementations for international email, PII, and transparency regulations", "Owned end to end campaign production processes from program request to QA and launch",
            "Managed the email calendar and led weekly stakeholder meetings to prioritize audience segments and messaging",
            "Leveraged Google, Marketo, and Zoom APIs to build a self-serve app that automated campaign production tasks, enabling campaign owners to create/edit collateral without requiring direct access to MAP, CRM, or event platforms",
            "Collaborated with BI and Marketing to build and manage Salesforce and Looker dashboards",
            "Partnered with Sales to build and modify lead scoring models and notification workflows",
            "Managed database segmentations and built lifecycle and persona based email nurture programs",
            
        ],
            
        },
        {
            title: "Marketing Operations Specialist",
            company: "Converto/Marketing Envy",
            location: "Ramat Hasharon, Israel",
            responsibilities: ["Worked with a dozen small and midsize Israeli tech companies to manage MAP to SFDC sync logic, integrate with existing tools, and establish processes like lead source tagging, routing/assignment rules, and web to lead form setup",
            "Implemented lead scoring models that leveraged behavioral, demographic, and firmographic data",
            "Created persona and customer lifecycle based email nurture programs, webinars, and gated content",
            "Partnered with Marketing  to build landing page and email templates, as well as to establish campaign processes",
            "Built dashboards to track lead and marketing content performance",
            ],
        },
        {
            title: "Marketing Operations Manager",
            company: "CoolaData",
            location: "Tel Aviv, Israel",
            responsibilities: [
                "Maintained MAP CRM sync logic, lead funnel and assignment, as well as attribution workflows",
                "Built landing pages, smart-forms, and nurture drips that integrated into the company’s website and social media",
                "Delivered prospect demos/webinars and participated in customer and partner negotiations",
                "Created blogs and other marketing collateral",
                "Managed projects and relationships with third-party leadgen and data enrichment vendors",
                "Built and maintained a webform customer support ticketing system in Salesforce",

            ]
        }
    ]
    return (
        <BioSection>

            <h3>Work History:</h3>
            <AnimatedBio jobData={jobData} />
        </BioSection>
    )
}
export default Bio;
