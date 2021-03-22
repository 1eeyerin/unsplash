import { useEffect, useState } from "react";
import qs from "qs";
import { navigate } from "../lib/History";

export const useSearchControl = ({ location, search }) => {
  const initValue = [
    { orientation: "", color: "", sort: "" },
    { orientation: false, color: false, sort: false }
  ];
  const [control, setControl] = useState(initValue[0]);
  const [activeMenu, setActiveMenu] = useState(initValue[1]);

  useEffect(() => {
    const parsed = qs.parse(search, { ignoreQueryPrefix: true });
    control.orientation ? (parsed.orientation = control.orientation) : delete parsed.orientation;
    control.color ? (parsed.color = control.color) : delete parsed.color;
    control.sort ? (parsed.order_by = control.sort) : delete parsed.order_by;
    location.search = qs.stringify(parsed);
    navigate(`${location.pathname}?${location.search}`);
  }, [control.orientation, control.color, control.sort]);

  const handleClear = () => {
    setControl(initValue[0]);
    setActiveMenu(initValue[1]);
  };

  const handleActiveMenu = e => {
    let newObj = { ...activeMenu };
    const name = e.currentTarget.name;

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
    control,
    setControl,
    activeMenu,
    setActiveMenu,
    handleActiveMenu,
    handleClear
  };
};
