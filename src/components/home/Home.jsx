import React, {Fragment} from 'react';
import Head from "../header/head";
import EarlyAccess from "../earlyaceess/early-access";
import SpaceDailyWork from "../space-daily-work/space-daily-work";
import ImgTabs from "../img-tabs/img-tabs";
import CompanyBuild from "../company-build/company-build";
import Workflow from "../workflow/workflow";
import Footer from "../footer/footer";
import img1 from '../../img/img1.png';
import img2 from '../../img/bottom-image.png';

const Home = (props) => {
    return (
        <Fragment>
            <Head showMenu={props.showMenu}></Head>
            <EarlyAccess
                bgColor={''}
                h1Text={'All-in-one tool for design systems'}
                pText={'The first tool fully designed to maintain large products and design systems. All your design primitives, component states and platforms in one place.'}
                img={img1}
                imgClass={'top-img'}
            ></EarlyAccess>
            <SpaceDailyWork
                h1Text={'A unified space for your daily work'}
                pText={'Specify provides all the tools needed to be ready to build the next generation of products software.'}
            ></SpaceDailyWork>
            <ImgTabs></ImgTabs>
            <CompanyBuild
                h1Text={'Specify is built for your company'}
                pText={'Make your product evolve coherently and scale your product teams at the right pace.'}
            ></CompanyBuild>
            <Workflow
                h1Text={'Ready for your workflow'}
                pText={'Specify can be plugged to several services from design to development. Allowing you to shape it to your own workflow.'}
            ></Workflow>
            <EarlyAccess
                bgColor={'bottom-earle-access'}
                h1Text={'Get early access'}
                pText={'Be the first to experience Specify before it’s publically available. Early beta will only be available for macOS.'}
                img={img2}
                imgClass={'bottom-img'}
            ></EarlyAccess>
            <Footer></Footer>
        </Fragment>


    )

}


export default Home;