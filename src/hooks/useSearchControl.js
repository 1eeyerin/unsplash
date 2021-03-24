import { useState } from "react";
import qs from "qs";
import { navigate } from "../lib/History";
import PropTypes from "prop-types";

export const useSearchControl = ({ pathname, search, parsed }) => {
  const initValue = { orientation: false, color: false, sort: false };
  const [activeMenu, setActiveMenu] = useState(initValue);

  const handleClick = ({ currentTarget }, type) => {
    currentTarget.name === "" ? delete parsed[type] : (parsed[type] = currentTarget.name);
    search = qs.stringify(parsed);
    navigate(`${pathname}?${search}`);
    setActiveMenu(initValue);
  };

  const handleClear = () => {
    search = "";
    navigate(`${pathname}?${search}`);
    setActiveMenu(initValue);
  };

  const handleActiveMenu = ({ currentTarget }) => {
    let newObj = { ...activeMenu };
    const name = currentTarget.name;

    for (const key in newObj) {
      if (key !== name) {
        newObj[key] = false;
      } else {
        newObj[name] = !newObj[name];
      }
    }
    setActiveMenu(newObj);
  };

  return {
    initValue,
    activeMenu,
    setActiveMenu,
    handleClick,
    handleClear,
    handleActiveMenu
  };
};

useSearchControl.propTypes = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  parsed: PropTypes.object
};
