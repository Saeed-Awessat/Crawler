import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Images } from "./Images";
import { Links } from "./Links";
import { Screenshots } from "./Screenshots";

interface IResultsProps {
  inputWebsite: string;
}

export const Results = ({ inputWebsite }: IResultsProps) => {
  const links: any = [];
  const images: any = [];
  return (
    <Tabs>
      <TabList>
        <Tab>Links</Tab>
        <Tab>Images</Tab>
        {/* <Tab>Screenshots</Tab>*/}
      </TabList>

      <TabPanels>
        <TabPanel>
          <Links links={links} />
        </TabPanel>
        <TabPanel>
          <Images images={images} />
        </TabPanel>
        {/*<TabPanel>
          <Screenshots screenshots={screenshots} />
        </TabPanel>*/}
      </TabPanels>
    </Tabs>
  );
};
