import React from "react";
import Cat1 from "../../assets/images/category-1.svg";
import Slider from "@mui/material/Slider";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import banner1 from '../../assets/images/ban2.png';

function valuetext(value) {
    return `${value}°C`;
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Sidebar = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>

          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={Cat1} width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={Cat1} width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={Cat1} width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
              
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={Cat1} width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
               
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={Cat1} width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
               
                30
              </span>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Fill by price</h3>
          <Slider
            min={0}
            step={1}
            max={100}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />


          <div className="d-flex pt-2 pb-2 priceRange">
             <span>From: <strong className="text-success">${value[0]}</strong></span>
             <span className="ml-auto">To: <strong className="text-success">${value[1]}</strong></span>
          </div>

          <div className="filters">
             <h5>Color</h5>
             <ul className="mb-0">
                <li> <Checkbox {...label} defaultChecked color="success" />Red (56)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Green (78)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
             </ul>
          </div>

          <div className="filters">
             <h5>Item Condition</h5>
             <ul>
                <li> <Checkbox {...label} defaultChecked color="success" />New (1506)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />New (1506)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Refurbished (27)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Refurbished (27)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Used (45)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Used (45)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
                <li> <Checkbox {...label} defaultChecked color="success" />Blue (54)</li>
             </ul>
          </div>

         <div className="d-flex">
         <Button className="btn btn-g"> <span><FilterAltOutlinedIcon></FilterAltOutlinedIcon></span>Filter</Button>
         </div>
        </div>

         <img src={banner1} className="w-100"/>
      </div>
    </>
  );
};
export default Sidebar;

// iska css app.css mai laga ahi
