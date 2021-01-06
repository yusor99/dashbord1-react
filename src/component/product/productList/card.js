import { Tag } from "antd";
const Card = (props) => {
  return (
    <div className="cardProduct">
      <div className="left">
        <h3>{props.data.productName}</h3>
        <p>{props.data.the3rdStageCategory}</p>
        <small>
          {props.data.the2ndStageCategory} \ {props.data.the1stStageCategory}
        </small>
        <div>
          <Tag color="blue" className="price">
            {props.data.price}
          </Tag>
        </div>
      </div>
      <div className="right">
        <img src="./img/pic1 (4).png" alt="product" />
      </div>
    </div>
  );
};
export default Card;
