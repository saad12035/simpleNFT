import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './acordian.css';

export default function SimpleAccordion() {
  return (
      <div className="check">
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#990000',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Can things change?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"black",color:"white",fontWeight:600}}>
            <Typography>
              Yes, what you read now is a blueprint. Ultimately DAO will have the full control on everything.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#990000',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>When launch?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"black",color:"white",fontWeight:600}}>
            <Typography>
              Follow us on https://twitter.com/Looks_DAO and we will inform you all the details and how things are progressing.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#990000',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Is the team anonymous?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"black",color:"white",fontWeight:600}}>
            <Typography>
              Yes
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#990000',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Is the wallet multi-sig?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"black",color:"white",fontWeight:600}}>
            <Typography>
              That will be the first thing we will do once we have completed the minting.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#990000',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>When Discord & website?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"black",color:"white",fontWeight:600}}>
            <Typography>
              Once we have sizable presence on twitter, we will open Discord channel and publish website link as well.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#990000',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Allocations?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"black",color:"white",fontWeight:600}}>
            <Typography>
              95% mint looks token goes to DAO treasury for staking<br/>
              95% of wETH rewards goes to DAO treasury/acquiring NFTS/running the DAO<br/>
              5% of wETH rewards & initial mint goes to the DAO initiators<br/>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <div style={{marginBottom:80,backgroundColor:"white"}}/>
      </div>
  );
}
