import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  item: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  const handleButtonClick = (item: string, index: number) => {
    switch(index) {
      case 0:
        navigate("/get-all-customer-details");
        break;
      case 1:
        navigate("/get-specific-customer-details");
        break;
      case 2:
        navigate("/enter-customer-details");
        break;
      case 3: 
        navigate("/get-all-category-details");
        break;
      case 4:
        navigate("/get-specific-category-details");
        break;
      case 5:
        navigate("/enter-category-details");
        break;
      case 6:
        navigate("/get-all-department-details");
        break;
      case 7:
        navigate("/get-specific-department-details");
        break;
      case 8:
        navigate("/enter-department-details");
        break;
      case 9:
        navigate("/get-all-invoice-details");
        break;
      case 10:
        navigate("/get-specific-invoice-details");
        break;
      case 11:
        navigate("/get-invoice-of-a-customer");
        break;
      case 12:
        navigate("/enter-invocie-details");
        break;
      case 13:
        navigate("enter-invoice-and-customer-details");
        break;
      case 14:
        navigate("/get-all-item-details");
        break;
      case 15:
        navigate("/get-specific-item-details");
        break;
      case 16:
        navigate("/enter-item-details");
        break;
      case 17:
        navigate("/get-all-tax-details");
        break;
      case 18:
        navigate("/get-specific-tax-details");
        break;
      case 19:
        navigate("/enter-tax-details");
        break;
  
      default:
        break;
    }
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p>No Item Found.</p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <div>{item}</div>
            <div>
              <button
                className="btn btn-primary mt-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the li's onClick from firing
                  handleButtonClick(item, index);
                }}
              >
                Select
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
