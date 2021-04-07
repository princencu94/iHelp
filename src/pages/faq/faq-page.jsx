import React from 'react';
import './faq-page.styles.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Navbar from '../../components/navbar/navbar.component';



const FaqPage = () => {

    return (
        <div className="faq-page-container">
            <Navbar/>
            <div className="faq-page-banner">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq-page-content">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h4>FAQ 1</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <h4>FAQ 2</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default FaqPage;