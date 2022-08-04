

import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import SingleNewsletter from "../components/newsletters/single-newsletter";


const WeeklyNewsletters = ({newsletterData}) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="ICED Newsletters">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Newsletters" crumbTitle="Newsletters" />
          <SingleNewsletter newsletterData={newsletterData} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export async function getServerSideProps(context) {
  const { google } = require("googleapis");

  const auth = new google.auth.GoogleAuth({
    keyFile: "iced-newsletter-gsheet-credentials.json", 
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "10l-_2o9SBBHXqSXESzAOc9z09HoHvG2YLVLvFsNMe5U";

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  });

  const initialData = getRows.data.values;
  initialData.shift();
  
  var newsletterData = initialData.map(x => ({ 
    sno: x[0],
    date:x[1],
    title:x[2], 
    docLink: x[3],
    videoLink: x[4] 
  }));

  return {
    props: { newsletterData }, // will be passed to the page component as props
  }
}


export default WeeklyNewsletters;
