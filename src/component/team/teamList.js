/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../navbar";
import Header2 from "../header2";
import TeamTable from "./teamTable";

const TeamList = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header2 />
        <TeamTable />
      </div>
    </>
  );
};

export default TeamList;
