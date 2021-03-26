import React from "react";
import { Link } from "react-router-dom";
import { splitLastPath } from "../../../lib/Common";
import _ from "lodash";
import HorizontalMenuSkeleton from "../Loader/HorizontalMenuSkeleton";
import PropTypes from "prop-types";
import ScrollMenu from "../ScrollMenu";
import cn from "classnames";

function HorizontalSlideMenu({ topicNav, pathname }) {
  const location = splitLastPath("/t/", pathname);

  if (_.isEmpty(topicNav)) return <HorizontalMenuSkeleton />;

  return (
    <ScrollMenu data={topicNav}>
      {topicNav.map((item, idx) => {
        return (
          <li key={idx} className={cn({ active: location === item.slug })}>
            <Link to={`/t/${item.slug}`}>{item.title}</Link>
          </li>
        );
      })}
    </ScrollMenu>
  );
}

HorizontalSlideMenu.propTypes = {
  topicNav: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string,
  pathname: PropTypes.string
};

export default HorizontalSlideMenu;
