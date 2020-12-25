import Navbar from "./navbar";

import { Alert } from "antd";
const State = () => {
  return (
    <>
      <Navbar />
      <div>
        <Alert
          message="The account was created successfully "
          type="success"
          showIcon
          className="state-active"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
        />
        <Alert
          message="A problem occurred while deleting the account"
          type="warning"
          showIcon
          className="state-active"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
        />
        <Alert
          message="Sorry we couldn't create this account"
          type="error"
          showIcon
          className="state-active"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
        />
      </div>
    </>
  );
};
export default State;
