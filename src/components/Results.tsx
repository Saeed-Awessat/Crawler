import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Images } from "./Images";
import { Links } from "./Links";
import { Screenshots } from "./Screenshots";

export const Results = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Links</Tab>
        <Tab>Images</Tab>
        <Tab>Screenshots</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Links />
        </TabPanel>
        <TabPanel>
          <Images />
        </TabPanel>
        <TabPanel>
          <Screenshots />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
