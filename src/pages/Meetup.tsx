import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { MeetupListTab } from "../components/MeetupListTab";
import { CustomerTable } from "./CustomerTable";
import Header from "../components/Header";
//import { CustomSidebar } from "../components/CustomSidebar";


export const Meetup = () => {
  return (
   

    <div className="flex w-full flex-col">
       <Header />
      <Tabs aria-label="Meetup List" >
        <Tab key="meetup_list" title="Meetups">
          <Card>
            <CardBody className="flex h-full flex-col">
              <MeetupListTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="my_customers" title="Customer">
          <Card>
            <CardBody>
             <CustomerTable />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="my_profile" title="Profile">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="my_schedule" title="Schedule">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
